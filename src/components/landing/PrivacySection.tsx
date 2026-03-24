import { landingAssets } from './landingAssets'

export default function PrivacySection() {
  return (
    <section className="bg-white px-36 py-28">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left screenshot */}
        <div className="flex items-center justify-center">
          <div className="border border-[#e3e3e3] rounded-xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] max-w-[520px] w-full">
            <img
              src={landingAssets.privacyScreen}
              alt="Plaud workspace showing Private and Team space file organization with granular sharing controls"
              className="w-full"
            />
          </div>
        </div>

        {/* Right text */}
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-bold text-[#141414] text-[33.6px] tracking-[-0.9px] leading-10">
            Privacy-first
          </h2>
          <p className="text-[#666] text-[16.7px] leading-[29.25px] max-w-[512px]">
            Data is private to each user by default, shareable with the team, and retained by the
            workspace when users are offboarded
          </p>
        </div>
      </div>
    </section>
  )
}
