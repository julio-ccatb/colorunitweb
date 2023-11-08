"use client";
// In your main component or page file
import { type SetStateAction, useState } from "react";
import ModuleMenu, { type ModuleMenuProps } from "~/app/_components/moduleMenu";

const initialModules = [
  {
    action: "Tipos de Bases",
    url: "/dashboard/laboratory/base/type",
    active: false,
  },
  { action: "Bases", url: "/dashboard/laboratory/base", active: false },
  {
    action: "Colorantes",
    url: "/dashboard/laboratory/colorante",
    active: false,
  },
  { action: "Registros", url: "/dashboard/laboratory/registro", active: false },
  // Add more dynamic modules as needed
];

export default function LaboratoryPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModule, setActiveModule] = useState(
    initialModules.find((module) => module.active),
  );

  const handleModuleClick = (
    module: SetStateAction<
      { action: string; url: string; active: boolean } | undefined
    >,
  ): void => {
    setActiveModule(module);
  };

  const moduleMenuProps: ModuleMenuProps = {
    config: {
      title: "Laboratory",
      modules: initialModules,
      moduleName: "Laboratory",
    },
    activeModule: activeModule,
    onModuleClick: handleModuleClick,
  };

  return (
    <div className="ml-8 mt-8 flex max-h-screen flex-col gap-4 rounded-md">
      <ModuleMenu {...moduleMenuProps} />
      {children}
    </div>
  );
}
