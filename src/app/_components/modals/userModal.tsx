import Image from "next/image";
import { getUserRoleByCode } from "~/server/utils/roles";
import { ExposeRole } from "../../../server/utils/roles";
import { type UserWithPartialRelations } from "pg/generated/zod";
import { X } from "lucide-react";

const UserModal = ({ user }: { user: UserWithPartialRelations }) => {
  return (
    <dialog id={user.id} className="modal">
      <div className="modal-box p-0">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 z-50 hover:text-error">
            <X />
          </button>
        </form>
        <div className="card card-side ">
          <div className="card-body">
            <div className="flex w-full flex-col">
              <div className="card flex-grow justify-center  rounded-box  p-4">
                <div className="divider divider-vertical">
                  <h3 className="badge justify-center hover:cursor-pointer">
                    Informacion Personal
                  </h3>
                </div>
                <div className="flex flex-col items-center gap-2 p-4">
                  <div className="glass flex gap-2 rounded-full bg-greenAccent/20 p-1">
                    <Image
                      className="rounded-full"
                      width={100}
                      height={100}
                      src={user.image ?? ""}
                      alt={user.name ?? ""}
                    />
                  </div>
                  <h4 className="text-center text-xl">{user.name}</h4>
                  <p className="badge justify-center bg-greenAccent/10 text-accent hover:cursor-pointer">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="card flex-grow  rounded-box  p-4">
                <div className="divider divider-vertical">
                  <h3 className="badge justify-center hover:cursor-pointer">
                    Roles
                  </h3>
                </div>
                <div className="join justify-center ">
                  {ExposeRole.map((exRole) => {
                    const checked =
                      !!user.role?.find(
                        (x) => getUserRoleByCode(x.roleId ?? "") === exRole,
                      ) ?? false;

                    return (
                      <span
                        className={`badge join-item badge-outline badge-md rounded-md px-2 py-1 font-extrabold text-gray-400 shadow
                                      ${
                                        exRole === "admin" &&
                                        checked &&
                                        "badge-success text-white"
                                      }                  
                                      ${
                                        exRole === "editor" &&
                                        checked &&
                                        "badge-secondary text-white"
                                      }
                                      ${
                                        exRole === "viewer" &&
                                        checked &&
                                        "badge-neutral text-white"
                                      }
                                      `}
                        key={exRole}
                      >
                        {exRole}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UserModal;
