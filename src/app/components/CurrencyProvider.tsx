import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
import { detectUserCurrency, convertPrice, formatPrice, CurrencyInfo, getCurrencyInfo, detectUserLocation, LocationInfo } from '../utils/currency';

interface CurrencyContextType {
  currency: CurrencyInfo;
  location: LocationInfo;
  isLoading: boolean;
  convertPrice: (usdPrice: number) => number;
  formatPrice: (usdPrice: number, showDecimals?: boolean) => string;
  setCurrency: (currencyCode: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(getCurrencyInfo('USD'));
  const [location, setLocationState] = useState<LocationInfo>({ country: 'United States', countryCode: 'US' });
  const [isLoading, setIsLoading] = useState(true);
  // Tracks whether the user (or a page) has explicitly chosen a currency.
  // If true, the auto-detected currency will not override it.
  const userOverrideRef = useRef(false);

  useEffect(() => {
    detectUserCurrency().then(detected => {
      if (!userOverrideRef.current) {
        setCurrencyState(detected);
      }
      setIsLoading(false);
    });

    detectUserLocation().then(detected => {
      setLocationState(detected);
    });
  }, []);

  const handleSetCurrency = (currencyCode: string) => {
    userOverrideRef.current = true;
    setCurrencyState(getCurrencyInfo(currencyCode));
  };

  const handleConvertPrice = (usdPrice: number) => {
    return convertPrice(usdPrice, currency);
  };

  const handleFormatPrice = (usdPrice: number, showDecimals = true) => {
    const converted = convertPrice(usdPrice, currency);
    return formatPrice(converted, currency, showDecimals);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        location,
        isLoading,
        convertPrice: handleConvertPrice,
        formatPrice: handleFormatPrice,
        setCurrency: handleSetCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

// Helper component for displaying prices
export function Price({ usd, strikethrough = false, showDecimals = true }: { usd: number; strikethrough?: boolean; showDecimals?: boolean }) {
  const { formatPrice } = useCurrency();
  const formatted = formatPrice(usd, showDecimals);
  
  if (strikethrough) {
    return <>{formatted}</>;
  }
  
  return <>{formatted}</>;
}