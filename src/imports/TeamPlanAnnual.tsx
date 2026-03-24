import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-wb6b5779no";
import imgWhatsNewItemImage from "figma:asset/854c6d231644b58ddb193dc1c6c1ea956e606e33.png";
import img22 from "figma:asset/aaec7dd1487c050adb61170dae29c583bb1df724.png";
import imgUserAvatarContainer from "figma:asset/fc9b94227e574b92551cd21561a10dc54bf22e49.png";
import img202512111133381 from "figma:asset/fc26005c095141b1a560e35d22ef53d7474d93c9.png";
import img202512111132011 from "figma:asset/6496aa0bbffe79f81402730cd8933fff530fd32b.png";
import imgImage6344888 from "figma:asset/9e698a80cb4b584ddec20de8470864927dc1b90e.png";
import imgImage6344889 from "figma:asset/8d42d53de33ff8c180d36feb21b4e30ab8d9a1b7.png";
import imgImage6344890 from "figma:asset/1ea11e295c2a152d67c4edb1aee158bdc10bf200.png";
import { useCurrency } from "../app/components/CurrencyProvider";
import imgImage6344891 from "figma:asset/3f3bf2a28505f760f089b254e0814297dbb41036.png";
import TeamPlanMonthly from "./TeamPlanMonthly";

function IconCheckmark({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_checkmark">
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
  );
}
type CheckmarkProps = {
  className?: string;
  checked?: boolean;
};

function Checkmark({ className, checked = false }: CheckmarkProps) {
  const isChecked = checked;
  return <div className={className || `size-[20px] ${isChecked ? "relative" : ""}`}>{isChecked && <IconCheckmark className="absolute inset-0 overflow-clip" />}</div>;
}
type ToggleProps = {
  className?: string;
  disabled?: boolean;
  state?: boolean;
  onClick?: () => void;
};

function Toggle({ className, disabled = false, state = true, onClick }: ToggleProps) {
  return (
    <div onClick={onClick} className={className || `h-[20px] overflow-clip relative rounded-[5px] w-[36px] ${!state && disabled ? "bg-[#d6d6d6] opacity-60" : !state && !disabled ? "bg-[#d6d6d6]" : state && disabled ? "bg-black opacity-60" : "bg-black"}`}>
      <div className={`-translate-y-1/2 absolute bg-white rounded-[3px] size-[16px] top-1/2 ${!state && [false, true].includes(disabled) ? "left-[2px]" : "right-[2px]"}`} data-name="Knob" />
    </div>
  );
}

