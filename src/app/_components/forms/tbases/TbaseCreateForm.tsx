import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  FilePlus2,
  InfoIcon,
  Loader2,
  ServerCrash,
  XCircle,
} from "lucide-react";
import { TbaseCreateWithoutBaseInputSchema } from "pg/generated/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";

export default function TbaseCreateForm() {
  type Input = z.infer<typeof TbaseCreateWithoutBaseInputSchema>;
  const resolver = zodResolver(TbaseCreateWithoutBaseInputSchema);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const { mutate, isLoading, isSuccess, error, status } =
    api.base.createTypeBase.useMutation();

  if (isSuccess) {
    clearErrors();
    reset();
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    mutate(data);
  };

  if (status == "loading")
    return <Loader2 size={50} className="animate-spin text-greenAccent" />;

  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`mb-4 flex w-1/2 flex-col items-start justify-center gap-2`}
      >
        <div>
          <input
            type="text"
            id="description"
            {...register("description")}
            placeholder="Descripccion"
            className={`mr-2 rounded-md border p-2 ${
              errors.description ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
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
            type="text"
            id="peso1"
            {...register("peso1")}
            placeholder="Peso 1"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso1 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
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
            type="text"
            id="peso3"
            {...register("peso3")}
            placeholder="Peso 3"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso3 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
            type="text"
            id="peso4"
            {...register("peso4")}
            placeholder="Peso 4"
            className={`mr-2 rounded-md border p-2 ${
              errors.peso4 ? "input-error" : "focus:input-accent"
            }`}
          />
          <input
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
