"use client";
import { ClipboardEdit, Trash } from "lucide-react";
import Image from "next/image";
import { toast } from "react-toastify";
import { codeToRole, getUserRoleByCode } from "~/server/utils/roles";
import { api } from "~/trpc/react";
import { ExposeRole } from "../../../server/utils/roles";

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
                    <span className="join">
                      {user.roles.map((role) => {
                        const userRole = getUserRoleByCode(role.roleId);

                        return (
                          <span
                            key={Math.random()}
                            className={`badge join-item badge-md px-2 py-1 font-extrabold shadow
                        ${
                          userRole === "admin" && "badge-success text-white"
                        }                  
                        ${userRole === "editor" && "badge-secondary text-white"}
                        ${userRole === "viewer" && "badge-neutral text-white"}
                        `}
                          >
                            {userRole}
                          </span>
                        );
                      })}
                    </span>
                  </td>
                  <td>{user.id}</td>
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
                    <dialog id={user.id} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <div className="card card-side ">
                          <figure className="relative w-1/3">
                            <Image fill src={user.image ?? ""} alt="Movie" />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <div className="flex flex-col gap-2">
                              {ExposeRole.map((exRole) => {
                                const checked =
                                  !!user.roles.find(
                                    (x) =>
                                      getUserRoleByCode(x.roleId) === exRole,
                                  ) ?? false;

                                return (
                                  <div
                                    key={exRole}
                                    className="form-control flex-row items-center gap-1"
                                  >
                                    <label className="label cursor-pointer">
                                      <input
                                        type="checkbox"
                                        className="checkbox"
                                        checked={checked}
                                      />
                                    </label>
                                    <span className="label-text">{exRole}</span>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="card-actions justify-end">
                              <button className="btn btn-primary">
                                Actualizar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>
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
