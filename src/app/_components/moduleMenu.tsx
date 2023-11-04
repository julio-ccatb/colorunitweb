import { useState } from "react";
import Link from "next/link";

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
  };
  activeModule: Module | undefined;
  onModuleClick: (module: Module) => void;
}

export default function ModuleMenu({
  config,
  activeModule,
  onModuleClick,
}: ModuleMenuProps) {
  const { title, modules } = config;

  return (
    <div className="flex-auto rounded-sm bg-white p-4 shadow-sm">
      <h1 className="text-xl font-bold">
        {title}
        {` >`} {activeModule?.action}
      </h1>
      <nav className="flex list-none gap-6 pt-4">
        {modules.map((module, index) => (
          <li
            key={index}
            className={`rounded-md px-2 py-1 font-semibold ${
              module === activeModule
                ? "bg-greenAccent text-whitePrimary font-semibold"
                : "hover:bg-whitePrimary hover:text-greenAccent"
            }`}
            onClick={() => onModuleClick(module)}
          >
            <Link href={module.url}>{module.action}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}
