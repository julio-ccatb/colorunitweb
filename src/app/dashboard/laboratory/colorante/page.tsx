"use client";
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
  const [colorant, setColorant] = useState<Colorant>({} as Colorant);

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
        <table className="w-full max-w-full border-collapse border">
          <thead className="text-left">
            <tr>
              <th className="bg-graySecondary  p-2 text-greenLight">Codigo</th>
              <th className="bg-graySecondary  p-2 text-greenLight">
                Descripccion
              </th>
              <th className="bg-graySecondary  p-2 text-greenLight">Up</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Ug</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Creado</th>
              <th className="bg-graySecondary  p-2 text-greenLight">
                Actualizado
              </th>
              <th className="bg-graySecondary  p-2 text-greenLight">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr
                key={item.id}
                className="border font-semibold hover:bg-greenAccent/25"
              >
                <td className=" justify-start p-2">{item.shortcode}</td>
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
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="border-1 mr-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary  hover:text-greenAccent disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-white"
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= listColorantes.length}
          className="border-1 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-white"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
