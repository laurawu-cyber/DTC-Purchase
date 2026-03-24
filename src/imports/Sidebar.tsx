import svgPaths from "./svg-p964zuo8d7";
import { useState } from "react";
import { useNavigate } from "react-router";
import DropMenu from "./DropMenu-71-674";

const imgGetDeviceQR = "https://www.figma.com/api/mcp/asset/d34a4cd1-8575-4d2c-a7f1-fa6da3b9682f";
const imgGetDeviceProducts = "https://www.figma.com/api/mcp/asset/1edf6bd5-f219-4a95-9a07-4fbf9b27e4da";
const imgGetDeviceArrow = "https://www.figma.com/api/mcp/asset/6e2cc44c-271f-4855-bf52-d399ac940c9c";

function GetDeviceCard() {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 left-0 flex flex-col gap-[12px] items-start pb-[24px] pt-[8px] px-[8px]" data-name="Plan Info Container">
      <div className="bg-[#ebebeb] h-px shrink-0 w-[195px]" />
      <div
        className="border border-[#ebebeb] border-solid h-[332px] overflow-clip relative rounded-[5px] shrink-0 w-[204px]"
        style={{ background: 'radial-gradient(ellipse at 82% 100%, #c9ffca 0%, #b7f3fa 20%, #d0eaf6 39%, #eff5ff 60%, #ffffff 100%)' }}
      >
        {/* Already have a device */}
        <div className="absolute flex flex-col gap-[4px] items-start left-[10px] top-[11px] w-[181px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] w-full">Already have a device?</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Scan to download the Plaud App and add your device.</p>
        </div>
        {/* QR code */}
        <div className="absolute left-[7px] size-[60px] top-[79px]">
          <img alt="QR code" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGetDeviceQR} />
        </div>
        {/* Divider */}
        <div className="absolute bg-[#ebebeb] h-px left-[10px] top-[149px] w-[181px]" />
        {/* Don't have a device */}
        <div className="absolute flex flex-col gap-[4px] items-start left-[11px] top-[159px] w-[180px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#3d3d3d] text-[12px] w-full">Don't have a device yet?</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Explore devices that unlock Plaud's full capabilities.</p>
        </div>
        {/* Product images */}
        <div className="absolute h-[71px] left-[11px] top-[217px] w-[100px]">
          <img alt="Plaud devices" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGetDeviceProducts} />
        </div>
        {/* Get Plaud devices button */}
        <div className="absolute bg-white border border-[#adadad] border-solid flex gap-[8px] h-[32px] items-center justify-center left-[11px] overflow-clip px-[16px] py-[8px] rounded-[5px] top-[287px] cursor-pointer hover:bg-[#f9f9f9]">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px relative text-black text-[12px] text-center whitespace-nowrap">Get Plaud devices</p>
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="absolute inset-[28.8%_28.36%_28.18%_28.03%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgGetDeviceArrow} />
            </div>
          </div>
        </div>
      </div>
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

