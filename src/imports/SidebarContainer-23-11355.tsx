import svgPaths from "./svg-4vej8gt72q";
import svgPathsTeam from "./svg-pkd3nb69cz";
import img202512111133381 from "figma:asset/fc26005c095141b1a560e35d22ef53d7474d93c9.png";
import img202512111132011 from "figma:asset/6496aa0bbffe79f81402730cd8933fff530fd32b.png";
import imgImage6344888 from "figma:asset/9e698a80cb4b584ddec20de8470864927dc1b90e.png";
import { FormattedPrice } from "../app/components/FormattedPrice";
import imgImage6344889 from "figma:asset/8d42d53de33ff8c180d36feb21b4e30ab8d9a1b7.png";
import imgImage6344890 from "figma:asset/1ea11e295c2a152d67c4edb1aee158bdc10bf200.png";
import imgImage6344891 from "figma:asset/3f3bf2a28505f760f089b254e0814297dbb41036.png";

function Content() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[44px] min-h-px min-w-px not-italic relative text-[32px] text-black text-center">
        Choose Your Plan
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <Content />
    </div>
  );
}

function PlanTypeContainer() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[5px] shrink-0 w-[120px]" data-name="Plan type container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Individual</p>
    </div>
  );
}

function PlanTypeContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[5px] shrink-0 w-[120px]" data-name="Plan type container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#757575] text-[14px] text-center whitespace-nowrap">Teams</p>
    </div>
  );
}

function Component({ onToggle }: { onToggle?: () => void }) {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center p-[2px] relative rounded-[5px] shrink-0" data-name>
      <PlanTypeContainer />
      <div onClick={onToggle} className="cursor-pointer">
        <PlanTypeContainer1 />
      </div>
    </div>
  );
}

function Knob() {
  return <div className="-translate-y-1/2 absolute bg-white right-[2px] rounded-[3px] size-[16px] top-1/2" data-name="Knob" />;
}

function Tag() {
  return (
    <div className="bg-[rgba(33,239,106,0.2)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#21ef6a] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">Save 22%</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start justify-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[0px] text-[12px] whitespace-nowrap">
        <span className="leading-[18px]">{`Prices are in `}</span>
        <span className="leading-[18px] text-black">USD $</span>
      </p>
    </div>
  );
}

function Price() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[819px] top-[19px]" data-name="Price">
      <Title1 />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Price dropdown icon">
        <div className="absolute inset-[33.79%_17.13%_31.13%_17.17%]" data-name="Vector">
          <div className="absolute inset-[-4.87%_-2.78%_-7.13%_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0958 6.28699">
              <path d={svgPaths.p3a885380} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Billed() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="billed">
      <div className="bg-black h-[20px] overflow-clip relative rounded-[5px] shrink-0 w-[36px]" data-name="Toggle">
        <Knob />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#413d3b] text-[14px] whitespace-nowrap">Annual billing</p>
      <Tag />
      <Price />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Pro Plan</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[22px] min-h-px min-w-px py-[4px] relative text-[#74706d] text-[14px]" data-name="info">
      <p className="relative shrink-0">/month</p>
      <p className="relative shrink-0">billed annually</p>
    </div>
  );
}

function Pricing() {
  return (
    <div className="content-stretch flex gap-[4px] items-end not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Pricing">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black"><FormattedPrice usd={15} /></p>
      <Info />
    </div>
  );
}

function PlanButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Plan button container">
      <div className="bg-white h-[48px] min-w-[100px] relative rounded-[5px] shrink-0 w-[392px]" data-name="Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[8px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">Start free trial</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function PriceButton() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="price & button">
      <Pricing />
      <PlanButtonContainer />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="1">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPaths.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">1200 monthly transcription minutes</p>
    </div>
  );
}

