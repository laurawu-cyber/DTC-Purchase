import svgPaths from "./svg-ai6p67c772";
import React from "react";

function UserAvatarContainer() {
  return (
    <div className="bg-black overflow-clip relative rounded-[6.667px] shrink-0 size-[32px]" data-name="User Avatar Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[10.67px] not-italic text-[18.667px] text-white top-[16.33px] whitespace-nowrap">
        <p className="leading-[29.333px]">T</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black w-[152px]">
        <p className="leading-[22px]">Testing Account</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Personal workspace</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
      <Frame4 />
    </div>
  );
}

function UserDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[260px]" data-name="User Details Container">
      <UserAvatarContainer />
      <UserNameAndStatusContainer />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start pb-[8px] px-[16px] relative shrink-0 w-[260px]" data-name="action">
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[95px]" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[15%]" data-name="Vector">
              <div className="absolute inset-[-3.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p3501500} fillRule="evenodd" stroke="var(--stroke-0, black)" />
                    <path d={svgPaths.p335f2b80} stroke="var(--stroke-0, black)" />
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
  );
}

function NavigationMenuOne() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#7a7a7a] text-[12px]">testing@acme.com</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <NavigationMenuOne />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="icon_create">
        <div className="absolute inset-[19.95%_16.69%_19.99%_19.95%]" data-name="Vector">
          <div className="absolute inset-[-4.16%_0_-4.16%_-3.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1723 13.0117">
              <path d={svgPaths.p434cc00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationMenuOne2({ onCreateTeamClick }: { onCreateTeamClick?: () => void }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full hover:bg-[#ebebeb] cursor-pointer" data-name="Navigation Menu One" onClick={onCreateTeamClick}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame6 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Create a Team workspace</p>
        </div>
      </div>
    </div>
  );
}

function Frame3({ onCreateTeamClick }: { onCreateTeamClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <NavigationMenuOne2 onCreateTeamClick={onCreateTeamClick} />
    </div>
  );
}

// House icon avatar — matches the team workspace avatar in DropMenu-71-674
function TeamWorkspaceAvatar() {
  return (
    <div className="bg-[#ebebeb] overflow-clip relative rounded-[3.75px] shrink-0 size-[24px]" data-name="User Avatar Container">
      <div className="absolute left-[4.5px] overflow-clip size-[15px] top-[4.5px]" data-name="icon_tem_com_real_estate">
        <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
          <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 8.79899">
              <path d="M4.5 8.79895V5.79899H2.25V8.42399H0.375V4.29899L3.375 2.04899L6.375 4.29899V8.79895M3.375 1.29895V0.375H9.375V8.42399L7.875 8.42395M6.375 2.4239H8.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.75" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamWorkspaceRow({ name, onClick }: { name: string; onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div
        className="relative rounded-[5px] shrink-0 w-full hover:bg-[#f9f9f9] cursor-pointer"
        data-name="Navigation Menu One"
        onClick={onClick}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <TeamWorkspaceAvatar />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px] truncate">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalWorkspaceRow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]">
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[14px] text-white top-[12px] whitespace-nowrap">
                <p className="leading-[22px]">T</p>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Personal workspace</p>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_checkmark">
              <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
                <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                        <path d={svgPaths.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
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
  );
}

function Frame5({ onCreateTeamClick, teamWorkspaces, onTeamWorkspaceClick }: { onCreateTeamClick?: () => void; teamWorkspaces?: string[]; onTeamWorkspaceClick?: (name: string) => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <Frame1 />
        {/* Personal workspace row always shown with checkmark (we're on the personal workspace) */}
        <PersonalWorkspaceRow />
        {/* Each team workspace row (house icon, clickable to switch) */}
        {teamWorkspaces && teamWorkspaces.map((name, i) => (
          <TeamWorkspaceRow key={i} name={name} onClick={() => onTeamWorkspaceClick?.(name)} />
        ))}
        <Frame3 onCreateTeamClick={onCreateTeamClick} />
      </div>
    </div>
  );
}

function Frame({ onMembershipClick }: { onMembershipClick?: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <div className="relative rounded-[5px] shrink-0 w-full hover:bg-[#ebebeb] cursor-pointer" data-name="Navigation Menu One" onClick={onMembershipClick}>
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_subscription">
                <div className="absolute h-[13.771px] left-[3.67px] top-[2.56px] w-[12.667px]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.667 13.7715">
                    <path d={svgPaths.p38e0fd00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Membership Center</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
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
        <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_export">
                <div className="absolute inset-[12.74%_21.49%_13.27%_21.48%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4053 14.7979">
                    <path d={svgPaths.p37300680} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{`Download `}</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_logout">
                <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
                    <path d={svgPaths.p25919d00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Sign out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7({ onMembershipClick, onCreateTeamClick, teamWorkspaces, onTeamWorkspaceClick }: { onMembershipClick?: () => void; onCreateTeamClick?: () => void; teamWorkspaces?: string[]; onTeamWorkspaceClick?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[260px]">
      <UserDetailsContainer />
      <Action />
      <div className="flex h-[0.877px] items-center justify-center relative shrink-0 w-[227.998px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.22deg]">
          <div className="h-0 relative w-[228px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
                <path d="M0 0.5H228" id="Vector 7186" stroke="var(--stroke-0, #EBEBEB)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame5 onCreateTeamClick={onCreateTeamClick} teamWorkspaces={teamWorkspaces} onTeamWorkspaceClick={onTeamWorkspaceClick} />
      <div className="h-0 relative shrink-0 w-[228px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
            <path d="M0 0.5H228" id="Vector 7187" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
      <Frame onMembershipClick={onMembershipClick} />
    </div>
  );
}

export default function DropMenu({ onMembershipClick, onCreateTeamClick, teamWorkspaces, onTeamWorkspaceClick }: { onMembershipClick?: () => void; onCreateTeamClick?: () => void; teamWorkspaces?: string[]; onTeamWorkspaceClick?: (name: string) => void }) {
  return (
    <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] size-full" data-name="drop_menu">
      <Frame7 onMembershipClick={onMembershipClick} onCreateTeamClick={onCreateTeamClick} teamWorkspaces={teamWorkspaces} onTeamWorkspaceClick={onTeamWorkspaceClick} />
    </div>
  );
}