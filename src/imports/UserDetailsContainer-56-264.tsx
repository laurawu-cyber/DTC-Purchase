import svgPaths from "./svg-1ldqwhilk8";

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

export default function UserDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative rounded-[5px] size-full" data-name="User Details Container">
      <UserAvatarContainer />
      <UserNameAndStatusContainer />
    </div>
  );
}