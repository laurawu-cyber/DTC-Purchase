const features = [
  { label: 'Perfect notes - automated', active: false },
  { label: 'No details missed', active: false },
  {
    label: 'Uncover deeper insights',
    active: true,
    description: 'Surface overlooked ideas, risks, and patterns across conversations.',
  },
]

export default function ProductivitySection() {
  return (
    <section className="bg-white px-36 py-28">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div className="flex flex-col gap-[14.8px]">
          <p className="text-[#666] text-[11.8px] font-bold tracking-[1.2px] uppercase">
            -- For Your Team
          </p>
          <h2 className="font-bold text-[#141414] text-[42.6px] tracking-[-1.1px] leading-[50.6px]">
            Elevate your<br />team's productivity
          </h2>
          <p className="text-[#666] text-[14.9px] leading-[26px] max-w-[512px]">
            Let your team focus on real work instead of taking notes.
          </p>
          <div className="mt-[25px] flex flex-col">
            {features.map((f) => (
              <div
                key={f.label}
                className={`border-l-2 pl-[22px] py-4 flex flex-col gap-1.5 ${
                  f.active ? 'border-[#141414]' : 'border-[#e3e3e3]'
                }`}
              >
                <p className={`font-bold text-[13.3px] leading-5 ${f.active ? 'text-[#141414]' : 'text-[#666]'}`}>
                  {f.label}
                </p>
                {f.description && (
                  <p className="text-[#666] text-[13.1px] leading-[22.75px]">{f.description}</p>
                )}
                {f.active && (
                  <div className="mt-1 h-0.5 w-full rounded-full bg-[#e3e3e3]">
                    <div className="h-full w-full rounded-full bg-[#141414]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right placeholder card */}
        <div className="flex items-center justify-center h-[408px]">
          <div className="w-full aspect-[544/408] bg-[rgba(240,237,235,0.3)] border border-[#e3e3e3] rounded-xl flex items-center justify-center">
            <p className="text-[#666] text-sm">Insights dashboard</p>
          </div>
        </div>
      </div>
    </section>
  )
}
