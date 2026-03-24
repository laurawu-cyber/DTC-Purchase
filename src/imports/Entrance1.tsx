import svgPaths from "./svg-2llxicjxm7";
import imgWhatsNewItemImage from "figma:asset/854c6d231644b58ddb193dc1c6c1ea956e606e33.png";
import img22 from "figma:asset/aaec7dd1487c050adb61170dae29c583bb1df724.png";
import { imgVector } from "./svg-wr7h8";

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
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[366px] top-[962px] w-[952px]" data-name="Community Section">
      <CommunityHeader />
      <CommunityCardsContainer />
    </div>
  );
}

function ViewAllContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="Chevron Icon">
            <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                <div className="relative size-full" data-name="Vector">
                  <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                      <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinejoin="round" />
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

function CommunityHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[952px]" data-name="Community Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Plaud Community</p>
      <ViewAllContainer1 />
    </div>
  );
}

function Header4() {
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

function Text4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header4 />
      <Text4 />
    </div>
  );
}

function Spacer4() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #7A7A7A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo3 />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Header5() {
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

function Text5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Meeting Notes</p>
      <p className="leading-[22px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Applicable for multi-project progress review meetings, focusing on assessing current progress, bottlenecks, and planning.</p>
    </div>
  );
}

function Head5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header5 />
      <Text5 />
    </div>
  );
}

function Spacer5() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #7A7A7A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo4 />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Header6() {
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

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] not-italic relative shrink-0 text-[20px] text-black w-full">Autopilot</p>
      <Tags />
    </div>
  );
}

function Head6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header6 />
      <Text6 />
    </div>
  );
}

function Spacer6() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Footer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Footer">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">{`Plaud.ai `}</p>
    </div>
  );
}

function Header7() {
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

function Text7() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <p className="leading-[30px] relative shrink-0 text-[20px] text-black w-full">Make me smart</p>
      <p className="leading-[20px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Crafted for oral surgery assessments</p>
    </div>
  );
}

function Head7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Head">
      <Header7 />
      <Text7 />
    </div>
  );
}

function Spacer7() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2a59a980} fill="var(--fill-0, #7A7A7A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DownloadInfo5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo5 />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function CommunityContent() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[952px]" data-name="Community Content">
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head4 />
          <Spacer4 />
          <Footer4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head5 />
          <Spacer5 />
          <Footer5 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head6 />
          <Spacer6 />
          <Footer6 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head7 />
          <Spacer7 />
          <Footer7 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function CommunityContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[366px] top-[830px]" data-name="Community Container">
      <CommunityHeader1 />
      <CommunityContent />
    </div>
  );
}

function ViewAllContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="Chevron Icon">
            <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                <div className="relative size-full" data-name="Vector">
                  <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                      <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinejoin="round" />
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

function RecentFilesHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Recent Files Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[40px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Recent files</p>
          <ViewAllContainer2 />
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="icon_iconfont_folder_foler_1">
        <div className="absolute inset-[19.79%_16.54%_17.8%_18.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3867 9.98535">
            <path d={svgPaths.p33c3f600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame91 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">[WIP]【Plaud Team】C2B PRD. Initialize a Team Workspace</p>
      <Frame93 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame18 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
        <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
            <g id="Vector">
              <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame95 />
      <Frame124 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame92 />
      <Frame125 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame86 />
      <Frame126 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
          <Frame94 />
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="icon_iconfont_folder_foler_1">
        <div className="absolute inset-[19.79%_16.54%_17.8%_18.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3867 9.98535">
            <path d={svgPaths.p33c3f600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame98 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">RFC]【Plaud Team】Workspace PRD</p>
      <Frame97 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame19 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
        <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
            <g id="Vector">
              <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame100 />
      <Frame129 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame99 />
      <Frame128 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame87 />
      <Frame127 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="icon_iconfont_folder_foler_1">
        <div className="absolute inset-[19.79%_16.54%_17.8%_18.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3867 9.98535">
            <path d={svgPaths.p33c3f600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame103 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">PLAUD APP 测试配置</p>
      <Frame102 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame20 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
        <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
            <g id="Vector">
              <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame105 />
      <Frame132 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame104 />
      <Frame131 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame88 />
      <Frame130 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
          <Frame101 />
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="icon_iconfont_folder_foler_1">
        <div className="absolute inset-[19.79%_16.54%_17.8%_18.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3867 9.98535">
            <path d={svgPaths.p33c3f600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame108 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">{`Collaboration Means Differently for "AI Native"`}</p>
      <Frame107 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame21 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
        <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
            <g id="Vector">
              <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame110 />
      <Frame135 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame109 />
      <Frame134 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame89 />
      <Frame133 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
          <Frame106 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame22 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
        <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
            <g id="Vector">
              <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
              <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame113 />
      <Frame138 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame112 />
      <Frame137 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame90 />
      <Frame136 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
          <Frame111 />
        </div>
      </div>
    </div>
  );
}

function RecentFilesContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Recent Files Content">
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame73 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame74 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame75 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame76 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame77 />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecentFilesContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[326px] top-[50px] w-[992px]" data-name="Recent Files Container">
      <RecentFilesHeader />
      <RecentFilesContent />
    </div>
  );
}

function ViewAllContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="Chevron Icon">
            <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                <div className="relative size-full" data-name="Vector">
                  <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                      <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinejoin="round" />
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

function WhatsNewHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="What's New Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">{`What's new`}</p>
      <ViewAllContainer3 />
    </div>
  );
}

