"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  FilePlus2,
  InfoIcon,
  Loader2,
  ServerCrash,
  XCircle,
} from "lucide-react";
import { ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema } from "pg/generated/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";

export default function ColorantesCreateForm() {
  type Input = z.infer<
    typeof ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema
  >;
  const resolver = zodResolver(
    ColorantUncheckedCreateWithoutRegcolcolorantsInputSchema,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const { mutate, isLoading, isSuccess, error } =
    api.colorante.create.useMutation();

  if (errors) {
    console.log(errors);
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    mutate(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex w-2/3 flex-col items-start justify-center gap-2`}
      >
        <div className="flex ">
          <input
            type="text"
            id="shortcode"
            {...register("shortcode", { required: true })}
            placeholder="Codigo"
            className="mr-2 w-1/4 rounded-md border p-2"
          />
          <div className="flex">
            <input
              type="text"
              id="description"
              {...register("description", { required: true })}
              placeholder="Descripccion"
              className="mr-2 rounded-md border p-2"
            />
          </div>
        </div>
        <p className="flex gap-2 pb-4 pt-2 font-light italic ">
          <span className="text-greenAccent">
            <InfoIcon />
          </span>
          Unidades en gramos
        </p>
        <div className="flex">
          <div className="flex justify-start">
            <input
              type="text"
              id="gramUG"
              {...register("gramUG", { required: true })}
              placeholder="Unidad Grande"
              className="mr-2  rounded-md border p-2"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              id="gramUP"
              {...register("gramUP", { required: true })}
              placeholder="Unidad Pqueña"
              className="mr-2  rounded-md border p-2"
            />
          </div>
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
          {errors.shortcode?.message ? (
            <li className="flex gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.shortcode?.message}
            </li>
          ) : (
            ""
          )}{" "}
          {errors.description?.message ? (
            <li className="flex gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.description?.message}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}
