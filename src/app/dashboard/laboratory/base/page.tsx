"use client";
import { ClipboardEdit, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import BaseCreateForm from "~/app/_components/forms/bases/BaseCreateForm";
import HandleStatus from "~/app/_components/handleStatus";
import { api } from "~/trpc/react";

export default function BasesPage() {
  // Number of items to display per page
  const itemsPerPage = 5;

  const { mutate } = api.base.delete.useMutation();
  const { data: result, status } = api.base.list.useQuery();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("x");
  }, []);

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

  if (status != "success") return HandleStatus({ status: "loading" });
  if (result === undefined) return <>No Data</>;

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
              <th>Peso</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr
                key={item.id}
                className="border font-normal hover:bg-greenAccent/25"
              >
                <td className=" justify-start p-2">
                  {item.reforiginal ?? "N/A"}
                </td>
                <td className=" justify-start p-2">{item.tbase.description}</td>
                <td className=" justify-start p-2">{item.slang ?? "N/A"}</td>
                <td className=" justify-start p-2">
                  <div className="flex gap-2">
                    <div className="join rounded-full font-semibold">
                      <span className="join-item badge-error px-1">P1</span>
                      <span className="join-item badge-neutral px-1">
                        {` ${item.tbase.peso1?.toString()} lb`}
                      </span>
                    </div>
                    <div className="join rounded-full font-semibold">
                      <span className="badge join-item bg-orange-400 px-1">
                        P2
                      </span>
                      <span className="join-item badge-neutral px-1">
                        {` ${item.tbase.peso2?.toString()} lb`}
                      </span>
                    </div>
                    <div className="join rounded-full font-semibold">
                      <span className="badge join-item bg-warning px-1">
                        P3
                      </span>
                      <span className="join-item badge-neutral px-1">
                        {` ${item.tbase.peso3?.toString()} lb`}
                      </span>
                    </div>
                    <div className="join rounded-full font-semibold">
                      <span className="join-item badge-info px-1">P4</span>
                      <span className="join-item badge-neutral px-1">
                        {` ${item.tbase.peso4?.toString()} lb`}
                      </span>
                    </div>
                    <div className="join rounded-full font-semibold">
                      <span className="join-item badge-accent px-1">P5</span>
                      <span className="join-item badge-neutral px-1">
                        {` ${item.tbase.peso5?.toString()} lb`}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="mt-4 flex gap-2">
                  <button className="btn btn-info rounded-md text-white">
                    <ClipboardEdit size={15} />
                  </button>
                  <button
                    onClick={() => mutate({ where: { id: item.id } })}
                    className="btn btn-error rounded-md text-white"
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
