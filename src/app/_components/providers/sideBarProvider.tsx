"use client";
import React, { createContext, useContext, useState } from "react";
import useSidebarItems, { type TYPE_ROUTE } from "../hooks/menuSettings";
import { type ROUTES } from "~/app/_utils/routesEnum";

interface SidebarContextProps {
  expanded: boolean;
  sidebarItems: TYPE_ROUTE[];
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarItems: React.Dispatch<React.SetStateAction<TYPE_ROUTE[]>>;
  updateSubmenuActiveState: (submenuHref: ROUTES) => void;
}
// Create a context for the sidebar items
export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

// Create a provider component for the sidebar context
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const sidebarHook = useSidebarItems();

  return (
    <SidebarContext.Provider
      value={{ ...sidebarHook, expanded, toggle: setExpanded }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Create a custom hook to access the sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
