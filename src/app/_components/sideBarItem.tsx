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
      className={`hover:text-graySecondary text-greenLight group relative my-1 flex cursor-pointer
          items-center  justify-center rounded-md
          px-3 py-2 font-medium
          transition-colors
          ${
            active
              ? "bg-greenAccent text-grayPrimary"
              : " hover:from-whitePrimary hover:text-grayPrimary hover:bg-gradient-to-t hover:to-white"
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
            bg-greenLight text-greenAccent invisible absolute left-full ml-6
            -translate-x-3 rounded-md px-2
            py-1 text-sm opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}
