export type UserRole = "admin" | "editor" | "viewer";
export type UserCode = "A007584" | "A006135" | "V006466";
export const ExposeRole: UserRole[] = ["admin", "editor", "viewer"];

export const rolesToCodes: Record<UserRole, UserCode> = {
  admin: "A007584",
  editor: "A006135",
  viewer: "V006466",
};

export const codeToRole: Record<UserCode, UserRole> = {
  A007584: "admin",
  A006135: "editor",
  V006466: "viewer",
};

// Function to handle UserCode that may come as a string
export function getUserRoleByCode(code: string): UserRole | undefined {
  const validCode = code as UserCode;
  if (validCode in codeToRole) {
    return codeToRole[validCode];
  }
  // If code is not found or not a valid UserCode
  return undefined;
}
