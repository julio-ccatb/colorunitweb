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
    <div className="flex ">
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
            className={`mr-2 w-1/4 rounded-md border p-2 ${
              errors.shortcode ? "input-error" : "focus:input-accent"
            }`}
          />
          <div className="flex">
            <input
              type="text"
              id="description"
              {...register("description", { required: true })}
              placeholder="Descripccion"
              className={`mr-2 rounded-md border p-2 ${
                errors.description ? "input-error" : "focus:input-accent"
              }`}
            />
          </div>
        </div>
        <p className="flex gap-2 pb-2 pt-2 font-light italic ">
          <span className="text-info">
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
              className={`mr-2  rounded-md border p-2 ${
                errors.gramUG ? "input-error" : "focus:input-accent"
              }`}
            />
          </div>
          <div className="flex">
            <input
              type="text"
              id="gramUP"
              {...register("gramUP", { required: true })}
              placeholder="Unidad Pqueña"
              className={`mr-2  rounded-md border p-2 ${
                errors.gramUP ? "input-error" : "focus:input-accent"
              }`}
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
      <div className="w-max-sm absolute right-2 top-2 flex flex-col gap-2">
        {isSuccess ? (
          <div className="alert alert-success text-white shadow-md">
            <CheckCircle />
            <span>Se a guardado Correctamente</span>
          </div>
        ) : error ? (
          <div className="alert alert-error text-white shadow-md">
            <ServerCrash />
            <span>{error.message}</span>
          </div>
        ) : (
          ""
        )}
        {errors
          ? Object.keys(errors).map((key) => (
              <div key={key} className="alert alert-error shadow-md">
                <XCircle />
                <span>{errors ? `Datos invalidos ${key}` : ""}</span>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
