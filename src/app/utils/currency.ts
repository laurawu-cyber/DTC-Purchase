// Currency conversion utility based on user's location

export interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number; // Exchange rate from USD
}

export interface LocationInfo {
  country: string;
  countryCode: string;
}

// Exchange rates (approximate, as of March 2026)
const CURRENCY_RATES: Record<string, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79 },
  JPY: { code: 'JPY', symbol: '¥', rate: 149.50 },
  CNY: { code: 'CNY', symbol: '¥', rate: 7.24 },
  CAD: { code: 'CAD', symbol: 'CA$', rate: 1.36 },
  AUD: { code: 'AUD', symbol: 'A$', rate: 1.53 },
  INR: { code: 'INR', symbol: '₹', rate: 83.12 },
  KRW: { code: 'KRW', symbol: '₩', rate: 1342.50 },
  BRL: { code: 'BRL', symbol: 'R$', rate: 5.03 },
  MXN: { code: 'MXN', symbol: 'MX$', rate: 17.15 },
  CHF: { code: 'CHF', symbol: 'CHF', rate: 0.88 },
  SEK: { code: 'SEK', symbol: 'kr', rate: 10.45 },
  NZD: { code: 'NZD', symbol: 'NZ$', rate: 1.67 },
  SGD: { code: 'SGD', symbol: 'S$', rate: 1.34 },
  HKD: { code: 'HKD', symbol: 'HK$', rate: 7.83 },
  TWD: { code: 'TWD', symbol: '$', rate: 31.50 },
  NOK: { code: 'NOK', symbol: 'kr', rate: 10.68 },
  DKK: { code: 'DKK', symbol: 'kr', rate: 6.87 },
  ZAR: { code: 'ZAR', symbol: 'R', rate: 18.45 },
  THB: { code: 'THB', symbol: '฿', rate: 35.62 },
  PLN: { code: 'PLN', symbol: 'zł', rate: 4.02 },
  TRY: { code: 'TRY', symbol: '₺', rate: 32.15 },
  RUB: { code: 'RUB', symbol: '₽', rate: 92.50 },
};

// Country to currency mapping
const COUNTRY_CURRENCY: Record<string, string> = {
  US: 'USD', CA: 'CAD', MX: 'MXN', BR: 'BRL',
  GB: 'GBP', FR: 'EUR', DE: 'EUR', IT: 'EUR', ES: 'EUR', PT: 'EUR', NL: 'EUR', BE: 'EUR', 
  AT: 'EUR', IE: 'EUR', FI: 'EUR', GR: 'EUR', LU: 'EUR', SI: 'EUR', SK: 'EUR', EE: 'EUR',
  LV: 'EUR', LT: 'EUR', CY: 'EUR', MT: 'EUR',
  JP: 'JPY', CN: 'CNY', KR: 'KRW', IN: 'INR', TH: 'THB',
  AU: 'AUD', NZ: 'NZD', SG: 'SGD', HK: 'HKD', TW: 'TWD',
  CH: 'CHF', SE: 'SEK', NO: 'NOK', DK: 'DKK',
  ZA: 'ZAR', PL: 'PLN', TR: 'TRY', RU: 'RUB',
};

// Map from country name to currency code (for the 6 supported currencies in the dropdown)
export const COUNTRY_NAME_CURRENCY: Record<string, string> = {
  // USD
  'United States': 'USD',
  // GBP
  'United Kingdom': 'GBP',
  // JPY
  'Japan': 'JPY',
  // TWD
  'Taiwan': 'TWD',
  // HKD
  'Hong Kong': 'HKD',
  // EUR — Eurozone countries
  'Germany': 'EUR', 'France': 'EUR', 'Italy': 'EUR', 'Spain': 'EUR',
  'Portugal': 'EUR', 'Netherlands': 'EUR', 'Belgium': 'EUR', 'Austria': 'EUR',
  'Ireland': 'EUR', 'Finland': 'EUR', 'Greece': 'EUR', 'Luxembourg': 'EUR',
  'Slovenia': 'EUR', 'Slovakia': 'EUR', 'Estonia': 'EUR', 'Latvia': 'EUR',
  'Lithuania': 'EUR', 'Cyprus': 'EUR', 'Malta': 'EUR',
};

/**
 * Get the supported dropdown currency code for a given country name.
 * Returns 'USD' for any country not in the 6-currency dropdown.
 */
export function getCurrencyForCountry(countryName: string): string {
  return COUNTRY_NAME_CURRENCY[countryName] || 'USD';
}

let cachedCurrency: CurrencyInfo | null = null;
let cachedLocation: LocationInfo | null = null;
let isDetecting = false;

/**
 * Detect user's currency based on IP geolocation
 */
export async function detectUserCurrency(): Promise<CurrencyInfo> {
  // Return cached result if available
  if (cachedCurrency) {
    return cachedCurrency;
  }

  // Prevent multiple simultaneous detection attempts
  if (isDetecting) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return cachedCurrency || CURRENCY_RATES.USD;
  }

  isDetecting = true;

  try {
    // Try to get location from IP using a free geolocation API
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    
    if (response.ok) {
      const data = await response.json();
      const countryCode = data.country_code;
      const countryName = data.country_name || 'United States';
      const currencyCode = COUNTRY_CURRENCY[countryCode] || 'USD';
      cachedCurrency = CURRENCY_RATES[currencyCode] || CURRENCY_RATES.USD;
      cachedLocation = { country: countryName, countryCode: countryCode || 'US' };
    } else {
      cachedCurrency = CURRENCY_RATES.USD;
      cachedLocation = { country: 'United States', countryCode: 'US' };
    }
  } catch (error) {
    // Silently fall back to USD - this is expected in development/local environments
    cachedCurrency = CURRENCY_RATES.USD;
    cachedLocation = { country: 'United States', countryCode: 'US' };
  } finally {
    isDetecting = false;
  }

  return cachedCurrency;
}

/**
 * Convert USD price to user's local currency
 */
export function convertPrice(usdPrice: number, currency: CurrencyInfo): number {
  const converted = usdPrice * currency.rate;
  
  // Round to appropriate decimal places based on currency
  if (currency.code === 'JPY' || currency.code === 'KRW') {
    // No decimal places for these currencies
    return Math.round(converted);
  }
  
  // Round to 2 decimal places for most currencies
  return Math.round(converted * 100) / 100;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(price: number, currency: CurrencyInfo, showDecimals = true): string {
  const noDecimalCurrencies = ['JPY', 'KRW'];
  const shouldShowDecimals = showDecimals && !noDecimalCurrencies.includes(currency.code);
  
  const formatted = shouldShowDecimals 
    ? price.toFixed(2)
    : Math.round(price).toString();
  
  // For currencies where symbol goes after the number
  const symbolAfterCurrencies = ['SEK', 'NOK', 'DKK', 'PLN', 'TRY', 'RUB'];
  
  if (symbolAfterCurrencies.includes(currency.code)) {
    return `${formatted} ${currency.symbol}`;
  }
  
  return `${currency.symbol}${formatted}`;
}

/**
 * Get currency info for a specific currency code
 */
export function getCurrencyInfo(code: string): CurrencyInfo {
  return CURRENCY_RATES[code] || CURRENCY_RATES.USD;
}

/**
 * Detect user's location based on IP
 */
export async function detectUserLocation(): Promise<LocationInfo> {
  // Return cached result if available
  if (cachedLocation) {
    return cachedLocation;
  }

  // Trigger currency detection which also caches location
  await detectUserCurrency();

  // Return cached location or fallback
  return cachedLocation || { country: 'United States', countryCode: 'US' };
}