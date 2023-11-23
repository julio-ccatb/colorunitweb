"use client";
import Sidebar, { SidebarContext } from "../_components/sideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarItem from "../_components/sideBarItem";
import { useContext } from "react";
import useSidebarItems from "../_components/hooks/menuSettings";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {} = useContext(SidebarContext) ?? {
    expanded: false,
  };
  const { sidebarItems } = useSidebarItems();
  return (
    <>
      <ToastContainer
        containerId={1}
        position="top-right"
        limit={5}
        newestOnTop={true}
      />
      <main className="overflowy relative flex bg-whitePrimary/50 text-graySecondary">
        <Sidebar>
          {sidebarItems?.map((item) => {
            return <SidebarItem key={item.href} {...item} />;
          })}
        </Sidebar>
        <div className="flex-1 overflow-y-auto  p-4">{children}</div>
      </main>
    </>
  );
}
