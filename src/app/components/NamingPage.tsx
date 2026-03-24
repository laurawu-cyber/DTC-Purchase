import { useState } from "react";
import Naming from "../../imports/Naming-24-1528";
import UserNameContainer from "../../imports/UserNameContainer";
import { useCurrency } from "./CurrencyProvider";
import CountrySelectionModal from "./CountrySelectionModal";
import { useNavigate, useSearchParams } from "react-router";

export default function NamingPage() {
  const { location } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(location.country);
  const [workspaceName, setWorkspaceName] = useState("Testing Account's workspace");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };

  const handleContinue = () => {
    // Forward all plan parameters to the seats selection page
    const plan = searchParams.get('plan');
    const price = searchParams.get('price');
    const planName = searchParams.get('planName');
    const billing = searchParams.get('billing');
    
    const params = new URLSearchParams();
    if (plan) params.set('plan', plan);
    if (price) params.set('price', price);
    if (planName) params.set('planName', planName);
    if (billing) params.set('billing', billing);
    if (workspaceName) {
      params.set('workspaceName', workspaceName);
      localStorage.setItem('workspaceName', workspaceName);
      // Store as array of {name, createdAt} objects for multi-workspace dropdown support
      const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
      const existing: {name: string, createdAt: string}[] = raw.map((item: any) =>
        typeof item === 'string' ? { name: item, createdAt: '' } : item
      );
      if (!existing.find(w => w.name === workspaceName)) {
        const createdAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        existing.push({ name: workspaceName, createdAt });
        localStorage.setItem('teamWorkspaces', JSON.stringify(existing));
      }
    }
    if (selectedCountry) {
      params.set('country', selectedCountry);
    }

    navigate(`/create-workspace/select-seats?${params.toString()}`);
  };
  
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-start justify-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 relative">
        {/* Logo Section */}
        <div className="absolute left-4 top-4">
          <UserNameContainer />
        </div>

        {/* Main Form Section - Centered */}
        <div className="flex flex-col items-center justify-start pt-[80px] min-h-screen">
          <div className="w-full max-w-[464px] px-4">
            {/* Form Header */}
            <div className="flex flex-col gap-4 mb-12">
              <h1 className="font-['Inter:Light',sans-serif] font-light text-[32px] leading-[44px] text-black text-center">
                Create a team workspace
              </h1>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#757575]">
                Your workspace is where you and your team collaborate in Plaud.
              </p>
            </div>

            {/* Input Field */}
            <div className="flex flex-col gap-1 mb-12">
              <label className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black">
                Name your workspace
              </label>
              <div className="bg-white h-[40px] rounded-[5px] border border-[#ebebeb] flex items-center px-3">
                <input
                  type="text"
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black outline-none bg-transparent"
                />
                {workspaceName && (
                  <button 
                    className="shrink-0"
                    onClick={(e) => {
                      e.preventDefault();
                      setWorkspaceName('');
                    }}
                    type="button"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M14.478 5.522L5.522 14.478M5.522 5.522L14.478 14.478" stroke="#7A7A7A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Agreement and Button */}
            <div className="flex flex-col gap-4">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px] text-[#3d3d3d] text-center">
                By continuing, you agree to create this workspace in{" "}
                <button className="text-black underline cursor-pointer hover:opacity-80 inline font-['Inter:Regular',sans-serif] font-normal text-[12px] leading-[18px]" onClick={() => setIsModalOpen(true)}>
                  {selectedCountry}
                </button>.
              </p>
              <button className="bg-black h-[48px] rounded-[5px] flex items-center justify-center" onClick={handleContinue}>
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[22px] text-white">
                  Continue
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
      {isModalOpen && (
        <CountrySelectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
        />
      )}
    </div>
  );
}