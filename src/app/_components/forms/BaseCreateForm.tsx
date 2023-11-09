"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  FilePlus2,
  Loader2,
  ServerCrash,
  XCircle,
} from "lucide-react";
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from "pg/generated/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";
import { type Tbase } from "../../../../prisma/generated/zod/modelSchema/TbaseSchema";
import { useState } from "react";

export default function BaseCreateForm() {
  type Input = z.infer<typeof BaseUncheckedCreateWithoutRegcolbasesInputSchema>;
  const resolver = zodResolver(
    BaseUncheckedCreateWithoutRegcolbasesInputSchema,
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const { mutate, isLoading, isSuccess, error } = api.base.create.useMutation();
  const { data: listBases, status } = api.base.listTypeBase.useQuery();

  const [selected, setSelected] = useState<Tbase>();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay =
    status === "success" ? listBases.slice(startIndex, endIndex) : [];

  if (errors) {
    console.log(errors);
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    if (selected) mutate({ data });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (status == "loading")
    return <Loader2 size={50} className="animate-spin text-greenAccent" />;

  if (status == "error")
    return (
      <p className="text-xl font-semibold text-red-500">
        <XCircle /> No se pudo cargar la el formulario, intente mas tarde
      </p>
    );
  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mb-4 flex w-1/2 flex-col items-start justify-center gap-2`}
      >
        <div>
          <input
            type="text"
            id="reforiginal"
            {...register("reforiginal")}
            placeholder="Descripccion"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            id="slang"
            {...register("slang")}
            placeholder="Codigo"
            className="mr-2 rounded-md border p-2"
          />
        </div>

        <table className=" flex border-collapse rounded-md">
          <thead>
            <tr>
              <th className="rounded-tl-md bg-graySecondary p-2 text-greenLight">
                Codigo
              </th>
              <th className="rounded-tr-md bg-graySecondary p-2 text-greenLight">
                Descripccion
              </th>
            </tr>
            <tbody className="">
              {itemsToDisplay?.map((item) => (
                <tr
                  key={item.id}
                  className={`w-full border font-semibold hover:cursor-pointer hover:bg-greenAccent/25 ${
                    selected == item ? "bg-greenAccent" : ""
                  }`}
                  onClick={() => {
                    {
                      setValue("tbaseId", item.id);
                      setSelected(item);
                    }
                  }}
                >
                  <td className="border p-2">{item.shortcode}</td>
                  <td className="border p-2">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </thead>
        </table>
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border-1 mr-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold   text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
          >
            Previous Page
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= listBases.length}
            className="border-1 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
          >
            Next Page
          </button>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className=" border-1 my-4 flex items-center justify-center gap-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
        >
          <span>{isLoading ? "Prcesando..." : "Add"}</span>{" "}
          {isLoading ? (
            <Loader2 className="animate-spin" size={15} />
          ) : (
            <FilePlus2 size={15} />
          )}
        </button>
      </form>
      <div className="gap-2` mb-4 flex w-1/2  ">
        <ul className="flex flex-col gap-2 rounded-md  p-4">
          {isSuccess ? (
            <li className="flex  gap-2 rounded-md bg-white p-2 text-greenAccent shadow-md transition-all duration-300">
              <CheckCircle /> Saved
            </li>
          ) : (
            ""
          )}
          {error ? (
            <li className="flex gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <ServerCrash /> {error.message}
            </li>
          ) : (
            ""
          )}
          {errors.slang?.message ? (
            <li className="flex gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.slang?.message}
            </li>
          ) : (
            ""
          )}{" "}
          {errors.reforiginal?.message ? (
            <li className="flex gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.reforiginal?.message}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}
