import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useCurrency } from "./CurrencyProvider";

export default function StripeCheckoutPage() {
  const navigate = useNavigate();
  const { formatPrice, setCurrency } = useCurrency();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [country, setCountry] = useState("United States");
  const [address, setAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  
  // Restore currency from URL param (set by SelectSeatsPage)
  const currencyParam = searchParams.get('currency');
  useEffect(() => {
    if (currencyParam) setCurrency(currencyParam);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get data from URL parameters
  const planName = searchParams.get('planName') || 'Teams Unlimited (Monthly)';
  const seats = parseInt(searchParams.get('seats') || '2');
  const pricePerSeat = parseInt(searchParams.get('price') || '25');
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  const planType = searchParams.get('plan') || 'monthly';
  const billingText = planType === 'annual' ? 'Billed annually' : 'Billed monthly';
  const subtotal = seats * pricePerSeat;
  const tax = 0; // Tax calculation would be based on location
  const total = subtotal + tax;

  const handlePay = () => {
    // Payment processing logic would go here
    alert('Payment processing...');
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-[60px]">
      <div className="w-full max-w-[1200px] flex gap-[80px] px-[40px]">
        {/* Left Side - Order Summary */}
        <div className="w-[400px] flex-shrink-0">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-[8px] mb-[24px] hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="w-[24px] h-[24px] bg-gray-200 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 2L4 6L8 10" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-[14px] text-[#666]">PLAUD LLC</span>
          </button>
          
          <div className="mb-[32px]">
            <p className="text-[13px] text-[#666] mb-[4px]">Pay Plaud LLC</p>
            <p className="text-[40px] font-medium text-black">{formatPrice(total, true)}</p>
          </div>

          <div className="space-y-[16px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[14px] text-black">{planName}</p>
                <p className="text-[13px] text-[#666] mt-[2px]">{seats} {seats === 1 ? 'seat' : 'seats'} • {billingText}</p>
              </div>
              <p className="text-[14px] text-black">{formatPrice(subtotal, true)}</p>
            </div>

            <div className="border-t border-[#e6e6e6] pt-[16px]">
              <div className="flex justify-between items-center mb-[8px]">
                <p className="text-[14px] text-black">Subtotal</p>
                <p className="text-[14px] text-black">{formatPrice(subtotal, true)}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-[14px] text-[#666]">Tax</p>
                <p className="text-[14px] text-[#666]">
                  {tax === 0 ? 'Order address not available' : formatPrice(tax, true)}
                </p>
              </div>
            </div>

            <div className="border-t border-[#e6e6e6] pt-[16px]">
              <div className="flex justify-between items-center">
                <p className="text-[16px] font-medium text-black">Total due</p>
                <p className="text-[16px] font-medium text-black">{formatPrice(total, true)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Payment Form */}
        <div className="flex-1 max-w-[600px]">
          {/* Contact Information */}
          <div className="mb-[32px]">
            <div className="flex items-center justify-between mb-[12px]">
              <h2 className="text-[16px] font-medium text-black">Contact information</h2>
              <div className="flex items-center gap-[8px]">
                <span className="text-[13px] text-[#666]">testing@acme.com</span>
                <button className="text-[13px] text-[#0066cc] hover:underline">Change info now</button>
              </div>
            </div>
            
            <div>
              <label className="block text-[13px] text-[#666] mb-[6px]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="testing@acme.com"
                className="w-full h-[40px] px-[12px] border border-[#d1d1d1] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-[32px]">
            <h2 className="text-[16px] font-medium text-black mb-[16px]">Payment method</h2>
            
            <div className="flex gap-[12px] mb-[16px]">
              <button className="flex-1 h-[40px] flex items-center justify-center gap-[8px] border border-[#d1d1d1] rounded-[6px] bg-white hover:bg-gray-50">
                <div className="w-[16px] h-[16px] rounded-full border-2 border-[#0066cc] flex items-center justify-center">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#0066cc]"></div>
                </div>
                <span className="text-[14px] text-black">Card</span>
              </button>
              <button className="flex-1 h-[40px] flex items-center justify-center gap-[8px] border border-[#d1d1d1] rounded-[6px] bg-white hover:bg-gray-50">
                <div className="w-[16px] h-[16px] rounded-full border-2 border-[#d1d1d1]"></div>
                <span className="text-[14px] text-[#666]">Link</span>
              </button>
            </div>

            {/* Card Information */}
            <div className="space-y-[12px]">
              <div>
                <label className="block text-[13px] text-[#666] mb-[6px]">Card information</label>
                <div className="border border-[#d1d1d1] rounded-[6px] overflow-hidden">
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="1234 1234 1234 1234"
                      maxLength={19}
                      className="w-full h-[40px] px-[12px] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0066cc] border-b border-[#d1d1d1]"
                    />
                    <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex gap-[4px]">
                      <img src="data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='16' rx='2' fill='%23EB001B'/%3E%3C/svg%3E" alt="Mastercard" className="w-[24px] h-[16px]" />
                      <img src="data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='16' rx='2' fill='%231434CB'/%3E%3C/svg%3E" alt="Visa" className="w-[24px] h-[16px]" />
                      <img src="data:image/svg+xml,%3Csvg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='16' rx='2' fill='%23006FCF'/%3E%3C/svg%3E" alt="Amex" className="w-[24px] h-[16px]" />
                    </div>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM / YY"
                      maxLength={7}
                      className="flex-1 h-[40px] px-[12px] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0066cc] border-r border-[#d1d1d1]"
                    />
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      placeholder="CVC"
                      maxLength={4}
                      className="flex-1 h-[40px] px-[12px] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0066cc]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-[#666] mb-[6px]">Cardholder name</label>
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="Full name on card"
                  className="w-full h-[40px] px-[12px] border border-[#d1d1d1] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                />
              </div>

              <div>
                <label className="block text-[13px] text-[#666] mb-[6px]">Billing address</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-[40px] px-[12px] border border-[#d1d1d1] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] mb-[12px] bg-white"
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>Taiwan</option>
                  <option>Hong Kong</option>
                </select>
                
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="w-full h-[40px] px-[12px] border border-[#d1d1d1] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] mb-[12px]"
                />
                
                <input
                  type="text"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  placeholder="Suite, address (optional)"
                  className="w-full h-[40px] px-[12px] border border-[#d1d1d1] rounded-[6px] text-[14px] focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                />
              </div>
            </div>
          </div>

          {/* Save Checkbox */}
          <div className="flex items-center gap-[8px] mb-[24px]">
            <input
              type="checkbox"
              id="save"
              className="w-[16px] h-[16px] rounded border-[#d1d1d1]"
            />
            <label htmlFor="save" className="text-[13px] text-[#666]">
              Save
            </label>
          </div>

          {/* Pay Button */}
          <button
            onClick={() => navigate(`/payment-success?seats=${seats}&workspaceName=${encodeURIComponent(workspaceName)}`)}
            className="w-full h-[48px] bg-[#0066cc] hover:bg-[#0052a3] text-white text-[15px] font-medium rounded-[6px] mb-[16px] transition-colors"
          >
            Pay
          </button>

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-[16px] text-[12px] text-[#666]">
            <a href="#" className="hover:underline">Powered by Stripe</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}