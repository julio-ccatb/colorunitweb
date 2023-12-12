"use client";
import { ArrowLeft, ClipboardEdit, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import BaseCreateForm from "~/app/_components/forms/bases/BaseCreateForm";
import HandleStatus from "~/app/_components/handleStatus";
import LoadingTableRows from "~/app/_components/tables/loadingTable";
import { formatDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";

export default function BasesPage() {
  // Number of items to display per page
  const itemsPerPage = 5;

  const { mutate } = api.base.delete.useMutation();
  const { data: result, status, refetch, isLoading } = api.base.list.useQuery();
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div className="flex-1 overflow-x-auto">
        <div className="mt-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Bases</h1>
        </div>
        <BaseCreateForm />
        <table className="table">
          <thead className="text-left">
            <tr>
              <th>Ref</th>
              <th>Tipo</th>
              <th>Slang</th>
              <th>Actualizado</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {!isLoading ? (
              itemsToDisplay.map((item) => (
                <tr key={item.id} className=" hover:bg-greenAccent/25">
                  <td className=" justify-start ">
                    {item.reforiginal ?? "N/A"}
                  </td>
                  <td className=" justify-start ">{item.tbase.description}</td>
                  <td className=" justify-start ">{item.slang ?? "N/A"}</td>

                  <td>
                    <span className="badge">{formatDate(item.updatedAt)}</span>
                  </td>
                  <td className=" flex gap-2">
                    <button className="btn btn-info rounded-md text-white">
                      <ClipboardEdit size={15} />
                    </button>
                    <button
                      onClick={() =>
                        mutate(
                          { where: { id: item.id } },
                          {
                            onSuccess: () => {
                              {
                                toast.success(
                                  `Tipo base ${item.reforiginal} se a eliminado correctamente`,
                                );
                                void refetch();
                              }
                            },
                            onError: (error) =>
                              toast.error(`Error ${error.data?.code}`),
                          },
                        )
                      }
                      className="btn btn-error rounded-md text-white"
                    >
                      <Trash size={15} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <LoadingTableRows columns={5} numeric={5} />
              </>
            )}
          </tbody>
        </table>
      </div>
      {result !== undefined && (
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
              disabled={endIndex >= result.length}
              className="btn btn-outline join-item"
            >
              Next Page
              <ArrowLeft className="rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
