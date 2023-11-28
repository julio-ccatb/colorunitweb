"use client";
import Sidebar from "../_components/sideBar";
import SidebarItem from "../_components/sideBarItem";
import { useSidebar } from "../_components/providers/sideBarProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { sidebarItems } = useSidebar();
  return (
    <>
      <main className="overflowy relative flex bg-whitePrimary/50 text-graySecondary">
        <Sidebar>
          {sidebarItems?.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </Sidebar>
        <div className=" flex-auto overflow-y-auto p-4">{children}</div>
      </main>
    </>
  );
}
