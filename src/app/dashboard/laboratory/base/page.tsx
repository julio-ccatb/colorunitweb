"use client";
import { ClipboardEdit, FilePlus2, Trash } from "lucide-react";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function BasesPage() {
  const itemsPerPage = 10; // Number of items to display per page
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

  if (result === undefined) return <>No Data</>;

  // Function to format a date as a string (e.g., "yyyy-mm-dd HH:MM:SS")

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div className="flex-1 overflow-x-auto">
        <div className="mt-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Bases</h1>
          <button className=" hover:bg-whitePrimary hover:text-greenAccent bg-greenAccent text-greenLight border-1 border-greenAccent m-4 flex items-center justify-center gap-2 rounded-md border  px-4 py-2 font-semibold shadow-md transition-colors duration-200">
            <span>Add</span> <FilePlus2 size={15} />
          </button>
        </div>
        <table className="w-full max-w-full border-collapse border">
          <thead className="text-left">
            <tr>
              <th className="bg-graySecondary  text-greenLight p-2">Ref</th>
              <th className="bg-graySecondary  text-greenLight p-2">Tipo</th>
              <th className="bg-graySecondary  text-greenLight p-2">Slang</th>
              <th className="bg-graySecondary  text-greenLight p-2">Peso</th>
              <th className="bg-graySecondary  text-greenLight p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-greenAccent/25 border font-semibold"
              >
                <td className=" justify-start p-2">
                  {item.reforiginal ?? "N/A"}
                </td>
                <td className=" justify-start p-2">{item.tbase.description}</td>
                <td className=" justify-start p-2">{item.slang ?? "N/A"}</td>
                <td className=" justify-start p-2">
                  <div className="flex gap-2">
                    <div className="flex">
                      <span className="bg-greenAccent inline-block rounded-l-full px-[0.65em] pb-[0.25em] pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none ">
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
                  <button className="rounded-md bg-red-500 px-2 py-2 text-white">
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
          className="hover:bg-whitePrimary hover:text-greenAccent bg-greenAccent text-greenLight border-1 border-greenAccent mr-2 rounded-md border   px-4 py-2 font-semibold shadow-md transition-colors duration-200"
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= result.length}
          className="hover:bg-whitePrimary hover:text-greenAccent bg-greenAccent text-greenLight border-1 border-greenAccent rounded-md border  px-4 py-2 font-semibold shadow-md transition-colors duration-200"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
