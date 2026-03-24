import { icons } from '../assets'

// Figma node 161-5188: 16×16 container, arrow ~7.77×14.89px centered, -scale-y-100
export default function ChevronRight() {
  return (
    <div className="relative w-4 h-4 shrink-0 overflow-clip">
      <div className="absolute flex items-center justify-center" style={{ inset: '18.98% 33.82%' }}>
        <div className="shrink-0" style={{ width: '7.767px', height: '14.889px', transform: 'scaleY(-1)' }}>
          <div className="relative w-full h-full">
            <div className="absolute" style={{ inset: '-3.64% -9.66% -3.63% -6.7%' }}>
              <img alt="" className="block max-w-none w-full h-full" src={icons.chevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
