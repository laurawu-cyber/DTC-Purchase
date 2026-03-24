import { useState } from 'react'
import { useNavigate } from 'react-router'

// Asset URLs from Figma node 154-26961
const imgXIcon = 'https://www.figma.com/api/mcp/asset/87c80618-85ce-4bc3-83a2-df87973b77c3'
const imgCheckmark = 'https://www.figma.com/api/mcp/asset/8d03896f-e17a-4fa5-942d-4519b3ae3090'

function CheckIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
              <img alt="" className="block max-w-none size-full" src={imgCheckmark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = {
  'Workspace Management': [
    'Centralized billing',
    'Seat management',
    'Member management',
    'Device management',
    'Priority support',
  ],
  'Transcription': [
    'Unlimited transcription*',
    '112 languages supported',
    'Automatic translation',
    'Auto speaker labeling',
  ],
  'AI Summaries': [
    '10,000 templates',
    'Custom summaries',
    'GPT, Claude, and Gemini',
    'Ask Plaud AI',
  ],
  'Additional Features': [
    'Plaud Desktop recording',
    'Key moment highlights',
    'Zapier integrations',
    'Mind maps',
  ],
}

const badges = [
  { label: 'ISO 27001', color: '#2563eb' },
  { label: 'ISO 27701', color: '#16a34a' },
  { label: 'GDPR', color: '#7c3aed' },
  { label: 'SOC 2', color: '#0891b2' },
  { label: 'HIPAA', color: '#dc2626' },
  { label: 'EN 18031', color: '#b45309' },
]

export default function PlaudTeamPage() {
  const navigate = useNavigate()
  const [annual, setAnnual] = useState(true)

  const price = annual ? 20 : 25
  const originalPrice = annual ? 25 : null
  const billingNote = annual
    ? 'Billed annually ($240 per seat)'
    : 'Billed monthly • Cancel anytime'

  return (
    <div className="bg-[#f9f9f9] min-h-screen relative">
      {/* Main content */}
      <div className="flex flex-col items-center pt-[60px] pb-[56px] px-[24px]">

        {/* Title */}
        <h1 className="font-['Inter:Light',sans-serif] font-light leading-[44px] text-[32px] text-black text-center">
          Plaud Team
        </h1>

        {/* Subtitle */}
        <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-black text-center mt-[16px]">
          Unlock unlimited transcription and powerful AI features for your team.
        </p>

        {/* Annual billing toggle */}
        <div className="flex items-center gap-[12px] justify-center pt-[16px] pb-[24px]">
          {/* Toggle */}
          <button
            onClick={() => setAnnual(a => !a)}
            className={`relative h-[20px] w-[36px] rounded-[5px] transition-colors shrink-0 ${annual ? 'bg-black' : 'bg-[#a3a3a3]'}`}
          >
            <div
              className={`absolute top-1/2 -translate-y-1/2 bg-white rounded-[3px] size-[16px] transition-all ${annual ? 'right-[2px]' : 'left-[2px]'}`}
            />
          </button>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-[14px] text-[#413d3b] whitespace-nowrap">
            Annual billing
          </p>
          {annual && (
            <div className="bg-[rgba(33,239,106,0.2)] border border-[#21ef6a] border-solid flex items-center justify-center px-[8px] py-[4px] rounded-[5px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-black whitespace-nowrap">
                Save 20%
              </p>
            </div>
          )}
        </div>

        {/* Plan card */}
        <div className="bg-white border border-[#8f53ed] border-solid flex flex-col gap-[32px] items-start p-[32px] rounded-[5px] shadow-[0px_0px_16px_0px_rgba(143,83,237,0.15)] w-[456px]">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] text-[24px] text-black w-full">
            Team Plan
          </p>
          <div className="flex flex-col gap-[24px] items-start w-full">
            {/* Pricing row */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex gap-[4px] items-end w-full">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] text-[32px] text-black whitespace-nowrap">
                  ${price}
                </p>
                {originalPrice && (
                  <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] text-[32px] text-[#a3a3a3] line-through whitespace-nowrap [text-decoration-skip-ink:none]">
                    ${originalPrice}
                  </p>
                )}
                <div className="flex flex-1 items-center py-[4px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#74706d]">
                    / seat / month
                  </p>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] whitespace-nowrap">
                {billingNote}
              </p>
            </div>
            {/* CTA button */}
            <button
              onClick={() => {
                const plan = annual ? 'annual' : 'monthly';
                const price = annual ? 240 : 25; // annual: $240/seat/yr; monthly: $25/seat/mo
                const planName = annual ? 'Teams Unlimited (Annual)' : 'Teams Unlimited (Monthly)';
                const billing = annual ? 'Billed annually ($240 per seat)' : 'Billed monthly • Cancel anytime';
                navigate(`/create-workspace?plan=${plan}&price=${price}&planName=${encodeURIComponent(planName)}&billing=${encodeURIComponent(billing)}`);
              }}
              className="bg-black flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] rounded-[5px] w-[392px] cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] text-[14px] text-white text-center whitespace-nowrap">
                Upgrade to Plaud Team
              </p>
            </button>
          </div>
        </div>

        {/* What's included section */}
        <div className="flex flex-col gap-[40px] items-center pb-[56px] w-full max-w-[900px] mt-[60px]">
          <div className="flex flex-col gap-[8px] items-center w-full">
            <h2 className="font-['Inter:Light',sans-serif] font-light leading-[44px] text-[32px] text-black text-center whitespace-nowrap">
              What's included in Plaud Team
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] text-center">
              Have questions about Plaud Team?{' '}
              <span className="underline cursor-pointer text-[#3d3d3d] hover:text-black">Contact sales</span>
            </p>
          </div>

          {/* 4-column feature grid */}
          <div className="flex items-start justify-center gap-[40px] w-full">
            {Object.entries(features).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-[16px] flex-1 min-w-0">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-black whitespace-nowrap">
                  {category}
                </p>
                <div className="flex flex-col gap-[8px]">
                  {items.map(item => (
                    <div key={item} className="flex items-center gap-[8px]">
                      <CheckIcon />
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Usage note */}
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a] self-start">
            *Usage limits apply within a 24-hour period
          </p>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-[24px] flex-wrap">
            {badges.map(({ label, color }) => (
              <div key={label} className="flex flex-col items-center gap-[8px]">
                <div
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white text-[9px] font-bold text-center leading-tight"
                  style={{ backgroundColor: color }}
                >
                  {label}
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a] text-center whitespace-nowrap">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
