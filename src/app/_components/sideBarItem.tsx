"use client";
import Link from "next/link";
import { type TYPE_ROUTE } from "./hooks/menuSettings";
import { useSidebar } from "./providers/sideBarProvider";
import { Box, Boxes } from "lucide-react";

export default function SidebarItem(Item: TYPE_ROUTE) {
  const { updateSubmenuActiveState, expanded, toggle } = useSidebar();

  return (
    <li>
      <details open={expanded}>
        <summary
          className={` group menu-title relative my-1 flex cursor-pointer items-center justify-center
          rounded-md  px-3 py-2
          font-medium text-greenLight transition-colors 
          ${
            Item.active
              ? "bg-greenAccent text-grayPrimary"
              : " hover:bg-accent/50"
          } ${!expanded || !Item.submenus ? "after:hidden" : ""}
          `}
        >
          <Link href={Item.href}>{Item.icon}</Link>
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            <p> {Item.text}</p>
          </span>
          {!expanded && (
            <div
              className={`
            invisible absolute left-full z-50 ml-6 -translate-x-3 rounded-md
            bg-greenLight px-2 py-1
            text-sm text-greenAccent opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
            >
              {Item.text}
            </div>
          )}
        </summary>
        {expanded ? (
          <ul className="text-white">
            {Item.submenus?.map((submenu) => (
              <li key={submenu.href}>
                {submenu.submenus ? (
                  <details open>
                    <summary className="hover:bg-accent/75 hover:text-white">
                      {submenu.icon ?? <Boxes size={15} />} {submenu.text}
                    </summary>
                    <ul>
                      {submenu.submenus.map((submenu2) => (
                        <li key={submenu2.href}>
                          <Link
                            className={`hover:bg-accent/30 hover:text-accent active:text-accent ${
                              submenu2.active
                                ? "background-animate glass !text-accent"
                                : ""
                            }`}
                            href={submenu2.href}
                            onClick={() => {
                              updateSubmenuActiveState(submenu2.href);
                              toggle((curr) => !curr);
                            }}
                          >
                            <Box size={10} /> {submenu2.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    className={`hover:bg-accent/30 hover:text-accent ${
                      submenu.active
                        ? "background-animate glass !text-accent"
                        : ""
                    }`}
                    onClick={() => {
                      updateSubmenuActiveState(submenu.href);
                      toggle((curr) => !curr);
                    }}
                    href={submenu.href}
                  >
                    {submenu.icon ?? <Box size={15} />} {submenu.text}
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
