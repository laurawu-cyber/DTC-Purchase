import { useState } from 'react';
import { useNavigate } from 'react-router';
import AuthRightPanel from '../../components/AuthRightPanel';

const assets = {
  plaudLogo:   'https://www.figma.com/api/mcp/asset/5c6e59d0-f826-4717-8879-e42626688970',
  googleIcon:  'https://www.figma.com/api/mcp/asset/3c979a09-e593-4f53-b37e-afac5b9facb8',
  appleIcon:   'https://www.figma.com/api/mcp/asset/e7821163-c164-41af-b64b-91dd5a1a4c29',
  dividerLine: 'https://www.figma.com/api/mcp/asset/4a60fe9f-a6e7-4a94-b26e-7279b4427bf8',
  eyeIcon:     'https://www.figma.com/api/mcp/asset/d502e685-683f-4683-9a18-498a5007fa0e',
  checkCircle: 'https://www.figma.com/api/mcp/asset/92a902a3-35c5-4059-9420-e99012b5bccc',
  checkMark:   'https://www.figma.com/api/mcp/asset/d7d4c13c-c8d6-4343-8b85-6fa392fb7868',
  badgeEn18031:'https://www.figma.com/api/mcp/asset/b45c7333-bc9a-4626-93d9-f4bbe1529e35',
  badgeGdpr:   'https://www.figma.com/api/mcp/asset/34f0b3f7-7f6d-4069-b04b-cd49f9a912fe',
  badgeHipaa:  'https://www.figma.com/api/mcp/asset/2263c5f0-c842-48be-928e-7aa46b379051',
  badgeSoc2:   'https://www.figma.com/api/mcp/asset/f970cda8-a029-4a30-b70c-e62c24f4c04e',
};

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
  );
}

export default function SignInGeneralPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-white font-['Inter',sans-serif]">

      {/* LEFT PANEL */}
      <div className="w-[50%] min-w-[480px] relative flex flex-col">

        {/* Logo */}
        <div className="absolute top-[24px] left-[24px] z-10">
          <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity block">
            <div className="relative" style={{ width: 90.448, height: 15.17 }}>
              <img alt="Plaud" src={assets.plaudLogo} className="absolute block max-w-none size-full object-contain object-left" />
            </div>
          </button>
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[84px] py-[80px]">

          <div className="flex flex-col gap-[40px] items-center w-[428px]">

            <p className="font-light text-[24px] leading-[36px] text-black text-center w-full">
              Sign in to Plaud
            </p>

            <div className="flex flex-col gap-[32px] items-center w-[348px]">
              <div className="flex flex-col gap-[16px] items-start w-full">

                {/* SSO buttons */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="h-[40px] overflow-clip relative shrink-0 w-full cursor-pointer" onClick={() => navigate('/personal-workspace')}>
                    <div className="absolute bg-white border border-[#ccc] h-[40px] left-0 rounded-[5px] top-0 w-full hover:bg-gray-50 transition-colors">
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
                  <div className="h-[40px] overflow-clip relative shrink-0 w-full">
                    <div className="absolute bg-white border border-[#ccc] h-[40px] left-0 rounded-[5px] top-0 w-full overflow-clip">
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

                {/* or divider */}
                <div className="h-[19px] relative shrink-0 w-full">
                  <div className="absolute flex gap-[16px] items-center left-0 top-0 w-full">
                    <div className="h-0 relative shrink-0 w-[148px]"><div className="absolute inset-[-0.5px_0]"><img alt="" className="block max-w-none size-full" src={assets.dividerLine} /></div></div>
                    <p className="text-[12px] leading-[18px] text-[#7a7a7a] text-center w-[20px] shrink-0">or</p>
                    <div className="h-0 relative shrink-0 w-[148px]"><div className="absolute inset-[-0.5px_0]"><img alt="" className="block max-w-none size-full" src={assets.dividerLine} /></div></div>
                  </div>
                </div>

                {/* Email + Password */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="border border-[#ccc] flex flex-col h-[40px] items-start justify-center overflow-clip pl-[16px] relative rounded-[5px] w-full">
                    <div className="flex gap-[8px] h-[40px] items-center pr-[16px] py-[10px] w-full">
                      <input type="email" placeholder="Email address" className="flex-1 text-[14px] leading-[22px] text-[#3d3d3d] placeholder:text-[#a3a3a3] bg-transparent outline-none min-w-0" />
                      <div className="size-[20px] shrink-0 opacity-0" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-full">
                    <div className="border border-[#ccc] flex flex-col h-[40px] items-start justify-center overflow-clip pl-[16px] relative rounded-[5px] w-full">
                      <div className="flex gap-[8px] h-[40px] items-center pr-[16px] py-[10px] w-full">
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" className="flex-1 text-[14px] leading-[22px] text-[#3d3d3d] placeholder:text-[#a3a3a3] bg-transparent outline-none min-w-0" />
                        <button type="button" onClick={() => setShowPassword(v => !v)} className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[23.1%_10%_21.9%_10%]">
                            <img alt="" className="absolute block max-w-none size-full" src={assets.eyeIcon} />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="h-[18px] relative w-full">
                      <p className="absolute text-[12px] leading-[18px] text-[#177be5] top-0 left-0 whitespace-nowrap">Forgot password?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Log in + footer */}
              <div className="flex flex-col gap-[16px] items-center w-full">
                <div onClick={() => navigate('/personal-workspace')} className="bg-black flex gap-[8px] h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[5px] w-full cursor-pointer hover:bg-[#222] transition-colors">
                  <p className="text-[14px] leading-[22px] font-semibold text-white text-center whitespace-nowrap">Log in</p>
                </div>
                <div className="flex flex-col gap-[8px] items-center w-full text-center">
                  <p className="text-[12px] leading-[18px] text-[#177be5]">Log in with a code instead</p>
                  <p className="text-[12px] leading-[18px] text-[#7a7a7a]">Don't have an account? <span className="text-[#177be5]">Sign up</span></p>
                </div>
              </div>
            </div>

            {/* Agreement checkboxes */}
            <div className="flex flex-col w-full px-[24px]">
              <div className="flex gap-[8px] items-start px-[16px] py-[4px]">
                <CheckmarkFill />
                <p className="text-[12px] leading-[18px] text-[#7a7a7a]">I agree to register my account in <span className="text-black underline">Australia</span> and accept the <span className="text-black underline">User Agreement</span> and <span className="text-black underline">Privacy Policy.</span></p>
              </div>
              <div className="flex gap-[8px] items-center px-[16px] py-[4px]">
                <CheckmarkFill />
                <p className="text-[12px] leading-[18px] text-[#7a7a7a]">Keep me updated on Plaud's news and offers.</p>
              </div>
            </div>
          </div>

          {/* Compliance badges */}
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

      {/* RIGHT PANEL */}
      <AuthRightPanel />

    </div>
  );
}
