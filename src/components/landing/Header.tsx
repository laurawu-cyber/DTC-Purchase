import { landingAssets } from './landingAssets'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-[4px] bg-[rgba(255,255,255,0.8)] border-b border-[rgba(227,227,227,0.6)] w-full">
      <div className="mx-auto max-w-[1200px] h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 bg-[#141414] rounded-[4px] flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-xs leading-none">P</span>
          </div>
          <span className="font-bold text-[#141414] text-[17.6px] tracking-[-0.45px]">Plaud</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {['Shop', 'Features'].map((item) => (
            <button key={item} className="flex items-center gap-1 px-3 py-2 rounded text-[#666] text-[13.3px] font-medium hover:bg-gray-50">
              {item}
              <img src={landingAssets.navArrow} alt="" className="w-3.5 h-3.5" />
            </button>
          ))}
          <a href="#" className="px-3 py-2 rounded text-[#666] text-[13px] font-medium hover:bg-gray-50">Pricing</a>
          {['For Business', 'Resources'].map((item) => (
            <button key={item} className="flex items-center gap-1 px-3 py-2 rounded text-[#666] text-[13.3px] font-medium hover:bg-gray-50">
              {item}
              <img src={landingAssets.navArrow} alt="" className="w-3.5 h-3.5" />
            </button>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-[#666] text-[13.2px] font-medium">Log in</a>
          <button className="bg-[#141414] text-white text-[13.3px] font-medium px-5 h-9 rounded-full hover:bg-[#333]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
