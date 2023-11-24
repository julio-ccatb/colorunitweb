import Image from "next/image";
import { getUserRoleByCode } from "~/server/utils/roles";
import { api } from "~/trpc/react";

const UserTable = () => {
  const { data: users } = api.user.list.useQuery({});
  return (
    <>
      {" "}
      <h1 className="mb-4 text-2xl font-bold">Usuarios</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Permissons</th>
              <th>Favorite Color</th>
              <th>Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => {
              return (
                <tr key={user.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            width={20}
                            height={20}
                            src={user.image ?? ""}
                            alt={user.name ?? ""}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.roles.map((role) => {
                      const userRole = getUserRoleByCode(role.roleId);

                      return (
                        <span
                          key={Math.random()}
                          className={`badge badge-md px-2 py-1
                  ${userRole === "admin" ? "badge-success text-white" : ""}
                  
                  ${userRole === "editor" ? "badge-secondary" : ""}
                  ${userRole === "viewer" ? "badge-neutral" : ""}
                  `}
                        >
                          {userRole}
                        </span>
                      );
                    })}
                  </td>
                  <td>Purple</td>
                  <td>{user.id}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserTable;
