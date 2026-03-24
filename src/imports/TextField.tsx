import svgPaths from "./svg-valr55l2ir";

function TitleWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title Wrapper">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">Number of seats</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">3</p>
      </div>
    </div>
  );
}

function DecreaseButton() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative shrink-0" data-name="Decrease Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Decrease Icon">
        <div className="absolute inset-[49.89%_16.67%_50.11%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1">
              <path d="M0 0.5H13.3333" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncreaseButton() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center p-[4px] relative rounded-[5px] shrink-0" data-name="Increase Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Increase Icon">
        <div className="absolute inset-[16.67%_16.67%_16.67%_16.66%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.334 13.333">
            <path d={svgPaths.p2fccae80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pointinghand1() {
  return (
    <div className="absolute inset-[2.81%_7.83%_7.38%_2.75%]" data-name="pointinghand">
      <div className="absolute inset-[-2.46%_-2.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0582 16.0181">
          <g id="pointinghand">
            <path clipRule="evenodd" d={svgPaths.p1538c080} fill="var(--fill-0, white)" fillRule="evenodd" id="cursor" />
            <path clipRule="evenodd" d={svgPaths.p1538c080} fillRule="evenodd" id="cursor_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
            <path d="M11.5019 12.6318V9.17281" id="cursor_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
            <path d={svgPaths.p380daf00} id="cursor_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
            <path d={svgPaths.p2a60e00} id="cursor_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.75" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MadeWithByAzendooDesignTeamAzendoo() {
  return (
    <div className="absolute contents inset-[2.81%_7.83%_7.38%_2.75%]" data-name="Made with 💕by Azendoo design team   @azendoo">
      <Pointinghand1 />
    </div>
  );
}

function BundleOsXCursors() {
  return (
    <div className="absolute contents inset-[2.81%_7.83%_7.38%_2.75%]" data-name="bundle os x cursors">
      <MadeWithByAzendooDesignTeamAzendoo />
    </div>
  );
}

function Pointinghand() {
  return (
    <div className="absolute h-[17px] left-[52px] overflow-clip top-[15.5px] w-[16px]" data-name="pointinghand">
      <BundleOsXCursors />
    </div>
  );
}

function InputControls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Input Controls">
      <DecreaseButton />
      <IncreaseButton />
      <Pointinghand />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] relative size-full">
          <Content />
          <InputControls />
        </div>
      </div>
    </div>
  );
}

export default function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative size-full" data-name="Text Field">
      <TitleWrapper />
      <Input />
    </div>
  );
}