function VectorContainer() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-42.34%] left-[calc(50%+0.5px)] top-[-62.1%] w-[596px]" data-name="Vector Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.95 507.656">
        <g id="Group 291530">
          <path d={svgPaths.p3931fea0} id="Vector" stroke="url(#paint0_linear_1_2890)" />
          <path d={svgPaths.p21cf8000} id="Vector_2" stroke="url(#paint1_linear_1_2890)" />
          <g id="Vector_3">
            <path d={svgPaths.p19b009e0} stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p19b009e0} stroke="url(#paint2_linear_1_2890)" />
          </g>
          <path d={svgPaths.pfe4c00} id="Vector_4" stroke="var(--stroke-0, white)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2890" x1="298.476" x2="298.476" y1="175.422" y2="280.997">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2890" x1="298.479" x2="298.479" y1="124.086" y2="303.901">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2890" x1="298.48" x2="298.48" y1="65.2813" y2="338.17">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhatsNewItemTextContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]" data-name="What's New Item Text Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-[270px]">Introducing Plaud 3.0</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-[270px]">All-in-one upgrade with smarter AI, a smoother UI, and a more seamless workflow.</p>
    </div>
  );
}

function WhatsNewItem1() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[122px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]" data-name="What's New Item">
      <WhatsNewItemTextContainer />
    </div>
  );
}

function VectorContainer1() {
  return (
    <div className="absolute h-[32.595px] left-[16px] top-[84px] w-[263.5px]" data-name="Vector Container">
      <div className="absolute inset-[0_-2.21%_-4.31%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.652 34">
          <g id="Vector Container">
            <path d={svgPaths.p1f635ca0} id="Vector 1234" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p3432b4a0} id="Vector 1235" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p267d8120} id="Vector 1236" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.pab95360} id="Vector 1237" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p20921338} id="Vector 1238" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p33a68700} id="Vector 1239" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p3c6c8900} id="Vector 1240" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p956a3c0} id="Vector 1241" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p2ec133e0} id="Vector 1242" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p162515e0} id="Vector 1243" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p36d01f00} id="Vector 1244" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.pc76680} id="Vector 1245" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p1154fb20} id="Vector 1247" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p25a20b0} id="Vector 1248" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p148c8b20} id="Vector 1249" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p2eb7c6c0} id="Vector 1250" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d="M251.326 13L251.326 19" id="Vector 1251" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
            <path d={svgPaths.p442d580} id="Vector 1233" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component512Light() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[40px] top-[16px]" data-name="512-light">
      <div className="absolute inset-[-82.5%_-85%_-87.5%_-85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 108">
          <g filter="url(#filter0_d_1_3023)" id="512-light">
            <path d={svgPaths.p2adf6100} fill="var(--fill-0, #F9F9F9)" />
            <path d={svgPaths.p18b7e000} stroke="var(--stroke-0, #A3A3A3)" strokeWidth="0.5" />
            <path d={svgPaths.p2f76b500} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="108" id="filter0_d_1_3023" width="108" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="17" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3023" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3023" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WhatsNewItem() {
  return (
    <div className="absolute bg-white h-[248px] left-0 overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
      <div className="absolute h-[240px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.800000011920929\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-6.1233e-14 -16.036 19.876 1.2613e-13 150.5 138.55)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <VectorContainer />
      <WhatsNewItem1 />
      <VectorContainer1 />
      <Component512Light />
    </div>
  );
}

