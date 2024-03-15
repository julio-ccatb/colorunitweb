import { withRoles } from "~/app/_components/auth/withRoles";

// In your main component or page file
const CustomerPage = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default withRoles(CustomerPage, ["admin", "editor", "viewer"]);
