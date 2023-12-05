"use client";

import { MoreVertical, ChevronLast, LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import Icon from "/public/logo.svg";
import Image from "next/image";
import { useSidebar } from "./providers/sideBarProvider";
import { type ReactNode } from "react";
import Link from "next/link";

export default function Sidebar({ children }: { children: ReactNode }) {
  const { expanded, toggle } = useSidebar();
  const session = useSession();
  return (
    <aside className="h-screen bg-graySecondary outline-none">
      <nav className="flex h-full flex-col shadow-md  ">
        <div
          className={`flex items-center justify-between bg-graySecondary p-4 ${
            expanded
              ? "bg-gradient-to-t from-whitePrimary to-white text-grayPrimary"
              : ""
          }`}
        >
          <div className="flex items-center justify-center ">
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={Icon}
              className={`overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
              alt=""
            />
            <span
              className={`text-md flex flex-col overflow-hidden border-l-2 border-solid border-l-graySecondary pl-2 font-extrabold tracking-tight transition-all ${
                expanded ? "ml-3 w-16" : "hidden"
              }`}
            >
              Color <span className="text-greenAccent">Unit</span>
            </span>
          </div>
          <button
            onClick={() => toggle((curr) => !curr)}
            className={`rounded-lg  p-2  transition-transform duration-500 hover:bg-greenAccent ${
              expanded ? "rotate-[-180deg]" : "bg-greenLight text-grayPrimary"
            }`}
          >
            <ChevronLast />
          </button>
        </div>

        <ul className="menu flex-1 px-3 py-4">{children}</ul>

        <div className="flex p-3">
          <Link
            href={"/api/auth/signout"}
            className={`btn btn-error btn-sm flex ${
              expanded && "w-full"
            } rounded-md px-3 text-white`}
          >
            <LogOut size={15} />
            {expanded && `Cerrrar Sesion`}
          </Link>
        </div>
        <div className="flex p-3 shadow-md">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={session.data?.user?.image ?? Icon}
            alt=""
            width={4}
            height={4}
            className="h-10 w-10 rounded-md"
          />
          <div
            className={`
              justify between flex items-center
              overflow-hidden transition-all ${
                expanded ? "ml-3 w-52" : "hidden"
              }
          `}
          >
            <div className="leading-4 text-greenLight">
              <h4 className="text-sm font-semibold">
                {session?.data?.user?.name}
              </h4>
              <span className=" text-xs text-accent">
                {session?.data?.user?.email}
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}
