"use client";
import { type Tbase } from "@prisma/client";
import { ClipboardEdit, Trash } from "lucide-react";
import { useState } from "react";
import TbaseCreateForm from "~/app/_components/forms/tbases/TbaseCreateForm";
import TbaseUpdateForm from "~/app/_components/forms/tbases/TbaseUpdateForm";
import { api } from "~/trpc/react";
import HandleStatus from "../../../../_components/handleStatus";
import { toast } from "react-toastify";

export default function TipoDeBasePage() {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const { data: result, status, refetch } = api.base.listTypeBase.useQuery();
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

  if (status != "success") return HandleStatus({ status });

  if (result === undefined) return <h1>No Data</h1>;

  return (
    <div className="  rounded-md border bg-white p-4">
      <h1 className="mb-4 text-2xl font-bold">Tipos de Bases</h1>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Nuevo"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          <TbaseCreateForm />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Editar"
          checked={!!selected?.id ?? false}
          disabled={!selected}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 p-6"
        >
          <TbaseUpdateForm
            initialData={selected ?? ({} as Tbase)}
            key={selected?.id}
          />
        </div>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="table w-full max-w-full  ">
          <thead>
            <tr>
              <th className="">Codigo</th>
              <th className="">Descripccion</th>

              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr key={item.id} className="  hover:bg-greenAccent/25">
                <td className=" p-2">{item.shortcode}</td>
                <td className=" p-2">{item.description}</td>
                <td className="flex justify-start p-2">
                  <button
                    className="btn btn-info mr-2 rounded-md text-white"
                    onClick={() => setSelected(item)}
                  >
                    <ClipboardEdit size={15} />
                  </button>
                  <button
                    onClick={() =>
                      mutate(
                        { where: { id: item.id } },
                        {
                          onSuccess: () => {
                            // Refetch the data to get the updated listColorantes
                            toast.success(
                              `${item.description} fue eliminado correctamente`,
                            );
                            void refetch();
                          },
                          onError: (error) => {
                            // Refetch the data to get the updated listColorantes
                            toast.error(
                              `${item.description} no pudo ser eliminado 
                              Error: ${error.message}
                              `,
                            );
                            void refetch();
                          },
                        },
                      )
                    }
                    className="btn btn-error rounded-md  text-white"
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
          className="border-1 mr-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary  hover:text-greenAccent disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-white"
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= result.length}
          className="border-1 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:bg-white"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
