"use client";

import React, { createContext, useState } from "react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useSession } from "next-auth/react";
import Icon from "/public/logo.svg";
import Image from "next/image";

interface SidebarContextProps {
  expanded: boolean;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);
  const session = useSession();

  return (
    <aside className="h-screen bg-gradient-to-b from-[#382750] to-[#15162c] outline-none ">
      <nav className="flex h-full flex-col shadow-md  ">
        <div className="bg-purpleDark flex items-center justify-between  p-4 ">
          <div className="flex items-center justify-center ">
            <Image
              src={Icon}
              className={`overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
              alt=""
            />
            <span
              className={`text-md overflow-hidden font-extrabold tracking-tight transition-all ${
                expanded ? "ml-3 w-16" : "w-0"
              }`}
            >
              Color <span className="text-[hsl(280,100%,70%)]">Unit</span>
            </span>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`hover:bg-purpleAccent  rounded-lg  p-2 ${
              expanded ? " " : "bg-indigo-400"
            }`}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex p-3 shadow-md">
          <Image
            src={session.data?.user.image || Icon}
            alt=""
            width={2}
            height={2}
            className="h-10 w-10 rounded-md"
          />
          <div
            className={`
              justify between flex items-center
              overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="text-sm font-semibold">
                {session?.data?.user.name}
              </h4>
              <span className="text-white-600 text-xs">
                {session?.data?.user.email}
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
