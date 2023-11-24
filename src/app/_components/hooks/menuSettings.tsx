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
        const recursivelyUpdateSubmenus = (
          submenus: TYPE_ROUTE[] | undefined,
        ): TYPE_ROUTE[] | undefined =>
          submenus?.map((submenu) => ({
            ...submenu,
            active: submenu.href === submenuHref,
            submenus: recursivelyUpdateSubmenus(submenu.submenus),
          }));

        return {
          ...item,
          active: item.href === submenuHref,
          submenus: recursivelyUpdateSubmenus(item.submenus),
        };
      }),
    );
  };

  return { sidebarItems, setSidebarItems, updateSubmenuActiveState };
};

export default useSidebarItems;
