"use client";
import Link from "next/link";
import { type TYPE_ROUTE } from "./hooks/menuSettings";
import { useSidebar } from "./providers/sideBarProvider";

export default function SidebarItem(Item: TYPE_ROUTE) {
  const { updateSubmenuActiveState, expanded } = useSidebar();

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
          } ${!expanded ? "after:hidden" : ""}
          `}
        >
          {Item.icon}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            <Link href={Item.href}>{Item.text}</Link>
          </span>
          {!expanded && (
            <div
              className={`
            invisible absolute left-full ml-6 -translate-x-3 rounded-md
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
                      {submenu.text}
                    </summary>
                    <ul>
                      {submenu.submenus.map((submenu2) => (
                        <li key={submenu2.href}>
                          <Link
                            className={`hover:bg-accent/30 hover:text-accent active:text-accent ${
                              submenu2.active ? "!text-accent" : ""
                            }`}
                            href={submenu2.href}
                            onClick={() =>
                              updateSubmenuActiveState(submenu2.href)
                            }
                          >
                            {submenu2.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    className={`hover:bg-accent/30 hover:text-accent ${
                      submenu.active ? "!text-accent" : ""
                    }`}
                    onClick={() => updateSubmenuActiveState(submenu.href)}
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
