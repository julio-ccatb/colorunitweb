"use client";
import { CustomerCreateInputSchema, type Customer } from "pg/generated/zod";
import { type Dispatch, type SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "~/trpc/react";
import { toast } from "react-toastify";

const CreateCustomerModal = ({
  setCustomer,
}: {
  setCustomer: Dispatch<SetStateAction<Customer | undefined>>;
}) => {
  type Input = Customer;

  const resolver = zodResolver(CustomerCreateInputSchema);

  // const resolver = async (data: any, context: any, options: any) => {
  //   // you can debug your validation schema here
  //   console.log("formData", data);
  //   console.log(
  //     "validation result",
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //     await zodResolver(CustomerCreateInputSchema)(data, context, options),
  //   );
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  //   return zodResolver(CustomerCreateInputSchema)(data, context, options);
  // };
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    resetField,
    formState: { errors },
  } = useForm<Input>({
    resolver,
    defaultValues: { lastName: "" },
    // reValidateMode: "onSubmit",
  });

  const { mutate } = api.customer.create.useMutation();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    toast("Creando cliente", { toastId: 111 });
    mutate(data, {
      onSuccess: (_data) => {
        toast.update(111, {
          type: "success",
          render: `Se a creado correctamente ${_data.firstName}`,
        });
        setCustomer(_data);
        Exit();
      },
      onError: (err) => {
        toast.update(111, { type: "error", render: err.message });
      },
    });
  };

  const Exit = () => {
    reset();
    const dialog = document.getElementById(
      "createCustomer",
    ) as HTMLDialogElement;
    reset();
    dialog.close();
  };

  return (
    <dialog id="createCustomer" className="modal">
      <div className="modal-box max-w-xl">
        <h3 className="text-lg font-bold">Nuevo Cliente</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="join my-2 w-full rounded md:join-horizontal ">
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                placeholder={watch().isCompany ? "Nombre de empresa" : "Nombre"}
                className={`join-item  my-2  w-full  rounded-md border p-2 sm:my-0 ${
                  errors.firstName ? "input-error" : "focus:input-accent"
                }`}
              />

              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                placeholder="Apellido"
                className={`join-item my-2 w-full border p-2 sm:my-0 ${
                  errors.lastName ? "input-error" : "focus:input-accent"
                } ${watch().isCompany ? "hidden" : ""}`}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                id="id"
                {...register("id")}
                placeholder={watch().isCompany ? "RNC" : "Cedula / Pasaporte"}
                className={`my-2  rounded-md border p-2 sm:my-0 ${
                  errors.id ? "input-error" : "focus:input-accent"
                }`}
              />
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Email"
                className={`my-2  rounded-md border p-2 sm:my-0 ${
                  errors.email ? "input-error" : "focus:input-accent"
                }`}
              />
              <div className="mt-2 flex items-center gap-2">
                <label htmlFor="isCompany">Es Empresa?</label>
                <input
                  defaultChecked={false}
                  className="checkbox"
                  type="checkbox"
                  id="isCompany"
                  {...register("isCompany", {
                    onChange() {
                      resetField("lastName");
                    },
                  })}
                />
              </div>

              <div className="flex w-full gap-2 ">
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
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CreateCustomerModal;
