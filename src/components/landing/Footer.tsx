const nav = [
  {
    heading: 'Product',
    links: ['Note Pro', 'Note', 'NotePin S', 'Pricing'],
  },
  {
    heading: 'Features',
    links: ['AI Summaries', 'Executive Agent', 'Desktop App', 'Integrations'],
  },
  {
    heading: 'For Business',
    links: ['Plaud for Teams', 'Plaud for Developers', 'For Distributors'],
  },
  {
    heading: 'Resources',
    links: ['Blog', 'Case Studies', 'Support', 'Security & Trust'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e3e3e3] px-[120px] pt-px">
      <div className="mx-auto max-w-[1200px] px-6 py-14 flex flex-col gap-12">
        {/* Top grid */}
        <div className="grid grid-cols-5 gap-8">
          {/* Brand col */}
          <div className="col-span-1 flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-[#141414] rounded-[4px] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="font-bold text-[#141414] text-[17.6px] tracking-[-0.45px]">Plaud</span>
            </div>
            <p className="text-[#666] text-[13px] leading-5 max-w-[205px]">
              AI-powered conversation intelligence for modern teams.
            </p>
          </div>

          {/* Nav cols */}
          {nav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="font-bold text-[#141414] text-[13.6px] leading-5">{col.heading}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#666] text-[13.3px] leading-5 hover:text-[#141414]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e3e3e3] pt-[33px] flex items-center justify-between">
          <p className="text-[#666] text-[11.1px] leading-4">© 2026 Plaud. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-[#666] text-[11.4px] leading-4 hover:text-[#141414]">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
