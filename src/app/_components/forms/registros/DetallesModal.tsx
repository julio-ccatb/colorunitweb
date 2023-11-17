import Decimal from "decimal.js";
import {
  type Base,
  type Colorant,
  type Regcol,
  type Regcolbases,
  type Regcolcolorants,
} from "pg/generated/zod";

export default function DetalleRegistroModal({
  color,
  distancia,
  regcolbases,
  regcolcolorants,
  bases,
  colorantes,
  RGB,
}: {
  color: Regcol;
  regcolbases: Regcolbases[];
  regcolcolorants: Regcolcolorants[];
  bases: Base[];
  colorantes: Colorant[];
  distancia: number;
  RGB: number[];
}) {
  return (
    <>
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
          <h3 className="my-2 text-lg font-bold">Detalles</h3>

          <div className="diff rounded-btn  h-28 w-full border">
            <div className="diff-item-1">
              <div
                style={{
                  backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
                }}
                className="grid place-content-center  text-7xl font-extrabold"
              >
                <span
                  style={{
                    color: `rgb(${RGB[0]},${RGB[1]},${RGB[2]})`,
                  }}
                >
                  {RGB[0]}

                  {RGB[1]}

                  {RGB[2]}
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
              }}
              className="diff-item-2"
            />
            <div className="grid place-content-center  text-xl   lg:text-9xl"></div>

            <div className="diff-resizer" />
          </div>
          <div className="flex">
            <div className="flex flex-col text-sm font-normal">
              <div className="py-2 font-bold">
                <h4>Comparacion</h4>
              </div>
              <span>
                Nombre:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.description}
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
                  {color.brillo instanceof Decimal && color.brillo
                    ? color.brillo.toFixed(2)
                    : "N/A"}
                </span>
              </span>
              <span>
                Desviacion:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {distancia.toFixed(2)} uD
                </span>
              </span>
            </div>
            <p>
              <input type="text" />
            </p>
          </div>
          <div className="divider divider-vertical">Componentes</div>
          <div className="card w-full">
            <div className="flex justify-center gap-4"></div>
            <div className="card-body p-0">
              <div className="flex w-full">
                <div className="card rounded-box flex-grow items-start py-2 ">
                  <h5>Bases</h5>
                  <div className="justify-between">
                    {regcolbases.map((base) => (
                      <p className="font-normal " key={base.id}>
                        {bases?.find((x) => x.id == base.id)?.reforiginal}{" "}
                        {bases?.find((x) => x.id == base.id)?.slang}{" "}
                        <span className="badge m-1 rounded-md p-1">
                          {base.amount.toString()} LB
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="card rounded-box grid flex-grow items-start  py-2 ">
                  <h5>Colorantes</h5>
                  <div className="justify-between">
                    {regcolcolorants.map((colorante) => (
                      <p className="font-normal " key={colorante.id}>
                        {
                          colorantes?.find((x) => x.id == colorante.colorantId)
                            ?.shortcode
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
    </>
  );
}