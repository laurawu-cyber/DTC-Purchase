import { useEffect } from "react";
import { useNavigate } from "react-router";
import AuthRightPanel from "../../components/AuthRightPanel";

const plaudLogo = 'https://www.figma.com/api/mcp/asset/5c6e59d0-f826-4717-8879-e42626688970';

function readWorkspaces(): { name: string; createdAt: string }[] {
  const raw = JSON.parse(localStorage.getItem('teamWorkspaces') || '[]');
  return raw.map((item: any) =>
    typeof item === 'string' ? { name: item, createdAt: '' } : item
  );
}

export default function ChooseWorkspacePage() {
  const navigate = useNavigate();
  const workspaces = readWorkspaces();

  useEffect(() => {
    if (workspaces.length === 0) {
      navigate('/sign-in-general');
    } else if (workspaces.length === 1) {
      localStorage.setItem('workspaceName', workspaces[0].name);
      navigate(`/home-team?workspaceName=${encodeURIComponent(workspaces[0].name)}`);
    }
  }, []);

  const handleSelect = (name: string) => {
    localStorage.setItem('workspaceName', name);
    navigate(`/home-team?workspaceName=${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex min-h-screen bg-white font-['Inter',sans-serif]">

      {/* LEFT PANEL */}
      <div className="w-[50%] min-w-[480px] relative flex flex-col">

        {/* Logo */}
        <div className="absolute top-[24px] left-[24px] z-10">
          <div className="relative" style={{ width: 90.448, height: 15.17 }}>
            <img alt="Plaud" src={plaudLogo} className="absolute block max-w-none size-full object-contain object-left" />
          </div>
        </div>

        {/* Centered content */}
        <div className="flex-1 flex flex-col items-center justify-center py-[80px]">
          <div className="flex flex-col gap-[48px] items-start w-[464px] max-w-full px-4">

            {/* Title */}
            <div className="w-full text-center">
              <p className="font-['Inter:Light',sans-serif] font-light text-[32px] leading-[44px] text-black">
                Choose a workspace
              </p>
            </div>

            {/* Workspace cards */}
            <div className="flex flex-col gap-[24px] w-full">
              {workspaces.map((ws) => (
                <div
                  key={ws.name}
                  onClick={() => handleSelect(ws.name)}
                  className="bg-white border border-[#ccc] rounded-[5px] h-[110px] p-[16px] flex flex-col justify-between cursor-pointer hover:border-black hover:shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)] transition-all"
                >
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#3d3d3d]">
                    {ws.name}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] text-[#7a7a7a]">
                    {ws.createdAt ? `Created on ${ws.createdAt}` : ''}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <AuthRightPanel />

    </div>
  );
}
