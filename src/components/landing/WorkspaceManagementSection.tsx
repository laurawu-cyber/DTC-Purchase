import { landingAssets } from './landingAssets'

const cards = [
  {
    icon: landingAssets.billingIcon,
    title: 'Centralized Billing',
    description: 'Manage Plaud subscriptions for your entire team in one place.',
    screen: landingAssets.billingScreen,
  },
  {
    icon: landingAssets.usersIcon,
    title: 'User & Device Management',
    description: 'Easily invite users and assign or re-assign seats & devices within the Team workspace.',
    screen: landingAssets.userMgmtScreen,
  },
]

export default function WorkspaceManagementSection() {
  return (
    <section id="scale" className="bg-white px-[120px] py-28">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col gap-14">
        <div className="flex flex-col items-center gap-[15px] text-center">
          <h2 className="font-bold text-[#141414] text-[34.5px] tracking-[-0.9px] leading-10">
            Centralized workspace management
          </h2>
          <p className="text-[#666] text-[17px] leading-[29.25px] max-w-[576px] text-center">
            Plaud Team enables you to easily manage billing, users, and devices across your team
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[#e3e3e3] rounded-xl overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="border-b border-[#e3e3e3] overflow-hidden">
                <img src={card.screen} alt={card.title} className="w-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <img src={card.icon} alt="" className="w-4 h-4" />
                  <h3 className="font-bold text-[#141414] text-[15.6px] leading-6">{card.title}</h3>
                </div>
                <p className="text-[#666] text-[13.1px] leading-[22.75px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
