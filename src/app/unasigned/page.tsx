import { LogOut } from "lucide-react";
import Link from "next/link";

const Unasigned = () => {
  return (
    <div className=" flex h-screen items-center justify-center bg-gradient-to-r from-grayPrimary  to-greenAccent  text-white">
      <div className="card items-center">
        <div className="alert ml-3 flex flex-col gap-4">
          <p className="max-w-sm text-center text-sm leading-5 text-yellow-700">
            Your user roles haven{`'`}t been assigned. Please contact your
            administrator to set up your roles.
          </p>
          <Link
            href={"/api/auth/signout"}
            className={`btn btn-error btn-sm flex rounded-md px-3 text-white`}
          >
            <LogOut size={15} />
            Cerrrar Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unasigned;
