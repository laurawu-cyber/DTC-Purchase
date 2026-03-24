const testimonials = [
  {
    initials: 'SC',
    quote: '"Plaud has completely transformed how our sales team captures client conversations. We never miss a detail anymore."',
    name: 'Sarah Chen',
    title: 'VP of Sales, Acme Corp',
  },
  {
    initials: 'JR',
    quote: '"The AI summaries save me at least an hour every day. I can focus on my clients instead of scrambling to take notes."',
    name: 'James Rodriguez',
    title: 'Senior Consultant, Strategy Partners',
  },
  {
    initials: 'EN',
    quote: '"Having a centralized workspace for all our team conversations has been a game-changer for collaboration and accountability."',
    name: 'Emily Nakamura',
    title: 'Operations Director, Greenfield Services',
  },
  {
    initials: 'MO',
    quote: '"We rolled out Plaud across our entire firm in a week. The admin controls and compliance features made it an easy decision."',
    name: 'Michael Osei',
    title: 'Managing Partner, Osei & Associates LLP',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-[120px] py-28">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-[15px] text-center">
          <h2 className="font-bold text-[#141414] text-[35px] tracking-[-0.9px] leading-10">
            What our customers say
          </h2>
          <p className="text-[#666] text-[16.9px] leading-[29.25px] max-w-[576px] text-center">
            Teams of all sizes trust Plaud to capture, organize, and share their most important conversations.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-[#e3e3e3] rounded-xl p-[33px] flex flex-col justify-between">
              <blockquote className="text-[#141414] text-[14.9px] leading-[26px]">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0edeb] flex items-center justify-center shrink-0">
                  <span className="font-bold text-[#666] text-[13.9px]">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#141414] text-[13.7px] leading-5">{t.name}</p>
                  <p className="text-[#666] text-[13.3px] leading-5">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
