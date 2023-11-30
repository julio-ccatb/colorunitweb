import { withRoles } from "~/app/_components/auth/withRoles";

// In your main component or page file
const LaboratoryPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-h-screen flex-col gap-4 rounded-md">
      {/* <ModuleMenu {...moduleMenuProps} /> */}
      {children}
    </div>
  );
};

export default withRoles(LaboratoryPage, ["admin", "editor", "viewer"]);
