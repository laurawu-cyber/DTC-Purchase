import { useNavigate } from 'react-router'

const googleGIcon = 'https://www.figma.com/api/mcp/asset/3c979a09-e593-4f53-b37e-afac5b9facb8'

function UserCircleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" stroke="#5F6368" />
      <circle cx="12" cy="9" r="3.5" stroke="#5F6368" />
      <path d="M4.5 19.5C5.5 16.5 8.5 14.5 12 14.5C15.5 14.5 18.5 16.5 19.5 19.5" stroke="#5F6368" strokeLinecap="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function GoogleAuthPage() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: '#EBF0FB', fontFamily: "'Google Sans', Roboto, Arial, sans-serif" }}
    >
      {/* Account picker card */}
      <div className="bg-white rounded-[12px] w-[min(1100px,92vw)] overflow-hidden" style={{ boxShadow: '0 2px 18px 0 rgba(0,0,0,0.12)' }}>

        {/* Card header */}
        <div className="flex items-center gap-[14px] px-[44px] pt-[28px] pb-[24px]">
          <img src={googleGIcon} alt="Google" className="w-[28px] h-[28px]" />
          <span className="text-[22px] text-[#202124]">Sign in with Google</span>
        </div>
        <div className="h-px bg-[#e0e0e0]" />

        {/* Card body */}
        <div className="flex">
          {/* Left — title */}
          <div className="flex-1 px-[52px] py-[56px] flex flex-col justify-start gap-[10px] border-r border-[#e0e0e0]">
            <p className="text-[52px] leading-[62px] text-[#202124] font-normal">Choose an<br />account</p>
            <p className="text-[19px] leading-[28px] text-[#5F6368] mt-[6px]">
              to continue to{' '}
              <span className="text-[#1a73e8]">plaud.ai</span>
            </p>
          </div>

          {/* Right — account rows */}
          <div className="w-[460px] flex flex-col">
            {/* Testing Account row */}
            <button
              onClick={() => navigate('/plaud-team')}
              className="flex items-center gap-[20px] px-[40px] py-[24px] hover:bg-[#f1f3f4] transition-colors w-full text-left"
            >
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-white text-[22px] font-medium shrink-0"
                style={{ backgroundColor: '#33691D' }}
              >
                T
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[18px] leading-[26px] text-[#202124] font-medium truncate">Testing Account</span>
                <span className="text-[16px] leading-[22px] text-[#5F6368] truncate">testing@acme.com</span>
              </div>
            </button>

            <div className="h-px bg-[#e0e0e0] mx-[40px]" />

            {/* Use another account */}
            <button className="flex items-center gap-[20px] px-[40px] py-[24px] hover:bg-[#f1f3f4] transition-colors w-full text-left">
              <div className="w-[52px] h-[52px] flex items-center justify-center shrink-0">
                <UserCircleIcon />
              </div>
              <span className="text-[18px] leading-[26px] text-[#202124]">Use another account</span>
            </button>

            <div className="h-px bg-[#e0e0e0] mx-[40px]" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-[min(1100px,92vw)] flex items-center justify-between mt-[16px] px-[4px]">
        <button className="flex items-center gap-[6px] text-[14px] text-[#5F6368] hover:text-[#202124]">
          <span>English (United States)</span>
          <ChevronDownIcon />
        </button>
        <div className="flex items-center gap-[24px]">
          {['Help', 'Privacy', 'Terms'].map(item => (
            <button key={item} className="text-[14px] text-[#5F6368] hover:text-[#1a73e8]">{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
