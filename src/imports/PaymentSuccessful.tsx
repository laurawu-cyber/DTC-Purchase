import svgPaths from "./svg-i6i999a6bt";
const img1 = "https://www.figma.com/api/mcp/asset/0f3e5450-628e-4abf-a100-6a62aa6bd633";
import { imgVector } from "./svg-07c4p";
import { useNavigate, useSearchParams } from "react-router";

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

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Image Container">
      <div className="h-[100px] relative shrink-0 w-[200px] bg-[#f9f9f9]" data-name="彩色拉炮 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={img1} />
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center w-[min-content]">Payment successful</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[#3d3d3d] text-[18px] text-center w-[min-content]">Your workspace is ready. Invite members to join and start collaborating.</p>
    </div>
  );
}

function ShopNowContainer() {
  const handleClick = () => {
    window.open('https://www.plaud.ai', '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Shop Now Container"
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#06c] text-[14px] text-center whitespace-nowrap">Shop now</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Shop Now Icon">
        <div className="absolute inset-[28.18%_27.72%_27.73%_27.61%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7217 10.582">
            <path d={svgPaths.p625bd80} fill="var(--fill-0, #0066CC)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">Need devices for your team?</p>
      <ShopNowContainer />
    </div>
  );
}

function ButtonContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const seats = parseInt(searchParams.get('seats') || '2');
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Button Container">
      <button 
        onClick={() => navigate(`/invite?seats=${seats}&workspaceName=${encodeURIComponent(workspaceName)}`)}
        className="bg-black h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full cursor-pointer" 
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Continue</p>
          </div>
        </div>
      </button>
      <FooterContainer />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 overflow-clip top-[80px] w-[464px]" data-name="Form Container">
      <ImageContainer />
      <ButtonContainer />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] relative shrink-0 w-[83.473px]" data-name="Logo">
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

export default function PaymentSuccessful() {
  return (
    <div className="bg-[#f9f9f9] relative min-h-screen h-screen overflow-hidden" data-name="Payment successful">
      <FormContainer />
      <UserNameContainer />
    </div>
  );
}