function TimeType() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Time & Type">
      <div className="overflow-clip relative shrink-0 size-[13.333px]" data-name="Flag Icon">
        <div className="absolute inset-[16.75%_22.19%_14.17%_21.56%]" data-name="Vector">
          <div className="absolute inset-[-4.52%_-5.56%_-0.27%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33336 9.65323">
              <path d={svgPaths.p343a1bc0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinejoin="round" strokeWidth="0.833333" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11.111px] not-italic relative shrink-0 text-[#a3a3a3] text-[7.778px] w-[35.556px]">00:10</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[9.15px] top-[23.79px] w-[196.667px]" data-name="Text">
      <TimeType />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]" data-name="Tab Container">
      <Text8 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center justify-center py-[1.87px] relative shrink-0" data-name="Tab 1">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[9.348px] not-italic relative shrink-0 text-[#7a7a7a] text-[6.54px] whitespace-nowrap">Sources</p>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[1.87px] relative shrink-0" data-name="Tab 2">
      <div aria-hidden="true" className="absolute border-b-[0.935px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semibold',sans-serif] leading-[11.218px] not-italic relative shrink-0 text-[7.48px] text-black whitespace-nowrap">Notes</p>
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]" data-name="Tab Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-3.3px)] top-[calc(50%-3.35px)]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="content-stretch flex gap-[7.478px] items-center justify-center opacity-60 px-[11.218px] relative" data-name="Navigation Bar Title Tabs">
            <Tab />
            <Tab1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsNewItemTextContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[269px]" data-name="What's New Item Text Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">3 AI Superpowers. One Plaud.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Multimodal input. Multi-dimensional summaries. Ask Plaud anytime.</p>
    </div>
  );
}

function WhatsNewItem3() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[120px] left-1/2 overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[301px]" data-name="What's New Item">
      <WhatsNewItemTextContainer1 />
    </div>
  );
}

function WhatsNewItem2() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[247px] left-[325px] overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
      <div className="absolute h-[248px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 248\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.585 25.746 -0.093017 151 153.31)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute flex h-[81.249px] items-center justify-center left-[20px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <TabContainer />
        </div>
      </div>
      <div className="absolute flex h-[81.249px] items-center justify-center left-[179px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-165 -scale-y-100 flex-none">
          <TabContainer1 />
        </div>
      </div>
      <div className="absolute h-[301px] left-[79px] top-[15px] w-[146px]" data-name="What's New Item Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.92%] left-0 max-w-none top-[0.2%] w-full" src={imgWhatsNewItemImage} />
        </div>
      </div>
      <WhatsNewItem3 />
    </div>
  );
}

function WhatsNewItemTextContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]" data-name="What's New Item Text Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">Note Pro: Precision at Your Fingertips</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Meet Note Pro—see more, mark key moments, and capture everything with ease.</p>
    </div>
  );
}

function WhatsNewItem5() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[13.25px] bg-[rgba(249,249,249,0.8)] bottom-[7px] h-[113px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]" data-name="What's New Item">
      <WhatsNewItemTextContainer2 />
    </div>
  );
}

function WhatsNewItem4() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[247px] left-[651px] overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
      <div className="absolute h-[247px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 247\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.515 25.746 -0.092642 151 152.69)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="-translate-x-1/2 absolute h-[314px] left-[calc(50%-3px)] top-[17px] w-[217px]" data-name="图层 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-95 pointer-events-none size-full" src={img22} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[125px] left-0 to-[rgba(249,249,249,0)] top-[122px] w-[302px]" data-name="What's New Item Image" />
      <div className="absolute flex h-[149px] items-center justify-center left-[153px] top-[15px] w-[129px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[129px] opacity-18 to-[rgba(249,249,249,0)] w-[149px]" data-name="What's New Item Image" />
        </div>
      </div>
      <WhatsNewItem5 />
    </div>
  );
}

function WhatsNewItem6() {
  return <div className="absolute content-stretch flex gap-[2px] h-[32px] items-start left-[16px] top-[16px] w-[104px]" data-name="What's New Item" />;
}

function WhatsNewContent() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="What's New Content">
      <WhatsNewItem />
      <WhatsNewItem2 />
      <WhatsNewItem4 />
      <WhatsNewItem6 />
    </div>
  );
}

function WhatsNewContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[315px] items-start left-[366px] top-[481px] w-[952px]" data-name="What's New Container">
      <WhatsNewHeader />
      <WhatsNewContent />
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

