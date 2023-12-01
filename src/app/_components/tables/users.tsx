"use client";
import { ClipboardEdit, Trash } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { getUserRoleByCode } from "~/server/utils/roles";
import { api } from "~/trpc/react";
import UserModal from "../modals/userModal";
import { formatDate } from "../../_utils/dateFunctions";

const UserTable = () => {
  const { data: users } = api.user.list.useQuery({});
  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Usuarios</h1>
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
              <th>Provider</th>
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
                  <td className="justify-center">
                    <span className="join">
                      {user.role.map((role) => {
                        const userRole = getUserRoleByCode(role.roleId);

                        return (
                          userRole && (
                            <span
                              key={Math.random()}
                              className={`badge join-item badge-outline badge-md rounded-md px-2 py-1 font-extrabold shadow
                        ${
                          userRole === "admin" && "badge-success text-white"
                        }                  
                        ${userRole === "editor" && "badge-secondary text-white"}
                        ${userRole === "viewer" && "badge-neutral text-white"}
                        `}
                            >
                              {userRole}
                            </span>
                          )
                        );
                      })}
                    </span>
                  </td>
                  <td className="badge capitalize">
                    {user.account[0]?.provider}
                  </td>
                  <td>{formatDate(user.createdAt)}</td>
                  <th className="flex gap-1">
                    <button
                      className="btn btn-info rounded-md text-white"
                      onClick={() => {
                        const dialog = document.getElementById(
                          user.id,
                        ) as HTMLDialogElement;
                        dialog.showModal();
                      }}
                    >
                      <ClipboardEdit size={15} />
                    </button>
                    <UserModal user={user} />
                    <button
                      onClick={() => toast("Hello")}
                      className="btn btn-error rounded-md text-white"
                    >
                      <Trash size={15} />
                    </button>
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
