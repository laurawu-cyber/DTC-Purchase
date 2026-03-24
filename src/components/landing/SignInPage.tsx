import { useState } from 'react'
import { useNavigate } from 'react-router'

const assets = {
  // Fresh URLs from Figma (node 289-8024, 289-8078, 289-10876)
  plaudLogo:    'https://www.figma.com/api/mcp/asset/5c6e59d0-f826-4717-8879-e42626688970', // 289:8078
  googleIcon:   'https://www.figma.com/api/mcp/asset/3c979a09-e593-4f53-b37e-afac5b9facb8', // imgGoogle
  appleIcon:    'https://www.figma.com/api/mcp/asset/e7821163-c164-41af-b64b-91dd5a1a4c29', // imgVector (Apple)
  dividerLine:  'https://www.figma.com/api/mcp/asset/4a60fe9f-a6e7-4a94-b26e-7279b4427bf8', // imgLine207
  eyeIcon:      'https://www.figma.com/api/mcp/asset/d502e685-683f-4683-9a18-498a5007fa0e', // imgVector1 (eye)
  checkCircle:  'https://www.figma.com/api/mcp/asset/92a902a3-35c5-4059-9420-e99012b5bccc',
  checkMark:    'https://www.figma.com/api/mcp/asset/d7d4c13c-c8d6-4343-8b85-6fa392fb7868',
  // Compliance badges (bottom of left panel)
  badgeEn18031: 'https://www.figma.com/api/mcp/asset/b45c7333-bc9a-4626-93d9-f4bbe1529e35',
  badgeGdpr:    'https://www.figma.com/api/mcp/asset/34f0b3f7-7f6d-4069-b04b-cd49f9a912fe',
  badgeHipaa:   'https://www.figma.com/api/mcp/asset/2263c5f0-c842-48be-928e-7aa46b379051',
  badgeSoc2:    'https://www.figma.com/api/mcp/asset/f970cda8-a029-4a30-b70c-e62c24f4c04e',
  // Right panel
  ellipse1:     'https://www.figma.com/api/mcp/asset/5c37d629-6bf1-4891-a8f9-4d40f4be20a6',
  ellipse2:     'https://www.figma.com/api/mcp/asset/36335a66-f7bd-4017-946c-6dddda7c3877',
  ellipse3:     'https://www.figma.com/api/mcp/asset/3b6ae47d-bd5f-48f5-874d-a3701a1765e8',
  screenshot1:  'https://www.figma.com/api/mcp/asset/7836b6c5-9b9b-4df9-b11c-0d13bbdc414a',
  screenshot2:  'https://www.figma.com/api/mcp/asset/68307a4e-95a5-4f77-8597-97b9ca827c09',
  screenshot3:  'https://www.figma.com/api/mcp/asset/95851e4b-977f-487f-b2e8-f5a5359897c8',
  screenshot4:  'https://www.figma.com/api/mcp/asset/4dee0daa-afdd-4aef-8882-5626a742b268',
}

