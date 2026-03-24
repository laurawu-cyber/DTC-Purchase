import { useCurrency } from './CurrencyProvider';

export function FormattedPrice({ usd, className = '' }: { usd: number; className?: string }) {
  const { formatPrice } = useCurrency();
  return <span className={className}>{formatPrice(usd)}</span>;
}
