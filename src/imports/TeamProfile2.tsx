import svgPaths from "./svg-waee18o50u";
import { imgVector } from "./svg-bc8dx";

function ViewAllContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
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
      <ViewAllContainer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #528FCC)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-ellipsis w-full" data-name="Text">
      <p className="leading-[30px] overflow-hidden relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Head">
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[13px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #528FCC)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-ellipsis w-full" data-name="Text">
      <p className="leading-[30px] overflow-hidden relative shrink-0 text-[20px] text-black w-full">Meeting Notes</p>
      <p className="leading-[22px] overflow-hidden relative shrink-0 text-[#757575] text-[14px] w-full">Applicable for multi-project progress review meetings, focusing on assessing current progress, bottlenecks, and planning.</p>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Head">
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo1 />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[13px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
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

function Text2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-ellipsis w-full" data-name="Text">
      <p className="leading-[30px] overflow-hidden relative shrink-0 text-[20px] text-black w-full">Adaptive Summary</p>
      <p className="leading-[22px] overflow-hidden relative shrink-0 text-[#757575] text-[14px] w-full">Get the gist of your meeting in seconds</p>
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Head">
      <Header2 />
      <Text2 />
    </div>
  );
}

function Spacer2() {
  return <div className="h-[78px] shrink-0 w-full" data-name=".Spacer" />;
}

function Footer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Footer">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[13px] text-ellipsis whitespace-nowrap">{`Plaud.ai `}</p>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="material_symbols_docs">
        <div className="absolute inset-[12.42%_21.77%_12.58%_19.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.776px_-2.982px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.pc6e5f00} fill="var(--fill-0, #528FCC)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name=".Spacer" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-ellipsis w-full" data-name="Text">
      <p className="leading-[30px] overflow-hidden relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Head">
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo2 />
      <div className="bg-[#757575] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#757575] text-[13px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function CommunityCardsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[952px]" data-name="Community Cards Container">
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
      <div className="bg-white max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] w-full">
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
      <CommunityCardsContainer />
    </div>
  );
}

function DividerContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[3px] items-start relative shrink-0 w-full" data-name="Divider Container">
      <div className="bg-[#ebebeb] flex-[1_0_0] h-[3px] min-h-px min-w-px" data-name="Divider Left" />
      <div className="bg-black flex-[1_0_0] h-[3px] min-h-px min-w-px" data-name="Divider Right" />
    </div>
  );
}

function WelcomeTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Welcome Text Container">
      <p className="font-['Inter:Light',sans-serif] font-light h-[44px] leading-[44px] relative shrink-0 text-[32px] text-black w-[464px]">Welcome to Plaud Team</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#7a7a7a] text-[16px] w-[min-content]">Help us tailor Plaud for your team so you get more relevant templates and insights.</p>
    </div>
  );
}

function WelcomeContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Welcome Container">
      <DividerContainer />
      <WelcomeTextContainer />
    </div>
  );
}

function IndustryOptionsContainer() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Industry Options Container">
      <div className="bg-[#ebebeb] h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Technology / Software</p>
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Consumer Goods / Electronics</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Finance / Insurance</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Retail / E-commerce</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Manufacturing / Industrial</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Transportation / Logistics</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Construction / Real Estate</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Media / Entertainment</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Energy / Utilities</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Professional Services</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Government / Public Sector</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Nonprofit / NGO</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Hospitality / Travel</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Agriculture / Food Production</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Telecommunications</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[228px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Other</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function IndustryContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Industry Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[36px] not-italic relative shrink-0 text-[24px] text-black text-center w-full">What industry is your company in?</p>
      <IndustryOptionsContainer />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-start left-1/2 overflow-clip top-[80px] w-[464px]" data-name="Form Container">
      <WelcomeContainer />
      <IndustryContainer />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] relative shrink-0 w-[83.474px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4735 14">
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

export default function TeamProfile() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="team profile2">
      <CommunitySection />
      <FormContainer />
      <UserNameContainer />
      <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[1354.21px] min-w-[70px] overflow-clip px-[16px] py-[8px] rounded-[5px] top-[16px] w-[70px]" data-name="Button">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center">Skip</p>
      </div>
    </div>
  );
}