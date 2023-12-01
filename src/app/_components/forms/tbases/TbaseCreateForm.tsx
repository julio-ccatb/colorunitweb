import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus2, InfoIcon, Loader2, ServerCrash } from "lucide-react";
import { TbaseCreateWithoutBaseInputSchema } from "pg/generated/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";
import type TbaseSchema from "pg/generated/zod/modelSchema/TbaseSchema";
import { toast } from "react-toastify";

export default function TbaseCreateForm() {
  type Input = z.infer<typeof TbaseSchema>;
  const resolver = zodResolver(TbaseCreateWithoutBaseInputSchema);

  const { mutate, isLoading } = api.base.createTypeBase.useMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({ resolver });

  if (errors) {
    switch (errors) {
      case errors.peso1:
        toast.error(errors.peso1?.message);
    }
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    mutate(data, {
      onSuccess: () => {
        {
          toast.success(`Tipo ${data.description} se a guardado correctamente`);
          reset();
        }
      },
      onError: (error) => toast.error(`Error ${error.message}`),
    });
  };

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mb-4 flex w-1/2 flex-col items-start justify-center gap-2`}
      >
        <div>
          <input
            autoComplete="off"
            type="text"
            id="description"
            {...register("description")}
            placeholder="Descripccion"
            className={`mr-2 rounded-md border p-2 ${
              errors.description ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
            autoComplete="off"
            type="text"
            id="shortcode"
            {...register("shortcode")}
            placeholder="Codigo"
            className={`mr-2 rounded-md border p-2 ${
              errors.shortcode ? "input-error" : "focus:input-accent"
            }`}
          />
        </div>
        <div>
          <p className="flex gap-2 pb-4 pt-2 font-light italic ">
            <span className="text-info">
              <InfoIcon />
            </span>
            De mayor a menor
          </p>
          <input
            autoComplete="off"
            type="text"
            id="peso1"
            {...register("peso1")}
            placeholder="Peso 1"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso1 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
            autoComplete="off"
            type="text"
            id="peso2"
            {...register("peso2")}
            placeholder="Peso 2"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso2 ? "input-error" : "focus:input-accent"
            }`}
          />
        </div>
        <div>
          <input
            autoComplete="off"
            type="text"
            id="peso3"
            {...register("peso3")}
            placeholder="Peso 3"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso3 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
            autoComplete="off"
            type="text"
            id="peso4"
            {...register("peso4")}
            placeholder="Peso 4"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso4 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
            autoComplete="off"
            type="text"
            id="peso5"
            {...register("peso5")}
            placeholder="Peso 5"
            className={`mr-2 mt-2 rounded-md border p-2 ${
              errors.peso5 ? "input-error" : "focus:input-accent"
            }`}
          />
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
    </div>
  );
}
