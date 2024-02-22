import Decimal from "decimal.js";
import { Droplet, Droplets, Pipette, Star, Weight } from "lucide-react";
import { type Base, type Colorant } from "pg/generated/zod";
import { type RegColWithDistance } from "~/app/dashboard/laboratory/registro/search/page";
import { calcularUnidades } from "~/app/_utils/dispensador";
import Image from "next/image";
import Icon from "/public/logo.svg";

export default function PrintReg({
  color,
  bases,
  colorantes,
  cantidad,
}: {
  color: RegColWithDistance;
  bases: Base[];
  colorantes: Colorant[];
  cantidad: Decimal;
}) {
  return (
    <div className="w-full bg-white">
      <div
        className={`flex items-center justify-between px-6 py-4 text-grayPrimary`}
      >
        <div className="flex items-center justify-center ">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={Icon}
            className={`w-16 overflow-hidden`}
            alt=""
          />
          <span
            className={`text-md ml-3 flex w-16 flex-col overflow-hidden border-l-2 border-solid border-l-graySecondary pl-2 font-extrabold tracking-tight transition-all`}
          >
            Color <span className="text-greenAccent">Unit</span>
          </span>
        </div>
      </div>
      <div className="p-8">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
        </form>
        <h3 className="my-2 flex gap-2 text-lg font-bold">Detalles</h3>

        <div className="divider divider-vertical">
          <p className="badge badge-outline cursor-pointer font-semibold">
            Resumen
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:w-full sm:flex-row">
          <div className="w-full text-sm font-normal sm:w-1/2">
            <div className="flex flex-col sm:flex-1 ">
              <div className="font-semibold">
                <h4 className="pb-1">Comparacion</h4>
              </div>
              <span>
                Nombre:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {!color.description ? "N/A" : color.description}
                </span>
              </span>
              <span>
                Calidad:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.tbase?.description ?? "N/A"}
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
                Cantidad:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {cantidad.toFixed(2)} GL
                </span>
              </span>
              <span>
                Peso Cubeta:{" "}
                <span className="badge m-1 rounded-md p-1">
                  {color.pesopromedio?.toString()} LB{" "}
                  <Weight size={15} className="ml-1" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="divider divider-vertical">
          <p className="badge badge-outline cursor-pointer font-semibold">
            Componentes
          </p>
        </div>
        <div className="card w-full">
          <div className="flex justify-center gap-4"></div>
          <div className="card-body p-0">
            <div className="">
              <div className="card max-w-sm items-start rounded-box py-2 ">
                <h4 className="pb-1 font-semibold">Bases</h4>
                <div className="justify-between">
                  {color.regcolbases.map((base) => {
                    const total = Decimal.mul(base.amount, cantidad).toFixed(2);

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
              <div className="sm:devider-vertical divider md:divider-horizontal"></div>
              <div className="card grid items-start rounded-box  py-2 ">
                <h4 className="pb-1 font-semibold">Colorantes</h4>
                <div className="justify-between">
                  {color.regcolcolorants.map((colorante) => {
                    const total = Decimal.mul(colorante.amount, cantidad);

                    const colorante_scope = colorantes.find(
                      (x) => x.id === colorante.colorantId,
                    );
                    // console.log(colorante_scope);
                    if (!colorante_scope) return <>N</>;
                    if (colorante_scope.pure)
                      return (
                        <p className="py-1 font-normal " key={colorante.id}>
                          {colorante_scope.shortcode}{" "}
                          <span className="join ">
                            <span
                              className="tooltip tooltip-right tooltip-info sm:tooltip-left"
                              data-tip="Colorante puro en gramos"
                            >
                              <span className="tooltip tooltip-right  sm:tooltip-left">
                                <span className="badge join-item bg-grayPrimary py-3 text-white">
                                  {`${total.toFixed(2)} GR`}
                                  <Star
                                    size={12}
                                    className="ml-1 animate-[spin_1s_ease-in] fill-current text-yellow-400"
                                  />
                                </span>
                              </span>
                            </span>
                          </span>
                        </p>
                      );

                    const { unidadesGrandes, unidadesPequeñas, margen } =
                      calcularUnidades(
                        total,
                        colorante_scope.gramUG,
                        colorante_scope.gramUP,
                      );

                    return (
                      <p className="py-1 font-normal " key={colorante.id}>
                        {colorante_scope.shortcode}{" "}
                        <span className="join ">
                          <span
                            className="tooltip tooltip-right sm:tooltip-left"
                            data-tip={`${margen.toFixed(2).toString()} GR`}
                          >
                            <span className="badge join-item">
                              {`${total.toFixed(2)} GR`}
                            </span>
                          </span>
                          <span
                            className="tooltip tooltip-right sm:tooltip-left"
                            data-tip="Unindades grandes"
                          >
                            <span className="badge join-item">
                              {unidadesGrandes.toString()}
                              <Droplets
                                className="ml-1 text-primary"
                                size={15}
                              />
                            </span>
                          </span>
                          <span
                            className="tooltip tooltip-left"
                            data-tip="Unindades pequeñas"
                          >
                            <span className="badge join-item">
                              {unidadesPequeñas.toString()}
                              <Droplet
                                className="ml-1 text-secondary"
                                size={15}
                              />
                            </span>
                          </span>
                          <span
                            className="tooltip tooltip-left"
                            data-tip="Unindades pequeñas"
                          >
                            <span className="badge join-item">
                              {margen.abs().toString()}
                              <Pipette
                                className="ml-1 text-secondary"
                                size={15}
                              />
                            </span>
                          </span>
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
    </div>
  );
}
