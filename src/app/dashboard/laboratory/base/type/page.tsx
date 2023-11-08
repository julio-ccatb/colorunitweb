"use client";
import { type Tbase } from "@prisma/client";
import { ClipboardEdit, Trash } from "lucide-react";
import { useState } from "react";
import TbaseCreateForm from "~/app/_components/forms/TbaseCreateForm";
import TbaseUpdateForm from "~/app/_components/forms/TbaseUpdateForm";
import { api } from "~/trpc/react";

export default function TipoDeBasePage() {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const { data: result, status } = api.base.listTypeBase.useQuery();
  const [selected, setSelected] = useState<Tbase>();

  // Calculate the starting and ending indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display on the current page
  const itemsToDisplay =
    status === "success" ? result.slice(startIndex, endIndex) : [];

  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const { mutate } = api.base.deleteTypeBase.useMutation();

  if (result === undefined) return <>No Data</>;

  return (
    <div className="m-4 flex flex-col">
      <div className="mt-4 flex justify-between">
        <h1 className="mb-4 text-2xl font-bold">Tipos de Bases</h1>
      </div>
      {/* Form to add a new Tipo de Base */}
      {!selected ? (
        <TbaseCreateForm />
      ) : (
        <TbaseUpdateForm initialData={selected} key={selected.id} />
      )}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full max-w-full  border-collapse border">
          <thead>
            <tr>
              <th className="bg-graySecondary p-2 text-greenLight">Codigo</th>
              <th className="bg-graySecondary p-2 text-greenLight">
                Descripccion
              </th>

              <th className="bg-graySecondary p-2 text-greenLight">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr key={item.id} className="border">
                <td className="border p-2">{item.shortcode}</td>
                <td className="border p-2">{item.description}</td>
                <td className="flex justify-start p-2">
                  <button
                    className="mr-2 rounded-md bg-blue-500 px-2 py-2 text-white"
                    onClick={() => setSelected(item)}
                  >
                    <ClipboardEdit size={15} />
                  </button>
                  <button
                    onClick={() => mutate({ where: { id: item.id } })}
                    className="rounded-md bg-red-500 px-2 py-2 text-white"
                  >
                    <Trash size={15} />
                  </button>
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
          className="border-1 mr-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold   text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= result.length}
          className="border-1 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