function CheckmarkFill() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[16.67%]">
        <img alt="" className="absolute block max-w-none size-full" src={assets.checkCircle} />
      </div>
      <div className="absolute inset-[37.72%_29.01%_37.28%_29.33%]">
        <div className="absolute inset-[-7.26%_-4.13%_-10%_-4.14%]">
          <img alt="" className="block max-w-none size-full" src={assets.checkMark} />
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex h-screen bg-white font-['Inter',sans-serif] overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="w-[50%] min-w-[480px] relative flex flex-col overflow-y-auto">

        {/* Logo — exact Figma dimensions */}
        <div className="absolute top-[24px] left-[24px] z-10">
          <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity block">
            <div className="relative" style={{ width: 90.448, height: 15.17 }}>
              <img
                alt="Plaud"
                src={assets.plaudLogo}
                className="absolute block max-w-none size-full object-contain object-left"
              />
            </div>
          </button>
        </div>

        {/* Vertically centered block — matches Figma gap-[84px] between form and badges */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[84px] py-[80px]">

          {/* ── FORM BLOCK ── */}
          <div className="flex flex-col gap-[40px] items-center w-[428px]">

            <p className="font-light text-[24px] leading-[36px] text-black text-center w-full">
              Sign in to create a Team workspace on Plaud
            </p>

            {/* Inner form (348px wide, matching Figma Component1) */}
            <div className="flex flex-col gap-[32px] items-center w-[348px]">

              {/* SSO + divider + fields */}
              <div className="flex flex-col gap-[16px] items-start w-full">

                {/* SSO buttons */}
                <div className="flex flex-col gap-[8px] w-full">
                  {/* Google */}
                  <div
                    className="h-[40px] overflow-clip relative shrink-0 w-full cursor-pointer"
                    onClick={() => navigate('/google-auth')}
                  >
                    <div className="absolute bg-white border border-[#ccc] border-solid h-[40px] left-0 rounded-[5px] top-0 w-full hover:bg-gray-50 transition-colors">
                      <div className="absolute -translate-x-1/2 flex gap-[8px] items-center left-1/2 top-[8px]">
                        <div className="overflow-clip relative shrink-0 size-[16px]">
                          <div className="absolute inset-[8.33%_10.23%_8.33%_8.33%]">
                            <img alt="" className="absolute block max-w-none size-full" src={assets.googleIcon} />
                          </div>
                        </div>
                        <span className="text-[14px] leading-[22px] text-[#3d3d3d] whitespace-nowrap">Continue with Google</span>
                      </div>
                    </div>
                  </div>
                  {/* Apple */}
                  <div className="h-[40px] overflow-clip relative shrink-0 w-full">
                    <div className="absolute bg-white border border-[#ccc] border-solid h-[40px] left-0 rounded-[5px] top-0 w-full overflow-clip">
                      <div className="absolute -translate-x-1/2 flex gap-[8px] items-center left-1/2 top-[8px]">
                        <div className="overflow-clip relative shrink-0 size-[16px]">
                          <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%]">
                            <img alt="" className="absolute block max-w-none size-full" src={assets.appleIcon} />
                          </div>
                        </div>
                        <span className="text-[14px] leading-[22px] text-[#3d3d3d] whitespace-nowrap">Continue with Apple</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── or ── divider: exact Figma h-0 + inset-[-0.5px_0] trick */}
                <div className="h-[19px] relative shrink-0 w-full">
                  <div className="absolute flex gap-[16px] items-center left-0 top-0 w-full">
                    <div className="h-0 relative shrink-0 w-[148px]">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={assets.dividerLine} />
                      </div>
                    </div>
                    <p className="text-[12px] leading-[18px] text-[#7a7a7a] text-center w-[20px] shrink-0">or</p>
                    <div className="h-0 relative shrink-0 w-[148px]">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={assets.dividerLine} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email + Password */}
                <div className="flex flex-col gap-[8px] w-full">
                  {/* Email field */}
                  <div className="border border-[#ccc] flex flex-col h-[40px] items-start justify-center overflow-clip pl-[16px] relative rounded-[5px] w-full">
                    <div className="flex gap-[8px] h-[40px] items-center pr-[16px] py-[10px] w-full">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="flex-1 text-[14px] leading-[22px] text-[#3d3d3d] placeholder:text-[#a3a3a3] bg-transparent outline-none min-w-0"
                      />
                      {/* invisible eye spacer to match layout */}
                      <div className="size-[20px] shrink-0 opacity-0" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] w-full">
                    {/* Password field */}
                    <div className="border border-[#ccc] flex flex-col h-[40px] items-start justify-center overflow-clip pl-[16px] relative rounded-[5px] w-full">
                      <div className="flex gap-[8px] h-[40px] items-center pr-[16px] py-[10px] w-full">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          className="flex-1 text-[14px] leading-[22px] text-[#3d3d3d] placeholder:text-[#a3a3a3] bg-transparent outline-none min-w-0"
                        />
                        <button type="button" onClick={() => setShowPassword(v => !v)} className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[23.1%_10%_21.9%_10%]">
                            <img alt="" className="absolute block max-w-none size-full" src={assets.eyeIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* Forgot password */}
                    <div className="h-[18px] relative w-full">
                      <p className="absolute text-[12px] leading-[18px] text-[#177be5] top-0 left-0 whitespace-nowrap">
                        Forgot password?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Log in button + footer links */}
              <div className="flex flex-col gap-[16px] items-center w-full">
                <div
                  onClick={() => navigate('/plan-selection')}
                  className="bg-black flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[5px] w-full cursor-pointer hover:bg-[#222] transition-colors"
                >
                  <p className="text-[14px] leading-[22px] font-semibold text-white text-center whitespace-nowrap">Log in</p>
                </div>
                <div className="flex flex-col gap-[8px] items-center w-full text-center">
                  <p className="text-[12px] leading-[18px] text-[#177be5]">Log in with a code instead</p>
                  <p className="text-[12px] leading-[18px] text-[#7a7a7a]">
                    Don't have an account?{' '}
                    <span className="text-[#177be5]">Sign up</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement checkboxes */}
            <div className="flex flex-col w-full px-[24px]">
              <div className="flex gap-[8px] items-start px-[16px] py-[4px]">
                <CheckmarkFill />
                <p className="text-[12px] leading-[18px] text-[#7a7a7a]">
                  I agree to register my account in{' '}
                  <span className="text-black underline">Australia</span>
                  {' '}and accept the{' '}
                  <span className="text-black underline">User Agreement</span>
                  {' '}and{' '}
                  <span className="text-black underline">Privacy Policy.</span>
                </p>
              </div>
              <div className="flex gap-[8px] items-center px-[16px] py-[4px]">
                <CheckmarkFill />
                <p className="text-[12px] leading-[18px] text-[#7a7a7a]">
                  Keep me updated on Plaud's news and offers.
                </p>
              </div>
            </div>
          </div>

          {/* ── Compliance badges (84px gap below form, inside centered block) ── */}
          <div className="flex gap-[16px] items-center shrink-0">
            {[
              { img: assets.badgeEn18031, label: 'EN18031' },
              { img: assets.badgeGdpr,    label: 'GDPR'    },
              { img: assets.badgeHipaa,   label: 'HIPAA'   },
              { img: assets.badgeSoc2,    label: 'SOC2'    },
            ].map(({ img, label }) => (
              <div key={label} className="flex flex-col items-center gap-[4px] w-[60px]">
                <img src={img} alt={label} className="w-[40px] h-[40px] object-cover" />
                <span className="text-[12px] leading-[18px] text-[#3d3d3d] text-center">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 relative overflow-hidden bg-[#f9f9f9]">
        {/* Upper gradient (top of right panel) */}
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
        {/* Lower gradient (bottom of right panel) */}
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
        {/* Fade between the two gradients */}
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

        {/* Product screenshots — Figma coordinates relative to right panel */}
        <img src={assets.screenshot1} alt="" className="absolute object-cover pointer-events-none" style={{ left: 111,  top: 285, width: 580, height: 351 }} />
        <img src={assets.screenshot2} alt="" className="absolute object-cover pointer-events-none" style={{ left: -91,  top: 347, width: 592, height: 333 }} />
        <img src={assets.screenshot3} alt="" className="absolute object-cover pointer-events-none" style={{ left: -147, top: 313, width: 661, height: 372 }} />
        <img src={assets.screenshot4} alt="" className="absolute object-cover pointer-events-none" style={{ left: 89,   top: 326, width: 634, height: 357 }} />
      </div>

    </div>
  )
}
