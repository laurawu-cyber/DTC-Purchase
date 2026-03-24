import { icons, images } from '../assets'

type NavItemProps = {
  icon: string
  label: string
  active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-2 rounded-[5px] cursor-pointer w-full ${
        active ? 'bg-[#ebebeb]' : 'hover:bg-[#f0f0f0]'
      }`}
    >
      <img src={icon} alt="" className="w-5 h-5 shrink-0" />
      <span className={`text-[14px] leading-[22px] ${active ? 'text-black' : 'text-[#3d3d3d]'}`}>
        {label}
      </span>
    </div>
  )
}

type FolderItemProps = {
  label: string
  count: number
  active?: boolean
  icon?: string
}

function FolderItem({ label, count, active, icon }: FolderItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-2 rounded-[5px] cursor-pointer w-full ${
        active ? 'bg-[#ebebeb]' : 'hover:bg-[#f0f0f0]'
      }`}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5 shrink-0" />}
      <span className="text-[14px] leading-[22px] text-[#3d3d3d] min-w-0 flex-1">
        {label}
        <span className="text-[#a3a3a3]"> ({count})</span>
      </span>
    </div>
  )
}

// Matches Figma node 347-9256: 8×4px chevron arrow centered in a 20×20 overflow-clipped container
function ListChevron() {
  return (
    <div className="overflow-clip relative rounded-[5px] size-5 shrink-0">
      <div className="absolute w-[8px] h-[4px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute" style={{ inset: '-8.84% -4.42% -17.68% -4.42%' }}>
          <img alt="" className="block max-w-none w-full h-full" src={icons.chevronDown} />
        </div>
      </div>
    </div>
  )
}

type SectionHeaderProps = {
  icon?: string
  label: string
  medium?: boolean
}

function SectionHeader({ icon, label, medium }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 py-2 rounded-[5px] w-full">
      <div className="flex items-center gap-1">
        {icon && <img src={icon} alt="" className="w-5 h-5 shrink-0" />}
        <span
          className={`text-[14px] leading-[22px] whitespace-nowrap ${
            medium ? 'font-medium text-black' : 'text-[#7a7a7a]'
          }`}
        >
          {label}
        </span>
        <ListChevron />
      </div>
      <img src={icons.addXs} alt="" className="w-4 h-4 shrink-0 opacity-60 cursor-pointer" />
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-[220px] shrink-0 bg-[#f9f9f9] flex flex-col h-screen overflow-hidden border-r border-[#ebebeb]">
      {/* User Info */}
      <div className="flex flex-col pb-2 px-2">
        {/* Logo */}
        <div className="flex items-center px-2 h-12">
          <img src={images.logo} alt="PLAUD" style={{ width: '83.473px', height: '14px' }} />
        </div>

        {/* User Details */}
        <div className="flex items-center gap-2 px-2 py-3 rounded-[5px] cursor-pointer hover:bg-[#f0f0f0]">
          <div className="w-6 h-6 rounded-[3.75px] bg-[#ebebeb] flex items-center justify-center shrink-0">
            <img src={icons.userAvatar} alt="" className="w-[15px] h-[15px]" />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[14px] leading-[22px] text-black whitespace-nowrap">
              Testing Account
            </span>
            <span className="text-[13px] leading-[18px] text-[#757575]">Testing Account's Workspace</span>
          </div>
          <ListChevron />
        </div>

        {/* Add audio button */}
        <div className="px-2 pt-1 pb-2">
          <button className="w-full flex items-center justify-center gap-1 h-[38px] border border-[#cccccc] rounded-[5px] text-[14px] text-black hover:bg-[#f5f5f5] transition-colors">
            <img src={icons.addAudio} alt="" className="w-5 h-5 shrink-0" />
            Add audio
          </button>
        </div>

        <div className="border-t border-[#ebebeb] mx-2" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto pl-2 pt-4 pb-[360px]">
        {/* Primary nav */}
        <div className="flex flex-col gap-1 w-[204px]">
          <NavItem icon={icons.home} label="Home" active />
          <NavItem icon={icons.search} label="Search" />
          <NavItem icon={icons.templateCommunity} label="Template Community" />
          <NavItem icon={icons.explore} label="Explore" />
        </div>

        <div className="border-t border-[#ebebeb] w-[204px]" />

        {/* Private section */}
        <div className="flex flex-col gap-1 w-[204px]">
          <SectionHeader icon={icons.lock} label="Private" medium />
          <FolderItem icon={icons.folder} label="All files" count={0} />
          <FolderItem icon={icons.unfiled} label="Unfiled" count={0} />
        </div>

        {/* Comes from section */}
        <div className="flex flex-col gap-1 w-[204px]">
          <SectionHeader label="Comes from" />
          <FolderItem label="Note" count={0} />
          <FolderItem label="Call" count={0} />
          <FolderItem label="Import" count={0} />
        </div>

        <div className="border-t border-[#ebebeb] w-[204px]" />

        {/* Team space section */}
        <div className="flex flex-col gap-1 w-[204px]">
          <SectionHeader icon={icons.teamSpace} label="Team space" medium />
          <FolderItem icon={icons.folder} label="Work meetings" count={7} active />
          <FolderItem icon={icons.folder} label="Project Plan" count={21} />
          <FolderItem icon={icons.folder} label="China Sales" count={56} />
          <FolderItem icon={icons.folder} label="Traning" count={56} />
        </div>
      </div>

      {/* Bottom Plan Info Card */}
      <div className="absolute bottom-0 left-0 w-[220px] bg-[#f9f9f9] flex flex-col gap-3 px-2 pt-2 pb-6">
        <div className="border-t border-[#ebebeb] w-[195px] mx-auto" />
        <div
          className="w-[204px] rounded-[5px] border border-[#ebebeb] overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 81% 100%, rgba(201,255,202,1) 0%, rgba(183,243,250,1) 20%, rgba(208,234,246,1) 40%, rgba(239,245,255,1) 60%, rgba(255,255,255,1) 100%)',
          }}
        >
          {/* Already have a device */}
          <div className="px-[10px] pt-[11px] pb-3">
            <p className="text-[12px] font-medium leading-[18px] text-[#3d3d3d] mb-1">
              Already have a device?
            </p>
            <p className="text-[12px] leading-[18px] text-[#7a7a7a]">
              Scan to download the Plaud App and add your device.
            </p>
            <div className="mt-3">
              <img src={images.qrCode} alt="QR Code" className="w-[60px] h-[60px] object-cover" />
            </div>
          </div>

          <div className="border-t border-[#ebebeb] mx-[10px]" />

          {/* Don't have a device yet */}
          <div className="px-[11px] pt-3 pb-3">
            <p className="text-[12px] font-medium leading-[18px] text-[#3d3d3d] mb-1">
              Don't have a device yet?
            </p>
            <p className="text-[12px] leading-[18px] text-[#7a7a7a]">
              Explore devices that unlock Plaud's full capabilities.
            </p>
            <div className="mt-2 mb-3">
              <img src={images.products} alt="Plaud devices" className="w-[100px] h-[71px] object-cover" />
            </div>
            <button className="w-[182px] h-8 flex items-center justify-center gap-2 bg-white border border-[#adadad] rounded-[5px] text-[12px] text-black hover:bg-gray-50 transition-colors">
              Get Plaud devices
              <img src={icons.arrowExternal} alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
