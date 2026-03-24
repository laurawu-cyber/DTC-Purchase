import svgPaths from "./svg-ye67bf8gst";
import { imgVector } from "./svg-7rop7";

function ViewAllButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="View All Icon">
            <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                <div className="relative size-full" data-name="Vector">
                  <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                      <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #757575)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Community Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Plaud Community</p>
      <ViewAllButton />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #70CC52)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
      <div className="h-full shrink-0 w-[8px]" data-name=".Spacer" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header />
      <Text />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #70CC52)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
      <div className="h-full shrink-0 w-[8px]" data-name=".Spacer" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Meeting Notes</p>
      <p className="leading-[22px] overflow-hidden relative shrink-0 text-[#757575] text-[14px] text-ellipsis w-full">Applicable for multi-project progress review meetings, focusing on assessing current progress, bottlenecks, and planning.</p>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header1 />
      <Text1 />
    </div>
  );
}

function Spacer1() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo1 />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="autopilot">
        <div className="absolute inset-[17.64%_16.24%_16.25%_17.76%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8392 15.8646">
            <path d={svgPaths.p27245380} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Detailed</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Flexible</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Personalized Structure</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_8px] items-start relative shrink-0 w-full" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[20px] text-black w-full">Autopilot</p>
      <Tags />
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header2 />
      <Text2 />
    </div>
  );
}

function Spacer2() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Footer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Footer">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[12px] text-ellipsis whitespace-nowrap">{`Plaud.ai `}</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #70CC52)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
      <div className="h-full shrink-0 w-[8px]" data-name=".Spacer" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header3 />
      <Text3 />
    </div>
  );
}

function Spacer3() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo2 />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function CommunityList() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[952px]" data-name="Community List">
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head />
          <Spacer />
          <Footer />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head1 />
          <Spacer1 />
          <Footer1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head2 />
          <Spacer2 />
          <Footer2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head3 />
          <Spacer3 />
          <Footer3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[366px] top-[1499px] w-[952px]" data-name="Community Section">
      <CommunityHeader />
      <CommunityList />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black text-center w-full">Select seats</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#757575] text-[16px] w-full">Choose how many team members will use this workspace.</p>
    </div>
  );
}

function TitleWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title Wrapper">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">Number of seats</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">2</p>
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
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0" data-name="Increase Button">
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

function Stepper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stepper">
      <DecreaseButton />
      <IncreaseButton />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] relative size-full">
          <Content1 />
          <Stepper />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-w-[220px] overflow-clip relative shrink-0 w-full" data-name="Text Field">
      <TitleWrapper />
      <Input />
    </div>
  );
}

function PlanRow() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Plan Row">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
        <p className="leading-[18px]">Plan</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
        <p className="leading-[18px]">Teams Unlimited (Annual)</p>
      </div>
    </div>
  );
}

function CurrencyDropdown() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center p-[4px] relative rounded-[5px] shrink-0" data-name="Currency Dropdown">
      <div className="overflow-clip relative rounded-[6.25px] shrink-0 size-[20px]" data-name="Currency Dropdown Icon">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-7.07%_-3.54%_-14.14%_-3.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7071 6.06066">
              <path d={svgPaths.p204d3ae0} id="Vector" stroke="var(--stroke-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurrencyValue() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center justify-end px-[8px] relative shrink-0" data-name="Currency Value">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black text-right whitespace-nowrap">
        <p className="leading-[18px]">USD $</p>
      </div>
      <CurrencyDropdown />
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
    <div className="absolute h-[17px] left-[416px] overflow-clip top-[3px] w-[16px]" data-name="pointinghand">
      <BundleOsXCursors />
    </div>
  );
}

function CurrencyRow() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Currency Row">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Currency</p>
      </div>
      <CurrencyValue />
      <Pointinghand />
    </div>
  );
}

function PriceRow() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Price Row">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
        <p className="leading-[18px]">Price per seat</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
        <p className="leading-[18px]">$30</p>
      </div>
    </div>
  );
}

function SeatsRow() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="Seats Row">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3d3d3d]">
        <p className="leading-[18px]">number of seats</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-black text-right">
        <p className="leading-[18px]">5</p>
      </div>
    </div>
  );
}

function TotalRow() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-start justify-between leading-[0] not-italic relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Total Row">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[22px]">Annual total</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-right">
        <p className="leading-[22px]">$150</p>
      </div>
    </div>
  );
}

function SummaryContent() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Summary Content">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <PlanRow />
        <CurrencyRow />
        <PriceRow />
        <SeatsRow />
        <div className="h-0 relative shrink-0 w-[448.392px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448.392 1">
              <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="448.392" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <TotalRow />
      </div>
    </div>
  );
}

function Summary() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Summary">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">Plan summary</p>
      </div>
      <SummaryContent />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <TextField />
      <Summary />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Actions">
      <div className="bg-black h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Confirm and pay</p>
          </div>
        </div>
      </div>
      <div className="h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-end left-1/2 overflow-clip top-[80px] w-[464px]" data-name="Container">
      <Header4 />
      <Content />
      <Actions />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] relative shrink-0 w-[83.474px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4736 14">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p1461dd00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2984dc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pa0f2f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1fbff400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1ca9a700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p31259cb0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Spacer4() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function UserNameContainer() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center left-[8px] px-[8px] py-[9px] top-[8px] w-[204px]" data-name="User Name Container">
      <Logo />
      <Spacer4 />
    </div>
  );
}

function CloseButton() {
  return (
    <div className="absolute content-stretch flex items-center left-[1392px] p-[4px] top-[16px]" data-name="Close Button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Close Icon">
        <div className="absolute inset-[20.57%]" data-name="Vector">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1855 15.1855">
              <path d={svgPaths.p19e9dc40} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <div className="bg-[#ebebeb] relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">USD $</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">GBP £</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">JPY ¥</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">TWD $</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">EUR €</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">HKD HK$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownMenu() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-[733px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] top-[428px] w-[195px]" data-name="Dropdown menu">
      <List />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 content-stretch flex items-center justify-center left-0 py-[8px] w-[1440px]">
      <p className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[12px] text-center underline whitespace-nowrap">Terms of service</p>
    </div>
  );
}

export default function SeatsCurrency() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Seats-currency">
      <CommunitySection />
      <Container />
      <UserNameContainer />
      <CloseButton />
      <DropdownMenu />
      <Frame />
    </div>
  );
}