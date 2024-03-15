"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Decimal from "decimal.js";
import { type Customer, type Extended, type Tbase } from "pg/generated/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "~/trpc/react";
import ExtendedCreateWithoutCustomerInputSchema from "../../../../prisma/generated/zod/inputTypeSchemas/ExtendedCreateWithoutCustomerInputSchema";

const CreateExtendedModal = ({ customer }: { customer: Customer }) => {
  type Input = Omit<Extended, "customerId" | "tbaseId">;

  const resolver = zodResolver(ExtendedCreateWithoutCustomerInputSchema);

  // const resolver = async (data: any, context: any, options: any) => {
  //   // you can debug your validation schema here
  //   console.log("formData", data);
  //   console.log(
  //     "validation result",
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     await zodResolver(ExtendedCreateWithoutCustomerInputSchema)(
  //       data,
  //       context,
  //       options,
  //     ),
  //   );
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //   return zodResolver(ExtendedCreateWithoutCustomerInputSchema)(
  //     data,
  //     context,
  //     options,
  //   );
  // };
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    resetField,
    formState: { errors },
  } = useForm<Input>({
    resolver,
    // reValidateMode: "onSubmit",
  });

  const { mutate } = api.exteded.create.useMutation();
  const { data: tbases } = api.base.listTypeBase.useQuery();
  const [tbaseSelected, setTbaseSelected] = useState<Tbase>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    toast("Creando cliente", { toastId: 111 });
    mutate(
      {
        ...data,
        tbase: { connect: { id: tbaseSelected?.id } },
        customer: { connect: { id: customer.id } },
      },
      {
        onSuccess: (_data) => {
          toast.update(111, {
            type: "success",
            render: `Se a creado correctamente ${_data.name}`,
          });
          Exit();
        },
        onError: (err) => {
          toast.update(111, { type: "error", render: err.message });
        },
      },
    );
  };

  const Exit = () => {
    reset();
    const dialog = document.getElementById(
      "createExtended",
    ) as HTMLDialogElement;
    reset();
    dialog.close();
  };

  return (
    <dialog id="createExtended" className="modal">
      <div className="modal-box max-w-xl">
        <h3 className="py-4 text-lg font-bold">Nuevo Cliente</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Nombre de Extendido"
              className={`join-item  w-full  rounded-md border p-2 sm:my-0 ${
                errors.name ? "input-error" : "focus:input-accent"
              }`}
            />

            <div className="flex min-w-full flex-col justify-between sm:flex-row">
              <div className="join my-2 flex max-w-xs">
                <input
                  type="R"
                  id="R"
                  {...register("R", { valueAsNumber: true, maxLength: 3 })}
                  placeholder="R"
                  className={`join-item  w-16 border p-2 text-center  ${
                    errors.R ? "input-error" : "focus:input-accent"
                  }`}
                />
                <input
                  type="G"
                  id="G"
                  {...register("G", { valueAsNumber: true })}
                  placeholder="G"
                  className={`join-item  w-16  rounded-md border p-2 text-center ${
                    errors.G ? "input-error" : "focus:input-accent"
                  }`}
                />
                <input
                  type="B"
                  id="B"
                  {...register("B", { valueAsNumber: true })}
                  placeholder="B"
                  className={`join-item  w-16  rounded-md border p-2 text-center ${
                    errors.B ? "input-error" : "focus:input-accent"
                  }`}
                />
              </div>
              <div className="join my-2">
                <input
                  type="text"
                  id="brillo"
                  {...register("brillo", {
                    setValueAs: (x) => {
                      try {
                        return new Decimal(x as string);
                      } catch {
                        resetField("brillo");
                      }
                    },
                  })}
                  placeholder="Brillo"
                  className={`join-item  w-32  rounded-md border p-2 text-center ${
                    errors.brillo ? "input-error" : "focus:input-accent"
                  }`}
                />
                <input
                  type="text"
                  id="hex"
                  {...register("HEX")}
                  placeholder="HEX"
                  className={`join-item  w-32  rounded-md border p-2 text-center ${
                    errors.HEX ? "input-error" : "focus:input-accent"
                  }`}
                />
              </div>
            </div>

            <select
              id="tbaseId"
              name="tbaseId"
              value={tbaseSelected?.id ?? ""}
              onChange={(e) => {
                const selectedId = Number(e.target.value);
                const selectedItem = tbases?.find(
                  (item) => item.id === selectedId,
                );
                // setValue("customerId", customer.id);
                // setValue("tbaseId", selectedId);
                setTbaseSelected(selectedItem);
              }}
              className={`select select-bordered  max-w-xs rounded-none`}
            >
              <option className="" value="" disabled>
                Tipo de base
              </option>
              {tbases?.map((item) => (
                <option
                  className="   text-graySecondary hover:bg-greenAccent "
                  key={item.id}
                  value={item.id}
                >
                  {item.shortcode} - {item.description}
                </option>
              ))}
            </select>

            <div className="my-2 flex w-full gap-2 ">
              <button
                type="submit"
                onClick={() => trigger()}
                className="btn btn-outline btn-success w-1/2 hover:!text-white "
              >
                Crear
              </button>
              <button
                className="btn btn-outline btn-error w-1/2 hover:!text-white "
                onClick={Exit}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CreateExtendedModal;
