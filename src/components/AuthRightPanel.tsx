// Shared right panel used by /choose-workspace and /sign-in-general
const assets = {
  ellipse1:    'https://www.figma.com/api/mcp/asset/5c37d629-6bf1-4891-a8f9-4d40f4be20a6',
  ellipse2:    'https://www.figma.com/api/mcp/asset/36335a66-f7bd-4017-946c-6dddda7c3877',
  ellipse3:    'https://www.figma.com/api/mcp/asset/3b6ae47d-bd5f-48f5-874d-a3701a1765e8',
  screenshot1: 'https://www.figma.com/api/mcp/asset/7836b6c5-9b9b-4df9-b11c-0d13bbdc414a',
  screenshot2: 'https://www.figma.com/api/mcp/asset/68307a4e-95a5-4f77-8597-97b9ca827c09',
  screenshot3: 'https://www.figma.com/api/mcp/asset/95851e4b-977f-487f-b2e8-f5a5359897c8',
  screenshot4: 'https://www.figma.com/api/mcp/asset/4dee0daa-afdd-4aef-8882-5626a742b268',
};

export default function AuthRightPanel() {
  return (
    <div className="flex-1 relative bg-[#f9f9f9] min-h-[900px] overflow-hidden">
      {/* Upper gradient */}
      <div
        className="absolute h-[555px] left-[-20px] right-[-20px] top-0"
        style={{
          background: `radial-gradient(ellipse at 50% 100%,
            rgba(182,255,183,1)   0%,
            rgba(183,243,250,1)  11%,
            rgba(208,234,246,1)  40%,
            rgba(239,245,255,1)  60%,
            rgba(249,249,249,1) 100%)`,
        }}
      />
      {/* Lower gradient */}
      <div
        className="absolute h-[632px] bottom-0 left-[-20px] right-[-20px]"
        style={{
          background: `radial-gradient(ellipse at 50% 100%,
            rgba(182,255,183,1)   0%,
            rgba(183,243,250,1)  15%,
            rgba(208,234,246,1)  40%,
            rgba(204,235,247,1)  49%,
            rgba(242,239,235,1)  80%)`,
        }}
      />
      {/* Fade strip */}
      <div className="absolute bg-gradient-to-b from-transparent to-[#c2eff8] h-[40px] left-[-20px] right-[-20px] top-[521px]" />

      {/* Decorative ellipses */}
      <img src={assets.ellipse1} alt="" className="absolute pointer-events-none" style={{ width: 521, height: 521, right: -260, top: -112 }} />
      <img src={assets.ellipse2} alt="" className="absolute pointer-events-none" style={{ width: 521, height: 521, right: -200, top: 528 }} />
      <img src={assets.ellipse3} alt="" className="absolute pointer-events-none" style={{ width: 535, height: 535, left: -222, top: 496 }} />

      {/* Headline */}
      <div className="absolute top-[173px] left-[85px] right-[24px] flex flex-col gap-[16px] items-center text-center">
        <p className="text-[24px] leading-[28px] text-black">
          Plaud, the world's No.1 AI note taker
        </p>
        <p className="text-[14px] leading-[22px] text-[#3d3d3d]">
          Plaud capture, extract, and utilize intelligence from what you say, hear, see, and think.
        </p>
      </div>

      {/* Product screenshots */}
      <img src={assets.screenshot1} alt="" className="absolute object-cover pointer-events-none" style={{ left: 111,  top: 285, width: 580, height: 351 }} />
      <img src={assets.screenshot2} alt="" className="absolute object-cover pointer-events-none" style={{ left: -91,  top: 347, width: 592, height: 333 }} />
      <img src={assets.screenshot3} alt="" className="absolute object-cover pointer-events-none" style={{ left: -147, top: 313, width: 661, height: 372 }} />
      <img src={assets.screenshot4} alt="" className="absolute object-cover pointer-events-none" style={{ left: 89,   top: 326, width: 634, height: 357 }} />
    </div>
  );
}
