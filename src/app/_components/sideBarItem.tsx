"use client";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "./sideBar";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  active?: boolean;
  alert?: boolean;
}

export default function SidebarItem({
  icon,
  text,
  active,
  alert,
  href,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext) || { expanded: false };

  return (
    <Link
      href={href}
      className={`group relative my-1 flex cursor-pointer items-center justify-center
          rounded-md  px-3 py-2
          font-medium text-indigo-100 transition-all
          hover:text-indigo-600
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "text-gray-600 hover:bg-indigo-50"
          }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            invisible absolute left-full ml-6 -translate-x-3 rounded-md
            bg-indigo-100 px-2 py-1
            text-sm text-indigo-800 opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}
