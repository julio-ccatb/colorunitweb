"use client";
import { Prisma } from "@prisma/client";
import { ClipboardEdit, FilePlus2, Trash } from "lucide-react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "~/trpc/react";
// import { TBaseUncheckedCreateWithoutBasesInputSchema } from "prisma/generated/zod";

export default function TipoDeBasePage() {
  const itemsPerPage = 5; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Prisma.TBaseUncheckedCreateInput>({
    // resolver: zodResolver(TBaseUncheckedCreateWithoutBasesInputSchema),
  });

  const [newTipoDeBase, setNewTipoDeBase] = useState({
    description: "",
    shortcode: "",
    pesos1: "",
    pesos2: "",
    pesos3: "",
    pesos4: "",
    pesos5: "",
  });

  const { data: result, status } = api.base.listTypeBase.useQuery();

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

  const onSubmit: SubmitHandler<Prisma.TBaseUncheckedCreateInput> = (data) => {
    console.log(data);
  };

  if (result === undefined) return <>No Data</>;

  return (
    <div className="m-4 flex flex-col">
      <div className="mt-4 flex justify-between">
        <h1 className="mb-4 text-2xl font-bold">Tipos de Bases</h1>
        <button className=" border-1 m-4 flex items-center justify-center gap-2 rounded-md border border-greenAccent bg-greenAccent px-4 py-2 font-semibold  text-greenLight shadow-md transition-colors duration-200 hover:bg-whitePrimary hover:text-greenAccent">
          <span>Add</span> <FilePlus2 size={15} />
        </button>
      </div>
      {/* Form to add a new Tipo de Base */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-4 flex w-1/2 flex-col items-start justify-center gap-2"
      >
        <div>
          <input
            type="text"
            name="description"
            value={newTipoDeBase.description}
            {...register("description")}
            placeholder="Description"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            name="shortcode"
            value={newTipoDeBase.shortcode}
            placeholder="Shortcode"
            className="mr-2 rounded-md border p-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="pesos1"
            value={newTipoDeBase.pesos1}
            placeholder="Pesos 1"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            name="pesos2"
            value={newTipoDeBase.pesos2}
            placeholder="Pesos 2"
            className="mr-2 rounded-md border p-2"
          />
        </div>
        <div>
          <input
            type="text"
            name="pesos3"
            value={newTipoDeBase.pesos3}
            placeholder="Pesos 3"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            name="pesos4"
            value={newTipoDeBase.pesos4}
            placeholder="Pesos 4"
            className="mr-2 rounded-md border p-2"
          />
          <input
            type="text"
            name="pesos5"
            value={newTipoDeBase.pesos5}
            placeholder="Pesos 5"
            className="mr-2 rounded-md border p-2"
          />
        </div>
      </form>
      <div className="flex-1 overflow-x-auto">
        <table className="w-full max-w-full  border-collapse border">
          <thead>
            <tr>
              <th className="bg-graySecondary p-2 text-greenLight">
                Description
              </th>
              <th className="bg-graySecondary p-2 text-greenLight">
                Shortcode
              </th>

              <th className="bg-graySecondary p-2 text-greenLight">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {itemsToDisplay.map((item) => (
              <tr key={item.id} className="border">
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">{item.shortcode}</td>
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
