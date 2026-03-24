import svgPaths from "./svg-btfh8vs26p";
import imgUserAvatarContainer from "figma:asset/fc9b94227e574b92551cd21561a10dc54bf22e49.png";
import NavigationSidebar from "./NavigationSidebar";
import { useState } from "react";
import TeamPlanAnnual from "./TeamPlanAnnual";
import { useNavigate } from "react-router";

function Frame54() {
  return (
    <div className="absolute bg-white border border-[#ebebeb] border-solid left-[1164px] rounded-[5px] size-[32px] top-[8px]">
      <div className="absolute inset-[calc(29.69%-0.41px)_calc(23.1%-0.54px)_calc(33.2%-0.34px)_calc(23.11%-0.54px)]" data-name="Vector">
        <div className="absolute inset-[-6.32%_0_-6.32%_-4.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9622 13.3754">
            <path d={svgPaths.pea90400} id="Vector" stroke="var(--stroke-0, #3D3D3D)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[calc(56.25%+0.13px)_calc(18.75%-0.63px)_calc(25%-0.5px)_calc(62.5%+0.25px)]">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #36D96C)" id="Ellipse 2457" r="3.5" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute h-[48px] left-[220px] overflow-clip top-0 w-[1220px]">
      <div className="absolute right-[24px] top-0">
        <Frame54 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[44px] min-h-px min-w-px not-italic relative text-[32px] text-black">Membership Center</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <Content1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Testing Account</p>
      <div className="bg-[#d6d6d6] content-stretch flex h-[20px] items-center justify-center px-[8px] relative rounded-[5px] shrink-0" data-name="member">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">
          <p className="leading-[18px]">Starter</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[4px] h-[30px] items-center justify-center overflow-clip pl-[4px] pr-[8px] py-[2px] relative rounded-[5px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_billings_usage">
        <div className="absolute inset-[12.5%_20%_12.5%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
            <path d={svgPaths.pba20500} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center whitespace-nowrap">{`Billing & subscription`}</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Profile">
      <Container2 />
      <Frame57 />
    </div>
  );
}

function PlanNameContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Plan Name Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-[152px]">Starter</p>
    </div>
  );
}

function Progress() {
  return (
    <div className="bg-[#d6d6d6] h-[3px] relative shrink-0 w-full" data-name="progress">
      <div className="absolute bg-[#858585] h-[3px] left-0 top-0 w-[161px]" data-name="Plan Progress Bar" />
    </div>
  );
}

function Mins() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start not-italic relative shrink-0 text-[#7a7a7a] text-[12px] w-full" data-name="mins">
      <p className="leading-[0] relative shrink-0 whitespace-pre">
        <span className="leading-[18px] text-black">250 mins left</span>
        <span className="leading-[18px]">{`  `}</span>
      </p>
      <p className="leading-[18px] relative shrink-0 whitespace-nowrap">300 mins/month</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 w-[230px]" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black w-[240.402px]">Go Unlimited</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-w-full relative shrink-0 text-[#7a7a7a] text-[12px] w-[min-content]">Enjoy unlimited transcription and summaries with the Unlimited Plan.</p>
    </div>
  );
}

function Member({ onUpgradeClick }: { onUpgradeClick?: () => void }) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="member">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[438px]" data-name="Setting - Plan Details Container">
            <PlanNameContainer />
            <Progress />
            <Mins />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Next reset: 2026-8-10 22:30</p>
          </div>
          <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[12px] h-auto items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[5px] shrink-0 w-[430px]" data-name="Setting - Plan Banner">
            <div className="flex items-center justify-between w-full">
              <Container3 />
              <button 
                onClick={onUpgradeClick}
                className="bg-[rgba(143,83,237,0.1)] h-[40px] min-w-[100px] relative rounded-[5px] shrink-0 w-[109px] cursor-pointer hover:bg-[rgba(143,83,237,0.15)] transition-colors" 
                data-name="Button"
              >
                <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Upgrade</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#8f53ed] border-solid inset-0 pointer-events-none rounded-[5px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon_tem_com_real_estate">
        <div className="absolute inset-[23.84%_20%_20%_20%]" data-name="Vector">
          <div className="absolute inset-[-4.45%_-4.17%_0_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6 14.0784">
              <path d={svgPaths.p4caff00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">{`Collaborate with your team? `}</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[22px] items-center min-h-px min-w-px relative" data-name="title">
      <Frame59 />
    </div>
  );
}

