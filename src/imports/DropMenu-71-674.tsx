import svgPaths from "./svg-hrqvu8vev0";

function UserAvatarContainer() {
  return (
    <div className="bg-[#ebebeb] overflow-clip relative rounded-[5px] shrink-0 size-[32px]" data-name="User Avatar Container">
      <div className="absolute left-[6px] overflow-clip size-[20px] top-[6px]" data-name="icon_tem_com_real_estate">
        <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
          <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11.732">
              <path d={svgPaths.pd0de300} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserInfoContainer({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="User Info Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[22px]">Testing Account</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#757575] text-[13px]">
        <p className="leading-[18px]">{workspaceName}</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
      <UserInfoContainer workspaceName={workspaceName} />
    </div>
  );
}

function UserDetailsContainer({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[260px]" data-name="User Details Container">
      <UserAvatarContainer />
      <UserNameAndStatusContainer workspaceName={workspaceName} />
    </div>
  );
}

function Action({ onSettingsClick, onInviteMemberClick }: { onSettingsClick?: () => void; onInviteMemberClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center pb-[8px] relative shrink-0 w-[260px]" data-name="action">
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[95px] cursor-pointer" data-name="Button" onClick={onSettingsClick}>
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
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[13px]">Settings</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 cursor-pointer" data-name="Button" onClick={onInviteMemberClick}>
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
            <div className="absolute inset-[15%_20%_10%_20%]" data-name="Vector">
              <div className="absolute inset-[-3.33%_-4.17%_0_-4.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15.5">
                  <path d={svgPaths.p32dbfa00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[40%] left-3/4 right-[5%] top-[40%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                <path d={svgPaths.p13b5600} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[13px]">Invite member</p>
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

function DropdownMenuItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
      <NavigationMenuOne />
    </div>
  );
}

function UserAvatarContainer1() {
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

function NavigationMenuOne1({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <UserAvatarContainer1 />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">{workspaceName}</p>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark Icon">
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
  );
}

function DropdownMenuItem1({ workspaceName }: { workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
      <NavigationMenuOne1 workspaceName={workspaceName} />
    </div>
  );
}

function CreateTeamIconContainer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Create Team Icon Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="Create Team Icon">
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

function NavigationMenuOne3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#f9f9f9]" data-name="Navigation Menu One" onClick={onClick}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <CreateTeamIconContainer />
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Create a Team workspace</p>
        </div>
      </div>
    </div>
  );
}

function DropdownMenuItem3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
      <NavigationMenuOne3 onClick={onClick} />
    </div>
  );
}

function OtherTeamWorkspaceRow({ name, onClick }: { name: string; onClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
      <div className="relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[#f9f9f9]" onClick={onClick}>
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <UserAvatarContainer1 />
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px] truncate">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownMenuItems({ onCreateTeamClick, workspaceName, otherTeamWorkspaces, onOtherTeamClick }: { onCreateTeamClick?: () => void; workspaceName: string; otherTeamWorkspaces?: string[]; onOtherTeamClick?: (name: string) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Dropdown Menu Items">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <DropdownMenuItem />
        <DropdownMenuItem1 workspaceName={workspaceName} />
        {otherTeamWorkspaces && otherTeamWorkspaces.map((name, i) => (
          <OtherTeamWorkspaceRow key={i} name={name} onClick={() => onOtherTeamClick?.(name)} />
        ))}
        <DropdownMenuItem3 onClick={onCreateTeamClick} />
      </div>
    </div>
  );
}

function DropdownMenuItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dropdown Menu Item">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
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

function DropdownMenuContainer({ onSettingsClick, onInviteMemberClick, onCreateTeamClick, workspaceName, otherTeamWorkspaces, onOtherTeamClick }: { onSettingsClick?: () => void; onInviteMemberClick?: () => void; onCreateTeamClick?: () => void; workspaceName: string; otherTeamWorkspaces?: string[]; onOtherTeamClick?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[260px]" data-name="Dropdown Menu Container">
      <UserDetailsContainer workspaceName={workspaceName} />
      <Action onSettingsClick={onSettingsClick} onInviteMemberClick={onInviteMemberClick} />
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
      <DropdownMenuItems onCreateTeamClick={onCreateTeamClick} workspaceName={workspaceName} otherTeamWorkspaces={otherTeamWorkspaces} onOtherTeamClick={onOtherTeamClick} />
      <div className="h-0 relative shrink-0 w-[228px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
            <path d="M0 0.5H228" id="Vector 7187" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
      <DropdownMenuItem4 />
    </div>
  );
}

export default function DropMenu({ onSettingsClick, onInviteMemberClick, onCreateTeamClick, workspaceName, otherTeamWorkspaces, onOtherTeamClick }: { onSettingsClick?: () => void; onInviteMemberClick?: () => void; onCreateTeamClick?: () => void; workspaceName?: string; otherTeamWorkspaces?: string[]; onOtherTeamClick?: (name: string) => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center py-[8px] relative rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] w-[260px]" data-name="drop_menu">
      <DropdownMenuContainer onSettingsClick={onSettingsClick} onInviteMemberClick={onInviteMemberClick} onCreateTeamClick={onCreateTeamClick} workspaceName={workspaceName || 'Team workspace'} otherTeamWorkspaces={otherTeamWorkspaces} onOtherTeamClick={onOtherTeamClick} />
      <div className="absolute bg-[#ebebeb] content-stretch flex h-[16px] items-center justify-center left-[176px] px-[4px] rounded-[5px] top-[19px]" data-name="Beta">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[13px] whitespace-nowrap">
          <p className="leading-[18px]">Admin</p>
        </div>
      </div>
    </div>
  );
}