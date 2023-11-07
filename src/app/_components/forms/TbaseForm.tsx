import { zodResolver } from "@hookform/resolvers/zod";
import { FilePlus2 } from "lucide-react";
import { TBaseCreateWithoutBasesInputObjectSchema } from "pg/generated-zod-schemas/schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function TbaseCreateForm() {
  type Input = z.infer<typeof TBaseCreateWithoutBasesInputObjectSchema>;
  const resolver = zodResolver(TBaseCreateWithoutBasesInputObjectSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 flex w-1/2 flex-col items-start justify-center gap-2"
    >
      <button
        type="submit"
        className=" border-1 m-4 flex items-center justify-center gap-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
      >
        <span>Add</span> <FilePlus2 size={15} />
      </button>
      <div>
        <input
          type="text"
          id="description"
          {...register("description")}
          placeholder="Description"
          className="mr-2 rounded-md border p-2"
        />
        <input
          type="text"
          id="shortcode"
          {...register("shortcode")}
          placeholder="Shortcode"
          className="mr-2 rounded-md border p-2"
        />
      </div>
      <div>
        <input
          type="text"
          id="peso1"
          {...register("peso1")}
          placeholder="Pesos 1"
          className="mr-2 rounded-md border p-2"
        />
        <input
          type="text"
          id="peso2"
          {...register("peso2")}
          placeholder="Pesos 2"
          className="mr-2 rounded-md border p-2"
        />
      </div>
      <div>
        <input
          type="text"
          id="peso3"
          {...register("peso3")}
          placeholder="Pesos 3"
          className="mr-2 rounded-md border p-2"
        />
        <input
          type="text"
          id="peso4"
          {...register("peso4")}
          placeholder="Pesos 4"
          className="mr-2 rounded-md border p-2"
        />
        <input
          type="text"
          id="peso5"
          {...register("peso5")}
          placeholder="Pesos 5"
          className="mr-2 rounded-md border p-2"
        />
      </div>
    </form>
  );
}
