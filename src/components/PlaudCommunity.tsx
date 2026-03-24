import { icons } from '../assets'
import ChevronRight from './ChevronRight'

type TemplateCardProps = {
  icon: 'doc' | 'autopilot'
  title: string
  description?: string
  tags?: string[]
  author?: string
  downloads?: string
  authorBadge?: string
}

function DocIcon() {
  return (
    <div className="w-6 h-6 overflow-hidden relative shrink-0">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: `url('${icons.docIcon}')`,
          maskImage: `url('${icons.docIcon}')`,
          WebkitMaskSize: '24px 24px',
          maskSize: '24px 24px',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          background: '#3d3d3d',
        }}
      />
    </div>
  )
}

function AutopilotIcon() {
  return <img src={icons.autopilot} alt="" className="w-6 h-6 shrink-0" />
}

function TemplateCard({
  icon,
  title,
  description,
  tags,
  author,
  downloads,
}: TemplateCardProps) {
  return (
    <div className="flex-1 h-[220px] flex flex-col bg-white border border-[#ebebeb] rounded-[5px] p-4 overflow-hidden hover:shadow-sm transition-shadow cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between h-7 mb-6 shrink-0">
        {icon === 'doc' ? <DocIcon /> : <AutopilotIcon />}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-1 shrink-0">
        <p className="text-[20px] font-normal leading-[30px] text-black truncate">{title}</p>
        {description && (
          <p className="text-[14px] leading-[20px] text-[#7a7a7a] line-clamp-2">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#ebebeb] text-[#3d3d3d] text-[12px] leading-[18px] px-2 py-0.5 rounded-[5px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 min-h-0" />

      {/* Footer */}
      <div className="flex items-center gap-2 shrink-0">
        {downloads && (
          <>
            <div className="flex items-center gap-0.5">
              <img src={icons.download} alt="" className="w-4 h-4" />
              <span className="text-[12px] leading-[18px] text-[#7a7a7a]">{downloads}</span>
            </div>
            <div className="w-[3px] h-[3px] rounded-full bg-[#7a7a7a]" />
          </>
        )}
        {author && (
          <span className="text-[12px] leading-[18px] text-[#7a7a7a] truncate flex-1">
            {author}
          </span>
        )}
        {!author && !downloads && (
          <span className="text-[12px] leading-[18px] text-[#7a7a7a]">Plaud.ai </span>
        )}
      </div>
    </div>
  )
}

export default function PlaudCommunity() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] font-light leading-[44px] text-black">Plaud Community</h2>
        <button className="flex items-center gap-1 pl-3 pr-1.5 py-1 rounded-[5px] hover:bg-[#f5f5f5] transition-colors">
          <span className="text-[14px] leading-[22px] text-[#7a7a7a]">View all</span>
          <ChevronRight />
        </button>
      </div>

      {/* Template cards */}
      <div className="flex gap-6">
        <TemplateCard
          icon="doc"
          title="Make me smart"
          description="Crafted for oral surgery assessments"
          downloads="35k"
          author="Betty Morgen"
        />
        <TemplateCard
          icon="doc"
          title="Meeting Notes"
          description="Applicable for multi-project progress review meetings, focusing on assessing current progress, bottlenecks, and planning."
          downloads="35k"
          author="Betty Morgen"
        />
        <TemplateCard
          icon="autopilot"
          title="Autopilot"
          tags={['Detailed', 'Flexible', 'Personalized Structure']}
        />
        <TemplateCard
          icon="doc"
          title="Make me smart"
          description="Crafted for oral surgery assessments"
          downloads="35k"
          author="Betty Morgen"
        />
      </div>
    </section>
  )
}
