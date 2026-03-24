const companies = ['Acme Corp', 'TechStart', 'Quantum AI', 'Pinnacle', 'Horizon', 'Summit Co']

export default function TrustBar() {
  return (
    <section className="bg-[rgba(242,239,235,0.5)] border-y border-[#e3e3e3] px-[120px] py-[49px]">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-8">
        <p className="text-center text-[#666] text-[12.9px] font-medium">
          Trusted by 1.5M+ professionals and growing teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {companies.map((name) => (
            <span
              key={name}
              className="font-bold text-[15.6px] text-[rgba(102,102,102,0.6)] tracking-[-0.4px]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
