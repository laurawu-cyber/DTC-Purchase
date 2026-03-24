import svgPaths from "./svg-9ups1lspug";
import { FormattedPrice } from "../app/components/FormattedPrice";

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

function Component() {
  return (
    <div className="bg-[#ebebeb] content-stretch flex items-center justify-center p-[2px] relative rounded-[5px] shrink-0" data-name>
      <PlanTypeContainer />
      <PlanTypeContainer1 />
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

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[133.5px] py-[56px] top-0 w-[953px]" data-name="Main content">
      <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Title">
        <Title />
      </div>
      <Component />
      <Billed />
      <PlanComparisonContainer />
    </div>
  );
}

export default function SidebarContainer() {
  return (
    <div className="bg-white overflow-clip relative rounded-[5px] size-full" data-name="Sidebar container">
      <MainContent />
    </div>
  );
}