import { icons, images } from '../assets'
import ChevronRight from './ChevronRight'

const CARD_GRADIENT =
  'radial-gradient(ellipse at 50% 57%, rgba(182,255,183,1) 0%, rgba(183,243,250,1) 20%, rgba(208,234,246,1) 45%, rgba(239,245,255,1) 70%, rgba(249,249,249,1) 100%)'

function CardCaption({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] rounded-b-[5px] overflow-hidden">
      <div className="flex flex-col gap-1 px-4 py-3">
        <p className="text-[18px] font-light leading-[28px] text-black">{title}</p>
        <p className="text-[12px] leading-[18px] text-[#7a7a7a]">{subtitle}</p>
      </div>
    </div>
  )
}

function Plaud30Card() {
  return (
    <div
      className="flex-1 h-[220px] relative rounded-[5px] overflow-hidden bg-white"
      style={{ background: CARD_GRADIENT }}
    >
      {/* Background scene image */}
      <img
        src={images.plaud30BG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* App icon */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <img src={images.plaud30Logo} alt="" className="w-10 h-10 object-contain" />
      </div>
      {/* UI frame */}
      <img
        src={images.plaud30Frame}
        alt=""
        className="absolute left-4 top-[84px] w-[264px] h-[33px] object-contain"
      />
      <CardCaption
        title="Introducing Plaud 3.0"
        subtitle="All-in-one upgrade with smarter AI, a smoother UI, and a more seamless workflow."
      />
    </div>
  )
}

function AISuperpowersCard() {
  return (
    <div
      className="flex-1 h-[220px] relative rounded-[5px] overflow-hidden bg-[#f9f9f9]"
      style={{ background: CARD_GRADIENT }}
    >
      {/* Phone mockup */}
      <img
        src={images.phoneApp}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-[15px] h-[200px] w-auto object-contain"
      />
      {/* Left mini card */}
      <div className="absolute left-5 top-[66px] w-[90px] h-[60px] -rotate-[15deg] backdrop-blur-sm bg-[rgba(249,249,249,0.8)] rounded-[5px] shadow-sm overflow-hidden flex items-center justify-center">
        <div className="flex items-center gap-1 px-2">
          <img src={icons.more} alt="" className="w-3 h-3 opacity-50" />
          <span className="text-[7.8px] text-[#a3a3a3]">00:10</span>
        </div>
      </div>
      {/* Right mini card */}
      <div className="absolute right-5 top-[66px] w-[90px] h-[60px] rotate-[15deg] backdrop-blur-sm bg-[rgba(249,249,249,0.8)] rounded-[5px] shadow-sm overflow-hidden flex items-end justify-center pb-1.5">
        <div className="flex gap-3 px-2 opacity-60">
          <span className="text-[6.5px] text-[#7a7a7a]">Sources</span>
          <span className="text-[7.5px] font-semibold text-black border-b border-black pb-px">
            Notes
          </span>
        </div>
      </div>
      <CardCaption
        title="3 AI Superpowers. One Plaud."
        subtitle="Multimodal input. Multi-dimensional summaries. Ask Plaud anytime."
      />
    </div>
  )
}

function NoteProCard() {
  return (
    <div className="flex-1 h-[220px] relative rounded-[5px] overflow-hidden bg-[#f9f9f9]">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: CARD_GRADIENT, opacity: 0.6 }}
      />
      {/* Device image */}
      <img
        src={images.notePro}
        alt=""
        className="absolute left-1/2 -translate-x-[55%] top-4 h-[200px] w-auto object-contain opacity-95"
      />
      {/* Gradient fade */}
      <div className="absolute bottom-[113px] left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-[#f9f9f9]" />
      <CardCaption
        title="Note Pro: Precision at Your Fingertips"
        subtitle="Meet Note Pro—see more, mark key moments, and capture everything with ease."
      />
    </div>
  )
}

export default function WhatsNew() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] font-light leading-[44px] text-black">What's new</h2>
        <button className="flex items-center gap-1 pl-3 pr-1.5 py-1 rounded-[5px] hover:bg-[#f5f5f5] transition-colors">
          <span className="text-[14px] leading-[22px] text-[#7a7a7a]">View all</span>
          <ChevronRight />
        </button>
      </div>

      {/* Cards row */}
      <div className="flex gap-6">
        <Plaud30Card />
        <AISuperpowersCard />
        <NoteProCard />
      </div>
    </section>
  )
}
