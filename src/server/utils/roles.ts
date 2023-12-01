export type UserRole = "admin" | "editor" | "viewer" | "notVerified";
export type UserCode = "A007584" | "A006135" | "V006466" | "N007466";
export const ExposeRole: readonly UserRole[] = [
  "admin",
  "editor",
  "viewer",
  "notVerified",
];

export const rolesToCodes: Record<UserRole, UserCode> = {
  admin: "A007584",
  editor: "A006135",
  viewer: "V006466",
  notVerified: "N007466",
};

export const codeToRole: Record<UserCode, UserRole> = {
  A007584: "admin",
  A006135: "editor",
  V006466: "viewer",
  N007466: "notVerified",
};

// Function to handle UserCode that may come as a string
export function getUserRoleByCode(code: string): UserRole {
  const validCode = code as UserCode;
  if (validCode in codeToRole) {
    return codeToRole[validCode];
  }
  // If code is not found or not a valid UserCode
  return codeToRole.N007466;
}
