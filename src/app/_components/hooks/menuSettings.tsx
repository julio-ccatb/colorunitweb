"use client";
import {
  Book,
  FlaskConical,
  FlaskRound,
  Home,
  Pipette,
  Settings,
  UserCog,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { ROUTES } from "~/app/_utils/routesEnum";

export type TYPE_ROUTE = {
  icon?: ReactNode;
  href: ROUTES; // Use the enum type for the href property
  text: string;
  active?: boolean;
  submenus?: TYPE_ROUTE[];
};

// Define the initial state as a constant
export const MENU_INITIAL_STATE: TYPE_ROUTE[] = [
  {
    icon: <Home size={20} />,
    text: "Inicio",
    href: ROUTES.HOME,
    active: false,
  },
  {
    icon: <FlaskConical size={20} />,
    text: "Laboratory",
    href: ROUTES.LABORATORY,
    active: false,
    submenus: [
      {
        icon: <FlaskRound size={15} />,
        href: ROUTES.LABORATORY_BASE,
        text: "Bases",
        active: false,
        submenus: [
          {
            href: ROUTES.LABORATORY_BASE,
            text: "Todas las bases",
            active: false,
          },
          {
            href: ROUTES.LABORATORY_BASE_TIPO,
            text: "Tipos de base",
            active: false,
          },
        ],
      },
      {
        icon: <Pipette size={15} />,
        text: "Colorantes",
        href: ROUTES.LABORATORY_COLORANTE,
        active: false,
      },
      {
        icon: <Book size={15} />,
        text: "Registro",
        href: ROUTES.LABORATORY_REGISTRO,
        active: false,
        submenus: [
          {
            href: ROUTES.LABORATORY_REGISTRO_SEARCH,
            text: "Buscar Color",
            active: false,
          },
          {
            href: ROUTES.LABORATORY_REGISTRO,
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
    href: ROUTES.SETTINGS,
    submenus: [
      {
        icon: <UserCog size={15} />,
        href: ROUTES.SETTINGS_USERS,
        text: "Usuarios",
        active: false,
      },
    ],
  },
];

const useSidebarItems = (): {
  sidebarItems: TYPE_ROUTE[];
  setSidebarItems: React.Dispatch<React.SetStateAction<TYPE_ROUTE[]>>;
  updateSubmenuActiveState: (submenuHref: ROUTES) => void;
} => {
  const [sidebarItems, setSidebarItems] =
    useState<TYPE_ROUTE[]>(MENU_INITIAL_STATE);

  const updateSubmenuActiveState = (submenuHref: ROUTES) => {
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
