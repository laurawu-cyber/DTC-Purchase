import { useSearchParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-oc2vne8jms";
const img3 = "https://www.figma.com/api/mcp/asset/3b75c872-27b4-4a2e-af81-1ca343e5f172";

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

function Image({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Image">
      <div className="h-[120px] relative shrink-0 w-[225.705px] bg-[#f9f9f9]" data-name="鼓掌 3">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-multiply object-cover pointer-events-none size-full" src={img3} />
      </div>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center w-[min-content]">{`Welcome to ${workspaceName} workspace`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-[min-content]">Workspaces are separate. Files, recordings, and data in this workspace won't appear in others.</p>
    </div>
  );
}

function ButtonContainer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  const seats = searchParams.get('seats') || '2';
  const emailCount = searchParams.get('emailCount') || '0';
  const emailsParam = searchParams.get('emails') || '[]';

  const handleCompleteSetup = () => {
    navigate(`/home-team?workspaceName=${encodeURIComponent(workspaceName)}&seats=${seats}&pendingInvites=${emailCount}&emails=${encodeURIComponent(emailsParam)}`, {
      state: { from: '/welcome' }
    });
  };
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button Container">
      <button 
        onClick={handleCompleteSetup}
        className="bg-black h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full hover:bg-gray-800" 
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Complete setup</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function FormContainer({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 overflow-clip top-[80px] w-[464px]" data-name="Form Container">
      <Image workspaceName={workspaceName} />
      <ButtonContainer />
    </div>
  );
}

function Content({ emailCount }: { emailCount: number }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="relative shrink-0 size-[20px]" data-name="icon_checkmark_circle">
        <div className="absolute bottom-[16.67%] left-[3.33px] top-[16.67%] w-[13.333px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p32b7f9f0} fill="var(--fill-0, #1A8038)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] max-w-[360px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        {emailCount} {emailCount === 1 ? 'invitation' : 'invitations'} sent
      </p>
    </div>
  );
}

function Toast({ emailCount, visible }: { emailCount: number; visible: boolean }) {
  if (!visible) return null;
  
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[38px] left-[calc(50%+0.5px)] max-w-[420px] rounded-[5px] top-[59.87px] animate-fade-in" data-name="Message">
      <div className="content-stretch flex h-full items-center max-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <div className="absolute bg-[#4cbf69] inset-0 opacity-16" data-name="Background" />
        <Content emailCount={emailCount} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.08)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function WelcomePage() {
  const [searchParams] = useSearchParams();
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  const emailCount = parseInt(searchParams.get('emailCount') || '0');
  const showToast = searchParams.get('showToast') === 'true';
  
  const [toastVisible, setToastVisible] = useState(showToast);

  useEffect(() => {
    if (showToast && emailCount > 0) {
      setToastVisible(true);
      // Hide toast after 5 seconds
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast, emailCount]);

  return (
    <div className="bg-[#f9f9f9] relative min-h-screen" data-name="Welcome">
      <FormContainer workspaceName={workspaceName} />
      <UserNameContainer />
      <Toast emailCount={emailCount} visible={toastVisible} />
    </div>
  );
}