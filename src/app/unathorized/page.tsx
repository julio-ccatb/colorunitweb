"use client";
import Link from "next/link";
import useRedirectAfterSomeSeconds from "../_components/hooks/redirectHook";
import { XOctagon } from "lucide-react";

const Unauthorized = () => {
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/", 5);

  return (
    <div className="flex h-screen w-screen bg-error">
      <div className="modal modal-open rounded-l p-6">
        <div className="rounded-md bg-white p-4">
          <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold text-error">
            <XOctagon /> Unauthorized Access
          </h2>
          <p className="py-2 text-xl text-error">
            Contact your administrator to know more
          </p>
          <p className="text-graySecondary">
            Redirecting to{" "}
            <Link className="text-info" href={"/dashboard/home"}>
              Home
            </Link>{" "}
            {secondsRemaining}s
          </p>
          {/* Puedes agregar más componentes o estilos aquí */}
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
