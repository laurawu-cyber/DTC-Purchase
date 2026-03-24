import { landingAssets } from './landingAssets'

const teamFeatures = [
  'Unlimited Transcription Minutes',
  'Meeting Summaries',
  'Centralized Billing',
  'User & Seat Management',
  'Device Management',
  'Workspace-Level Data Residency',
  'Audit Logs',
  'Priority Support',
  'Offboarding Data Retention',
  'ISO 27001, ISO 27701, GDPR, SOC 2 Type II, HIPAA',
  'Custom Summary Templates',
  'Template Community (10,000+ Templates)',
  '112+ Languages Supported',
  'Plaud Desktop (requires device)',
  'Ask Plaud',
  'Export and Share',
  'Zapier Integration',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-[120px] py-28">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10">
            Simple, transparent pricing
          </h2>
          <p className="text-[#666] text-[15px] leading-[26px]">
            One plan with everything your team needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Team plan */}
          <div className="bg-white border border-[#e3e3e3] rounded-2xl p-[41px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <div className="flex items-start justify-between">
              <span className="font-bold text-[#141414] text-[18.9px] leading-7">Team</span>
              {/* Toggle */}
              <div className="flex items-center border border-[#e3e3e3] rounded-full p-[3px]">
                <button className="px-3.5 py-1.5 rounded-full text-[#666] text-[10.7px] font-medium">
                  Monthly
                </button>
                <button className="px-3.5 py-1.5 rounded-full bg-[#141414] text-white text-[11.3px] font-medium">
                  Annual
                </button>
              </div>
            </div>

            <div className="pb-8">
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-bold text-[#141414] text-[40.9px] tracking-[-1.2px] leading-[48px]">$25</span>
                <span className="text-[#666] text-[14.6px] leading-6">/user/month</span>
              </div>
              <p className="mt-1 text-[#666] text-[13.3px] leading-5">Billed annually (save 20%)</p>
              <p className="mt-3 text-[#666] text-[13.1px] leading-[22.75px] italic">
                For teams that need centralized management and security.
              </p>
            </div>

            <button className="w-full bg-[#141414] text-white font-bold text-sm rounded-full py-3.5 hover:bg-[#333]">
              Sign Up
            </button>

            <div className="mt-8 border-t border-[#e3e3e3] pt-[65px]">
              <ul className="grid grid-cols-2 gap-3">
                {teamFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <img src={landingAssets.checkIcon} alt="✓" className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="text-[#141414] text-[13px] leading-5">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Devices card */}
          <div className="bg-white border border-[#e3e3e3] rounded-2xl p-[41px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <h3 className="font-bold text-[#141414] text-[19.2px] leading-7">Devices</h3>
            <p className="mt-3 text-[#666] text-[15px] leading-[26px]">
              Get volume discount when you buy devices in bulk for your team.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full border border-[#e3e3e3] rounded-full py-3.5 font-bold text-[#141414] text-[13.7px] hover:bg-gray-50"
              >
                Shop Devices
              </a>
            </div>
            <div className="mt-8 bg-[rgba(240,237,235,0.3)] border border-[#e3e3e3] rounded-xl flex items-center justify-center py-32">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-[#f0edeb] flex items-center justify-center">
                  <img src={landingAssets.devicePlaceholder} alt="" className="w-5 h-5" />
                </div>
                <p className="text-[#666] text-[13.2px]">Device images placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
