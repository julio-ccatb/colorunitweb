"use client";
// In your main component or page file
export default function LaboratoryPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-h-screen flex-col gap-4 rounded-md">
      {/* <ModuleMenu {...moduleMenuProps} /> */}
      {children}
    </div>
  );
}
