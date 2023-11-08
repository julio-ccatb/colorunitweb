import { Component } from "lucide-react";
import Link from "next/link";

interface Module {
  action: string;
  url?: string;
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
      <h1 className="flex items-center gap-2 text-xl font-bold">
        <Component className="text-greenAccent" />
        {title}
        {activeModule?.action ? <p>→ {activeModule?.action}</p> : <></>}
      </h1>
      <nav className="flex list-none gap-6 pt-4">
        {modules.map((module, index) => (
          <li
            key={index}
            className={`rounded-md px-2 py-1 font-semibold shadow-md ${
              module === activeModule
                ? "bg-greenAccent font-semibold text-whitePrimary"
                : "hover:bg-whitePrimary hover:text-greenAccent"
            }`}
            onClick={() => onModuleClick(module)}
          >
            {module.url ? (
              <Link href={module.url}>{module.action}</Link>
            ) : (
              <p>{module.action}</p>
            )}
          </li>
        ))}
      </nav>
    </div>
  );
}
