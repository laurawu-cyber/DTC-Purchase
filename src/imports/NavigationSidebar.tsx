import svgPaths from "./svg-qxmhuioark";
import { useState } from "react";
import { useNavigate } from "react-router";
import DropMenu from "./DropMenu";

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

function Frame() {
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

function UserNameAndStatusContainer({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
      <Frame />
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
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

function UserDetailsContainer({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#ebebeb]"
      data-name="User Details Container"
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer isOpen={isOpen} />
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

function UserContainer({ isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, teamWorkspaces, onTeamWorkspaceClick }: { isDropdownOpen: boolean; onDropdownToggle: () => void; onMembershipClick: () => void; onCreateTeamClick: () => void; teamWorkspaces?: string[]; onTeamWorkspaceClick?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer isOpen={isDropdownOpen} onClick={onDropdownToggle} />
      {isDropdownOpen && (
        <div className="absolute left-[8px] top-[100px] z-50 shadow-[2px_0_8px_rgba(0,0,0,0.1)]">
          <DropMenu onMembershipClick={onMembershipClick} onCreateTeamClick={onCreateTeamClick} teamWorkspaces={teamWorkspaces} onTeamWorkspaceClick={onTeamWorkspaceClick} />
        </div>
      )}
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

function NavigationItemsContainer({ onHomeClick, showHomeShadow }: { onHomeClick?: () => void; showHomeShadow?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Items Container">
      <div
        className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px] cursor-pointer hover:bg-[#ebebeb]"
        data-name="Navigation Menu One"
        onClick={onHomeClick}
      >
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
      {showHomeShadow && (
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
              <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #D6D6D6)" />
            </svg>
          </div>
        </div>
      )}
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

function NavigationContainer({ onHomeClick, showHomeShadow }: { onHomeClick?: () => void; showHomeShadow?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] pt-[16px] relative shrink-0 w-[220px]" data-name="Navigation Container">
      <NavigationItemsContainer onHomeClick={onHomeClick} showHomeShadow={showHomeShadow} />
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

function UserInfo({ onHomeClick, showHomeShadow, isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, teamWorkspaces, onTeamWorkspaceClick }: {
  onHomeClick?: () => void;
  showHomeShadow?: boolean;
  isDropdownOpen: boolean;
  onDropdownToggle: () => void;
  onMembershipClick: () => void;
  onCreateTeamClick: () => void;
  teamWorkspaces?: string[];
  onTeamWorkspaceClick?: (name: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Info">
      <UserContainer isDropdownOpen={isDropdownOpen} onDropdownToggle={onDropdownToggle} onMembershipClick={onMembershipClick} onCreateTeamClick={onCreateTeamClick} teamWorkspaces={teamWorkspaces} onTeamWorkspaceClick={onTeamWorkspaceClick} />
      <NavigationContainer onHomeClick={onHomeClick} showHomeShadow={showHomeShadow} />
    </div>
  );
}

export default function NavigationSidebar({ currentPage, onCreateTeamClick: externalCreateTeamClick }: { currentPage?: 'home' | 'membership-center'; onCreateTeamClick?: () => void }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Read all team workspaces created during the purchase flow
  const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  const teamWorkspaces: string[] = raw.map((item: any) => typeof item === 'string' ? item : item.name);

  const handleHomeClick = () => {
    navigate('/personal-workspace');
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMembershipClick = () => {
    setIsDropdownOpen(false);
    navigate('/membership-center');
  };

  const handleCreateTeamClick = () => {
    setIsDropdownOpen(false);
    if (externalCreateTeamClick) {
      externalCreateTeamClick();
    } else {
      navigate('/plan-selection?view=teams');
    }
  };

  const handleTeamWorkspaceClick = (name: string) => {
    setIsDropdownOpen(false);
    navigate(`/home-team?workspaceName=${encodeURIComponent(name)}`);
  };

  const showHomeShadow = currentPage === 'home';

  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start relative min-h-screen w-full" data-name="Navigation Sidebar">
      <UserInfo
        onHomeClick={handleHomeClick}
        showHomeShadow={showHomeShadow}
        isDropdownOpen={isDropdownOpen}
        onDropdownToggle={handleDropdownToggle}
        onMembershipClick={handleMembershipClick}
        onCreateTeamClick={handleCreateTeamClick}
        teamWorkspaces={teamWorkspaces.length > 0 ? teamWorkspaces : undefined}
        onTeamWorkspaceClick={handleTeamWorkspaceClick}
      />
    </div>
  );
}