import { icons } from '../assets'
import ChevronRight from './ChevronRight'

type FileRowProps = {
  title: string
  duration: string
  date: string
  hasHighlight?: boolean
}

function FileRow({ title, duration, date, hasHighlight }: FileRowProps) {
  return (
    <div className="flex items-center min-h-[56px] pl-8 py-2 rounded-[5px] w-full hover:bg-[#f9f9f9] cursor-pointer">
      <div className="flex flex-1 gap-[100px] items-center min-w-0">
        {/* Title */}
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-[14px] leading-[22px] text-black truncate">{title}</span>
          {hasHighlight && (
            <div className="flex items-center gap-1 mt-0.5">
              <img src={icons.highlight} alt="" className="w-4 h-4 shrink-0" />
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="flex gap-[120px] items-center shrink-0">
          <span className="text-[14px] leading-[22px] text-[#7a7a7a] whitespace-nowrap">
            {duration}
          </span>
          <div className="flex gap-10 items-center">
            <span className="text-[14px] leading-[22px] text-[#7a7a7a] whitespace-nowrap">
              {date}
            </span>
            <div className="flex items-center justify-end w-14">
              <button>
                <img src={icons.more} alt="More" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RecentFiles() {
  const files = [
    {
      title: 'Steve Jobs & Bill Gates: A Conversation That Shaped Technology',
      duration: '1h 21m 21s',
      date: '08-25 10:32',
    },
    {
      title: 'How to use Plaud',
      duration: '3m 46s',
      date: '08-25 10:32',
      hasHighlight: true,
    },
    {
      title: 'Welcome to Plaud.ai',
      duration: '4m 13s',
      date: '08-25 10:32',
      hasHighlight: true,
    },
  ]

  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between pl-10 mb-4">
        <h2 className="text-[32px] font-light leading-[44px] text-black">Recent files</h2>
        <button className="flex items-center gap-1 pl-3 pr-1.5 py-1 rounded-[5px] hover:bg-[#f5f5f5] transition-colors">
          <span className="text-[14px] leading-[22px] text-[#7a7a7a]">View all</span>
          <ChevronRight />
        </button>
      </div>

      {/* File list */}
      <div className="flex flex-col gap-3 px-2">
        {files.map((file) => (
          <FileRow key={file.title} {...file} />
        ))}
      </div>
    </section>
  )
}
