"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegcolCreateManyInputSchema,
  RegcolCreateInputSchema,
  type RegcolbasesCreateManyRegcolInputSchema,
  type RegcolcolorantsCreateManyRegcolInputSchema,
} from "pg/generated/zod";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Decimal } from "decimal.js";

import { type z, ZodError } from "zod";
import { api } from "~/trpc/react";
import HandleStatus from "../../handleStatus";
import { FilePlus2, Loader2, X } from "lucide-react";
import { toInteger } from "lodash";
import { ToastContainer, toast } from "react-toastify";

export default function RegistroCreateForm() {
  type Input = z.infer<typeof RegcolCreateManyInputSchema>;
  type FormatedData = z.infer<typeof RegcolCreateInputSchema>;
  type FormatedBase = z.infer<typeof RegcolbasesCreateManyRegcolInputSchema>;
  type FormatedColor = z.infer<
    typeof RegcolcolorantsCreateManyRegcolInputSchema
  >;
  type ColorantItem = { colorantId: number; amount: Decimal };
  type BaseItem = { baseId: number; amount: Decimal };
  const resolver = zodResolver(RegcolCreateManyInputSchema);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Input>({ resolver });

  //load needed
  const { data: Listbase, status: baseStatus } = api.base.list.useQuery();
  const { data: Listcolorante, status: coloranteStatus } =
    api.colorante.listActive.useQuery();

  // const { mutate, isLoading } = api.registro.create.useMutation();
  const { mutate, isLoading } = api.registro.create.useMutation();

  const [baseSelectedArray, setBaseSelectedArray] = useState<BaseItem[]>([]);
  const [coloranteSelectedArray, setColoranteSelectedArray] = useState<
    ColorantItem[]
  >([]);

  const handleColorantPush = (item: ColorantItem) => {
    setColoranteSelectedArray([...coloranteSelectedArray, item]);
  };
  const handleColorantRemove = (item: ColorantItem) => {
    setColoranteSelectedArray(
      coloranteSelectedArray.filter((colorant) => colorant !== item),
    );
  };

  HandleStatus({ status: baseStatus });
  HandleStatus({ status: coloranteStatus });

  if (!Listcolorante) HandleStatus({ status: "loading" });

  const handleColorantSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedColorantId = parseInt(event.target.value, 10);
    const selectedColorant = Listcolorante?.find(
      (colorant) => colorant.id === selectedColorantId,
    );

    if (selectedColorant) {
      // Adjust this based on your ColorantItem structure
      const newItem: ColorantItem = {
        colorantId: selectedColorant.id,
        amount: new Decimal(0), // You might want to set a default amount or let the user input it
      };

      handleColorantPush(newItem);
    }
  };
  const handleBaseSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBaseId = parseInt(event.target.value, 10);
    const selectedBase = Listbase?.find((base) => base.id === selectedBaseId);

    if (selectedBase) {
      // Adjust this based on your BaseType structure
      const newItem: BaseItem = {
        baseId: selectedBase.id,
        amount: new Decimal(0), // You might want to set a default amount or let the user input it
      };

      handleBasePush(newItem);
    }
  };

  const handleBaseAmountChange = (change: BaseItem) => {
    const updatedArray = baseSelectedArray.map((item) =>
      item.baseId === change.baseId ? { ...item, amount: change.amount } : item,
    );
    setBaseSelectedArray(updatedArray);
  };

  const handleAmountChange = (change: ColorantItem) => {
    const updatedArray = coloranteSelectedArray.map((item) =>
      item.colorantId === change.colorantId
        ? { ...item, amount: change.amount }
        : item,
    );
    setColoranteSelectedArray(updatedArray);
  };

  const handleBasePush = (item: BaseItem) => {
    // Check if the base with the same ID is already in the array
    const isBaseAlreadySelected = baseSelectedArray.some(
      (base) => base.baseId === item.baseId,
    );

    // If not already selected, add it to the array
    if (!isBaseAlreadySelected) {
      setBaseSelectedArray([...baseSelectedArray, item]);
    }
  };

  const handleBaseRemove = (item: BaseItem) => {
    // Check if the base with the same ID is in the array
    const isBaseSelected = baseSelectedArray.some(
      (base) => base.baseId === item.baseId,
    );

    // If it's selected, remove it from the array
    if (isBaseSelected) {
      setBaseSelectedArray(
        baseSelectedArray.filter((base) => base.baseId !== item.baseId),
      );
    }
  };

  if (errors) {
    console.log(errors);
  }

  const onSubmit: SubmitHandler<Input> = (data) => {
    const bases = baseSelectedArray.map((item): FormatedBase => {
      return {
        baseId: item.baseId,
        amount: new Decimal(item.amount),
      };
    });

    const colorantes = coloranteSelectedArray.map((item): FormatedColor => {
      return {
        colorantId: item.colorantId,
        amount: new Decimal(item.amount),
      };
    });
    const dataFormated: FormatedData = {
      ...data,
      regcolbases: { createMany: { data: [...bases] } },
      regcolcolorants: { createMany: { data: [...colorantes] } },
    };
    try {
      const parsed = RegcolCreateInputSchema.parse(dataFormated);
      mutate(parsed, {
        onSuccess: () => {
          {
            toast.success(
              `Color ${parsed.description} se a guardado correctamente`,
            );
            reset();
            setBaseSelectedArray([]);
            setColoranteSelectedArray([]);
          }
        },
        onError: (error) => toast.error(`Error ${error.data?.code}`),
      });
    } catch (err) {
      if (err instanceof ZodError) {
        toast.error(err.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-start justify-center gap-2`}
    >
      <ToastContainer />
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="join max-w-sm">
            <input
              autoComplete="off"
              type="text"
              id="R"
              onChange={(e) => setValue("R", toInteger(e.target.value))}
              placeholder="R"
              className={`join-item w-1/3 rounded-md border p-2 text-center ${
                errors.R ? "input-error" : "focus:input-accent"
              }`}
            />
            <input
              autoComplete="off"
              type="text"
              id="G"
              onChange={(e) => setValue("G", toInteger(e.target.value))}
              placeholder="G"
              className={`join-item w-1/3 rounded-md border p-2 text-center ${
                errors.R ? "input-error" : "focus:input-accent"
              }`}
            />
            <input
              autoComplete="off"
              type="text"
              id="B"
              onChange={(e) => setValue("B", toInteger(e.target.value))}
              placeholder="B"
              className={`join-item w-1/3 rounded-md border p-2 text-center ${
                errors.B ? "input-error" : "focus:input-accent"
              }`}
            />
          </div>
          <input
            autoComplete="off"
            type="text"
            id="description"
            {...register("description", { required: true })}
            placeholder="Descripccion"
            className={`mr-2 w-full max-w-sm rounded-md border p-2 ${
              errors.description ? "input-error" : "focus:input-accent"
            }`}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4 lg:flex-row">
        {/* 
      
      Colorantes
      
      
      */}
        <div className="w-full lg:w-1/2">
          <h2 className="stat-title py-2">Colorantes</h2>
          <div className="flex flex-col">
            <label htmlFor="colorantSelector" className="mb-2">
              Selecciona un colorante:
            </label>
            <select
              id="colorantSelector"
              onChange={handleColorantSelect}
              className="w-full max-w-md rounded-md border p-2 focus:input-accent"
            >
              <option value="" disabled defaultValue={""}>
                Elige un colorante
              </option>
              {Listcolorante?.map((colorant) => (
                <option key={colorant.id} value={colorant.id}>
                  {colorant.shortcode} - {colorant.description}
                </option>
              ))}
            </select>
            <div>
              <h3 className="my-2">Colorantes Seleccionados:</h3>
              <ul>
                {coloranteSelectedArray.map((item) => (
                  <li
                    key={item.colorantId}
                    className="join items-center rounded-sm p-1"
                  >
                    {/* You can display more information about the selected colorante if needed */}
                    <span className="w-16 rounded-l-md bg-graySecondary/10 px-2 py-2 ">
                      {
                        Listcolorante?.find(
                          (colorant) => colorant.id === item.colorantId,
                        )?.shortcode
                      }
                    </span>
                    <input
                      type="text"
                      onChange={(e) =>
                        handleAmountChange({
                          colorantId: item.colorantId,
                          amount: new Decimal(e.target.value),
                        })
                      }
                      placeholder="0.0"
                      className="w-16 rounded-l-md border p-2 text-center focus:input-accent"
                    />
                    <span className="flex bg-graySecondary p-2 text-white">
                      GR
                      <X
                        className="text-error"
                        onClick={() => handleColorantRemove(item)}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* 

Bases

*/}
        <div className="w-full lg:w-1/2">
          <h2 className="stat-title py-2">Bases</h2>
          <div className="flex flex-col">
            <label htmlFor="baseSelector" className="mb-2">
              Selecciona una base:
            </label>
            <select
              id="baseSelector"
              onChange={handleBaseSelect}
              className="w-full max-w-md rounded-md border p-2 focus:input-accent"
            >
              <option value="" disabled defaultValue={""}>
                Elige una base
              </option>
              {Listbase?.map((base) => (
                <option key={base.id} value={base.id}>
                  {base.reforiginal} {base.tbase.description} {base.slang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="my-2">Bases Seleccionadas:</h3>
            <ul>
              {baseSelectedArray.map((item) => (
                <li
                  key={item.baseId}
                  className="join mb-1 flex items-center rounded-sm "
                >
                  {/* You can display more information about the selected base if needed */}
                  <div className="join join-vertical">
                    <span className="w-full rounded bg-graySecondary/10 py-2 pl-2 ">
                      {
                        Listbase?.find((base) => base.id === item.baseId)?.tbase
                          .shortcode
                      }
                      {" - "}
                      {Listbase?.find((base) => base.id === item.baseId)?.slang}
                    </span>
                    <div className="join max-h-max">
                      <input
                        type="text"
                        placeholder="0.0"
                        onChange={(e) =>
                          handleBaseAmountChange({
                            baseId: item.baseId,
                            amount: new Decimal(e.target.value),
                          })
                        }
                        className=" border p-2 focus:input-accent"
                      />
                      <span className="flex w-full justify-between bg-graySecondary p-2 text-white">
                        LB
                        <X
                          className="text-error"
                          onClick={() => handleBaseRemove(item)}
                        />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
  );
}