function IconXmarkForNav({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_xmark_for_nav">
      <div className="absolute inset-[20.58%_20.57%_20.57%_20.58%]" data-name="Vector">
        <div className="absolute inset-[-3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4778 12.4778">
            <path d={svgPaths.p39d065e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconLogout({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_logout">
      <div className="absolute inset-[17.5%_17.5%_17.5%_15%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4996 13">
          <path d={svgPaths.p25919d00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconHelpFeedback({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_help_&_feedback">
      <div className="absolute inset-[17.46%_18.41%_17.49%_15.89%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1396 13.0117">
          <path d={svgPaths.p4d8080} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconCreate({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_create">
      <div className="absolute inset-[19.95%_16.69%_19.99%_19.95%]" data-name="Vector">
        <div className="absolute inset-[-4.16%_0_-4.16%_-3.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1723 13.0117">
            <path d={svgPaths.p434cc00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconCheckmark1({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_checkmark">
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
  );
}

function IconDelete({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_delete">
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
  );
}

function IconFolder({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_folder">
      <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
          <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconUnorganized({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_unorganized">
      <div className="absolute inset-[17.5%_19.81%_17.5%_17.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5381 13">
          <path d={svgPaths.p26ae8900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconExplore({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_explore">
      <div className="absolute inset-[14.57%_16.57%_19.5%_17.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1854 13.1854">
          <path d={svgPaths.p3f490370} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconTemplateCommunity({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_template_community">
      <div className="absolute inset-[15%_15.27%_15.28%_15%]" data-name="Vector">
        <div className="absolute inset-[-3.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9454 14.9447">
            <path d={svgPaths.p2c703200} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_search">
      <div className="absolute inset-[12.5%_13.23%_13.23%_12.5%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8535 14.8535">
          <path d={svgPaths.p192dbc00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function IconHome({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_home">
      <div className="absolute inset-[18.37%_14.55%_18.37%_14.31%]" data-name="Vector">
        <div className="absolute inset-[-3.95%_-2.29%_-3.95%_-2.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.88 13.6514">
            <path d={svgPaths.p26b30180} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type ListChevronProps = {
  className?: string;
  status?: "Active" | "Default";
  type?: "Up" | "Down";
};

function ListChevron({ className, status = "Active", type = "Down" }: ListChevronProps) {
  const isUpAndIsActiveOrDefault = type === "Up" && ["Active", "Default"].includes(status);
  return (
    <div className={className || `overflow-clip relative rounded-[5px] size-[20px] ${type === "Up" && status === "Active" ? "bg-[#ebebeb]" : ""}`}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px] ${isUpAndIsActiveOrDefault ? "flex items-center justify-center" : ""}`}>
        <div className={isUpAndIsActiveOrDefault ? "-scale-y-100 flex-none" : "absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]"}>
          {type === "Down" && ["Active", "Active", "Default"].includes(status) && (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
              <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke={type === "Down" && status === "Default" ? "var(--stroke-0, #A3A3A3)" : "var(--stroke-0, black)"} />
            </svg>
          )}
          {isUpAndIsActiveOrDefault && (
            <div className="h-[4px] relative w-[8px]">
              <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
                  <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke={type === "Up" && status === "Default" ? "var(--stroke-0, #A3A3A3)" : "var(--stroke-0, black)"} />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function IconIconfontFolderFoler({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="icon_iconfont_folder_foler_1">
      <div className="absolute inset-[20.42%_17.17%_18.42%_19.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7334 12.2324">
          <path d={svgPaths.p36f93380} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function TeamPlanAnnual({ className, onClose }: { className?: string; onClose?: () => void }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  if (!isAnnual) {
    return <TeamPlanMonthly className={className} onClose={onClose} onToggle={() => setIsAnnual(true)} />;
  }

  return (
    <div className={className || "min-h-screen relative w-full bg-[#f5f5f5] overflow-hidden"} data-name="Team Plan-annual">
      <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[326px] top-[50px] w-[992px]" data-name="Recent Files Container">
        <div className="relative shrink-0 w-full" data-name="Recent Files Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[40px] relative w-full">
              <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">Recent files</p>
              <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none">
                    <div className="overflow-clip relative size-[16px]" data-name="Chevron Icon">
                      <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
                        <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                          <div className="relative size-full" data-name="Vector">
                            <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                                <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Recent Files Content">
          <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
                <div className="min-h-[56px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center min-h-[inherit] size-full">
                    <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">[WIP]【Plaud Team】C2B PRD. Initialize a Team Workspace</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                                <IconIconfontFolderFoler className="relative shrink-0 size-[16px]" />
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
                          </div>
                          <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
                                <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
                                    <g id="Vector">
                                      <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
                <div className="min-h-[56px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center min-h-[inherit] size-full">
                    <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">RFC]【Plaud Team】Workspace PRD</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                                <IconIconfontFolderFoler className="relative shrink-0 size-[16px]" />
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
                          </div>
                          <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
                                <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
                                    <g id="Vector">
                                      <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
                <div className="min-h-[56px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center min-h-[inherit] size-full">
                    <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">PLAUD APP 测试配置</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                                <IconIconfontFolderFoler className="relative shrink-0 size-[16px]" />
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
                          </div>
                          <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
                                <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
                                    <g id="Vector">
                                      <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
                <div className="min-h-[56px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center min-h-[inherit] size-full">
                    <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">{`Collaboration Means Differently for "AI Native"`}</p>
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
                                <IconIconfontFolderFoler className="relative shrink-0 size-[16px]" />
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px] whitespace-nowrap">Work Meetings</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
                          </div>
                          <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
                                <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
                                    <g id="Vector">
                                      <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[56px] min-h-[56px] relative rounded-[5px] shrink-0 w-full" data-name="Files List">
            <div className="flex flex-col justify-center min-h-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[8px] relative size-full">
                <div className="min-h-[56px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center min-h-[inherit] size-full">
                    <div className="content-stretch flex items-center min-h-[inherit] pl-[32px] py-[8px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[100px] items-center min-h-px min-w-px relative">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">2025-05-21 15:30:05</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[120px] items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">1h 19m 21s</p>
                          </div>
                          <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">08-25 10:32</p>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[56px]">
                              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_more">
                                <div className="absolute bottom-[43.75%] left-1/4 right-1/4 top-[43.75%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2.5">
                                    <g id="Vector">
                                      <path d={svgPaths.p33734c00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.p1e2e2b00} fill="var(--fill-0, #7A7A7A)" />
                                      <path d={svgPaths.pd7a9df0} fill="var(--fill-0, #7A7A7A)" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[315px] items-start left-[366px] top-[481px] w-[952px]" data-name="What's New Container">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="What's New Header">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">{`What's new`}</p>
          <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[6px] py-[4px] relative rounded-[5px] shrink-0" data-name="View All Container">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] whitespace-nowrap">View all</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none">
                <div className="overflow-clip relative size-[16px]" data-name="Chevron Icon">
                  <div className="absolute flex inset-[18.98%_33.82%] items-center justify-center">
                    <div className="-scale-y-100 flex-none h-[14.889px] w-[7.767px]">
                      <div className="relative size-full" data-name="Vector">
                        <div className="absolute inset-[-3.64%_-9.66%_-3.63%_-6.7%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.02479 10.6483">
                            <path d={svgPaths.p1f28dec0} id="Vector" stroke="var(--stroke-0, #7A7A7A)" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[220px] relative shrink-0 w-full" data-name="What's New Content">
          <div className="absolute bg-white h-[248px] left-0 overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
            <div className="absolute h-[240px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 240\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.800000011920929\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-6.1233e-14 -16.036 19.876 1.2613e-13 150.5 138.55)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            <div className="-translate-x-1/2 absolute bottom-[-42.34%] left-[calc(50%+0.5px)] top-[-62.1%] w-[596px]" data-name="Vector Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596.95 507.656">
                <g id="Group 291530">
                  <path d={svgPaths.p3931fea0} id="Vector" stroke="url(#paint0_linear_1_2890)" />
                  <path d={svgPaths.p21cf8000} id="Vector_2" stroke="url(#paint1_linear_1_2890)" />
                  <g id="Vector_3">
                    <path d={svgPaths.p19b009e0} stroke="var(--stroke-0, white)" />
                    <path d={svgPaths.p19b009e0} stroke="url(#paint2_linear_1_2890)" />
                  </g>
                  <path d={svgPaths.pfe4c00} id="Vector_4" stroke="var(--stroke-0, white)" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2890" x1="298.476" x2="298.476" y1="175.422" y2="280.997">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2890" x1="298.479" x2="298.479" y1="124.086" y2="303.901">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_2890" x1="298.48" x2="298.48" y1="65.2813" y2="338.17">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[122px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]" data-name="What's New Item">
              <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]" data-name="What's New Item Text Container">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-[270px]">Introducing Plaud 3.0</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-[270px]">All-in-one upgrade with smarter AI, a smoother UI, and a more seamless workflow.</p>
              </div>
            </div>
            <div className="absolute h-[32.595px] left-[16px] top-[84px] w-[263.5px]" data-name="Vector Container">
              <div className="absolute inset-[0_-2.21%_-4.31%_-0.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.652 34">
                  <g id="Vector Container">
                    <path d={svgPaths.p1f635ca0} id="Vector 1234" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p3432b4a0} id="Vector 1235" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p267d8120} id="Vector 1236" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.pab95360} id="Vector 1237" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p20921338} id="Vector 1238" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p33a68700} id="Vector 1239" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p3c6c8900} id="Vector 1240" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p956a3c0} id="Vector 1241" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p2ec133e0} id="Vector 1242" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p162515e0} id="Vector 1243" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p36d01f00} id="Vector 1244" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.pc76680} id="Vector 1245" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p1154fb20} id="Vector 1247" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p25a20b0} id="Vector 1248" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p148c8b20} id="Vector 1249" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p2eb7c6c0} id="Vector 1250" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d="M251.326 13L251.326 19" id="Vector 1251" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                    <path d={svgPaths.p442d580} id="Vector 1233" stroke="var(--stroke-0, #413D3B)" strokeWidth="0.65189" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-[calc(50%+0.5px)] size-[40px] top-[16px]" data-name="512-light">
              <div className="absolute inset-[-82.5%_-85%_-87.5%_-85%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 108">
                  <g filter="url(#filter0_d_1_3023)" id="512-light">
                    <path d={svgPaths.p2adf6100} fill="var(--fill-0, #F9F9F9)" />
                    <path d={svgPaths.p18b7e000} stroke="var(--stroke-0, #A3A3A3)" strokeWidth="0.5" />
                    <path d={svgPaths.p2f76b500} fill="var(--fill-0, black)" id="Vector" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="108" id="filter0_d_1_3023" width="108" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="17" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_3023" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_3023" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f9f9f9] h-[247px] left-[325px] overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
            <div className="absolute h-[248px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 248\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.585 25.746 -0.093017 151 153.31)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            <div className="absolute flex h-[81.249px] items-center justify-center left-[20px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
              <div className="-rotate-15 flex-none">
                <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]" data-name="Tab Container">
                  <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[9.15px] top-[23.79px] w-[196.667px]" data-name="Text">
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Time & Type">
                      <div className="overflow-clip relative shrink-0 size-[13.333px]" data-name="Flag Icon">
                        <div className="absolute inset-[16.75%_22.19%_14.17%_21.56%]" data-name="Vector">
                          <div className="absolute inset-[-4.52%_-5.56%_-0.27%_-5.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33336 9.65323">
                              <path d={svgPaths.p343a1bc0} id="Vector" stroke="var(--stroke-0, #A3A3A3)" strokeLinejoin="round" strokeWidth="0.833333" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[11.111px] not-italic relative shrink-0 text-[#a3a3a3] text-[7.778px] w-[35.556px]">00:10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[81.249px] items-center justify-center left-[179px] top-[66px] w-[102.462px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "38" } as React.CSSProperties}>
              <div className="-rotate-165 -scale-y-100 flex-none">
                <div className="backdrop-blur-[2.286px] bg-[rgba(249,249,249,0.8)] h-[60px] overflow-clip relative rounded-[5px] shadow-[0px_1px_34px_0px_rgba(0,0,0,0.03)] w-[90px]" data-name="Tab Container">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-3.3px)] top-[calc(50%-3.35px)]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="content-stretch flex gap-[7.478px] items-center justify-center opacity-60 px-[11.218px] relative" data-name="Navigation Bar Title Tabs">
                        <div className="content-stretch flex items-center justify-center py-[1.87px] relative shrink-0" data-name="Tab 1">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[9.348px] not-italic relative shrink-0 text-[#7a7a7a] text-[6.54px] whitespace-nowrap">Sources</p>
                        </div>
                        <div className="content-stretch flex items-center justify-center py-[1.87px] relative shrink-0" data-name="Tab 2">
                          <div aria-hidden="true" className="absolute border-b-[0.935px] border-black border-solid inset-0 pointer-events-none" />
                          <p className="font-['Inter:Semibold',sans-serif] leading-[11.218px] not-italic relative shrink-0 text-[7.48px] text-black whitespace-nowrap">Notes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[301px] left-[79px] top-[15px] w-[146px]" data-name="What's New Item Image">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[99.92%] left-0 max-w-none top-[0.2%] w-full" src={imgWhatsNewItemImage} />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute backdrop-blur-[25px] bg-[rgba(249,249,249,0.8)] bottom-0 h-[120px] left-1/2 overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[301px]" data-name="What's New Item">
              <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[269px]" data-name="What's New Item Text Container">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">3 AI Superpowers. One Plaud.</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Multimodal input. Multi-dimensional summaries. Ask Plaud anytime.</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f9f9f9] h-[247px] left-[651px] overflow-clip rounded-[5px] top-0 w-[301px]" data-name="What's New Item">
            <div className="absolute h-[247px] left-0 top-0 w-[301px]" data-name="What's New Item Image" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 301 247\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.049998 -17.515 25.746 -0.092642 151 152.69)\\'><stop stop-color=\\'rgba(182,255,183,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(183,243,250,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(208,234,246,1)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(239,245,255,1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(249,249,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
            <div className="-translate-x-1/2 absolute h-[314px] left-[calc(50%-3px)] top-[17px] w-[217px]" data-name="图层 2 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover opacity-95 pointer-events-none size-full" src={img22} />
            </div>
            <div className="absolute bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[125px] left-0 to-[rgba(249,249,249,0)] top-[122px] w-[302px]" data-name="What's New Item Image" />
            <div className="absolute flex h-[149px] items-center justify-center left-[153px] top-[15px] w-[129px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="bg-gradient-to-t from-[#f9f9f9] from-[18.75%] h-[129px] opacity-18 to-[rgba(249,249,249,0)] w-[149px]" data-name="What's New Item Image" />
              </div>
            </div>
            <div className="-translate-x-1/2 absolute backdrop-blur-[13.25px] bg-[rgba(249,249,249,0.8)] bottom-[7px] h-[113px] left-[calc(50%+0.5px)] overflow-clip rounded-bl-[5px] rounded-br-[5px] w-[302px]" data-name="What's New Item">
              <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[16px] not-italic top-[12px] w-[270px]" data-name="What's New Item Text Container">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] relative shrink-0 text-[18px] text-black w-full">Note Pro: Precision at Your Fingertips</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#7a7a7a] text-[12px] w-full">Meet Note Pro—see more, mark key moments, and capture everything with ease.</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[2px] h-[32px] items-start left-[16px] top-[16px] w-[104px]" data-name="What's New Item" />
        </div>
      </div>
      <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col h-[900px] items-start left-0 overflow-clip top-[-0.13px] w-[220px]" data-name="Sidebar">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="User Info">
          <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative shrink-0 w-[220px]" data-name="User Container">
            <div className="h-[48px] relative shrink-0 w-full" data-name="User Name Container">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[8px] py-[9px] relative size-full">
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
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
                </div>
              </div>
            </div>
            <div className="relative rounded-[5px] shrink-0 w-full" data-name="User Details Container">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[12px] relative w-full">
                  <div className="bg-[#ebebeb] overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-4px)] not-italic text-[14px] text-black top-1/2 whitespace-nowrap">
                      <p className="leading-[22px]">L</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
                    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="User Info Text Container">
                      <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black">
                        <p className="leading-[22px]">Testing Account</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 text-[#757575] text-[12px]">
                        <p className="leading-[18px]">Personal Workspace</p>
                      </div>
                    </div>
                    <ListChevron className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" status="Default" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="New Recording Container">
              <div className="content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[8px] relative w-full">
                <div className="h-[38px] min-w-[70px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
                  <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
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
            <div className="-translate-x-1/2 absolute bottom-0 h-0 left-1/2 w-[204px]" data-name="Divider">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
                  <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start pl-[8px] pt-[16px] relative shrink-0 w-[220px]" data-name="Navigation Container">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Items Container">
              <div className="bg-[#ebebeb] content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
                <IconHome className="overflow-clip relative shrink-0 size-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Home</p>
              </div>
              <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <IconSearch className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Search</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <IconTemplateCommunity className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Template Community</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <IconExplore className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Explore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-[204px]" data-name="Divider">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 1">
                  <path d="M0 0.5H204" id="Divider" stroke="var(--stroke-0, #EBEBEB)" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Folder Container">
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
                <IconFolder className="relative shrink-0 size-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                  <span className="leading-[22px]">{`All files `}</span>
                  <span className="leading-[22px] text-[#a3a3a3]">(299)</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
                <IconUnorganized className="overflow-clip relative shrink-0 size-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                  <span className="leading-[22px]">{`Unfiled `}</span>
                  <span className="leading-[22px] text-[#a3a3a3]">(34)</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[5px] shrink-0 w-[204px]" data-name="Navigation Menu One">
                <IconDelete className="overflow-clip relative shrink-0 size-[20px]" />
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">
                  <span className="leading-[22px]">{`Trash `}</span>
                  <span className="leading-[22px] text-[#a3a3a3]">(3)</span>
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between pl-[8px] pr-[4px] py-[8px] relative w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">Folders</p>
                        <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
                            <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
                                <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #757575)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_add_xs">
                        <div className="absolute inset-[23.33%]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.667 10.667">
                            <path d={svgPaths.pcd34700} fill="var(--fill-0, #757575)" id="Vector" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                      <IconFolder className="relative shrink-0 size-[20px]" />
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
                      <IconFolder className="relative shrink-0 size-[20px]" />
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
                      <IconDelete className="overflow-clip relative shrink-0 size-[20px]" />
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Trash</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[204px]" data-name="Navigation Menu With Menu">
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Row">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[87px] items-center p-[8px] relative w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">Comes from</p>
                        <div className="overflow-clip relative rounded-[5px] shrink-0 size-[20px]" data-name="list_chevron">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-1/2 w-[8px]">
                            <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.70711 5.06066">
                                <path d={svgPaths.p4fe0e00} id="Vector 7583" stroke="var(--stroke-0, #757575)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="content-stretch flex flex-col h-[38px] items-start shrink-0 w-[204px]" data-name="Folder Item" />
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[10px] items-center left-[16px] overflow-clip py-[8px] rounded-[5px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] top-[106.87px] w-[260px]" data-name="drop_menu">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[260px]" data-name="Dropdown Menu Container">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[5px] shrink-0 w-[260px]" data-name="User Details Container">
            <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[32px]" data-name="Logo">
              <div className="absolute inset-[6.25%] overflow-clip" data-name="Logo">
                <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4404 16.4254">
                    <path d={svgPaths.p39faff00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Name and Status Container">
              <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-center leading-[0] not-italic relative shrink-0" data-name="User Info Container">
                <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-black w-[152px]">
                  <p className="leading-[22px]">Testing Account</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">
                  <p className="leading-[18px]">Plaud ops</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-start justify-center pb-[8px] relative shrink-0 w-[260px]" data-name="action">
            <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0 w-[95px]" data-name="Button">
              <div className="content-stretch flex gap-[4px] items-center justify-center min-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Icon">
                  <div className="absolute inset-[15%]" data-name="Vector">
                    <div className="absolute inset-[-3.57%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p3501500} fillRule="evenodd" stroke="var(--stroke-0, black)" />
                          <path d={svgPaths.p335f2b80} stroke="var(--stroke-0, black)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px]">Settings</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="bg-white h-[32px] min-w-[70px] relative rounded-[5px] shrink-0" data-name="Button">
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center min-w-[inherit] overflow-clip p-[8px] relative rounded-[inherit]">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                  <div className="absolute inset-[15%_20%_10%_20%]" data-name="Vector">
                    <div className="absolute inset-[-3.33%_-4.17%_0_-4.17%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15.5">
                        <path d={svgPaths.p32dbfa00} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-[40%] left-3/4 right-[5%] top-[40%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                      <path d={svgPaths.p13b5600} fill="var(--fill-0, black)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[12px]">Invite member</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
          </div>
          <div className="flex h-[0.877px] items-center justify-center relative shrink-0 w-[227.998px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-[-0.22deg]">
              <div className="h-0 relative w-[228px]">
                <div className="absolute inset-[-0.5px_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
                    <path d="M0 0.5H228" id="Vector 7186" stroke="var(--stroke-0, #EBEBEB)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Dropdown Menu Items">
            <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[18px] min-h-px min-w-px not-italic relative text-[#757575] text-[12px]">Luke@plaud.ai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                      <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="Logo">
                        <div className="absolute inset-[6.25%] overflow-clip" data-name="Logo">
                          <div className="absolute inset-[20.31%_15.36%_21.03%_15.21%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5803 12.319">
                              <path d={svgPaths.p4224800} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Plaud Ops</p>
                      <IconCheckmark1 className="overflow-clip relative shrink-0 size-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
                  <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                        <div className="bg-black overflow-clip relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
                          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] not-italic text-[14px] text-white top-[12px] whitespace-nowrap">
                            <p className="leading-[22px]">P</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[157px]" data-name="Dropdown Menu Item Text">
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] w-full">Product Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                      <div className="relative rounded-[5px] shrink-0 size-[24px]" data-name="User Avatar Container">
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[5px]">
                          <div className="absolute bg-[#d6d6d6] inset-0 rounded-[5px]" />
                          <img alt="" className="absolute max-w-none object-cover rounded-[5px] size-full" src={imgUserAvatarContainer} />
                        </div>
                      </div>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Personal Workspace</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[240px]" data-name="Dropdown Menu Item">
                <div className="relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                      <div className="relative shrink-0 size-[24px]" data-name="Create Team Icon Container">
                        <IconCreate className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" />
                      </div>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Create a team workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[228px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 1">
                <path d="M0 0.5H228" id="Vector 7187" stroke="var(--stroke-0, #EBEBEB)" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Dropdown Menu Item">
            <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
              <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <IconHelpFeedback className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Help Center</p>
                  </div>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="Navigation Menu One">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                    <IconLogout className="relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#3d3d3d] text-[14px]">Log out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#ebebeb] content-stretch flex h-[16px] items-center justify-center left-[121px] px-[4px] rounded-[5px] top-[19px]" data-name="Beta">
          <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">
            <p className="leading-[18px]">Workspace management</p>
          </div>
        </div>
      </div>
      <div className="relative bg-[#f9f9f9] min-h-screen w-full overflow-auto flex flex-col items-center" data-name="Main Container">
        <div onClick={onClose} className="absolute content-stretch flex items-center right-[16px] p-[4px] top-[16px] z-20 cursor-pointer" data-name="Close Button Container">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <IconXmarkForNav className="overflow-clip relative size-[20px]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center w-full max-w-[90%] sm:max-w-[85%] md:max-w-[953px] px-4 sm:px-6 md:px-8">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center py-[56px] relative shrink-0 w-full" data-name="Header Container">
              <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Title">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
                    <p className="flex-[1_0_0] font-['Inter:Light',sans-serif] font-light leading-[44px] min-h-px min-w-px not-italic relative text-[32px] text-black text-center">Plaud Team</p>
                  </div>
                </div>
              </div>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">Unlock unlimited transcription and powerful AI features for your team.</p>
              <div className="content-stretch flex gap-[12px] items-center justify-center pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="billed">
                <Toggle onClick={() => setIsAnnual(!isAnnual)} className="bg-black h-[20px] overflow-clip relative rounded-[5px] shrink-0 w-[36px] cursor-pointer" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#413d3b] text-[14px] whitespace-nowrap">Annual billing</p>
                <div className="bg-[rgba(33,239,106,0.2)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="tag">
                  <div aria-hidden="true" className="absolute border border-[#21ef6a] border-solid inset-0 pointer-events-none rounded-[5px]" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">Save 20%</p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Plan comparison container">
                <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative" data-name="Plan comparison container">
                  <div className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[5px] shrink-0 w-full max-w-[456px]" data-name="1">
                    <div aria-hidden="true" className="absolute border border-[#8f53ed] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_16px_0px_rgba(143,83,237,0.15)]" />
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Text">
                      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic relative shrink-0 text-[24px] text-black w-full">Team Plan</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="price & button">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-end relative shrink-0 w-full" data-name="Pricing">
                          <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">{formatPrice(20)}</p>
                          <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Light',sans-serif] font-light leading-[44px] line-through not-italic relative shrink-0 text-[#a3a3a3] text-[32px] whitespace-nowrap">{formatPrice(25)}</p>
                          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px py-[4px] relative" data-name="info">
                            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[#74706d] text-[14px]">/ seat / month</p>
                          </div>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] whitespace-nowrap">Billed annually ({formatPrice(240)} per seat)</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div onClick={() => navigate('/create-workspace?plan=annual&price=240&planName=Teams%20Unlimited%20(Annual)&billing=Billed%20annually')} className="bg-black content-stretch flex gap-[8px] h-[48px] items-center justify-center min-w-[100px] overflow-clip px-[24px] py-[8px] relative rounded-[5px] shrink-0 w-full cursor-pointer" data-name="Button">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Upgrade to Plaud Team</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[40px] items-center pb-[56px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-center w-full">
              <p className="font-['Inter:Light',sans-serif] font-light leading-[44px] relative shrink-0 text-[32px] text-black w-full">{`What's included in Plaud Team`}</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#757575] text-[0px] text-[14px] w-full">
                <span className="leading-[22px]">{`Need more info about `}</span>
                <span className="leading-[22px]">{`Plaud `}</span>
                <span className="leading-[22px]">{`Team? `}</span>
                <span className="decoration-solid leading-[22px] underline">Contact Sales</span>
              </p>
            </div>
            <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative shrink-0 w-full" data-name="Features Container">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Transcription Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">Workspace management</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Transcription Features">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Centralized billing</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage seats</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage members</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Manage devices</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Priority support</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Recording Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">Transcription</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Recording Features">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Unlimited transcription</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Supports 112 languages</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Automatic translation</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Auto speaker labeling</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Summaries Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">AI summaries</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Summaries Features">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">10,000 templates</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Custom summaries</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">GPT, Claude, and Gemini</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Ask Plaud AI</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="AI Features Container">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-black w-full">Additional features</p>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="AI Features">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Plaud Desktop recording</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-black">Highlight key moments</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Zapier integrations</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature Item">
                    <Checkmark checked className="overflow-clip relative shrink-0 size-[20px]" />
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Mind maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-wrap gap-[16px] items-center justify-center pb-[56px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <div className="h-[40px] relative shrink-0 w-[33.344px]" data-name="20251211-113338 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202512111133381} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">ISO 27001</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <div className="h-[40px] relative shrink-0 w-[33.344px]" data-name="20251211-113201 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202512111132011} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">ISO 27701</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[60px]">
              <div className="relative shrink-0 size-[40px]" data-name="image 6344888">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344888} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-center whitespace-nowrap">GDPR</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[60px]">
              <div className="relative shrink-0 size-[40px]" data-name="image 6344889">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344889} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-center whitespace-nowrap">SOC 2</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[60px]">
              <div className="relative shrink-0 size-[40px]" data-name="image 6344890">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344890} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] text-right whitespace-nowrap">HIPAA</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[40px]" data-name="image 6344891">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6344891} />
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#3d3d3d] text-[12px] whitespace-nowrap">EN 18031</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}