"use client";
import { BarChart3, FlaskConical, Settings } from "lucide-react";
import { useState, type ReactNode } from "react";

export type TYPE_ROUTE = {
  icon?: ReactNode;
  href: string;
  text: string;
  active?: boolean;
  submenus?: TYPE_ROUTE[];
};

// Define the initial state as a constant
export const MENU_INITIAL_STATE: TYPE_ROUTE[] = [
  {
    icon: <BarChart3 size={20} />,
    text: "Statistics",
    href: "/statistics",
    active: false,
  },
  {
    icon: <FlaskConical size={20} />,
    text: "Laboratory",
    href: "/dashboard/laboratory",
    active: false,
    submenus: [
      {
        href: "/dashboard/laboratory/base",
        text: "Bases",
        active: false,
        submenus: [
          {
            href: "/dashboard/laboratory/base",
            text: "Todas las bases",
            active: false,
          },
          {
            href: "/dashboard/laboratory/base/tipo",
            text: "Tipos de base",
            active: false,
          },
        ],
      },
      {
        href: "/dashboard/laboratory/colorante",
        text: "Colorantes",
        active: false,
      },
      {
        href: "/dashboard/laboratory/registro",
        text: "Registro",
        active: false,
        submenus: [
          {
            href: "/dashboard/laboratory/registro/search",
            text: "Buscar Color",
            active: false,
          },
          {
            href: "/dashboard/laboratory/registro",
            text: "Crear Color",
            active: false,
          },
        ],
      },
    ],
  },
  {
    icon: <Settings size={20} />,
    text: "Ajustes",
    href: "/settings",
    submenus: [
      {
        href: "/dashboard/settings/users",
        text: "Usuarios",
        active: false,
      },
    ],
  },
];

const useSidebarItems = (): {
  sidebarItems: TYPE_ROUTE[];
  setSidebarItems: React.Dispatch<React.SetStateAction<TYPE_ROUTE[]>>;
  updateSubmenuActiveState: (submenuHref: string) => void;
} => {
  const [sidebarItems, setSidebarItems] =
    useState<TYPE_ROUTE[]>(MENU_INITIAL_STATE);

  const updateSubmenuActiveState = (submenuHref: string) => {
    setSidebarItems((prevItems) =>
      prevItems.map((item) => {
        if (item.submenus) {
          // Reset active property for all submenus
          item.submenus = item.submenus.map((submenu) => ({
            ...submenu,
            active: false,
          }));

          // Find and update the active property for the specified submenu
          const updatedSubmenus = item.submenus.map((submenu) =>
            submenu.href === submenuHref
              ? { ...submenu, active: true }
              : submenu,
          );

          console.log(updatedSubmenus);

          return {
            ...item,
            submenus: updatedSubmenus,
          };
        }

        console.log(item);
        return item;
      }),
    );
  };

  return { sidebarItems, setSidebarItems, updateSubmenuActiveState };
};

export default useSidebarItems;
