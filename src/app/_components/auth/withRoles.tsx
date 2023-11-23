import { getServerAuthSession } from "~/server/auth";

function hasRequiredPermissions(requiredPermissions: string[]): boolean {
  // get userPermissions from the redux-store
  const userPermissions = ["users", "groups", "home"];
  return requiredPermissions.some((permission) =>
    userPermissions.includes(permission),
  );
}
export function withRoles<P>(
  Component: React.ComponentType<P>,
  requiredPermissions: string[],
) {
  return async function WithRolesWrapper(props: P) {
    const session = await getServerAuthSession();
    const hasPermission = hasRequiredPermissions(requiredPermissions);

    if (hasPermission) {
      return <Component {...props} />;
    } else {
      console.log(session, hasPermission);
      return <>Denegado</>;
    }
  };
}
