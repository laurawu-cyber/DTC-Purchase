import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-k0wlzkbgjd";
import svgPathsDropdown from "./svg-dwpprsfly5";
const imgImage6344892 = "https://www.figma.com/api/mcp/asset/7420cfad-1d9d-43e2-9d7a-53ae2092dfd8";
const img22 = "https://www.figma.com/api/mcp/asset/63691854-303b-4613-9a72-c6c8097bd97d";
import NavigationSidebar from "./NavigationSidebar";
import { imgVector } from "./svg-iyoow.tsx";
import TeamPlanAnnual from "./TeamPlanAnnual";
import SettingsModal from "./Frame1739333168";

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

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function UserNameContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User Name Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative size-full">
          <Logo />
          <Spacer />
        </div>
      </div>
    </div>
  );
}

function UserAvatarContainer() {
  return (
    <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[14px] text-white top-[12px] whitespace-nowrap">
        <p className="leading-[22px]">T</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[22px]">Testing Account</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7a7a7a] text-[12px]">
        <p className="leading-[18px]">Personal workspace</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer({ onChevronClick }: { onChevronClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
      <Frame78 />
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px] cursor-pointer" data-name="list_chevron" onClick={onChevronClick}>
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

function UserDetailsContainer({ onChevronClick }: { onChevronClick?: () => void }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="User Details Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer onChevronClick={onChevronClick} />
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
            <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
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

function UserContainer({ onChevronClick }: { onChevronClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer onChevronClick={onChevronClick} />
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

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Folders</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #7A7A7A)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Content />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
            <div className="absolute inset-[23.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
                <path d={svgPaths.pcd34700} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Comes from</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #7A7A7A)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[87px] items-center p-[8px] relative w-full">
          <Content1 />
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
          <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
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
        <Row />
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
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_delete">
                <div className="absolute flex inset-[15.38%_16.99%_13.33%_16.96%] items-center justify-center">
                  <div className="flex-none h-[14.261px] rotate-180 w-[13.209px]">
                    <div className="relative size-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.209 14.2607">
                        <path d={svgPaths.p39870cc0} fill="var(--fill-0, black)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Trash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <Row1 />
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

function UserInfo({ onChevronClick }: { onChevronClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Info">
      <UserContainer onChevronClick={onChevronClick} />
      <NavigationContainer />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="chevron_right">
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

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Plaud Community</p>
      <Frame18 />
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

function Spacer1() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon() {
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

function DownloadInfo() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
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
      <p className="leading-[22px] overflow-hidden relative shrink-0 text-[#7a7a7a] text-[14px] text-ellipsis w-full">Applicable for multi-project progress review meetings, focusing on assessing current progress, bottlenecks, and planning.</p>
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

function Spacer2() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon1() {
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

function DownloadInfo1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo1 />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
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

function Spacer3() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Footer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Footer">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">{`Plaud.ai `}</p>
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

function Spacer4() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-full" data-name=".Spacer" />;
}

function Icon2() {
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

function DownloadInfo2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Download Info">
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">35k</p>
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Footer">
      <DownloadInfo2 />
      <div className="bg-[#7a7a7a] rounded-[5px] shrink-0 size-[3px]" />
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#7a7a7a] text-[12px] text-ellipsis whitespace-nowrap">Betty Morgen</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[952px]">
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head />
          <Spacer1 />
          <Footer />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head1 />
          <Spacer2 />
          <Footer1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head2 />
          <Spacer3 />
          <Footer2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-white h-[220px] max-w-[464px] min-w-[320px] relative rounded-[5px] shrink-0 w-[320px]" data-name="Template Card">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <Head3 />
          <Spacer4 />
          <Footer3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50vw-363px)] top-[830px] w-[952px]">
      <Frame30 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="chevron_right">
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

function Frame37() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Recent files</p>
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
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

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame27 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
      <Frame29 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame58() {
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

function Frame59() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame32 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame28 />
      <Frame59 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame10 />
      <Frame60 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] py-[8px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
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

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
      <Frame34 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame63() {
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame41 />
      <Frame63 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame40 />
      <Frame62 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame11 />
      <Frame61 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] py-[8px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
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

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">Everything you should know before visiting Japan</p>
      <Frame43 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame66() {
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

function Frame65() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame46 />
      <Frame66 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame45 />
      <Frame65 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame13 />
      <Frame64 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] py-[8px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
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

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
      <Frame48 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame69() {
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

function Frame68() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame51 />
      <Frame69 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame50 />
      <Frame68 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame14 />
      <Frame67 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] py-[8px] relative w-full">
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
    </div>
  );
}

function Frame72() {
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

function Frame71() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Frame54 />
      <Frame72 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
      <Frame53 />
      <Frame71 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
      <Frame15 />
      <Frame70 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="min-h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] py-[8px] relative w-full">
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame7 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame8 />
          </div>
        </div>
      </div>
      <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
        <div className="flex flex-col justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
            <Frame9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[calc(50vw-363px)] top-[50px] w-[952px]">
      <Frame37 />
      <Frame35 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[16px]" data-name="chevron_right">
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

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">{`What's new`}</p>
      <Frame20 />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-42.34%] left-[calc(50%+0.5px)] top-[-62.1%] w-[596px]">
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

function Frame73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-[270px]">Introducing Plaud 3.0</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-[270px]">All-in-one upgrade with smarter AI, a smoother UI, and a more seamless workflow.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[122px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]">
      <Frame73 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="absolute h-[32.595px] left-[16px] top-[84px] w-[263.5px]">
      <div className="absolute inset-[0_-2.21%_-4.31%_-0.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.652 34">
          <g id="Frame 1739333204">
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

function Frame24() {
  return (
    <div className="absolute bg-white h-[248px] left-0 overflow-clip rounded-[5px] top-0 w-[301px]">
      <div className="absolute h-[240px] left-0 top-0 w-[301px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.800000011920929\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-6.1233e-14 -16.036 19.876 1.2613e-13 150.5 138.55)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <Group />
      <Frame16 />
      <Frame74 />
      <Component512Light />
    </div>
  );
}

function TimeType() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Time & Type">
      <div className="overflow-clip relative shrink-0 size-[13.333px]" data-name="icon_flag">
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

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[9.15px] top-[23.79px] w-[196.667px]" data-name="Text">
      <TimeType />
    </div>
  );
}

function Frame56() {
  return (
    <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]">
      <Text4 />
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

function Frame57() {
  return (
    <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]">
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

function Frame75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[269px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">3 AI Superpowers. One Plaud.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Multimodal input. Multi-dimensional summaries. Ask Plaud anytime.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[120px] left-1/2 overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[301px]">
      <Frame75 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[247px] left-[325px] overflow-clip rounded-[5px] top-0 w-[301px]">
      <div className="absolute h-[248px] left-0 top-0 w-[301px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 248\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.585 25.746 -0.093017 151 153.31)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute flex h-[81.249px] items-center justify-center left-[20px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-15 flex-none">
          <Frame56 />
        </div>
      </div>
      <div className="absolute flex h-[81.249px] items-center justify-center left-[179px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="-rotate-165 -scale-y-100 flex-none">
          <Frame57 />
        </div>
      </div>
      <div className="absolute h-[301px] left-[79px] top-[15px] w-[146px]" data-name="image 6344892">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.92%] left-0 max-w-none top-[0.2%] w-full" src={imgImage6344892} />
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">Note Pro: Precision at Your Fingertips</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Meet Note Pro—see more, mark key moments, and capture everything with ease.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[13.25px] bg-[rgba(249,249,249,0.8)] bottom-[7px] h-[113px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]">
      <Frame76 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[247px] left-[651px] overflow-clip rounded-[5px] top-0 w-[301px]">
      <div className="absolute h-[247px] left-0 top-0 w-[301px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 247\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.515 25.746 -0.092642 151 152.69)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="-translate-x-1/2 absolute h-[314px] left-[calc(50%-3px)] top-[17px] w-[217px]" data-name="图层 2 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-95 pointer-events-none size-full" src={img22} />
      </div>
      <div className="absolute bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[125px] left-0 to-[rgba(249,249,249,0)] top-[122px] w-[302px]" />
      <div className="absolute flex h-[149px] items-center justify-center left-[153px] top-[15px] w-[129px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[129px] opacity-18 to-[rgba(249,249,249,0)] w-[149px]" />
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame77() {
  return <div className="absolute content-stretch flex gap-[2px] h-[32px] items-start left-[16px] top-[16px] w-[104px]" />;
}

function Frame22() {
  return (
    <div className="h-[220px] overflow-hidden relative shrink-0 w-full">
      <Frame24 />
      <Frame26 />
      <Frame25 />
      <Frame77 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[315px] items-start left-[calc(50vw-363px)] top-[481px] w-[952px]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

// Dropdown Menu Components
function UserAvatarContainerDropdown() {
  return (
    <div className="bg-black overflow-clip relative rounded-[6.667px] shrink-0 size-[32px]" data-name="User Avatar Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[10.67px] not-italic text-[18.667px] text-white top-[16.33px] whitespace-nowrap">
        <p className="leading-[29.333px]">T</p>
      </div>
    </div>
  );
}

function DropMenu({ onMembershipCenterClick }: { onMembershipCenterClick?: () => void }) {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[16px] overflow-clip py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] top-[106px] w-[260px] z-50" data-name="drop_menu">
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[260px]">
        {/* User Details */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[260px]">
          <UserAvatarContainerDropdown />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0">
              <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black w-[152px]">
                <p className="leading-[22px]">Testing Account</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">
                <p className="leading-[18px]">Personal workspace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Button */}
        <div className="content-stretch flex items-start pb-[8px] px-[16px] relative shrink-0 w-[260px]">
          <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[95px] cursor-pointer hover:bg-gray-50" onClick={handleSettingsClick}>
            <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
              <div className="relative shrink-0 size-[20px]">
                <div className="absolute inset-[15%]">
                  <div className="absolute inset-[-3.57%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <g>
                        <path clipRule="evenodd" d={svgPathsDropdown.p3501500} fillRule="evenodd" stroke="var(--stroke-0, black)" />
                        <path d={svgPathsDropdown.p335f2b80} stroke="var(--stroke-0, black)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-center whitespace-nowrap">Settings</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
          </div>
        </div>

        {/* Divider */}
        <div className="flex h-[0.877px] items-center justify-center relative shrink-0 w-[227.998px]">
          <div className="flex-none rotate-[-0.22deg]">
            <div className="h-0 relative w-[228px]">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
                  <path d="M0 0.5H228" stroke="var(--stroke-0, #EBEBEB)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
          <div className="relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#7a7a7a] text-[12px]">testing@acme.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal workspace item */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
          <div className="relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[24px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[14px] text-white top-[12px] whitespace-nowrap">
                    <p className="leading-[22px]">T</p>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Personal workspace</p>
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
                    <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
                      <div className="relative size-full">
                        <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                            <path d={svgPathsDropdown.p2a028c80} stroke="var(--stroke-0, black)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Team workspace */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
          <div className="relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                <div className="relative shrink-0 size-[24px]">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2">
                    <div className="absolute inset-[19.95%_16.69%_19.99%_19.95%]">
                      <div className="absolute inset-[-4.16%_0_-4.16%_-3.95%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1723 13.0117">
                          <path d={svgPathsDropdown.p434cc00} stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Create a Team workspace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0 relative shrink-0 w-[228px]">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
              <path d="M0 0.5H228" stroke="var(--stroke-0, #EBEBEB)" />
            </svg>
          </div>
        </div>

        {/* Bottom menu items */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
            {/* Membership Center */}
            <div className="relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#f5f5f5]" onClick={onMembershipCenterClick}>
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute h-[13.771px] left-[3.67px] top-[2.56px] w-[12.667px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.667 13.7715">
                        <path d={svgPathsDropdown.p38e0fd00} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Membership Center</p>
                </div>
              </div>
            </div>

            {/* Help Center */}
            <div className="bg-white relative rounded-[5px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[17.46%_18.41%_17.49%_15.89%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1396 13.0117">
                        <path d={svgPathsDropdown.p4d8080} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Help Center</p>
                </div>
              </div>
            </div>

            {/* Download */}
            <div className="bg-white relative rounded-[5px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[12.74%_21.49%_13.27%_21.48%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4053 14.7979">
                        <path d={svgPathsDropdown.p37300680} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Download</p>
                </div>
              </div>
            </div>

            {/* Sign out */}
            <div className="bg-white relative rounded-[5px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                  <div className="relative shrink-0 size-[20px]">
                    <div className="absolute inset-[17.5%_17.5%_17.5%_15%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                        <path d={svgPathsDropdown.p25919d00} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Sign out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PersonalWorkspace() {
  const [showTeamPlan, setShowTeamPlan] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleCreateTeam = () => {
    setShowTeamPlan(true);
  };

  const handleCloseModal = () => {
    setShowTeamPlan(false);
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  return (
    <div className="bg-white overflow-hidden relative size-full" data-name="Personal workspace">
      <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[900px] items-start left-0 overflow-visible top-0 w-[220px]">
        <NavigationSidebar 
          key="personal-workspace-nav"
          currentPage="home" 
          onCreateTeamClick={handleCreateTeam} 
        />
      </div>
      

      <Frame38 />
      <Frame36 />
      <Frame55 />
      
      {/* Plan Selection Modal */}
      {showTeamPlan && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <TeamPlanAnnual onClose={handleCloseModal} />
        </div>
      )}
      
      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={handleCloseSettings}>
          <div className="w-[1196px] h-[829px] max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <SettingsModal onClose={handleCloseSettings} />
          </div>
        </div>
      )}
    </div>
  );
}