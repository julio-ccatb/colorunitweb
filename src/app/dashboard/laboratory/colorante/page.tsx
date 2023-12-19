"use client";
import { ArrowLeft, Droplet, Droplets } from "lucide-react";
import { type Colorant } from "pg/generated/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import ColorantesCreateForm from "~/app/_components/forms/colorantes/ColorantesCreateForm";
import HandleStatus from "~/app/_components/handleStatus";
import { formatDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";

export default function ColorantePage() {
  const {
    data: listColorantes,
    status,
    refetch,
  } = api.colorante.list.useQuery();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const { mutate } = api.colorante.update.useMutation();
  const [, setColorant] = useState<Colorant>({} as Colorant);

  // Get the items to display on the current page
  const itemsToDisplay =
    status === "success" ? listColorantes.slice(startIndex, endIndex) : [];

  if (status != "success") return HandleStatus({ status });
  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const ToggleActivate = (coloante: Colorant) => {
    // Update colorant state based on the current item
    setColorant((prevColorant) => ({
      ...prevColorant,
      active: !coloante.active,
    }));

    // Mutate API with the updated colorant
    mutate(
      { where: { id: coloante.id }, data: { active: !coloante.active } },
      {
        onSuccess: () => {
          // Refetch the data to get the updated listColorantes
          toast.success(
            `${coloante.description} a sido ${
              coloante.active ? " desactivado" : "activado"
            } correctamente`,
          );
          void refetch();
        },
      },
    );
  };

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div>
        <h1 className="mb-4 text-2xl font-bold">Colorantes</h1>
        <ColorantesCreateForm />
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-left">
              <tr>
                <th className="">Codigo</th>
                <th className="">Descripccion</th>
                <th className="">
                  <p className="flex ">
                    Up <Droplet className="ml-1 text-secondary" size={15} />
                  </p>
                </th>
                <th className="">
                  <p className="flex ">
                    Ug <Droplets className="ml-1 text-primary" size={15} />
                  </p>
                </th>
                <th className="">Creado</th>
                <th className="">Actualizado</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {itemsToDisplay.map((item) => (
                <tr key={item.id} className=" hover:bg-greenAccent/25">
                  <td>
                    <div
                      className={` badge justify-start p-2 font-semibold ${
                        item.pure
                          ? " badge-primary text-white"
                          : "badge badge-outline"
                      } 
                    }`}
                    >
                      {item.shortcode}
                    </div>
                  </td>
                  <td className=" justify-start p-2">{item.description}</td>
                  <td className=" justify-start p-2">
                    {item.gramUP.toString()}g
                  </td>
                  <td className=" justify-start p-2">
                    {item.gramUG.toString()}g
                  </td>
                  <td className=" justify-start p-2">
                    {formatDate(item.createdAt)}
                  </td>
                  <td className=" justify-start p-2">
                    {formatDate(item.updatedAt)}
                  </td>
                  <td className="justify-center p-2 font-bold">
                    <input
                      type="checkbox"
                      className="toggle toggle-success"
                      onClick={() => {
                        ToggleActivate(item);
                      }}
                      checked={item.active}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {listColorantes !== undefined && (
          <div className="mt-4 flex justify-center">
            <div className="join grid grid-cols-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-outline join-item"
              >
                <ArrowLeft />
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={endIndex >= listColorantes.length}
                className="btn btn-outline join-item"
              >
                Next
                <ArrowLeft className="rotate-180" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
