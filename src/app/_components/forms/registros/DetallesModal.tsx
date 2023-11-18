import Decimal from "decimal.js";
import { AlertTriangle, ServerCrash } from "lucide-react";
import { type Base, type Colorant } from "pg/generated/zod";
import { type RegColWithDistance } from "~/app/dashboard/laboratory/registro/search/page";
import { api } from "~/trpc/react";
import { useState } from "react";

export default function DetalleRegistroModal({
  color,
  bases,
  colorantes,
  RGB,
}: {
  color: RegColWithDistance;

  bases: Base[];
  colorantes: Colorant[];
  RGB?: { R: number; G: number; B: number };
}) {
  const { mutate, isLoading, error } = api.registro.process.useMutation();
  const [cantidad, setCantidad] = useState(new Decimal(1));

  console.log(color);
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="my-2 text-lg font-bold">Detalles</h3>

          <div className="diff h-28  w-full rounded-btn border">
            <div className="diff-item-1">
              <div
                style={{
                  backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
                }}
                className="grid place-content-center  text-7xl font-extrabold"
              >
                <span
                  style={{
                    color: `rgb(${RGB?.R},${RGB?.G},${RGB?.B})`,
                  }}
                >
                  {RGB?.R},{RGB?.G},{RGB?.B}
                </span>
              </div>
            </div>
            <div className="diff-item-2">
              <div
                className="grid place-content-center  text-7xl font-extrabold"
                style={{
                  backgroundColor: `rgb(${RGB?.R},${RGB?.G},${RGB?.B})`,
                }}
              >
                <span
                  style={{
                    color: `rgb(${color.R},${color.G},${color.B})`,
                  }}
                >
                  {color.R},{color.G},{color.B}
                </span>
              </div>
            </div>
            <div className="grid place-content-center  text-xl   lg:text-9xl"></div>

            <div className="diff-resizer" />
          </div>
          <div className="divider divider-vertical">Resumen</div>
          <div className="flex gap-4 ">
            <div className="flex w-1/2 flex-col text-sm font-normal">
              <div className="font-semibold">
                <h4>Comparacion</h4>
              </div>
              <span>
                Nombre:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.description}
                </span>
              </span>
              <span>
                Calidad:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.Tbase?.description}
                </span>
              </span>
              <span>
                RGB:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.R},{color.G},{color.B}
                </span>
              </span>
              <span>
                Brillo:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.brillo?.toString() ?? "N/A"}
                </span>
              </span>
              <span>
                Desviacion:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.distancia.toFixed(2)} uD
                </span>
              </span>
              <span>
                Peso Cubeta:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.pesopromedio?.toString()} LB
                </span>
              </span>
            </div>
            <div className="flex w-1/2 flex-1 flex-col gap-2 font-bold">
              {color.Tbase ? (
                <>
                  <h4 className="font-semibold">Ordenar</h4>
                  <input
                    type="text"
                    id="G"
                    onChange={(e) =>
                      setCantidad(new Decimal(e.target.value) ?? new Decimal(1))
                    }
                    placeholder="Cantidad GL"
                    className={`join-item w-28 border p-2 text-center focus:input-accent`}
                  />
                  <button className="btn btn-accent text-white">Ordenar</button>
                </>
              ) : (
                <>
                  <h4 className="font-semibold">Estado</h4>

                  {error ? (
                    <div className="alert alert-error text-sm">
                      <ServerCrash size={20} />
                      <span className="text-xs">{error.message}</span>
                    </div>
                  ) : (
                    <div className="alert alert-warning">
                      <AlertTriangle />
                      <span>
                        El color {color.description} no ha sido procesado.
                      </span>
                    </div>
                  )}

                  <button
                    disabled={isLoading && !error}
                    onClick={() => mutate(color.id)}
                    className="btn btn-accent text-white"
                  >
                    {isLoading ? (
                      <>
                        <span className="loading loading-spinner" />
                        ... Procesando
                      </>
                    ) : (
                      <>Procesar</>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="divider divider-vertical">Componentes</div>
          <div className="card w-full">
            <div className="flex justify-center gap-4"></div>
            <div className="card-body p-0">
              <div className="flex w-full">
                <div className="card flex-grow items-start rounded-box py-2 ">
                  <h4 className="font-semibold">Bases</h4>
                  <div className="justify-between">
                    {color.regcolbases.map((base) => {
                      const total = Decimal.mul(
                        base.amount,
                        cantidad,
                      ).toString();

                      return (
                        <p className="font-normal " key={base.id}>
                          {bases?.find((x) => x.id == base.baseId)?.reforiginal}{" "}
                          {bases?.find((x) => x.id == base.baseId)?.slang}{" "}
                          <span className="badge m-1 rounded-md p-1">
                            {total} LB
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="card grid flex-grow items-start rounded-box  py-2 ">
                  <h4 className="font-semibold">Colorantes</h4>
                  <div className="justify-between">
                    {color.regcolcolorants.map((colorante) => {
                      const total = Decimal.mul(
                        colorante.amount,
                        cantidad,
                      ).toString();

                      return (
                        <p className="font-normal " key={colorante.id}>
                          {
                            colorantes?.find(
                              (x) => x.id == colorante.colorantId,
                            )?.shortcode
                          }{" "}
                          <span className="badge m-1 rounded-md p-1">
                            {total} GR
                          </span>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
