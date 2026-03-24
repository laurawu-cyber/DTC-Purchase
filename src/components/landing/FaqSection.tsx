import { landingAssets } from './landingAssets'

const faqs = [
  'What happens if my team already have Plaud accounts?',
  'Are there discounts for large teams?',
  'Is there a free trial for Plaud Team?',
  'What kind of support do Plaud Team customers get?',
  'Does Plaud Team support SSO?',
  'Does Plaud sign DPAs?',
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white px-[320px] py-28">
      <div className="mx-auto max-w-[800px] px-6 flex flex-col gap-12">
        <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10 text-center">
          Frequently asked questions
        </h2>
        <div className="bg-[rgba(242,239,235,0.3)] border border-[#e3e3e3] rounded-xl p-[25px]">
          {faqs.map((q, i) => (
            <div
              key={q}
              className={`flex items-center justify-between py-5 ${i < faqs.length - 1 ? 'border-b border-[#e3e3e3]' : ''}`}
            >
              <span className="font-bold text-[#141414] text-[13.7px] leading-5">{q}</span>
              <img src={landingAssets.faqChevron} alt="" className="w-4 h-4 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
