import svgPaths from "./svg-w72f7ysekr";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const imgXIconModal = "https://www.figma.com/api/mcp/asset/93d23498-3f9b-414e-9c0b-5933cfdd7d48";
const imgCheckCircle = "https://www.figma.com/api/mcp/asset/830a2baf-aadc-45ab-aef1-2e994002b78c";
const imgIconLogout = "https://www.figma.com/api/mcp/asset/12d97b68-3d50-4c47-b98e-f291851a0451";
const imgIconRename = "https://www.figma.com/api/mcp/asset/3bb3054d-ec4d-4fb3-a61b-d715165ec6c6";
const imgIconEyeClose = "https://www.figma.com/api/mcp/asset/5a4130bd-8b5f-40cf-b4a7-59f156660275";
const imgSectionDivider = "https://www.figma.com/api/mcp/asset/03c52489-59dd-4122-9cf2-6888ea34e55a";

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

function Frame68() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Account</p>
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function Frame9({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component />
        <div
          className={`${activeTab === 'account' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('account')}
        >
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

function Frame11({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] w-[129px]">Workspace</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame69 />
        </div>
      </div>
    </div>
  );
}

function Frame10({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component1 />
        <div
          className={`${activeTab === 'personalization' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('personalization')}
        >
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

function Frame14({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Workspace management</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame70 />
        </div>
      </div>
    </div>
  );
}

function Frame13({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
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
        <div
          className={`${activeTab === 'members' ? 'bg-[#ebebeb]' : ''} cursor-pointer relative rounded-[5px] shrink-0 w-full hover:bg-[#f0f0f0]`}
          data-name="Navigation Menu One"
          onClick={() => setActiveTab('members')}
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_user_2">
                <div className="absolute inset-[15.83%_14.17%_20%_14.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3337 12.0003">
                    <path d={svgPaths.p21dfc800} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                  </svg>
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

function Frame12({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Component2 />
      <Frame13 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 13">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <Frame71 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <Component3 />
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

function UserInfo({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[23px] h-[767px] items-center relative shrink-0 w-full" data-name="User Info">
      <Frame11 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame14 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame12 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame15 />
    </div>
  );
}

function Frame1({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col gap-[8px] h-[1005px] items-start left-0 top-0 w-[220px]">
      <Frame2 />
      <UserInfo activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Frame77({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="bg-white h-[829px] relative rounded-[5px] shrink-0 w-[1196px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame1 activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function SettingsSidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[1428px] items-start left-[-1px] overflow-clip top-[-1px] w-[220px]">
      <Frame77 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Email address</p>
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

function Icon() {
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
      <Icon />
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

function Frame18() {
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
      <Frame18 />
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

function Frame21() {
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
      <Frame21 />
    </div>
  );
}

function Frame20() {
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

function Frame23() {
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
      <Frame23 />
    </div>
  );
}

function Frame22() {
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

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame24() {
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

function Frame26() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Based</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Login with</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Last active</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-end overflow-clip py-[4px] relative shrink-0 w-[218px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Manage</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame26 />
      <Frame27 />
      <Frame79 />
      <Frame80 />
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

function Frame33() {
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

function Frame34() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[288px]">
        <p className="leading-[22px]">2025-08-29 12:11:35</p>
      </div>
    </div>
  );
}

function Frame38() {
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

function Frame30() {
  return (
    <div className="content-stretch flex h-[38px] items-center relative shrink-0 w-[860px]">
      <Frame33 />
      <Frame34 />
      <Frame37 />
      <Frame38 />
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">Plaud Web2</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">Chrome</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2025-08-29 12:10:35</p>
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

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center overflow-clip py-[4px] relative shrink-0 w-[214px]">
      <PlaudWeb2 />
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

function Frame50() {
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

function Frame51() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-[248px]">
        <p className="leading-[22px]">iPhone 13</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex h-[36px] items-center overflow-clip pr-[12px] py-[4px] relative shrink-0 w-[214px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">
        <p className="leading-[22px]">2024-03-11 12:11:35</p>
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[860px]">
      <Frame30 />
      <Frame39 />
      <Frame44 />
      <Frame49 />
      <Frame54 />
      <Frame59 />
    </div>
  );
}

function Frame73() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pr-[16px] relative shrink-0 w-[872px]">
      <Frame25 />
      <Frame28 />
      <Frame73 />
    </div>
  );
}

function Frame75() {
  return <div className="absolute bg-[#c2c2c2] h-[228px] right-[4px] rounded-[5px] top-[60px] w-[4px]" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[316px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame24 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame65() {
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

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] relative shrink-0 w-[872px]">
      <Frame65 />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
        <Container6 />
      </div>
    </div>
  );
}

function Frame67() {
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

function Frame78() {
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

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame67 />
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[118px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center">Sign out</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <Frame78 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[872px]">
      <Container2 />
      <Frame29 />
      <Frame36 />
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start mx-auto mt-[62px] pb-[40px] w-[872px]">
      <Frame35 />
      <Frame32 />
    </div>
  );
}

function Frame72() {
  return <div className="absolute bg-[#c2c2c2] h-[352px] right-[4px] rounded-[5px] top-[4px] w-[4px]" />;
}

function EditNameModal({ editValue, onChange, onSave, onCancel }: { editValue: string; onChange: (v: string) => void; onSave: () => void; onCancel: () => void }) {
  return (
    <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-end p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <div className="border-[#ebebeb] border-b border-solid content-stretch flex flex-col h-[45px] items-start pb-[16px] relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[18px] text-black">Edit name</p>
        </div>
      </div>
      <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center overflow-clip pl-[16px] relative rounded-[5px] shrink-0 w-full">
        <input
          autoFocus
          className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-black outline-none bg-transparent pr-[16px]"
          value={editValue}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onSave(); if (e.key === 'Escape') onCancel(); }}
        />
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
        <button
          onClick={onCancel}
          className="bg-white border border-[#adadad] border-solid content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]"
        >
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-black whitespace-nowrap">Cancel</p>
        </button>
        <button
          onClick={onSave}
          className="bg-black content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-gray-800"
        >
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Save</p>
        </button>
      </div>
      <button
        onClick={onCancel}
        className="absolute cursor-pointer flex items-center justify-center p-[4px] right-[23px] rounded-[5px] top-[23px] hover:bg-[#f0f0f0]"
      >
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]">
            <div className="absolute inset-[-3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
                <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function LeaveWorkspaceModal({ onClose }: { onClose: () => void }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const workspaceName = searchParams.get('workspaceName') || localStorage.getItem('workspaceName') || 'Team workspace';
  const [emailInput, setEmailInput] = useState('');
  const [leftWorkspace, setLeftWorkspace] = useState(false);
  const [remainingWorkspaces, setRemainingWorkspaces] = useState<{name: string, createdAt: string}[]>([]);
  const canLeave = emailInput === 'testing@acme.com';

  const readWorkspaces = (): {name: string, createdAt: string}[] => {
    const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
    return raw.map((item: any) => typeof item === 'string' ? { name: item, createdAt: '' } : item);
  };

  const handleLeave = () => {
    if (!canLeave) return;
    const all = readWorkspaces();
    const remaining = all.filter(w => w.name !== workspaceName);
    setRemainingWorkspaces(remaining);
    setLeftWorkspace(true);
  };

  const handleContinue = () => {
    const all = readWorkspaces();
    const remaining = all.filter(w => w.name !== workspaceName);
    localStorage.setItem('teamWorkspaces', JSON.stringify(remaining));
    if (localStorage.getItem('workspaceName') === workspaceName) {
      localStorage.setItem('workspaceName', remaining[0]?.name || '');
    }
    onClose();
    if (remaining.length === 0) {
      navigate('/sign-in-general');
    } else if (remaining.length === 1) {
      navigate(`/home-team?workspaceName=${encodeURIComponent(remaining[0].name)}`);
    } else {
      navigate('/choose-workspace');
    }
  };

  if (leftWorkspace) {
    return (
      <div className="fixed inset-0 z-[600] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white border border-[#ebebeb] border-solid flex flex-col gap-[16px] items-center p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[60px]">
                <img alt="success" className="absolute block max-w-none size-full" src={imgCheckCircle} />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] relative shrink-0 text-black text-[24px] whitespace-nowrap">Left workspace</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#3d3d3d] text-[14px] text-center w-[min-content]">{`You've left ${workspaceName}. You no longer have access to it.`}</p>
              </div>
            </div>
            <button
              onClick={handleContinue}
              className="bg-black flex flex-1 gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-gray-900"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">Continue</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
      <div className="bg-white border border-[#ebebeb] border-solid flex flex-col gap-[16px] h-[533px] items-end p-[24px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[708px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="border-b border-[#ebebeb] content-stretch flex items-center justify-between pb-[16px] relative shrink-0 w-full" style={{ height: '45px' }}>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-black text-[18px] whitespace-nowrap">{`Leave the ${workspaceName} workspace`}</p>
            <div className="cursor-pointer overflow-clip relative shrink-0 size-[20px] hover:opacity-70" onClick={onClose}>
              <div className="absolute inset-[27.61%]">
                <img alt="close" className="absolute block max-w-none size-full" src={imgXIconModal} />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" style={{ height: '247px' }}>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-[#3d3d3d] mb-0">Leaving this workspace is permanent. If you leave:</p>
            <p className="leading-[22px] text-[18px] mb-0">&nbsp;</p>
            <ol className="mb-0 ps-[20px] list-decimal">
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">You'll immediately lose access to this workspace.</span></li>
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">Private meetings you captured but never shared will become inaccessible, even if you're invited back later.</span></li>
              <li className="mb-0"><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">Content you shared with other members will remain accessible to them.</span></li>
              <li><span className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#f14349] text-[14px]">Your Plaud devices will be removed from this workspace, and their workspace data will be cleared.</span></li>
            </ol>
            <p className="leading-[22px] text-[14px] mb-0">&nbsp;</p>
            <p className="font-['Inter:Regular',sans-serif] leading-[22px] text-[14px] text-black">Before leaving, share or export any content you want to keep.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">Enter your email to confirm</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="border border-[#ebebeb] border-solid flex h-[40px] items-center overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email"
              className="w-full text-[14px] font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black placeholder:text-[#a3a3a3] bg-transparent outline-none"
            />
          </div>
        </div>
        <div className="absolute bottom-[23px] right-[24px] flex gap-[12px] items-center">
          <button
            onClick={onClose}
            className="bg-white border border-[#adadad] border-solid flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-[150px] cursor-pointer hover:bg-gray-50"
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-black text-[14px] text-center whitespace-nowrap">Cancel</p>
          </button>
          <button
            disabled={!canLeave}
            onClick={handleLeave}
            className={`bg-[#ff503f] flex gap-[8px] h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 transition-opacity ${canLeave ? 'opacity-100 cursor-pointer hover:bg-[#e8472f]' : 'opacity-60 cursor-not-allowed'}`}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-white text-[14px] text-center whitespace-nowrap">Leave workspace</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonalizationContent({ displayName, avatarLetter, onEditNameClick }: { displayName: string; avatarLetter: string; onEditNameClick: () => void }) {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start ml-[52px] mt-[62px] pb-[56px] w-[872px]">
      {/* Personal info */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Personal info</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex gap-[32px] items-end relative shrink-0">
          <div className="bg-[#ebebeb] relative rounded-[750px] shrink-0 size-[72px]">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[26.25px] text-[33px] text-black top-[36px] whitespace-nowrap">
              <p className="leading-[39px]">{avatarLetter}</p>
            </div>
            <div className="absolute bottom-0 flex items-center justify-center right-0 size-[20px]">
              <img alt="" className="block size-[20px]" src={imgIconLogout} style={{ transform: 'rotate(90deg)' }} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
            <div className="content-stretch flex h-[32px] items-center overflow-clip px-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Display Name</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px]">{displayName}</p>
              <img alt="" className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70" src={imgIconRename} onClick={onEditNameClick} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Profile</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Profile details can only be edited in the Plaud mobile app.</p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">Profile</p>
          <div className="border border-[#ebebeb] border-solid content-stretch flex flex-col items-center py-[8px] relative rounded-[5px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[8px] relative shrink-0 w-full">
              {[['Job function', 'Not set'], ['Industry', 'Not set'], ['Seniority', 'Not set'], ['Primary use case', 'Not set']].map(([label, value]) => (
                <div key={label} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px]">{label}</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">More about you</p>
          <div className="border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[8px] h-[84px] items-start justify-center overflow-clip px-[12px] py-[14px] relative rounded-[5px] shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">Edit in the Plaud mobile app</p>
          </div>
        </div>
      </div>

      {/* Personalization */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Personalization</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          {/* Content focus */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">Content focus</p>
            <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center justify-between min-w-[212px] overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">What should Plaud emphasize in its outputs?</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full flex-wrap">
              {['Key points & conclusions', 'Risks & open questions', 'Think through work problems'].map((label) => (
                <div key={label} className="bg-white border border-[#ebebeb] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Custom instructions */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">Custom instructions</p>
            <div className="border border-[#ebebeb] border-solid content-stretch flex h-[40px] items-center justify-between min-w-[212px] overflow-clip pl-[16px] pr-[16px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px]">How should Plaud format and explain information?</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full flex-wrap">
              {['Be concise', 'Highlight key takeaways', 'Use practical examples', 'List action items clearly'].map((label) => (
                <div key={label} className="bg-white border border-[#ebebeb] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[#f9f9f9]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black text-center whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Memory */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Memory</p>
          <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">Use saved memory</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">Let Plaud save and use memory to personalize responses. <span className="underline">Learn more</span></p>
          </div>
          <div className="bg-black h-[20px] overflow-clip relative rounded-[5px] w-[36px]">
            <div className="-translate-y-1/2 absolute bg-white right-[2px] rounded-[3px] size-[16px] top-1/2" />
          </div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black">Manage memory</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">Review and manage what Plaud remembers about you.</p>
          </div>
          <div className="bg-white border border-[#adadad] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[100px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[100px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px] text-center">Manage</p>
          </div>
        </div>
      </div>

      {/* Leave workspace */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div onClick={() => setShowLeaveModal(true)} className="border border-[#ff503f] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[131px] cursor-pointer hover:bg-[rgba(255,80,63,0.05)]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#ff503f] text-[12px] text-center">Leave workspace</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">You'll be removed from this workspace and lose access to its content and data.</p>
        </div>
      </div>
      {showLeaveModal && <LeaveWorkspaceModal onClose={() => setShowLeaveModal(false)} />}
    </div>
  );
}

const imgDeleteIcon = "https://www.figma.com/api/mcp/asset/211c784e-6964-4cdb-8fd1-e2b9a0fd2e7f";
const imgRetryIcon = "https://www.figma.com/api/mcp/asset/46de2eed-f047-4b48-9f1d-3e796f44c29d";
const imgCancelInviteIcon = "https://www.figma.com/api/mcp/asset/acfc1927-0d4d-428b-8851-77dafc03d6cf";

function RemoveMemberModal({ name, email, workspaceName, onCancel, onRemove }: { name: string; email: string; workspaceName: string; onCancel: () => void; onRemove: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div className="bg-white flex flex-col gap-[16px] items-end p-[24px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px] relative" onClick={(e) => e.stopPropagation()}>
        {/* Title */}
        <div className="border-[#ebebeb] border-b border-solid flex flex-col items-start pb-[16px] relative shrink-0 w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-black">Remove member?</p>
        </div>
        {/* Body */}
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] w-full">
          {name} ({email}) will lose access to {workspaceName} and its content.
        </p>
        {/* Buttons */}
        <div className="flex gap-[16px] items-center justify-end">
          <button onClick={onCancel} className="bg-white border border-[#adadad] border-solid flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#f5f5f5]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-black text-center whitespace-nowrap">Cancel</p>
          </button>
          <button onClick={onRemove} className="bg-[#ff503f] flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#e8432f]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-white text-center whitespace-nowrap">Remove</p>
          </button>
        </div>
        {/* X close */}
        <button onClick={onCancel} className="absolute right-[24px] top-[24px] flex items-center justify-center p-[4px] rounded-[5px] hover:bg-[#f5f5f5]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5l-10 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

function ChangeRoleModal({ name, email, newRole, onCancel, onConfirm }: { name: string; email: string; newRole: 'Member' | 'Admin'; onCancel: () => void; onConfirm: () => void }) {
  const isAdmin = newRole === 'Admin';
  return (
    <div className="fixed inset-0 z-[300] bg-black/40 flex items-center justify-center" onClick={onCancel}>
      <div className="bg-white flex flex-col gap-[16px] items-end p-[24px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[416px] relative" onClick={e => e.stopPropagation()}>
        <div className="border-[#ebebeb] border-b border-solid flex flex-col items-start pb-[16px] relative shrink-0 w-full" style={{ height: '45px' }}>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] text-[18px] text-black">{isAdmin ? 'Make admin?' : 'Change to member?'}</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d] w-full">
          {isAdmin
            ? `${name} (${email}) will be able to manage members, billing, or workspace settings.`
            : `${name} (${email}) will no longer be able to manage members, billing, or workspace settings.`}
        </p>
        <div className="flex gap-[16px] items-center justify-end">
          <button onClick={onCancel} className="bg-white border border-[#adadad] border-solid flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-[#f5f5f5]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-black text-center whitespace-nowrap">Cancel</p>
          </button>
          <button onClick={onConfirm} className="bg-black flex h-[40px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] rounded-[5px] cursor-pointer hover:bg-gray-900">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-white text-center whitespace-nowrap">Confirm</p>
          </button>
        </div>
        <button onClick={onCancel} className="absolute right-[24px] top-[24px] flex items-center justify-center p-[4px] rounded-[5px] hover:bg-[#f5f5f5]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5l-10 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

function MembersRolesContent({ onInviteMembersClick, pendingInvites = 0, invitedMembers = [], workspaceName = 'Team workspace' }: { onInviteMembersClick?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; workspaceName?: string }) {
  const [memberTab, setMemberTab] = useState<'all' | 'active' | 'pending'>('all');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState<string | null>(null);
  const [memberRoles, setMemberRoles] = useState<{ [email: string]: 'Member' | 'Admin' }>(() => {
    const init: { [email: string]: 'Member' | 'Admin' } = { 'testing@acme.com': 'Admin' };
    invitedMembers.forEach(m => { init[m.email] = m.role; });
    return init;
  });
  const [roleChangeTarget, setRoleChangeTarget] = useState<{ email: string; name: string; newRole: 'Member' | 'Admin' } | null>(null);
  const [removeMemberTarget, setRemoveMemberTarget] = useState<{ name: string; email: string } | null>(null);
  const [removedEmails, setRemovedEmails] = useState<Set<string>>(new Set());
  const [inviteActionToast, setInviteActionToast] = useState<{ type: 'resent' | 'canceled'; email: string } | null>(null);

  const activeVisible = !removedEmails.has('testing@acme.com');
  const visiblePending = invitedMembers.filter(m => !removedEmails.has(m.email));
  const activeCount = activeVisible ? 1 : 0;
  const pendingCount = visiblePending.length;

  const showActive = (memberTab === 'all' || memberTab === 'active') && activeVisible;
  const showPending = memberTab === 'all' || memberTab === 'pending';

  const tabClass = (tab: 'all' | 'active' | 'pending') =>
    memberTab === tab
      ? "border-black border-b-2 border-solid content-stretch flex gap-[8px] h-full items-center justify-center py-[8px] relative shrink-0 cursor-pointer"
      : "content-stretch flex gap-[8px] h-full items-center justify-center py-[8px] relative shrink-0 cursor-pointer hover:text-black";
  const tabTextClass = (tab: 'all' | 'active' | 'pending') =>
    memberTab === tab
      ? "font-['Inter:Semibold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-black text-[14px] whitespace-nowrap"
      : "font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap";

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start mx-auto mt-[54px] pb-[56px] w-[872px]" onClick={() => { setOpenDropdown(null); setRoleDropdownOpen(null); }}>
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">{`Members & roles`}</p>
        <div onClick={onInviteMembersClick} className="bg-black content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[100px] overflow-clip px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[120px] cursor-pointer hover:bg-gray-800">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-center text-white">Invite members</p>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none size-full" src={imgSectionDivider} /></div></div>
      {/* Stats */}
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
        <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[5px] shrink-0 w-[424px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Active members</p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] relative shrink-0 text-[20px] text-[#1f1f1f] whitespace-nowrap">{activeCount}</p>
        </div>
        <div className="bg-white border border-[#ebebeb] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative rounded-[5px] shrink-0 w-[424px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Pending invites</p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] relative shrink-0 text-[20px] text-[#1f1f1f] whitespace-nowrap">{pendingCount}</p>
        </div>
      </div>
      {/* Tabs */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="border-[#ebebeb] border-b border-solid content-stretch flex h-[56px] items-center gap-[24px] relative shrink-0 w-full">
          <div className={tabClass('all')} onClick={() => setMemberTab('all')}>
            <p className={tabTextClass('all')}>{`All (${activeCount + pendingCount})`}</p>
          </div>
          <div className={tabClass('active')} onClick={() => setMemberTab('active')}>
            <p className={tabTextClass('active')}>{`Active (${activeCount})`}</p>
          </div>
          <div className={tabClass('pending')} onClick={() => setMemberTab('pending')}>
            <p className={tabTextClass('pending')}>{`Pending (${pendingCount})`}</p>
          </div>
        </div>
        {/* Table */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full pt-[0px]">
          {/* Name column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Name</p>
            </div>
            {/* Active member row */}
            {showActive && (
              <div className="content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative shrink-0 w-full">
                <div className="bg-[#d6d6d6] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shrink-0 size-[24px]">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black text-center">T</p>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black w-[152px]">Testing Account (You)</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">testing@acme.com</p>
                </div>
              </div>
            )}
            {/* Pending invited rows */}
            {showPending && visiblePending.map(({ email }) => {
              const name = email.split('@')[0];
              return (
                <div key={email} className="content-stretch flex gap-[10px] items-center px-[8px] py-[4px] relative shrink-0 w-full">
                  <div className="bg-[#d6d6d6] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[5px] shrink-0 size-[24px]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black text-center">{name.charAt(0).toUpperCase()}</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-black w-[152px] overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">{email}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Role column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[110px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Role</p>
            </div>
            {showActive && (() => {
              const email = 'testing@acme.com';
              const name = 'Testing Account';
              const currentRole = memberRoles[email] || 'Admin';
              const isOpen = roleDropdownOpen === email;
              return (
                <div className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                  <div className="relative" onClick={e => e.stopPropagation()}>
                    <button className={`${isOpen ? 'bg-[#ebebeb]' : 'hover:bg-[#ebebeb]'} content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-pointer`}
                      onClick={() => setRoleDropdownOpen(isOpen ? null : email)}>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-black text-center">{currentRole}</p>
                      <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="black" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-[36px] z-50 bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[248px]">
                        {(['Admin', 'Member'] as const).map(opt => (
                          <div key={opt} className="flex flex-col items-start px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                            onClick={() => { setRoleDropdownOpen(null); if (opt !== currentRole) setRoleChangeTarget({ email, name, newRole: opt }); }}>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="size-[20px] flex items-center justify-center shrink-0">
                                {currentRole === opt && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{opt}</p>
                            </div>
                            <div className="flex items-center pl-[28px] w-full">
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a]">{opt === 'Admin' ? 'Can manage members, billing, and workspace settings.' : 'Can create content and share it with members in the workspace.'}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
            {showPending && visiblePending.map(({ email }) => {
              const name = email.split('@')[0];
              const currentRole = memberRoles[email] || 'Member';
              const isOpen = roleDropdownOpen === email;
              return (
                <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                  <div className="relative" onClick={e => e.stopPropagation()}>
                    <button className={`${isOpen ? 'bg-[#ebebeb]' : 'hover:bg-[#ebebeb]'} content-stretch flex gap-[8px] h-[32px] items-center justify-center min-w-[70px] overflow-clip p-[8px] relative rounded-[5px] shrink-0 cursor-pointer`}
                      onClick={() => setRoleDropdownOpen(isOpen ? null : email)}>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[#3d3d3d] text-center">{currentRole}</p>
                      <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="black" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-[36px] z-50 bg-white border border-[#ebebeb] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[248px]">
                        {(['Admin', 'Member'] as const).map(opt => (
                          <div key={opt} className="flex flex-col items-start px-[16px] py-[8px] cursor-pointer hover:bg-[#f5f5f5]"
                            onClick={() => { setRoleDropdownOpen(null); if (opt !== currentRole) setRoleChangeTarget({ email, name, newRole: opt }); }}>
                            <div className="flex gap-[8px] items-center w-full">
                              <div className="size-[20px] flex items-center justify-center shrink-0">
                                {currentRole === opt && <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4l3 3 7-7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[14px] text-[#3d3d3d]">{opt}</p>
                            </div>
                            <div className="flex items-center pl-[28px] w-full">
                              <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-[#7a7a7a]">{opt === 'Admin' ? 'Can manage members, billing, and workspace settings.' : 'Can create content and share it with members in the workspace.'}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Status column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Status</p>
            </div>
            {showActive && (
              <div className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <div className="bg-[rgba(54,217,108,0.15)] content-stretch flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black whitespace-nowrap">Active</p>
                </div>
              </div>
            )}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <div className="bg-[#ebebeb] content-stretch flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[12px] text-black whitespace-nowrap">Pending</p>
                </div>
              </div>
            ))}
          </div>
          {/* Joined column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Joined</p>
            </div>
            {showActive && (
              <div className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">Feb 24, 2026</p>
              </div>
            )}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">-</p>
              </div>
            ))}
          </div>
          {/* Last active column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
            <div className="content-stretch flex h-[40px] items-center p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Last active</p>
            </div>
            {showActive && (
              <div className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">Today</p>
              </div>
            )}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center p-[8px] relative shrink-0 w-full">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">-</p>
              </div>
            ))}
          </div>
          {/* Actions column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[64px]">
            <div className="content-stretch flex h-[40px] items-center justify-end p-[8px] relative shrink-0 w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Actions</p>
            </div>
            {showActive && (
              <div className="content-stretch flex h-[48px] items-center justify-end p-[8px] relative shrink-0 w-full">
                <div className="relative">
                  <div
                    className="cursor-pointer flex items-center gap-[3px] hover:opacity-70"
                    onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'active' ? null : 'active'); }}
                  >
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                  </div>
                  {openDropdown === 'active' && (
                    <div className="absolute right-0 top-[20px] z-50 bg-white border border-[#ebebeb] border-solid rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]" onClick={(e) => e.stopPropagation()}>
                      <div className="group flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px] mx-[0px]" onClick={() => { setOpenDropdown(null); setRemoveMemberTarget({ name: 'Testing Account', email: 'testing@acme.com' }); }}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                            <div className="flex-none h-[14.26px] rotate-180 w-[13.209px]">
                              <img alt="" className="absolute block max-w-none size-full" src={imgDeleteIcon} />
                            </div>
                          </div>
                        </div>
                        <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] group-hover:text-[#ff503f] text-[14px]">Remove member</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {showPending && visiblePending.map(({ email }) => (
              <div key={email} className="content-stretch flex h-[48px] items-center justify-end p-[8px] relative shrink-0 w-full">
                <div className="relative">
                  <div
                    className="cursor-pointer flex items-center gap-[3px] hover:opacity-70"
                    onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === email ? null : email); }}
                  >
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                    <div className="bg-black rounded-full size-[3px]" />
                  </div>
                  {openDropdown === email && (
                    <div className="absolute right-0 top-[20px] z-50 bg-white border border-[#ebebeb] border-solid rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] py-[8px] w-[200px]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px]"
                        onClick={() => { setOpenDropdown(null); setInviteActionToast({ type: 'resent', email }); setTimeout(() => setInviteActionToast(null), 5000); }}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[13.43%_18.33%_18.33%_18.33%]">
                            <img alt="" className="absolute block max-w-none size-full" src={imgRetryIcon} />
                          </div>
                        </div>
                        <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">Resend invite</p>
                      </div>
                      <div className="flex items-center gap-[8px] px-[16px] py-[8px] cursor-pointer hover:bg-[#ebebeb] rounded-[5px]"
                        onClick={() => { setOpenDropdown(null); setRemovedEmails(prev => new Set([...prev, email])); setInviteActionToast({ type: 'canceled', email }); setTimeout(() => setInviteActionToast(null), 5000); }}>
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                            <div className="flex-none h-[14.26px] rotate-180 w-[13.209px]">
                              <img alt="" className="absolute block max-w-none size-full" src={imgCancelInviteIcon} />
                            </div>
                          </div>
                        </div>
                        <p className="flex-1 font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[#3d3d3d] text-[14px]">Cancel invite</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {removeMemberTarget && (
        <RemoveMemberModal
          name={removeMemberTarget.name}
          email={removeMemberTarget.email}
          workspaceName={workspaceName}
          onCancel={() => setRemoveMemberTarget(null)}
          onRemove={() => {
            setRemovedEmails(prev => new Set([...prev, removeMemberTarget!.email]));
            setRemoveMemberTarget(null);
          }}
        />
      )}
      {roleChangeTarget && (
        <ChangeRoleModal
          name={roleChangeTarget.name}
          email={roleChangeTarget.email}
          newRole={roleChangeTarget.newRole}
          onCancel={() => setRoleChangeTarget(null)}
          onConfirm={() => {
            setMemberRoles(prev => ({ ...prev, [roleChangeTarget!.email]: roleChangeTarget!.newRole }));
            setRoleChangeTarget(null);
          }}
        />
      )}
      {inviteActionToast && (
        <div className="fixed left-1/2 -translate-x-1/2 z-[700]" style={{ top: '60px' }}>
          <div className="flex gap-[24px] items-center overflow-clip px-[16px] py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.08)]"
            style={{ background: 'linear-gradient(90deg, rgba(54,217,108,0.15) 0%, rgba(54,217,108,0.15) 100%), white' }}>
            <div className="flex gap-[8px] items-center shrink-0">
              <svg className="shrink-0 size-[20px]" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#1A8038" strokeWidth="1.5" />
                <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#1A8038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-black text-[14px] whitespace-nowrap">
                {inviteActionToast.type === 'resent' ? `Invite resent to ${inviteActionToast.email}` : 'Invite canceled'}
              </p>
            </div>
            <button onClick={() => setInviteActionToast(null)} className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center hover:opacity-70">
              <svg className="size-[11px]" fill="none" viewBox="0 0 11 11"><path d="M1 1l9 9M10 1l-9 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Frame8({ onClose, activeTab, displayName, avatarLetter, onEditNameClick, onInviteMembersClick, pendingInvites, invitedMembers, workspaceName }: { onClose?: () => void; activeTab: string; displayName: string; avatarLetter: string; onEditNameClick: () => void; onInviteMembersClick?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; workspaceName?: string }) {
  return (
    <div className="absolute bottom-0 left-[219px] right-0 top-0">
      <div className="absolute right-[44px] top-[24px] z-10 overflow-clip size-[20px] cursor-pointer hover:opacity-70" data-name="icon_xmark_for_nav" onClick={onClose}>
        <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]" data-name="Vector">
          <div className="absolute inset-[-3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
              <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        {activeTab === 'account' ? <Frame31 /> : activeTab === 'members' ? <MembersRolesContent onInviteMembersClick={onInviteMembersClick} pendingInvites={pendingInvites} invitedMembers={invitedMembers} workspaceName={workspaceName} /> : <PersonalizationContent displayName={displayName} avatarLetter={avatarLetter} onEditNameClick={onEditNameClick} />}
      </div>
    </div>
  );
}

export default function Frame76({ onClose, onDisplayNameChange, onInviteMembers, pendingInvites, invitedMembers, workspaceName }: { onClose?: () => void; onDisplayNameChange?: (name: string) => void; onInviteMembers?: () => void; pendingInvites?: number; invitedMembers?: { email: string; role: 'Member' | 'Admin' }[]; workspaceName?: string }) {
  const [activeTab, setActiveTab] = useState('account');
  const [displayName, setDisplayName] = useState('Testing Account');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const avatarLetter = displayName.charAt(0).toUpperCase();

  const handleEditNameClick = () => {
    setEditValue(displayName);
    setIsEditing(true);
  };

  const handleSave = () => {
    const trimmed = editValue.trim();
    if (trimmed) {
      setDisplayName(trimmed);
      if (onDisplayNameChange) onDisplayNameChange(trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue('');
  };

  return (
    <div className="bg-white border border-[#ebebeb] border-solid overflow-hidden relative rounded-[5px] size-full">
      <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame8 onClose={onClose} activeTab={activeTab} displayName={displayName} avatarLetter={avatarLetter} onEditNameClick={handleEditNameClick} onInviteMembersClick={onInviteMembers} pendingInvites={pendingInvites} invitedMembers={invitedMembers} workspaceName={workspaceName} />
      {isEditing && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40" onClick={handleCancel}>
          <div onClick={(e) => e.stopPropagation()}>
            <EditNameModal editValue={editValue} onChange={setEditValue} onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}
    </div>
  );
}