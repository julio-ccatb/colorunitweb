import { BarChart3, FlaskConical } from "lucide-react";
import Sidebar from "../_components/sideBar";
import SidebarItem from "../_components/sideBarItem";

export default async function Layaout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-whitePrimary/50 flex min-h-screen items-start justify-start   text-white">
      <Sidebar>
        <SidebarItem
          icon={<BarChart3 size={20} />}
          text="Statistics"
          href="/statistics"
        />
        <SidebarItem
          active={true}
          icon={<FlaskConical size={20} />}
          text="Laboratory"
          href="/laboratory"
        />
      </Sidebar>
      {children}
    </main>
  );
}