function UserInfoTextContainer({ displayName, workspaceName }: { displayName: string; workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col font-[‘Inter:Regular’,sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 w-[115px]" data-name="User Info Text Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[22px]">{displayName}</p>
      </div>
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#757575] text-[13px] w-[min-content]">
        <p className="leading-[18px]">{workspaceName}</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer({ displayName, workspaceName }: { displayName: string; workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="User Name and Status Container">
      <UserInfoTextContainer displayName={displayName} workspaceName={workspaceName} />
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

function UserDetailsContainer({ isOpen, onClick, displayName, workspaceName }: { isOpen: boolean; onClick: () => void; displayName: string; workspaceName: string }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full hover:bg-[#ebebeb] cursor-pointer" data-name="User Details Container" onClick={onClick}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer displayName={displayName} workspaceName={workspaceName} />
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

function UserContainer({ isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, displayName, workspaceName }: { isDropdownOpen: boolean; onDropdownToggle: () => void; onMembershipClick: () => void; onCreateTeamClick: () => void; displayName: string; workspaceName: string }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer isOpen={isDropdownOpen} onClick={onDropdownToggle} displayName={displayName} workspaceName={workspaceName} />
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

function Frame() {
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Frame2 />
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

function Frame1() {
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Component 12">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[87px] items-center p-[8px] relative w-full">
          <Frame3 />
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

function UserInfo({ isDropdownOpen, onDropdownToggle, onMembershipClick, onCreateTeamClick, onPersonalWorkspaceClick, onSettingsClick, onInviteMemberClick, displayName, workspaceName, otherTeamWorkspaces, onOtherTeamClick }: { isDropdownOpen: boolean; onDropdownToggle: () => void; onMembershipClick: () => void; onCreateTeamClick: () => void; onPersonalWorkspaceClick: () => void; onSettingsClick: () => void; onInviteMemberClick?: () => void; displayName: string; workspaceName: string; otherTeamWorkspaces?: string[]; onOtherTeamClick?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-visible" data-name="User Info">
      <UserContainer isDropdownOpen={isDropdownOpen} onDropdownToggle={onDropdownToggle} onMembershipClick={onMembershipClick} onCreateTeamClick={onCreateTeamClick} displayName={displayName} workspaceName={workspaceName} />
      {isDropdownOpen && (
        <div className="absolute left-[8px] top-[100px] z-50">
          <DropMenu onSettingsClick={onSettingsClick} onInviteMemberClick={onInviteMemberClick} onPersonalWorkspaceClick={onPersonalWorkspaceClick} onCreateTeamClick={onCreateTeamClick} workspaceName={workspaceName} otherTeamWorkspaces={otherTeamWorkspaces} onOtherTeamClick={onOtherTeamClick} />
        </div>
      )}
      <NavigationContainer />
    </div>
  );
}

export default function Sidebar({ onSettingsClick, onInviteMemberClick, onCreateTeamClick: externalCreateTeamClick, displayName, workspaceName }: { onSettingsClick?: () => void; onInviteMemberClick?: () => void; onCreateTeamClick?: () => void; displayName?: string; workspaceName?: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Read all team workspaces and filter out the current one
  const rawWorkspaces = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  const allTeamWorkspaces: string[] = rawWorkspaces.map((item: any) => typeof item === 'string' ? item : item.name);
  const currentName = workspaceName || 'Team workspace';
  const otherTeamWorkspaces = allTeamWorkspaces.filter(n => n !== currentName);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMembershipClick = () => {
    setIsDropdownOpen(false);
    navigate('/membership');
  };

  const handlePersonalWorkspaceClick = () => {
    setIsDropdownOpen(false);
    navigate('/personal-workspace');
  };

  const handleCreateTeamClick = () => {
    setIsDropdownOpen(false);
    if (externalCreateTeamClick) {
      externalCreateTeamClick();
    } else {
      navigate('/plan-selection');
    }
  };

  const handleSettingsClick = () => {
    setIsDropdownOpen(false);
    if (onSettingsClick) {
      onSettingsClick();
    }
  };

  const handleOtherTeamClick = (name: string) => {
    setIsDropdownOpen(false);
    navigate(`/home-team?workspaceName=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start relative size-full overflow-visible" data-name="Sidebar">
      <UserInfo
        isDropdownOpen={isDropdownOpen}
        onDropdownToggle={handleDropdownToggle}
        onMembershipClick={handleMembershipClick}
        onCreateTeamClick={handleCreateTeamClick}
        onPersonalWorkspaceClick={handlePersonalWorkspaceClick}
        onSettingsClick={handleSettingsClick}
        onInviteMemberClick={onInviteMemberClick}
        displayName={displayName || 'Testing Account'}
        workspaceName={currentName}
        otherTeamWorkspaces={otherTeamWorkspaces.length > 0 ? otherTeamWorkspaces : undefined}
        onOtherTeamClick={handleOtherTeamClick}
      />
      <GetDeviceCard />
    </div>
  );
}