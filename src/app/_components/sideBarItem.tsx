"use client";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "./sideBar";

export interface SidebarItemProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
  active?: boolean;
  alert?: boolean;
  submenus?: SidebarItemProps[];
}

export default function SidebarItem({
  icon,
  text,
  active,
  alert,
  href,
  submenus,
}: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext) ?? { expanded: false };

  console.log(window.location.pathname);

  return (
    <li>
      <details open={expanded}>
        <summary
          className={` group menu-title relative my-1 flex cursor-pointer items-center justify-center
          rounded-md  px-3 py-2
          font-medium text-greenLight transition-colors
          ${active ? "bg-greenAccent text-grayPrimary" : " hover:bg-accent/50"}
          `}
        >
          {icon}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            <Link href={href}>{text}</Link>
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
            bg-greenLight px-2 py-1
            text-sm text-greenAccent opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
            >
              {text}
            </div>
          )}
        </summary>
        {expanded ? (
          <ul className="text-white">
            {submenus?.map((submenu) => (
              <li key={submenu.href}>
                {submenu.submenus ? (
                  <details open>
                    <summary className="hover:bg-accent/75 hover:text-white">
                      {submenu.text}
                    </summary>
                    <ul>
                      {submenu.submenus.map((submenu2) => (
                        <li key={submenu2.href}>
                          <Link
                            className={`hover:bg-accent/30 hover:text-accent`}
                            href={submenu2.href}
                          >
                            {submenu2.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    className={` hover:bg-accent/30 hover:text-accent`}
                    href={submenu.href}
                  >
                    {submenu.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </details>
    </li>
  );
}
