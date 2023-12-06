import { redirect } from "next/navigation";
import { ROUTES } from "~/app/_utils/routesEnum";
import { getServerAuthSession } from "~/server/auth";
import { rolesToCodes, type UserRole } from "~/server/utils/roles";

export function hasRequiredPermissions(
  requiredPermissions: UserRole[],
  userPermissions: string[],
): boolean {
  for (const permission of requiredPermissions) {
    // console.log({ userPermissions, permission });
    if (userPermissions.includes(rolesToCodes[permission])) {
      return true; // Found a matching permission
    }
  }
  return false; // No matching permission found
}
export function withRoles<P>(
  Component: React.ComponentType<P>,
  requiredPermissions: UserRole[],
) {
  return async function WithRolesWrapper(props: P) {
    const session = await getServerAuthSession();

    if (!session) redirect(ROUTES.LOGIN);

    let hasPermission = false;
    if (session?.user && session.user.roles[0])
      hasPermission = hasRequiredPermissions(
        requiredPermissions,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        session?.user?.roles.map((rol) => rol.roleId),
      );

    // console.log({ session, hasPermission });
    if (hasPermission) {
      return <Component {...props} />;
    } else {
      // console.log(session?.user, hasPermission, requiredPermissions);

      redirect(ROUTES.UNAUTHORIZED);
    }
  };
}
