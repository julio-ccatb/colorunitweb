"use client";
import Sidebar from "../_components/sideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarItem from "../_components/sideBarItem";
import { useSidebar } from "../_components/providers/sideBarProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { sidebarItems } = useSidebar();
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
          {sidebarItems?.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </Sidebar>
        <div className=" flex-auto overflow-y-auto p-4">{children}</div>
      </main>
    </>
  );
}
