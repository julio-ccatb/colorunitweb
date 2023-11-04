import { BarChart3, FlaskConical } from "lucide-react";
import Sidebar from "../_components/sideBar";
import SidebarItem from "../_components/sideBarItem";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Sidebar>
        <SidebarItem
          icon={<BarChart3 size={20} />}
          text="Statistics"
          href="/statistics"
        />
        <SidebarItem icon={<FlaskConical size={20} />} text="Lab" href="/lab" />
      </Sidebar>
    </main>
  );
}
