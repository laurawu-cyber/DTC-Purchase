import SidebarContainerTeams from "../../imports/SidebarContainer-23-11539";
import { useSearchParams } from "react-router";
import NavigationSidebar from "../../imports/NavigationSidebar";

export default function PlanSelection() {
  const [searchParams] = useSearchParams();
  const billingCycle = searchParams.get('billing') || 'annual';

  return (
    <div className="bg-white min-h-screen relative w-full">
      {/* Navigation Sidebar */}
      <div className="fixed bg-[#f5f5f5] h-screen left-0 overflow-visible top-0 w-[220px] z-[100]">
        <NavigationSidebar currentPage="membership-center" />
      </div>

      {/* Main Content Area - Centered */}
      <div className="ml-[220px] flex justify-center items-start min-h-screen bg-white">
        <div className="w-full max-w-[1220px] relative py-8">
          <SidebarContainerTeams billingCycle={billingCycle} />
        </div>
      </div>
    </div>
  );
}
