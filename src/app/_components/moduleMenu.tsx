import { Component } from "lucide-react";
import Link from "next/link";
import { type SetStateAction } from "react";

interface Module {
  action: string;
  url: string;
  active: boolean;
}

export interface ModuleMenuProps {
  config: {
    moduleName: string;
    title: string;
    modules: Module[];
    url: string;
  };
  activeModule: Module | undefined;
  onModuleClick: (module: SetStateAction<Module | undefined>) => void;
}

export default function ModuleMenu({
  config,
  activeModule,
  onModuleClick,
}: ModuleMenuProps) {
  const { title, modules } = config;

  return (
    <div className=" flex-auto rounded-md bg-white p-4 shadow-md">
      <p className="flex items-center gap-2 text-xl font-bold">
        <Component className="text-greenAccent" />
        <Link href={config.url}>
          <h1>{title} → </h1>
        </Link>
        {activeModule?.url ? (
          <Link href={activeModule.url}> {activeModule?.action}</Link>
        ) : (
          <></>
        )}
      </p>
      <nav className="flex list-none gap-6 pt-4">
        {modules.map((module, index) =>
          module.url ? (
            <Link
              href={module.url}
              key={index}
              className={`rounded-md px-2 py-1 font-semibold shadow-md ${
                module === activeModule
                  ? "bg-greenAccent font-semibold text-whitePrimary"
                  : "hover:bg-whitePrimary hover:text-greenAccent"
              }`}
              onClick={() => onModuleClick(module)}
            >
              <p>{module.action}</p>
            </Link>
          ) : (
            <li
              key={index}
              className={`rounded-md px-2 py-1 font-semibold shadow-md ${
                module === activeModule
                  ? "bg-greenAccent font-semibold text-whitePrimary"
                  : "hover:bg-whitePrimary hover:text-greenAccent"
              }`}
              onClick={() => onModuleClick(module)}
            >
              <p>{module.action}</p>
            </li>
          ),
        )}
      </nav>
    </div>
  );
}
