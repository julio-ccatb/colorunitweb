import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, FilePlus2, InfoIcon, XCircle } from "lucide-react";
import { TbaseCreateWithoutBaseInputSchema } from "pg/generated/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type z } from "zod";
import { api } from "~/trpc/react";
export default function TbaseCreateForm() {
  type Input = z.infer<typeof TbaseCreateWithoutBaseInputSchema>;
  const resolver = zodResolver(TbaseCreateWithoutBaseInputSchema);

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const { mutate, isLoading, isSuccess } =
    api.base.createTypeBase.useMutation();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    mutate(data);
  };
  if (isSuccess) {
    clearErrors();
    reset();
  }

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
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            id="shortcode"
            {...register("shortcode")}
            placeholder="Codigo"
            className="mr-2 rounded-md border p-2"
          />
        </div>
        <div>
          <p className="flex gap-2 pb-4 pt-2 font-light italic ">
            <span className="text-greenAccent">
              <InfoIcon />
            </span>
            De mayor a menor
          </p>
          <input
            type="text"
            id="peso1"
            {...register("peso1")}
            placeholder="Peso 1"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            id="peso2"
            {...register("peso2")}
            placeholder="Peso 2"
            className="mr-2 rounded-md border p-2"
          />
        </div>
        <div>
          <input
            type="text"
            id="peso3"
            {...register("peso3")}
            placeholder="Peso 3"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            id="peso4"
            {...register("peso4")}
            placeholder="Peso 4"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            id="peso5"
            {...register("peso5")}
            placeholder="Peso 5"
            className="mr-2 mt-2 rounded-md border p-2"
          />
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className=" border-1 m-4 flex items-center justify-center gap-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
        >
          <span>Add</span> <FilePlus2 size={15} />
        </button>
      </form>
      <div className="gap-2` mb-4 flex w-1/2  ">
        <ul className="flex flex-col gap-2 rounded-md  p-4">
          {isSuccess ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-greenAccent shadow-md transition-all duration-300">
              <CheckCircle /> Saved
            </li>
          ) : (
            ""
          )}
          {errors.description?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.description?.message}
            </li>
          ) : (
            ""
          )}
          {errors.shortcode?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.shortcode?.message}
            </li>
          ) : (
            ""
          )}
          {errors.peso1?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.peso1?.message}
            </li>
          ) : (
            ""
          )}
          {errors.peso2?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.peso2?.message}
            </li>
          ) : (
            ""
          )}
          {errors.peso3?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.peso3?.message}
            </li>
          ) : (
            ""
          )}
          {errors.peso4?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.peso4?.message}
            </li>
          ) : (
            ""
          )}
          {errors.peso5?.message ? (
            <li className="flex translate-y-3 gap-2 rounded-md bg-white p-2 text-red-500 shadow-md transition-all duration-300">
              <XCircle /> {errors.peso5?.message}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}
