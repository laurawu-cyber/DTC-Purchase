const features = [
  { label: 'Perfect memory', active: false },
  { label: 'Instant follow-ups', active: false },
  {
    label: 'Better decision-making',
    active: true,
    description: 'Dig deeper on discussions, takeaways, and decisions.',
  },
]

export default function AiAssistantSection() {
  return (
    <section className="bg-white px-36 py-28">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Left placeholder card */}
        <div className="flex items-center justify-center h-[408px]">
          <div className="w-full aspect-[544/408] bg-[rgba(240,237,235,0.3)] border border-[#e3e3e3] rounded-xl flex items-center justify-center">
            <p className="text-[#666] text-sm">Ask Plaud chat</p>
          </div>
        </div>

        {/* Right text */}
        <div className="flex flex-col gap-[14.8px]">
          <p className="text-[#666] text-[11.8px] font-bold tracking-[1.2px] uppercase">
            -- Ask Plaud
          </p>
          <h2 className="font-bold text-[#141414] text-[42.1px] tracking-[-1.1px] leading-[50.6px]">
            Give every teammate<br />an AI assistant
          </h2>
          <p className="text-[#666] text-[14.9px] leading-[26px] max-w-[512px]">
            Search across conversations, draft follow-ups, and reflect on any meeting.
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
                  <p className="text-[#666] text-[13.2px] leading-[22.75px]">{f.description}</p>
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
      </div>
    </section>
  )
}