function Features1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="features">
      <Component1 />
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="features">
      <Features1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[5px] shrink-0 w-[456px]" data-name="2">
      <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Text />
      <PriceButton />
      <Features />
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(143,83,237,0.2)] content-stretch flex items-center justify-center left-[32px] px-[12px] py-[8px] rounded-[5px] top-[-15px]" data-name="tag">
      <div aria-hidden="true" className="absolute border border-[#8f53ed] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Jokker:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">Best Value</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Unlimited Plan</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[22px] min-h-px min-w-px py-[4px] relative text-[#74706d] text-[14px]" data-name="info">
      <p className="relative shrink-0">/month</p>
      <p className="relative shrink-0">billed annually</p>
    </div>
  );
}

function Pricing1() {
  return (
    <div className="content-stretch flex gap-[4px] items-end not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Pricing">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black"><FormattedPrice usd={31} /></p>
      <Info1 />
    </div>
  );
}

function PlanButtonContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Plan button container">
      <div className="bg-black content-stretch flex gap-[8px] h-[48px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-[392px]" data-name="Button">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Start free trial</p>
      </div>
    </div>
  );
}

function PriceButton1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="price & button">
      <Pricing1 />
      <PlanButtonContainer1 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="1">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPaths.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Unlimited monthly transcription minutes</p>
    </div>
  );
}

function Features2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="features">
      <Component4 />
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[5px] shrink-0 w-[456px]" data-name="1">
      <div aria-hidden="true" className="absolute border border-[#8f53ed] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_16px_0px_rgba(143,83,237,0.15)]" />
      <Tag1 />
      <Text1 />
      <PriceButton1 />
      <Features2 />
    </div>
  );
}

function PlanComparisonContainer() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Plan comparison container">
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black w-full">{`What's included in Plaud Team`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#757575] text-[0px] text-[14px] w-full">
        <span className="leading-[22px]">{`Need more info about `}</span>
        <span className="leading-[22px]">{`Plaud `}</span>
        <span className="leading-[22px]">{`Team? `}</span>
        <span className="decoration-solid leading-[22px] underline">Contact Sales</span>
      </p>
    </div>
  );
}

function FeatureItemTeam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Centralized billing</p>
    </div>
  );
}

function FeatureItemTeam1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage seats</p>
    </div>
  );
}

function FeatureItemTeam2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage members</p>
    </div>
  );
}

function FeatureItemTeam3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage devices</p>
    </div>
  );
}

function FeatureItemTeam4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Priority support</p>
    </div>
  );
}

function TranscriptionFeaturesTeam() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[181px]" data-name="Transcription Features">
      <FeatureItemTeam />
      <FeatureItemTeam1 />
      <FeatureItemTeam2 />
      <FeatureItemTeam3 />
      <FeatureItemTeam4 />
    </div>
  );
}

function TranscriptionContainerTeam() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] h-[186px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Transcription Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Workspace management</p>
      <TranscriptionFeaturesTeam />
    </div>
  );
}

function FeatureItemTeam5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Unlimited transcription</p>
    </div>
  );
}

function FeatureItemTeam6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Supports 112 languages</p>
    </div>
  );
}

function FeatureItemTeam7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Automatic translation</p>
    </div>
  );
}

function FeatureItemTeam8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Auto speaker labeling</p>
    </div>
  );
}

function RecordingFeaturesTeam() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Recording Features">
      <FeatureItemTeam5 />
      <FeatureItemTeam6 />
      <FeatureItemTeam7 />
      <FeatureItemTeam8 />
    </div>
  );
}

function RecordingContainerTeam() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] h-[156px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Recording Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">Transcription</p>
      <RecordingFeaturesTeam />
    </div>
  );
}

function FeatureItemTeam9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">10,000 templates</p>
    </div>
  );
}

function FeatureItemTeam10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Custom summaries</p>
    </div>
  );
}

function FeatureItemTeam11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">GPT, Claude, and Gemini</p>
    </div>
  );
}

function FeatureItemTeam12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Ask Plaud AI</p>
    </div>
  );
}

