import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import svgPaths from "../../imports/svg-pbclekuirc";
import { useCurrency } from "./CurrencyProvider";
import { getCurrencyForCountry } from "../utils/currency";
import CurrencyDropdownIcon from "../../imports/CurrencyDropdownIcon";

export default function SelectSeatsPage() {
  const navigate = useNavigate();
  const { formatPrice, currency, setCurrency } = useCurrency();
  const [searchParams] = useSearchParams();
  const [seats, setSeats] = useState(2);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  
  // Get plan data from URL parameters, with defaults
  const planType = searchParams.get('plan') || 'monthly';
  const pricePerSeat = parseInt(searchParams.get('price') || '25');
  const planName = searchParams.get('planName') || 'Teams Unlimited (Monthly)';
  const billingText = searchParams.get('billing') || 'Billed monthly';
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  const countryParam = searchParams.get('country') || '';

  // Auto-set currency based on the country selected in the previous step
  useEffect(() => {
    if (countryParam) {
      const code = getCurrencyForCountry(countryParam);
      setCurrency(code);
    }
  // Only run once on mount (country won't change while on this page)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const totalPrice = seats * pricePerSeat;
  const totalLabel = planType === 'annual' ? 'Annual total' : 'Monthly total';

  // Available currencies
  const currencies = [
    { code: 'USD', display: '$ USD' },
    { code: 'GBP', display: '£ GBP' },
    { code: 'JPY', display: '¥ JPY' },
    { code: 'TWD', display: '$ TWD' },
    { code: 'EUR', display: '€ EUR' },
    { code: 'HKD', display: 'HK$ HKD' },
  ];

  const incrementSeats = () => {
    setSeats(prev => prev + 1);
  };

  const decrementSeats = () => {
    if (seats === 2) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setSeats(prev => Math.max(2, prev - 1));
  };

  const handleCurrencySelect = (code: string) => {
    setCurrency(code);
    setShowCurrencyModal(false);
  };

  return (
    <div className="bg-[#f9f9f9] relative min-h-screen" data-name="Seats- monthly">
      {/* User Name Container */}
      <div className="absolute content-stretch flex h-[48px] items-center left-[8px] px-[8px] py-[9px] top-[8px] w-[204px]" data-name="User Name Container">
        <div className="h-[14px] relative shrink-0 w-[83.474px]" data-name="Logo">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4735 14">
            <g id="Logo">
              <path clipRule="evenodd" d={svgPaths.p1461dd00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p2984dc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.pa0f2f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
              <path clipRule="evenodd" d={svgPaths.p1fbff400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
              <path clipRule="evenodd" d={svgPaths.p1ca9a700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
              <path clipRule="evenodd" d={svgPaths.p31259cb0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" />
            </g>
          </svg>
        </div>
        <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>

      {/* Form Container */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-end left-1/2 overflow-clip top-[80px] w-[464px]" data-name="Form Container">
        {/* Form Header */}
        <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Form Header">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black text-center w-full">Select seats</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#757575] text-[16px] w-full">Choose how many team members will use this workspace.</p>
        </div>

        {/* Error Banner */}
        {showError && (
          <div className="bg-[#fff5f5] content-stretch flex gap-[12px] items-center p-[16px] relative rounded-[5px] shrink-0 w-full" data-name="Error Banner">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Error Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#DC2626" strokeWidth="1.5" fill="none" />
                <path d="M10 6V10" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="13.5" r="0.75" fill="#DC2626" />
              </svg>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#DC2626] text-[14px]">Cannot reduce below 2 seats</p>
          </div>
        )}

        {/* Form Body */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form Body">
          {/* Text Field */}
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-w-[220px] overflow-clip relative shrink-0 w-full" data-name="Text Field">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title Wrapper">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
                <p className="leading-[22px] overflow-hidden">Number of seats</p>
              </div>
            </div>
            
            {/* Input */}
            <div className="bg-white h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="Input" onFocus={() => setIsInputActive(true)} onBlur={() => setIsInputActive(false)}>
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] ${isInputActive ? 'border-black' : 'border-[#ebebeb]'}`} />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
                    <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">{seats}</p>
                    </div>
                  </div>
                  
                  {/* Input Controls */}
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Controls">
                    {/* Decrease Button */}
                    <button 
                      onClick={decrementSeats}
                      disabled={seats <= 2}
                      className="content-stretch flex items-center p-[4px] relative shrink-0 disabled:opacity-30" 
                      data-name="Decrease Button"
                    >
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Decrease Icon">
                        <div className="absolute inset-[49.89%_16.67%_50.11%_16.67%]" data-name="Vector">
                          <div className="absolute inset-[-0.5px_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1">
                              <path d="M0 0.5H13.3333" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    {/* Increase Button */}
                    <button
                      onClick={incrementSeats}
                      className={`content-stretch flex items-center justify-center p-[4px] relative rounded-[5px] shrink-0 ${isInputActive ? 'bg-[#ebebeb]' : ''}`}
                      data-name="Increase Button"
                    >
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Increase Icon">
                        <div className="absolute inset-[16.67%_16.67%_16.67%_16.66%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.334 13.333">
                            <path d={svgPaths.p2fccae80} fill="var(--fill-0, black)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Summary Container */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Plan Summary Container">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
              <p className="leading-[22px] overflow-hidden">Plan summary</p>
            </div>
            
            {/* Plan Summary Content */}
            <div className="relative rounded-[5px] shrink-0 w-full" data-name="Plan Summary Content">
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
                {/* Plan Row */}
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Plan Row">
                  <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
                    <p className="leading-[18px]">Plan</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
                    <p className="leading-[18px]">{planName}</p>
                  </div>
                </div>
                
                {/* Currency Row */}
                <div className="relative w-full">
                  <button 
                    onClick={() => setShowCurrencyModal(!showCurrencyModal)}
                    className="content-stretch flex items-start justify-between relative shrink-0 w-full cursor-pointer hover:bg-gray-50 -mx-[16px] px-[16px] py-[6px] rounded-[3px]" 
                    data-name="Currency Row"
                  >
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
                      <p className="leading-[18px]">Currency</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[243px]" data-name="Currency Value Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right whitespace-nowrap">
                        <p className="leading-[18px]">{currencies.find(c => c.code === currency.code)?.display || currency.code}</p>
                      </div>
                      <div className={`overflow-clip relative rounded-[6.25px] shrink-0 size-[20px] transition-transform ${showCurrencyModal ? 'rotate-180' : ''}`} data-name="Currency Dropdown Wrapper">
                        <CurrencyDropdownIcon />
                      </div>
                    </div>
                  </button>

                  {/* Currency Dropdown - positioned below the Currency Row */}
                  {showCurrencyModal && (
                    <div className="absolute bg-white content-stretch flex flex-col items-center right-0 mt-[4px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] top-full w-[195px] z-50" data-name="Dropdown menu">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
                        {currencies.map((curr) => (
                          <button
                            key={curr.code}
                            onClick={() => handleCurrencySelect(curr.code)}
                            className={`relative shrink-0 w-full hover:bg-[#f5f5f5] ${curr.code === currency.code ? 'bg-[#ebebeb]' : ''}`}
                            data-name="Navigation Menu One"
                          >
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
                                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{curr.display}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Price Row */}
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Price Row">
                  <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
                    <p className="leading-[18px]">Price per seat</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
                    <p className="leading-[18px]">{formatPrice(pricePerSeat, false)}</p>
                  </div>
                </div>
                
                {/* Seats Row */}
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Seats Row">
                  <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
                    <p className="leading-[18px]">Number of seats</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
                    <p className="leading-[18px]">{seats}</p>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448.392 1">
                      <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="448.392" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                
                {/* Total Row */}
                <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Total Row">
                  <div className="flex flex-col justify-center relative shrink-0">
                    <p className="leading-[22px]">{totalLabel}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-right">
                    <p className="leading-[22px]">{formatPrice(totalPrice, true)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Footer */}
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Form Header">
          {/* Confirm and pay button */}
          <button
            onClick={() => {
              navigate(`/checkout?plan=${planType}&planName=${encodeURIComponent(planName)}&seats=${seats}&price=${pricePerSeat}&workspaceName=${encodeURIComponent(workspaceName)}&currency=${currency.code}`);
            }}
            className="bg-black h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full hover:bg-gray-800" 
            data-name="Button"
          >
            <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Confirm and pay</p>
              </div>
            </div>
          </button>
          
          {/* Back button */}
          <button
            onClick={() => navigate(`/create-workspace?plan=${planType}&planName=${encodeURIComponent(planName)}&price=${pricePerSeat}&billing=${encodeURIComponent(billingText)}&workspaceName=${encodeURIComponent(workspaceName)}`)}
            className="h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full hover:bg-gray-100"
            data-name="Button"
          >
            <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full cursor-pointer hover:opacity-70 transition-opacity">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Back</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bg-[#f9f9f9] bottom-0 content-stretch flex items-center justify-center left-0 py-[8px] w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
          By subscribing, you agree to our{" "}
          <span className="decoration-solid underline cursor-pointer hover:text-black transition-colors">Commercial Terms of Service</span>
        </p>
      </div>
    </div>
  );
}