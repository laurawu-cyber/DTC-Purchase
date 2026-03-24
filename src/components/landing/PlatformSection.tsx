import { landingAssets } from './landingAssets'

export default function PlatformSection() {
  return (
    <section id="platform" className="bg-white px-[120px] py-28">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-[15px] text-center">
          <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10">
            A source of truth for every conversation
          </h2>
          <p className="text-[#666] text-[16.7px] leading-[29.25px] max-w-[672px] text-center">
            Enable your team to capture, extract, and utilize insights from every important
            conversation, not just online meetings.
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src={landingAssets.platformDiagram}
            alt="Plaud platform showing conversation capture from in-person meetings, phone calls, and online meetings flowing into AI-powered summaries and transcripts"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