function AnalyticsCard({ onExploreClick }: { onExploreClick: () => void }) {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[5px] shrink-0 w-full" data-name="Analytics Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] py-[16px] relative w-full">
          <Title1 />
          <p 
            className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#177be5] text-[14px] whitespace-nowrap cursor-pointer hover:underline" 
            onClick={onExploreClick}
          >
            Explore Plaud Team →
          </p>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Days</p>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">1,002</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Files</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">118</p>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[-0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hours
      </p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">1,048</p>
    </div>
  );
}

function Analytics() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="analytics">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[5px]" data-name="Analytics Card">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Title2 />
          <ValueContainer />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[5px]" data-name="Analytics Card">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Title3 />
          <ValueContainer1 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[5px]" data-name="Analytics Card">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Title4 />
          <ValueContainer2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[100px] left-0 top-0 w-[952px]" data-name="background">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 952 100">
        <g clipPath="url(#clip0_5_3611)" id="background">
          <g filter="url(#filter0_f_5_3611)" id="Ellipse 2399">
            <ellipse cx="136.521" cy="200.924" fill="var(--fill-0, #EFFFF5)" rx="136.521" ry="200.924" transform="matrix(0.436252 0.899825 -0.920004 0.391908 751.133 0)" />
          </g>
          <g filter="url(#filter1_f_5_3611)" id="Ellipse 2400">
            <path d={svgPaths.p27316c00} fill="var(--fill-0, #FAFAFA)" />
          </g>
          <g filter="url(#filter2_f_5_3611)" id="Ellipse 2401">
            <path d={svgPaths.p43e5700} fill="var(--fill-0, #FAFAFA)" />
          </g>
          <g filter="url(#filter3_f_5_3611)" id="Ellipse 2403" opacity="0.8">
            <ellipse cx="787.197" cy="172.753" fill="url(#paint0_linear_5_3611)" rx="172.128" ry="106.015" transform="rotate(-14.5073 787.197 172.753)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="411.868" id="filter0_f_5_3611" width="508.521" x="371.579" y="-4.34514">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_5_3611" stdDeviation="30" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="422.848" id="filter1_f_5_3611" width="436.368" x="266.74" y="-114.018">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_5_3611" stdDeviation="38" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="427.712" id="filter2_f_5_3611" width="444.431" x="-78.6097" y="-62.0193">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_5_3611" stdDeviation="38" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="422.707" id="filter3_f_5_3611" width="537.535" x="518.429" y="-38.6">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_5_3611" stdDeviation="50" />
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_3611" x1="787.197" x2="787.197" y1="66.7383" y2="278.768">
            <stop stopColor="#D9F2F6" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <clipPath id="clip0_5_3611">
            <rect fill="white" height="100" width="952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[413px]" data-name="Container">
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="Member Icon">
        <div className="absolute flex inset-[12.5%] items-center justify-center">
          <div className="flex-none rotate-180 size-[15px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p32bef500} fill="url(#paint0_linear_5_3594)" id="Vector" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_3594" x1="3.125" x2="13.1316" y1="2.5" y2="14.2755">
                    <stop stopColor="#8E56E6" />
                    <stop offset="0.33" stopColor="#4E88F8" />
                    <stop offset="0.67" stopColor="#39CFEF" />
                    <stop offset="1" stopColor="#3DF578" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">My quotes</p>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <Container5 />
      <p className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">—— The Tenacious Dynamo</p>
    </div>
  );
}

function ValueContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">The only way to do great work is to love what you do.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[100px] items-start px-[24px] py-[16px] relative rounded-[5px] shrink-0 w-[952px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <Background />
      <Title5 />
      <ValueContainer3 />
    </div>
  );
}

function Container1({ onExploreClick, onUpgradeClick }: { onExploreClick: () => void; onUpgradeClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Name Title">
        <Profile />
      </div>
      <Member onUpgradeClick={onUpgradeClick} />
      <AnalyticsCard onExploreClick={onExploreClick} />
      <Analytics />
      <div className="bg-[#f9f9f9] content-stretch flex h-[100px] items-center relative shrink-0 w-full" data-name="My Quotes">
        <Container4 />
      </div>
    </div>
  );
}

function Container({ onExploreClick, onUpgradeClick }: { onExploreClick: () => void; onUpgradeClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Title">
        <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        <Title />
      </div>
      <Container1 onExploreClick={onExploreClick} onUpgradeClick={onUpgradeClick} />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Usage insights</p>
    </div>
  );
}

function Percentage() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[55px]" data-name="percentage">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#4cbf69] text-[14px] whitespace-nowrap">21%</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_arrow_up">
        <div className="absolute inset-[12.92%_23.16%_13.1%_22.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8906 14.7969">
            <path d={svgPaths.p10c3ac80} fill="var(--fill-0, #4CBF69)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Daily average usage</p>
      <Percentage />
    </div>
  );
}

function ValueContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">2.3 hours this month</p>
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Peak active hours</p>
    </div>
  );
}

function ValueContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[30px] not-italic relative shrink-0 text-[#1f1f1f] text-[20px] whitespace-nowrap">Your most productive time is 10:00–12:00 AM</p>
    </div>
  );
}

function Analytics1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[100px] items-center relative shrink-0 w-[952px]" data-name="analytics">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[5px]" data-name="Analytics Card">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Title7 />
          <ValueContainer4 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[5px]" data-name="Analytics Card">
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Title8 />
          <ValueContainer5 />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="L0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="L1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="L2" />
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap">Less</p>
      <Frame56 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap">More</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[26px] top-[148px] w-[908px]" data-name="Footer">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">2025</p>
      <Legend />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[1.8px] h-[111.6px] items-center leading-[18px] left-0 not-italic py-[14.4px] text-[#a3a3a3] text-[12px] text-center top-[26.4px]" data-name="Header">
      <p className="h-[32.4px] relative shrink-0 w-[14.4px]">M</p>
      <p className="h-[30.6px] relative shrink-0 w-[14.4px]">W</p>
      <p className="h-[30.6px] relative shrink-0 w-[14.4px]">F</p>
    </div>
  );
}

function Month() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[1.8px] items-start leading-[18px] left-[25px] not-italic text-[#a3a3a3] text-[12px] top-0 w-[915px]" data-name="Month">
      <p className="relative shrink-0 w-[66px]">Jan</p>
      <p className="relative shrink-0 w-[66px]">Feb</p>
      <p className="relative shrink-0 w-[87px]">Mar</p>
      <p className="relative shrink-0 w-[66px]">Apr</p>
      <p className="relative shrink-0 w-[82px]">May</p>
      <p className="relative shrink-0 w-[66px]">Jun</p>
      <p className="relative shrink-0 w-[66px]">Jul</p>
      <p className="relative shrink-0 w-[84px]">Aug</p>
      <p className="relative shrink-0 w-[83px]">Sep</p>
      <p className="relative shrink-0 w-[66px]">Oct</p>
      <p className="relative shrink-0 w-[84px]">Nov</p>
      <p className="relative shrink-0 w-[79.2px]">Dec</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] opacity-0 rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] opacity-0 rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] opacity-0 rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[rgba(208,234,246,0.6)] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#d0eaf6] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="0" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="1" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="2" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="3" />
      <div className="bg-[#f9f9f9] rounded-[2px] shrink-0 size-[14px]" data-name="4" />
    </div>
  );
}

function Map() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-[26px] top-[28px] w-[915px]" data-name="Map">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function UsageInsights() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0" data-name="Usage insights">
      <div className="content-stretch flex flex-col h-[44px] items-start pb-[16px] relative shrink-0 w-[952px]" data-name="Title">
        <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        <Title6 />
      </div>
      <Analytics1 />
      <div className="h-[170px] relative shrink-0 w-[952px]" data-name="heatmap">
        <Footer />
        <Header />
        <Month />
        <Map />
      </div>
    </div>
  );
}

function Content({ onExploreClick, onUpgradeClick }: { onExploreClick: () => void; onUpgradeClick?: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[56px] items-start left-[calc(50%+110px)] top-[48px] w-[952px]" data-name="Content">
      <Container onExploreClick={onExploreClick} onUpgradeClick={onUpgradeClick} />
      <UsageInsights />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] relative shrink-0 w-[83.473px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.4735 14">
        <g id="Logo">
          <path clipRule="evenodd" d={svgPaths.p1461dd00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2984dc00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pa0f2f80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1fbff400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p1ca9a700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p31259cb0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />;
}

function UserNameContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="User Name Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative size-full">
          <Logo />
          <Spacer />
        </div>
      </div>
    </div>
  );
}

function UserAvatarContainer() {
  return (
    <div className="overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
        <div className="absolute bg-[#ebebeb] inset-0 rounded-[5px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[5px] size-full" src={imgUserAvatarContainer} />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
        <p className="leading-[22px]">Testing Account</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#7a7a7a] text-[12px]">
        <p className="leading-[18px]">Personal workspace</p>
      </div>
    </div>
  );
}

function UserNameAndStatusContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
      <Frame58 />
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #A3A3A3)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserDetailsContainer() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="User Details Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
          <UserAvatarContainer />
          <UserNameAndStatusContainer />
        </div>
      </div>
    </div>
  );
}

function NewRecordingContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="New Recording Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[8px] relative w-full">
        <div className="h-[38px] min-w-[70px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                <div className="absolute inset-[15%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.999 14.001">
                    <path d={svgPaths.pc4f3900} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Add audio</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
      </div>
    </div>
  );
}

function UserContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
      <UserNameContainer />
      <UserDetailsContainer />
      <NewRecordingContainer />
      <div className="-translate-x-1/2 absolute bottom-0 h-0 left-1/2 w-[204px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
            <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationItemsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Items Container">
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_home">
          <div className="absolute inset-[18.37%_14.55%_18.37%_14.31%]" data-name="Vector">
            <div className="absolute inset-[-3.95%_-2.29%_-3.95%_-2.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.88 13.6514">
                <path d={svgPaths.p26b30180} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Home</p>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_search">
              <div className="absolute inset-[12.5%_13.23%_13.23%_12.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8535 14.8535">
                  <path d={svgPaths.p192dbc00} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Search</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_template_community">
              <div className="absolute inset-[15%_15.27%_15.28%_15%]" data-name="Vector">
                <div className="absolute inset-[-3.59%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9454 14.9447">
                    <path d={svgPaths.p2c703200} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Template Community</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_explore">
              <div className="absolute inset-[14.57%_16.57%_19.5%_17.5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1854 13.1854">
                  <path d={svgPaths.p3f490370} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Folders</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #7A7A7A)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative w-full">
          <Content2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
            <div className="absolute inset-[23.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
                <path d={svgPaths.pcd34700} fill="var(--fill-0, #7A7A7A)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">Comes from</p>
      <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #7A7A7A)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[87px] items-center p-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function FolderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Folder Container">
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
          <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
              <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`All files `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(299)</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_unorganized">
          <div className="absolute inset-[17.5%_19.81%_17.5%_17.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5381 13">
              <path d={svgPaths.p26ae8900} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`Unfiled `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(34)</span>
        </p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_delete">
          <div className="absolute flex inset-[15.38%_16.99%_13.32%_16.96%] items-center justify-center">
            <div className="flex-none h-[14.261px] rotate-180 w-[13.209px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.209 14.2607">
                  <path d={svgPaths.p39870cc0} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
          <span className="leading-[22px]">{`Trash `}</span>
          <span className="leading-[22px] text-[#a3a3a3]">(3)</span>
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <Row />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
                <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
                    <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Work meetings</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(21)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="relative shrink-0 size-[20px]" data-name="icon_folder">
                <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
                    <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Traning</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(56)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_delete">
                <div className="absolute flex inset-[15.38%_16.99%_13.32%_16.96%] items-center justify-center">
                  <div className="flex-none h-[14.261px] rotate-180 w-[13.209px]">
                    <div className="relative size-full" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.209 14.2607">
                        <path d={svgPaths.p39870cc0} fill="var(--fill-0, black)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Trash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
        <Row1 />
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Note</span>
                <span className="leading-[22px]">{` `}</span>
                <span className="leading-[22px] text-[#a3a3a3]">(100)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Call</span>
                <span className="leading-[22px] text-[#a3a3a3]">{` (2)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                <span className="leading-[22px]">Import</span>
                <span className="leading-[22px] text-[#a3a3a3]">{` (6)`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FolderItem() {
  return <div className="content-stretch flex flex-col h-[38px] items-start shrink-0 w-[204px]" data-name="Folder Item" />;
}

function NavigationContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] pt-[16px] relative shrink-0 w-[220px]" data-name="Navigation Container">
      <NavigationItemsContainer />
      <div className="h-0 relative shrink-0 w-[204px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
            <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
          </svg>
        </div>
      </div>
      <FolderContainer />
      <FolderItem />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Info">
      <UserContainer />
      <NavigationContainer />
    </div>
  );
}

export default function Entrance12WebMembershipCenter() {
  const [showTeamPlan, setShowTeamPlan] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setShowTeamPlan(true);
  };

  const handleCloseModal = () => {
    setShowTeamPlan(false);
  };

  const handleUpgradeClick = () => {
    navigate('/plan-selection');
  };

  const handleCreateTeam = () => {
    setShowTeamPlan(true);
  };

  return (
    <>
      <div className="bg-white relative size-full" data-name="Entrance1-2: Web - membership center">
        <Frame55 />
        <Content onExploreClick={handleExploreClick} onUpgradeClick={handleUpgradeClick} />
        <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[900px] items-start left-0 overflow-visible top-0 w-[220px]">
          <NavigationSidebar currentPage="membership-center" onCreateTeamClick={handleCreateTeam} />
        </div>
      </div>
      
      {showTeamPlan && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <TeamPlanAnnual onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
}