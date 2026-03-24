import svgPaths from "./svg-6iixvjs74d";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">ningyuesha@gmail.com</p>
      </div>
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] relative rounded-[5px] size-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Content />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_xmark_for_panel">
        <div className="absolute inset-[27.61%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95703 8.95703">
            <path d={svgPaths.p1537be00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}