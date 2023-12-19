"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus2, Loader2 } from "lucide-react";
import { BaseUncheckedCreateWithoutRegcolbasesInputSchema } from "pg/generated/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";
import { type Tbase } from "../../../../../prisma/generated/zod/modelSchema/TbaseSchema";
import { useState } from "react";
import HandleStatus from "../../handleStatus";
import { toast } from "react-toastify";
import {
  type RefetchOptions,
  type RefetchQueryFilters,
} from "@tanstack/react-query";

export default function BaseCreateForm({
  refetch,
}: {
  refetch?: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<unknown>;
}) {
  type Input = z.infer<typeof BaseUncheckedCreateWithoutRegcolbasesInputSchema>;
  const resolver = zodResolver(
    BaseUncheckedCreateWithoutRegcolbasesInputSchema,
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const { mutate, isLoading } = api.base.create.useMutation();
  const { data: listBases, status } = api.base.listTypeBase.useQuery();

  const [selected, setSelected] = useState<Tbase>();

  if (errors) {
    if (errors.reforiginal?.message)
      toast.warn(`Descripcion is ${errors.reforiginal?.message}`, {
        toastId: "errreforiginal",
      });
    if (errors.slang?.message)
      toast.warn(`Codigo is ${errors.slang?.message}`, {
        toastId: "errslang",
      });
    if (errors.tbaseId)
      toast.warn(`Tipo de base is ${errors.tbaseId?.message}`, {
        toastId: "errtbaseId",
      });
  }
  const onSubmit: SubmitHandler<Input> = (data) => {
    if (selected && data.reforiginal && data.slang)
      mutate(
        { data },
        {
          onSuccess: () => {
            {
              toast.success(
                `Base ${data.reforiginal} se a guardado correctamente`,
              );
              if (refetch) void refetch();
              reset();
            }
          },
          onError: (error) => toast.error(`Error ${error.data?.code}`),
        },
      );
  };

  if (status === "error") return HandleStatus({ status });
  return (
    <div className="flex flex-1">
      {status === "success" ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`mb-4 flex w-2/3 flex-col items-start justify-center gap-2`}
        >
          <input
            autoComplete="off"
            type="text"
            id="slang"
            {...register("slang")}
            placeholder="Codigo"
            className={`mr-2  rounded-md border p-2 ${
              errors.slang ? "input-error" : "focus:input-accent"
            }`}
          />
          <div className="sm:flex">
            <input
              autoComplete="off"
              type="text"
              id="reforiginal"
              {...register("reforiginal")}
              placeholder="Descripccion"
              className={`mr-2  rounded-md border p-2 ${
                errors.reforiginal ? "input-error" : "focus:input-accent"
              }`}
            />
            <input
              autoComplete="off"
              type="text"
              id="peso"
              {...register("peso")}
              placeholder="Peso"
              className={`mr-2  rounded-md border p-2 ${
                errors.reforiginal ? "input-error" : "focus:input-accent"
              }`}
            />

            <select
              id="tbaseId"
              name="tbaseId"
              value={selected?.id ?? ""}
              onChange={(e) => {
                const selectedId = Number(e.target.value);
                const selectedItem = listBases.find(
                  (item) => item.id === selectedId,
                );
                setValue("tbaseId", selectedId);
                setSelected(selectedItem);
              }}
              className={`select select-accent my-2 w-full max-w-xs sm:m-0${
                errors.tbaseId ? "select-error" : ""
              } `}
            >
              <option className="" value="" disabled>
                Tipo de base
              </option>
              {listBases?.map((item) => (
                <option
                  className="   text-graySecondary hover:bg-greenAccent "
                  key={item.id}
                  value={item.id}
                >
                  {item.shortcode} - {item.description}
                </option>
              ))}
            </select>
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
      ) : (
        <div className="skeleton my-4 h-60 w-full"></div>
      )}
    </div>
  );
}
