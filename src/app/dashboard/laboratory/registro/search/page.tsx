"use client";
import Decimal from "decimal.js";
import {
  type Regcolbases,
  type Regcolcolorants,
  type Tbase,
  type Regcol,
} from "pg/generated/zod";
import { Suspense, useEffect, useState } from "react";
import { type SubmitHandler } from "react-hook-form";
import SeachColorForm, {
  type SearchColorInput,
} from "~/app/_components/forms/registros/SearchColor";
import HandleStatus from "~/app/_components/handleStatus";
import { formatDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";
import DetalleRegistroModal from "../../../../_components/modals/DetallesModal";
import { ArrowLeft } from "lucide-react";

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
    isSuccess,
    isLoading,
  } = api.registro.findColor.useMutation();

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = isSuccess ? colors.slice(startIndex, endIndex) : [];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

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
              <th className="hidden sm:table-cell">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Distancia</th>
              <th>Nombre / RGB</th>
              <th className="hidden sm:table-cell">Calidad</th>
              <th className="hidden sm:table-cell">Actualizado</th>
              <th className="hidden sm:table-cell">Peso / Cubeta</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Suspense
              fallback={<div className="bg-accent text-white">Loading...</div>}
            >
              {colors &&
                itemsToDisplay?.map((color) => {
                  return (
                    <tr
                      className="items-center justify-center align-middle"
                      key={color.id}
                    >
                      <th className="hidden sm:table-cell">
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
                            <p className="block sm:hidden">
                              {color.tbase?.description ?? (
                                <>
                                  <span className="badge badge-warning hidden md:block">
                                    NP
                                  </span>
                                </>
                              )}
                              <span className="block sm:hidden">
                                {formatDate(color.updatedAt)}
                              </span>
                            </p>

                            <button
                              className="btn btn-md my-1 underline-offset-1 sm:hidden"
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
                          </div>
                        </div>
                      </td>
                      <td className="hidden sm:table-cell">
                        {color.tbase?.description ?? (
                          <span className="badge badge-warning">NP</span>
                        )}
                      </td>
                      <td className="hidden sm:table-cell">
                        <span className="badge badge-ghost badge-sm p-2">
                          {formatDate(color.updatedAt)}
                        </span>
                      </td>
                      <td className="hidden sm:table-cell">
                        {color.pesopromedio?.toString()} LB
                      </td>
                      <th className="hidden sm:table-cell">
                        <button
                          className="btn-ghost btn-xs hidden sm:btn"
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
                      </th>
                    </tr>
                  );
                })}
              <DetalleRegistroModal
                key={compareTo?.id}
                RGB={RGB}
                bases={bases ?? []}
                colorantes={coloantes ?? []}
                color={compareTo}
              />
            </Suspense>
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          {colors !== undefined && (
            <div className="mt-4 flex justify-center">
              <div className="join grid grid-cols-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline join-item"
                >
                  <ArrowLeft />
                  Previous Page
                </button>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= colors.length}
                  className="btn btn-outline join-item"
                >
                  Next Page
                  <ArrowLeft className="rotate-180" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
