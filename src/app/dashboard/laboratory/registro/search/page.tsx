"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "~/trpc/react";
import HandleStatus from "~/app/_components/handleStatus";
import { toInteger } from "lodash";
import { useState } from "react";
import { type Tbase } from "pg/generated/zod";
import { FilePlus2, Loader2 } from "lucide-react";
import { formatDate } from "~/app/_utils/dateFunctions";

const InputSchema = z.object({
  R: z.number().optional().default(0),
  G: z.number().optional().default(0),
  B: z.number().optional().default(0),
  tipo: z.number().optional().default(0),
});

export default function Registropage() {
  type Input = z.infer<typeof InputSchema>;
  const resolver = zodResolver(InputSchema);
  const [selected, setSelected] = useState<Tbase>();

  const { data: tbases, status } = api.base.listTypeBase.useQuery();
  const { data: bases, status: statusBases } = api.base.list.useQuery();
  const { data: coloantes, status: statuscoloreantes } =
    api.colorante.list.useQuery();
  const {
    data: colors,
    mutate,
    error,
    isLoading,
  } = api.registro.findColor.useMutation();

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Input>({ resolver, defaultValues: { R: 0, G: 0, B: 0 } });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    mutate({ ...data });
  };

  if (status != "success") HandleStatus({ status });

  return (
    <div className="rounded-md bg-white p-4 shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Registros</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col items-start justify-center gap-2`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <div className="join">
              <input
                type="text"
                id="R"
                onChange={(e) => setValue("R", toInteger(e.target.value))}
                placeholder="R"
                className={`join-item w-28 border p-2 text-center ${
                  errors.R ? "input-error" : "focus:input-accent"
                }`}
              />
              <input
                type="text"
                id="G"
                onChange={(e) => {
                  console.log(e);
                  setValue("G", toInteger(e.target.value));
                }}
                placeholder="G"
                className={`join-item w-28 border p-2 text-center ${
                  errors.R ? "input-error" : "focus:input-accent"
                }`}
              />
              <input
                type="text"
                id="B"
                onChange={(e) => setValue("B", toInteger(e.target.value))}
                placeholder="B"
                className={`join-item w-28  border p-2 text-center ${
                  errors.B ? "input-error" : "focus:input-accent"
                }`}
              />
              <select
                id="tbaseId"
                name="tbaseId"
                value={selected?.id ?? ""}
                onChange={(e) => {
                  const selectedId = Number(e.target.value);
                  const selectedItem = tbases!.find(
                    (item) => item.id === selectedId,
                  );
                  setValue("tipo", selectedId);
                  setSelected(selectedItem);
                }}
                className={`select select-bordered w-full max-w-xs rounded-none focus:select-accent ${
                  errors.tipo ? "select-error" : ""
                } `}
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
              <button
                disabled={isLoading}
                type="submit"
                className=" border-1 flex items-center justify-center gap-2 rounded-r-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
              >
                <span>{isLoading ? "Prcesando..." : "Search"}</span>{" "}
                {isLoading ? (
                  <Loader2 className="animate-spin" size={15} />
                ) : (
                  <FilePlus2 size={15} />
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Distancia</th>
              <th>Nombre / RGB</th>
              <th>Calidad</th>
              <th>Actualizado</th>
              <th>Peso / Cubeta</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 4 */}
            {colors?.map((color) => {
              return (
                <tr
                  className="items-center justify-center align-middle"
                  key={color.id}
                >
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{color.distancia.toFixed(2)} uD</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div
                          key={color.id}
                          style={{
                            backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
                          }}
                          className="mask mask-circle h-12 w-12 shadow-md"
                        ></div>
                      </div>
                      <div>
                        <div className="font-bold">{color.description}</div>
                        <div className="text-sm opacity-50">
                          [{color.R},{color.G},{color.B}]
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{color.Tbase?.description}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm p-2">
                      {formatDate(color.updatedAt)}
                    </span>
                  </td>
                  <td>{color.pesopromedio?.toString()} LB</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        const dialog = document.getElementById(
                          "my_modal_1",
                        ) as HTMLDialogElement;
                        dialog.showModal();
                      }}
                    >
                      details
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="text-lg font-bold">Resumen</h3>
                        <div className="card w-full shadow-xl">
                          <div className="flex justify-center gap-4  p-4">
                            <div className="flex gap-4">
                              <div
                                style={{
                                  backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
                                }}
                                className="mask mask-squircle h-24 w-24 shadow-lg"
                              />
                              <div className="flex gap-2">
                                <div>
                                  <h4>Resumen</h4>
                                  <div className="text-sm font-light text-graySecondary">
                                    <p>
                                      Encontrado: [{color.R},{color.G},{color.B}
                                      ]
                                    </p>
                                    <p>
                                      Encontrado: [{color.R},{color.G},{color.B}
                                      ]
                                    </p>
                                    <p>
                                      {`Buscado: [${getValues("R")},${getValues(
                                        "G",
                                      )},${getValues("B")}]`}
                                    </p>
                                    <p>
                                      Desviacion: {color.distancia.toFixed(2)}{" "}
                                      uD
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  backgroundColor: `rgb(${getValues(
                                    "R",
                                  )},${getValues("G")},${getValues("B")})`,
                                }}
                                className="mask mask-squircle h-24 w-24 shadow-lg"
                              />
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="flex w-full">
                              <div className="card rounded-box flex-grow place-items-center bg-whitePrimary py-2 ">
                                <h5>Bases</h5>
                                <div className="justify-between">
                                  {color.regcolbases.map((base) => (
                                    <p className="font-normal " key={base.id}>
                                      {
                                        bases?.find((x) => x.id == base.id)
                                          ?.reforiginal
                                      }{" "}
                                      {
                                        bases?.find((x) => x.id == base.id)
                                          ?.slang
                                      }{" "}
                                      <span className="badge m-1 rounded-md p-1">
                                        {base.amount.toString()} LB
                                      </span>
                                    </p>
                                  ))}
                                </div>
                              </div>
                              <div className="divider divider-horizontal"></div>
                              <div className="card rounded-box grid flex-grow place-items-center bg-whitePrimary py-2 ">
                                <h5>Colorantes</h5>
                                <div className="justify-between">
                                  {color.regcolcolorants.map((colorante) => (
                                    <p
                                      className="font-normal "
                                      key={colorante.id}
                                    >
                                      {
                                        coloantes?.find(
                                          (x) => x.id == colorante.colorantId,
                                        )?.shortcode
                                      }{" "}
                                      <span className="badge m-1 rounded-md p-1">
                                        {colorante.amount.toString()} GR
                                      </span>
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
