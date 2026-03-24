import svgPaths from "./svg-gvrxqmiuaz";
import { imgVector } from "./svg-d3qyo";
import { useSearchParams, useNavigate } from "react-router";
import { useState } from "react";
import svgPathsInput from "./svg-6iixvjs74d";

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

function FormHeader({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[464px]" data-name="Form Header">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black text-center w-full">{`Invite members to ${workspaceName}`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#757575] text-[16px] w-full">Invite up to 5 members to get started. You can invite more later in Settings.</p>
    </div>
  );
}

function InviteHeader({ availableSeats }: { availableSeats: number }) {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Invite Header">
      <p className="leading-[24px] relative shrink-0 text-[#3d3d3d] text-[16px]">Invite members</p>
      <p className="leading-[18px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[12px] text-ellipsis">{availableSeats} {availableSeats === 1 ? 'seat' : 'seats'} available</p>
    </div>
  );
}

function Button() {
  return (
    null
  );
}

function InviteSection({ availableSeats, emailInputs, setEmailInputs, emailPills, setEmailPills }: { 
  availableSeats: number;
  emailInputs: { [key: number]: string };
  setEmailInputs: React.Dispatch<React.SetStateAction<{ [key: number]: string }>>;
  emailPills: { [key: number]: string[] };
  setEmailPills: React.Dispatch<React.SetStateAction<{ [key: number]: string[] }>>;
}) {
  const handleInputChange = (index: number, value: string) => {
    setEmailInputs(prev => ({ ...prev, [index]: value }));
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && emailInputs[index]?.trim()) {
      e.preventDefault();
      const email = emailInputs[index].trim();
      if (email) {
        setEmailPills(prev => ({
          ...prev,
          [index]: [...(prev[index] || []), email]
        }));
        setEmailInputs(prev => ({ ...prev, [index]: '' }));
      }
    }
  };

  const removeEmail = (fieldIndex: number, emailIndex: number) => {
    setEmailPills(prev => ({
      ...prev,
      [fieldIndex]: prev[fieldIndex].filter((_, i) => i !== emailIndex)
    }));
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[464px]" data-name="Invite Section">
      <InviteHeader availableSeats={availableSeats} />
      {Array.from({ length: availableSeats }).map((_, index) => {
        const pills = emailPills[index] || [];
        const hasEmail = pills.length > 0;
        
        return (
          <div key={index} className="content-stretch flex flex-col gap-[4px] items-start justify-center min-w-[220px] overflow-clip relative shrink-0 w-full" data-name="Text Field">
            {hasEmail ? (
              // Show email pill when email is entered
              <div className="bg-white h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
                <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
                      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap">
                        <p className="leading-[22px] overflow-hidden">{pills[0]}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeEmail(index, 0)}
                      className="overflow-clip relative shrink-0 size-[20px] hover:opacity-70" 
                      data-name="icon_xmark_for_panel"
                    >
                      <div className="absolute inset-[27.61%]" data-name="Vector">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.95703 8.95703">
                          <path d={svgPathsInput.p1537be00} fill="var(--fill-0, #7A7A7A)" id="Vector" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Show input field when no email
              <div className="bg-white h-[40px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
                <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[24px] min-w-px relative" data-name="Content">
                      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-ellipsis whitespace-nowrap">
                        <input
                          type="email"
                          value={emailInputs[index] || ''}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          placeholder="Email"
                          className="leading-[22px] overflow-hidden outline-none bg-transparent w-full placeholder:text-[#a3a3a3] text-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <Button />
    </div>
  );
}

function FormHeader1({ hasEmails, workspaceName, emailPills, emailInputs, seats }: {
  hasEmails: boolean;
  workspaceName: string;
  emailPills: { [key: number]: string[] };
  emailInputs: { [key: number]: string };
  seats: number;
}) {
  const navigate = useNavigate();

  const handleSendInvites = () => {
    const pillEmails = Object.values(emailPills).flat();
    const typedEmails = Object.values(emailInputs).map(v => v.trim()).filter(v => v.includes('@'));
    const allEmails = [...new Set([...pillEmails, ...typedEmails])];
    const emailCount = allEmails.length;
    navigate(`/welcome?workspaceName=${encodeURIComponent(workspaceName)}&emailCount=${emailCount}&emails=${encodeURIComponent(JSON.stringify(allEmails))}&showToast=true&seats=${seats}`);
  };

  const handleSkip = () => {
    navigate(`/welcome?workspaceName=${encodeURIComponent(workspaceName)}&emailCount=0&showToast=false&seats=${seats}`);
  };
  
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[464px]" data-name="Form Header">
      {hasEmails ? (
        <button 
          onClick={handleSendInvites}
          className="bg-black h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full hover:bg-gray-800" 
          data-name="Button"
        >
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Send invites</p>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-[#c2c2c2] h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] text-center whitespace-nowrap">Send invites</p>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={handleSkip}
        className="h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-full hover:bg-gray-100" 
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[24px] py-[8px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Skip for now</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function FormContainer({ availableSeats, workspaceName, seats }: { availableSeats: number; workspaceName: string; seats: number }) {
  const [emailInputs, setEmailInputs] = useState<{ [key: number]: string }>({});
  const [emailPills, setEmailPills] = useState<{ [key: number]: string[] }>({});

  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-start left-1/2 overflow-clip top-[79.87px]" data-name="Form Container">
      <FormHeader workspaceName={workspaceName} />
      <InviteSection
        availableSeats={availableSeats}
        emailInputs={emailInputs}
        setEmailInputs={setEmailInputs}
        emailPills={emailPills}
        setEmailPills={setEmailPills}
      />
      <FormHeader1
        hasEmails={
          Object.values(emailPills).some(pills => pills.length > 0) ||
          Object.values(emailInputs).some(v => v.trim().includes('@'))
        }
        workspaceName={workspaceName}
        emailPills={emailPills}
        emailInputs={emailInputs}
        seats={seats}
      />
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

export default function Invite() {
  const [searchParams] = useSearchParams();
  const seats = parseInt(searchParams.get('seats') || '2');
  const workspaceName = searchParams.get('workspaceName') || 'Team workspace';
  const availableSeats = Math.max(1, seats - 1); // seats - 1, with minimum of 1
  
  return (
    <div className="bg-[#f9f9f9] relative min-h-screen h-screen overflow-hidden" data-name="Invite">
      <FormContainer availableSeats={availableSeats} workspaceName={workspaceName} seats={seats} />
      <UserNameContainer />
    </div>
  );
}