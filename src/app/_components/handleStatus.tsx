import { Loader2, XCircle } from "lucide-react";
import React from "react";

type Props = { status: "error" | "success" | "loading" };

export default function HandleStatus({ status }: Props) {
  switch (status) {
    case "loading":
      return (
        <div className="flex h-3/4 items-center justify-center bg-white py-24 shadow-md lg:max-w-screen-xl">
          <Loader2 size={200} className="animate-spin text-greenAccent" />
        </div>
      );
    case "error":
      return (
        <p className="text-xl font-semibold text-red-500">
          <XCircle /> No se pudo cargar el formulario, inténtelo más tarde
        </p>
      );
  }
}
