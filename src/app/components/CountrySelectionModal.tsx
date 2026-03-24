import { useState } from "react";
import svgPaths from "../../imports/svg-eoicq3lyo6";
import { COUNTRIES } from "../utils/countries";

interface CountrySelectionModalProps {
  isOpen: boolean;
  selectedCountry: string;
  onSelect: (country: string) => void;
  onClose: () => void;
}

export default function CountrySelectionModal({ 
  isOpen,
  selectedCountry, 
  onSelect, 
  onClose 
}: CountrySelectionModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSelected, setTempSelected] = useState(selectedCountry);

  if (!isOpen) return null;

  const filteredCountries = COUNTRIES.filter(country =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDone = () => {
    onSelect(tempSelected);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white flex flex-col gap-[16px] items-end p-[24px] relative rounded-[5px] w-full max-w-[464px] max-h-[80vh] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]" />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute content-stretch flex items-center justify-center p-[4px] right-[24px] rounded-[5px] top-[24px] hover:bg-gray-100 z-10"
          >
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute inset-[27.61%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95703 8.95703">
                  <path d={svgPaths.p1537be00} fill="black" />
                </svg>
              </div>
            </div>
          </button>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col h-[45px] items-start pb-[16px] relative shrink-0 w-full">
                <div className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                    Select a country or region
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Field */}
          <div className="bg-[#ebebeb] h-[32px] relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center p-[8px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[12.5%_13.23%_13.23%_12.5%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8535 14.8535">
                        <path d={svgPaths.p192dbc00} fill="black" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-black text-[14px] bg-transparent outline-none placeholder:text-[#a3a3a3]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Country List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-y-auto max-h-[400px] pr-2">
            {filteredCountries.map((country) => (
              <button
                key={country}
                onClick={() => setTempSelected(country)}
                className="relative rounded-[5px] shrink-0 w-full hover:bg-gray-50"
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[12px] items-center justify-center px-[8px] py-[4px] relative w-full">
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic overflow-hidden relative text-[#3d3d3d] text-[14px] text-ellipsis whitespace-nowrap text-left">
                      {country}
                    </p>
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      {tempSelected === country ? (
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[16.67%_16.67%_16.67%_16.66%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
                              <path d={svgPaths.p2d51fb00} fill="black" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 overflow-clip">
                          <div className="absolute inset-[16.67%_16.67%_16.66%_16.66%]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                              <circle cx="6.66667" cy="6.66667" r="6.16667" stroke="#ADADAD" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Done Button */}
          <div className="content-stretch flex items-center justify-end relative shrink-0">
            <button
              onClick={handleDone}
              className="bg-black content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 hover:bg-gray-800"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                Done
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}