function Spacer8() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function UserNameContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User Name Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative size-full">
          <Logo />
          <Spacer8 />
        </div>
      </div>
    </div>
  );
}

function UserAvatarContainer() {
  return (
    <div className="bg-[#ebebeb] overflow-clip relative rounded-[3.75px] shrink-0 size-[24px]" data-name="User Avatar Container">
      <div className="absolute left-[4.5px] overflow-clip size-[15px] top-[4.5px]" data-name="icon_tem_com_real_estate">
        <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
          <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 8.79899">
              <path d={svgPaths.p3846b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfoTextContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 w-[115px]" data-name="User Info Text Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Testing Account</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#757575] text-[13px] w-[min-content]">
        <p className="leading-[18px]">Testing Account’s Workspace</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="User Name and Status Container">
      <UserInfoTextContainer />
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #A3A3A3)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserDetailsContainer() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="User Details Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer />
        </div>
      </div>
    </div>
  );
}

function NewRecordingContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="New Recording Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[8px] relative w-full">
        <div className="h-[38px] min-w-[70px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                <div className="absolute inset-[15%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.999 14.001">
                    <path d={svgPaths.pc4f3900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Add audio</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
      </div>
    </div>
  );
}

function UserContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer />
      <NewRecordingContainer />
      <div className="-translate-x-1/2 absolute bottom-0 h-0 left-1/2 w-[204px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
            <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationItemsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Items Container">
      <div className="bg-[#ebebeb] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_home">
          <div className="absolute inset-[18.37%_14.55%_18.37%_14.31%]" data-name="Vector">
            <div className="absolute inset-[-3.95%_-2.29%_-3.95%_-2.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.88 13.6514">
                <path d={svgPaths.p26b30180} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Home</p>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_search">
              <div className="absolute inset-[12.5%_13.23%_13.23%_12.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8535 14.8535">
                  <path d={svgPaths.p192dbc00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Search</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_template_community">
              <div className="absolute inset-[15%_15.27%_15.28%_15%]" data-name="Vector">
                <div className="absolute inset-[-3.59%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9454 14.9447">
                    <path d={svgPaths.p2c703200} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Template Community</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_explore">
              <div className="absolute inset-[14.57%_16.57%_19.5%_17.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1854 13.1854">
                  <path d={svgPaths.p3f490370} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Folders</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #757575)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame78 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame83 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
            <div className="absolute inset-[23.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
                <path d={svgPaths.pcd34700} fill="var(--fill-0, #757575)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Comes from</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #757575)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame79 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[87px] items-center p-[8px] relative w-full">
          <Frame84 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
            <div className="absolute inset-[23.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
                <path d={svgPaths.pcd34700} fill="var(--fill-0, #757575)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FolderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Folder Container">
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
          <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
              <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`All files `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(299)</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_unorganized">
          <div className="absolute inset-[17.5%_19.81%_17.5%_17.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5381 13">
              <path d={svgPaths.p26ae8900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`Unfiled `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(34)</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_delete">
          <div className="absolute flex inset-[15.38%_16.99%_13.32%_16.96%] items-center justify-center">
            <div className="flex-none h-[14.261px] rotate-180 w-[13.209px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.209 14.2607">
                  <path d={svgPaths.p39870cc0} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`Trash `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(3)</span>
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <Component />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
                <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
                    <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Work meetings</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(21)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
                <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
                    <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Traning</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(56)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <Component1 />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Note</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(100)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Call</span>
                <span className="leading-[22px] text-[#a3a3a3]">{` (2)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Import</span>
                <span className="leading-[22px] text-[#a3a3a3]">{` (6)`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FolderItem() {
  return <div className="content-stretch flex flex-col h-[38px] items-start shrink-0 w-[204px]" data-name="Folder Item" />;
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] pt-[16px] relative shrink-0 w-[220px]" data-name="Navigation Container">
      <NavigationItemsContainer />
      <div className="h-0 relative shrink-0 w-[204px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
            <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
      <FolderContainer />
      <FolderItem />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Info">
      <UserContainer />
      <NavigationContainer />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[900px] items-start left-0 overflow-clip top-[-0.13px] w-[220px]" data-name="Sidebar">
      <UserInfo />
    </div>
  );
}

function Frame121() {
  return <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] h-[1629px] left-1/2 top-0 w-[1440px]" />;
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[16px] px-[16px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Account</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component2 />
        <div className="bg-[#ebebeb] relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_iconfont_folder_user">
                <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-[16.67%]" data-name="Vector">
                  <div className="absolute inset-[-3.75%_-5%_0_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.8333">
                      <path d={svgPaths.p21dfc800} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">{`Account & security`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[129px]">Workspace</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component3 />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_profile">
                <div className="absolute inset-[20.75%_16.25%_20.09%_15.39%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6709 11.833">
                    <path d={svgPaths.p30879900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Personalization</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_preference">
                <div className="absolute inset-[14.58%_18.75%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.499 14.167">
                    <path d={svgPaths.pe3e2e00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Preferences</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_member_glossary">
                <div className="absolute inset-[15.83%_22.83%_15.84%_22.84%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8662 13.666">
                    <path d={svgPaths.p178b2f00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Custom vocabulary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Workspace management</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame82 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_tem_com_real_estate">
                <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
                  <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11.732">
                      <path d={svgPaths.pd0de300} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">General</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_iconfont_folder_user">
                <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-[16.67%]" data-name="Vector">
                  <div className="absolute inset-[-3.75%_-5%_0_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13.8333">
                      <path d={svgPaths.p21dfc800} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{`Members & roles`}</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_billings">
                <div className="absolute inset-[12.5%_20%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15.0003">
                    <path d={svgPaths.p26eed900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[35.53%_46.8%_64.47%_31.27%]">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.38672 1">
                      <path d="M0 0.5H4.38672" id="Vector 7556" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[48.07%_46.8%_51.93%_31.27%]">
                  <div className="absolute inset-[-0.5px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.38672 1">
                      <path d="M0 0.5H4.38672" id="Vector 7556" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{`Billing & plan`}</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_plaud_note">
                <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.667 15">
                    <path d={svgPaths.p285eca00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Devices</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_privacy_&_security">
                <div className="absolute inset-[15%_20%]" data-name="Vector">
                  <div className="absolute inset-[-3.57%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
                      <path d={svgPaths.p34cdbf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Component4 />
      <Frame13 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component5 />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_help_&_feedback">
                <div className="absolute inset-[17.46%_18.41%_17.49%_15.89%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1396 13.0117">
                    <path d={svgPaths.p4d8080} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Help Center</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_plaud">
                <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.886 11.7324">
                    <path d={svgPaths.p45fd370} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.833333" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">About Plaud</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[767px] items-center relative shrink-0 w-full" data-name="User Info">
      <Frame11 />
      <Frame14 />
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] h-[1005px] items-start left-0 top-0 w-[220px]">
      <Frame2 />
      <UserInfo1 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-white h-[829px] relative rounded-[5px] shrink-0 w-[1196px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[1428px] items-start left-[-1px] overflow-clip top-[-1px] w-[220px]">
      <Frame119 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Email address</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">testing@acme.com</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Container1 />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Row />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Account</p>
      <div className="bg-[#ebebeb] h-px shrink-0 w-full" />
      <Container />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[872px]">
      <Frame3 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Language</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative self-stretch shrink-0" data-name="Container">
      <p className="leading-[22px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Display language</p>
      <p className="leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Select your preferred language for using Plaud.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f2cea80} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0" data-name="Button">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black text-center">English</p>
      <Icon6 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Container5 />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Row1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionHeader />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Login methods</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start min-h-px min-w-px not-italic relative">
      <p className="leading-[22px] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]">Email</p>
      <p className="leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">testing@acme.com</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[166px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Email">
        <div className="absolute flex inset-[22.92%_16.67%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[13px] w-[16px]">
            <div className="relative size-full">
              <div className="absolute inset-[-4.62%_-3.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 11.8333">
                  <path d={svgPaths.p4db8c00} id="Rectangle 46229948" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">Change password</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Google() {
  return (
    <div className="absolute inset-[8.33%_10.23%_8.33%_8.33%]" data-name="Google">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2879 16.6667">
        <g id="Google">
          <path d={svgPaths.p3c97a080} fill="var(--fill-0, #FBBC05)" id="Intersect" />
          <path d={svgPaths.p1ce0f3c0} fill="var(--fill-0, #EA4335)" id="Intersect_2" />
          <path d={svgPaths.p354ea30} fill="var(--fill-0, #34A853)" id="Subtract" />
          <path d={svgPaths.p2b02db00} fill="var(--fill-0, #4285F4)" id="Intersect_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SSO-icon">
        <Google />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">Google</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[166px]">
      <Frame6 />
      <Frame26 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame5 />
      <div className="bg-white h-[32px] min-w-[100px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">{` Add`}</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-black w-[min-content]">Apple</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[166px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SSO-icon">
        <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 16.6667">
            <path d={svgPaths.p2f5c3d00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <Frame28 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <Frame7 />
      <div className="bg-white h-[32px] min-w-[100px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">Add</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame25 />
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame23 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Active sessions</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Based</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Login with</p>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Last active</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-end overflow-clip py-[4px] relative shrink-0 w-[218px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Manage</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame34 />
      <Frame37 />
      <Frame122 />
      <Frame123 />
    </div>
  );
}

function PlaudWeb() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#d0eaf6] content-stretch flex gap-[2px] h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[5px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Current</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web1</p>
      </div>
      <Badge />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[288px]">
        <p className="leading-[22px]">2025-08-29 12:11:35</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function PlaudWeb1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web2</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2025-08-29 12:10:35</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function PlaudWeb2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plaud_web">
      <div className="absolute inset-[19.98%_20%_19.99%_20%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0008 13.0063">
            <path d={svgPaths.p2b785d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web2</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2025-08-29 12:10:35</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[218px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame60 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_phone">
        <div className="absolute inset-[15.16%_8.75%_-5%_28.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.167 14.7236">
            <path d={svgPaths.pe753880} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-black">
        <p className="leading-[22px]">Plaud App1</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[214px]">
      <div className="absolute flex items-center justify-center left-[158px] size-[20px] top-[8px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[20px]" data-name="icon_logout">
            <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                <path d={svgPaths.p25919d00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[860px]">
      <Frame39 />
      <Frame44 />
      <Frame49 />
      <Frame54 />
      <Frame59 />
      <Frame64 />
    </div>
  );
}

function Frame115() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pr-[16px] relative shrink-0 w-[872px]">
      <Frame33 />
      <Frame38 />
      <Frame115 />
    </div>
  );
}

function Frame116() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[60px] w-[4px]" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[316px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame30 />
      <Frame114 />
      <Frame116 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Two-step verification</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Text Container">
      <p className="leading-[22px] relative shrink-0 text-[14px] text-black">Email verification code</p>
      <p className="leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px]">When you sign in with email and password, Plaud will send a one-time code to your email for extra security.</p>
    </div>
  );
}

function CheckboxContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox Container">
      <TextContainer />
    </div>
  );
}

function Knob() {
  return <div className="-translate-y-1/2 absolute bg-white left-[2px] rounded-[3px] size-[16px] top-1/2" data-name="Knob" />;
}

function DropdownContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[5px] shrink-0" data-name="Dropdown Container">
      <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="_Trailing">
        <div className="bg-[#d6d6d6] h-[20px] overflow-clip relative rounded-[5px] shrink-0 w-[36px]" data-name="Toggle">
          <Knob />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between min-h-[56px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <CheckboxContainer />
      <DropdownContainer />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame70 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
        <Container6 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">Account actions</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 872 1">
            <line id="Line 1" stroke="var(--stroke-0, #EBEBEB)" x2="872" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="h-[32px] min-w-[70px] relative rounded-[5px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#ff503f] text-[12px] text-center">Delete account</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ff503f] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] tracking-[-0.11px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Warning: This action will permanently delete your account and data.
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame72 />
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[118px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center">Sign out</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <Frame120 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[872px]">
      <Container2 />
      <Frame29 />
      <Frame36 />
      <Frame69 />
      <Frame71 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 top-[62px] w-[872px]">
      <Frame35 />
      <Frame32 />
    </div>
  );
}

function Frame117() {
  return <div className="absolute bg-[#c2c2c2] h-[352px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function Frame8() {
  return (
    <div className="absolute h-[1520px] left-[219px] top-[-1px] w-[976px]">
      <div className="absolute left-[932px] overflow-clip size-[20px] top-[24px]" data-name="icon_xmark_for_nav">
        <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]" data-name="Vector">
          <div className="absolute inset-[-3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
              <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <Frame31 />
      <Frame117 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#ebebeb] border-solid h-[829px] left-1/2 overflow-clip rounded-[5px] top-[calc(50%+0.5px)] w-[1196px]">
      <Frame />
      <Frame8 />
    </div>
  );
}

export default function Entrance() {
  return (
    <div className="bg-white relative size-full" data-name="Entrance1">
      <CommunitySection />
      <CommunityContainer />
      <RecentFilesContainer />
      <WhatsNewContainer />
      <Sidebar />
      <Frame121 />
      <Frame118 />
    </div>
  );
}