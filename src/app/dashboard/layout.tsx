import { BarChart3, Box, FlaskConical } from "lucide-react";
import Sidebar from "../_components/sideBar";
import SidebarItem from "../_components/sideBarItem";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex bg-whitePrimary/50 text-graySecondary">
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
          href="/dashboard/laboratory"
          submenus={[
            {
              href: "/dashboard/laboratory/base",
              text: "Bases",
              active: false,
              submenus: [
                {
                  href: "/dashboard/laboratory/base",
                  text: "Todas las bases",
                  active: false,
                },
                {
                  href: "/dashboard/laboratory/base/tipo",
                  text: "Tipos de base",
                  active: false,
                },
              ],
            },
            {
              href: "/dashboard/laboratory/colorante",
              text: "Colorantes",
              active: false,
            },
            {
              href: "/dashboard/laboratory/registro",
              text: "Registro",
              active: false,
              submenus: [
                {
                  href: "/dashboard/laboratory/registro/search",
                  text: "Buscar Color",
                  active: false,
                },
                {
                  href: "/dashboard/laboratory/registro",
                  text: "Crear Color",
                  active: false,
                },
              ],
            },
          ]}
        />
      </Sidebar>
      <div className="flex-1 overflow-y-auto  p-4">{children}</div>
    </main>
  );
}
