import { landingAssets } from './landingAssets'

const badges = [
  { label: 'SOC 2', icon: landingAssets.badgeSoc2 },
  { label: 'HIPAA', icon: landingAssets.badgeHipaa },
  { label: 'GDPR', icon: landingAssets.badgeGdpr },
  { label: 'ISO 27001/27701', icon: landingAssets.badgeIso },
  { label: 'EN18031', icon: landingAssets.badgeEn18031 },
]

export default function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="bg-white px-36 pt-28 pb-24">
      <div className="flex items-center gap-16">
        {/* Left content */}
        <div className="flex-1 flex flex-col items-start">
          <h1 className="font-bold text-[#141414] text-[50.6px] tracking-[-1.3px] leading-[52px]">
            Plaud Team
          </h1>
          <p className="mt-5 text-[#666] text-[16.9px] leading-[29.25px] max-w-[512px]">
            AI insights and summaries for every conversation across your team
          </p>
          <div className="mt-8">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center bg-[#141414] text-white text-[12.9px] font-medium h-12 px-8 rounded-full hover:bg-[#333]"
            >
              Get Started
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {badges.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2">
                <img src={icon} alt="" className="w-8 h-8" />
                <span className="text-[#666] text-[11.8px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src={landingAssets.heroApp}
            alt="Plaud Team workspace showing team member management, workspace switching, and sidebar navigation"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
