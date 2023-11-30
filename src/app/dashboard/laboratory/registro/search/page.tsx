"use client";
import Decimal from "decimal.js";
import {
  type Regcolbases,
  type Regcolcolorants,
  type Tbase,
  type Regcol,
} from "pg/generated/zod";
import { useEffect, useState } from "react";
import { type SubmitHandler } from "react-hook-form";
import SeachColorForm, {
  type SearchColorInput,
} from "~/app/_components/forms/registros/SearchColor";
import HandleStatus from "~/app/_components/handleStatus";
import { formatDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";
import DetalleRegistroModal from "../../../../_components/modals/DetallesModal";

export type RegColWithDistance = {
  distancia: number;
  regcolbases: Regcolbases[];
  regcolcolorants: Regcolcolorants[];
  tbase: Tbase | null;
} & Regcol;

const initialRegColWithDistance: RegColWithDistance = {
  process: false,
  distancia: 0,
  regcolbases: [
    {
      id: 1,
      regColId: 1,
      baseId: 1,
      amount: new Decimal(0),
    },
    // Additional regcolbases objects can be added here if needed
  ],
  regcolcolorants: [
    {
      id: 1,
      regColId: 1,
      colorantId: 1,
      amount: new Decimal(0),
    },
    // Additional regcolcolorants objects can be added here if needed
  ],
  tbase: {
    id: 1,
    description: "Example Tbase",
    shortcode: "TB",
    peso1: new Decimal(0),
    peso2: new Decimal(0),
    peso3: new Decimal(0),
    peso4: new Decimal(0),
    peso5: new Decimal(0),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  id: 1,
  description: null,
  carta: null,
  R: 255,
  G: 255,
  B: 255,
  tbaseId: null,
  pesopromedio: null,
  brillo: null,
  active: true,
  coeficienteG: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function Registropage() {
  const { data: bases, status: basesStatus } = api.base.list.useQuery();
  const { data: tbases, status } = api.base.listTypeBase.useQuery();
  const { data: coloantes, status: coloantesStatus } =
    api.colorante.list.useQuery();
  const {
    data: colors,
    mutate,
    isLoading,
  } = api.registro.findColor.useMutation();

  const [compareTo, setCompareTo] = useState<RegColWithDistance>(
    initialRegColWithDistance,
  );

  const onSubmit: SubmitHandler<SearchColorInput> = (data) =>
    mutate({ ...data });

  useEffect(() => {
    mutate({});
  }, []);

  const [RGB, setRGB] = useState<{ R: number; G: number; B: number }>({
    R: 0,
    G: 0,
    B: 0,
  });

  if (status != "success") HandleStatus({ status });
  if (basesStatus != "success") HandleStatus({ status });
  if (coloantesStatus != "success") HandleStatus({ status });

  return (
    <div className="rounded-md bg-white p-4 shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Registros</h1>
      <SeachColorForm
        setRGB={setRGB}
        isLoading={isLoading}
        tbases={tbases ?? []}
        onSubmit={onSubmit}
      />
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
                  <td>
                    {color.tbase?.description ?? (
                      <span className="badge badge-warning">NP</span>
                    )}
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm p-2">
                      {formatDate(color.updatedAt)}
                    </span>
                  </td>
                  <td>{color.pesopromedio?.toString()} LB</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onMouseEnter={() => setCompareTo(color)}
                      onClick={() => {
                        const dialog = document.getElementById(
                          "my_modal_1",
                        ) as HTMLDialogElement;
                        dialog.showModal();
                      }}
                    >
                      details
                    </button>
                    <DetalleRegistroModal
                      key={compareTo?.id}
                      RGB={RGB}
                      bases={bases ?? []}
                      colorantes={coloantes ?? []}
                      color={compareTo}
                    />
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
