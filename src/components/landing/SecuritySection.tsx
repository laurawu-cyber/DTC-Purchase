import { landingAssets } from './landingAssets'

const items = [
  {
    title: 'Multi-region AWS cloud',
    desc: "Plaud processes and stores users' data in regional data centers in the US, Europe, Singapore and Japan.",
    bordered: true,
  },
  {
    title: 'No AI model training',
    desc: "Plaud and the supported LLMs will never train on your team's data, unless you explicitly opt-in to training.",
    bordered: true,
  },
  {
    title: 'Encryption',
    desc: "Your team's data is encrypted in transit and at rest.",
    bordered: false,
  },
]

export default function SecuritySection() {
  return (
    <section id="security" className="bg-white px-36 py-28">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10">
            Enterprise-grade<br />security & compliance
          </h2>
          <p className="text-[#666] text-[16.6px] leading-[29.25px] max-w-[512px]">
            Your data is protected by industry-leading security standards and compliance certifications.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col gap-[5.375px] ${item.bordered ? 'border-b border-[#e3e3e3] pb-[21px]' : ''}`}
              >
                <h3 className="font-bold text-[#141414] text-[13.3px] leading-5">{item.title}</h3>
                <p className="text-[#666] text-[13.2px] leading-[22.75px]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center gap-4 border border-[#e3e3e3] px-[25px] py-[9px] rounded-full h-10 text-[#141414] text-[12.9px] font-medium hover:bg-gray-50">
              Visit Security & Trust Center
              <img src={landingAssets.securityArrow} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right badges image */}
        <div className="flex items-center justify-center">
          <div className="max-w-[480px] w-full">
            <img
              src={landingAssets.securityBadges}
              alt="Security and compliance certifications including SOC 2, HIPAA, GDPR, ISO 27001, ISO 27701, EN18031, and AWS"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