function SummariesFeaturesTeam() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Summaries Features">
      <FeatureItemTeam9 />
      <FeatureItemTeam10 />
      <FeatureItemTeam11 />
      <FeatureItemTeam12 />
    </div>
  );
}

function SummariesContainerTeam() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[16px] h-[178px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Summaries Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">AI Summaries</p>
      <SummariesFeaturesTeam />
    </div>
  );
}

function FeatureItemTeam13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Plaud Desktop recording</p>
    </div>
  );
}

function FeatureItemTeam14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Highlight key moments</p>
    </div>
  );
}

function FeatureItemTeam15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Zapier integrations</p>
    </div>
  );
}

function FeatureItemTeam16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Checkmark">
        <div className="absolute inset-0 overflow-clip" data-name="icon_checkmark">
          <div className="absolute flex inset-[31.94%_20%_28.06%_20%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[8px] rotate-180 w-[12px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-4.42%_-2.95%_-8.84%_-2.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7071 9.06066">
                    <path d={svgPathsTeam.p2a028c80} id="Vector" stroke="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Mind maps</p>
    </div>
  );
}

function AiFeaturesTeam() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="AI Features">
      <FeatureItemTeam13 />
      <FeatureItemTeam14 />
      <FeatureItemTeam15 />
      <FeatureItemTeam16 />
    </div>
  );
}

function AiFeaturesContainerTeam() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[16px] h-[178px] items-start justify-self-stretch relative row-1 shrink-0" data-name="AI Features Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">Additional Features</p>
      <AiFeaturesTeam />
    </div>
  );
}

function FeaturesContainerTeam() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Features Container">
      <TranscriptionContainerTeam />
      <RecordingContainerTeam />
      <SummariesContainerTeam />
      <AiFeaturesContainerTeam />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start pb-[56px] relative shrink-0 w-full">
      <Frame11 />
      <FeaturesContainerTeam />
    </div>
  );
}

function FrameSecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[33.344px]" data-name="20251211-113338 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202512111133381} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">ISO 27001</p>
    </div>
  );
}

function Frame4SecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="h-[40px] relative shrink-0 w-[33.344px]" data-name="20251211-113201 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202512111132011} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">ISO 27701</p>
    </div>
  );
}

function Frame1SecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[60px]">
      <div className="relative shrink-0 size-[40px]" data-name="image 6344888">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344888} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-center whitespace-nowrap">GDPR</p>
    </div>
  );
}

function Frame3SecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[60px]">
      <div className="relative shrink-0 size-[40px]" data-name="image 6344889">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344889} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-center whitespace-nowrap">SOC 2</p>
    </div>
  );
}

function Frame2SecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[60px]">
      <div className="relative shrink-0 size-[40px]" data-name="image 6344890">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344890} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-right whitespace-nowrap">HIPAA</p>
    </div>
  );
}

function Frame5SecurityBadge() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="image 6344891">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344891} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">EN 18031</p>
    </div>
  );
}

function Frame6SecurityBadges() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pb-[56px] relative shrink-0 w-full">
      <FrameSecurityBadge />
      <Frame4SecurityBadge />
      <Frame1SecurityBadge />
      <Frame3SecurityBadge />
      <Frame2SecurityBadge />
      <Frame5SecurityBadge />
    </div>
  );
}

function MainContent({ onToggle }: { onToggle?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[133.5px] py-[56px] relative w-full" data-name="Main content">
      <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Title">
        <Title />
      </div>
      <Component onToggle={onToggle} />
      <Billed />
      <PlanComparisonContainer />
      <Frame10 />
      <Frame6SecurityBadges />
    </div>
  );
}

export default function SidebarContainer({ onToggle }: { onToggle?: () => void }) {
  return (
    <div className="bg-white overflow-clip relative rounded-[5px] size-full" data-name="Sidebar container">
      <MainContent onToggle={onToggle} />
    </div>
  );
}