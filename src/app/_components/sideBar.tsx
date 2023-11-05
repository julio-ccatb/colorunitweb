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
    <aside className="bg-graySecondary h-screen outline-none">
      <nav className="flex h-full flex-col shadow-md  ">
        <div
          className={`bg-graySecondary flex items-center justify-between p-4 ${
            expanded
              ? "from-whitePrimary text-grayPrimary bg-gradient-to-t to-white"
              : ""
          }`}
        >
          <div className="flex items-center justify-center ">
            <Image
              src={Icon}
              className={`overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
              alt=""
            />
            <span
              className={`text-md border-l-graySecondary flex flex-col overflow-hidden border-l-2 border-solid pl-2 font-extrabold tracking-tight transition-all ${
                expanded ? "ml-3 w-16" : "hidden"
              }`}
            >
              Color <span className="text-greenAccent">Unit</span>
            </span>
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`hover:bg-greenAccent  rounded-lg  p-2 transition-transform duration-500 ${
              expanded ? "rotate-[-180deg]" : "bg-greenLight text-grayPrimary"
            }`}
          >
            <ChevronLast />
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
            <div className="text-greenLight leading-4">
              <h4 className="text-sm font-semibold">
                {session?.data?.user.name}
              </h4>
              <span className=" text-xs">{session?.data?.user.email}</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
