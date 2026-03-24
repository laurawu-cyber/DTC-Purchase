import { landingAssets } from './landingAssets'

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-white px-36 py-28">
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10">
            Integrate Plaud into<br />existing workflows
          </h2>
          <p className="text-[#666] text-[16.7px] leading-[29.25px] max-w-[512px]">
            Connect your favorite tools and automate workflows to keep your team moving faster.
          </p>
        </div>

        {/* Right integrations */}
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            {/* Zapier */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_#e3e3e3,0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
                <img src={landingAssets.zapierLogo} alt="Zapier" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-[#141414] text-[11.4px]">Zapier</span>
            </div>

            {/* Arrow connector */}
            <div className="w-20 h-6 mx-0">
              <img src={landingAssets.integrationArrow} alt="" className="w-full h-full object-contain" />
            </div>

            {/* Plaud (center, larger) */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full shadow-[0px_0px_0px_2px_#e3e3e3,0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
                <img src={landingAssets.plaudLogo} alt="Plaud" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-[#141414] text-[11.8px]">Plaud</span>
            </div>

            {/* Arrow connector */}
            <div className="w-20 h-6 mx-0">
              <img src={landingAssets.integrationArrow} alt="" className="w-full h-full object-contain" />
            </div>

            {/* API */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-2xl shadow-[0px_0px_0px_1px_#e3e3e3,0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center bg-white">
                <span className="font-bold text-[#8f53ed] text-[14.9px]">{'</>'}</span>
              </div>
              <span className="font-bold text-[#141414] text-xs">API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
