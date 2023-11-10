"use client";
import { ClipboardEdit, FilePlus2, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BaseCreateForm from "~/app/_components/forms/bases/BaseCreateForm";
import HandleStatus from "~/app/_components/handleStatus";
import { api } from "~/trpc/react";

export default function BasesPage() {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const { data: result, status } = api.base.list.useQuery();

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
  const { mutate } = api.base.delete.useMutation();

  if (status != "success") return HandleStatus({ status: "loading" });
  if (result === undefined) return <>No Data</>;

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div className="flex-1 overflow-x-auto">
        <div className="mt-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Bases</h1>
        </div>
        <BaseCreateForm />
        <table className="w-full max-w-full border-collapse border">
          <thead className="text-left">
            <tr>
              <th className="bg-graySecondary  p-2 text-greenLight">Ref</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Tipo</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Slang</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Peso</th>
              <th className="bg-graySecondary  p-2 text-greenLight">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr
                key={item.id}
                className="border font-semibold hover:bg-greenAccent/25"
              >
                <td className=" justify-start p-2">
                  {item.reforiginal ?? "N/A"}
                </td>
                <td className=" justify-start p-2">{item.tbase.description}</td>
                <td className=" justify-start p-2">{item.slang ?? "N/A"}</td>
                <td className=" justify-start p-2">
                  <div className="flex gap-2">
                    <div className="flex">
                      <span className="inline-block rounded-l-full bg-greenAccent px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
                        P1
                      </span>
                      <span className="inline-block  rounded-r-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                        {` ${item.tbase.peso1?.toString()} lb`}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="inline-block rounded-l-full bg-blue-500 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
                        P2
                      </span>
                      <span className="inline-block  rounded-r-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                        {` ${item.tbase.peso2?.toString()} lb`}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="inline-block rounded-l-full bg-yellow-500 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
                        P3
                      </span>
                      <span className="inline-block  rounded-r-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                        {` ${item.tbase.peso3?.toString()} lb`}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="inline-block rounded-l-full bg-orange-500 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
                        P4
                      </span>
                      <span className="inline-block  rounded-r-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                        {` ${item.tbase.peso4?.toString()} lb`}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="inline-block rounded-l-full bg-red-500 px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
                        P5
                      </span>
                      <span className="inline-block  rounded-r-full bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
                        {` ${item.tbase.peso5?.toString()} lb`}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="flex justify-start p-2">
                  <button className="mr-2 rounded-md bg-blue-500 px-2 py-2 text-white">
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
