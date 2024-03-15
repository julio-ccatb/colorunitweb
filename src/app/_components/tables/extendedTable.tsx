import { type Extended } from "@prisma/client";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft } from "lucide-react";
import { type Customer } from "pg/generated/zod";
import { api } from "~/trpc/react";

const ExtendedTable = ({ customer }: { customer: Customer }) => {
  const { data } = api.exteded.findByCustomerId.useQuery(customer.id);

  const mock: Extended[] = [];
  const columns: ColumnDef<Extended>[] = [
    { header: "ID", accessorKey: "id" },
    { header: "Nombre", accessorKey: "name" },
    {
      header: "Color",
      accessorFn: (row) => {
        return {
          R: row.R,
          G: row.G,
          B: row.B,
        };
      },
      cell: ({ cell }) => {
        return (
          <div className="avatar">
            <div
              style={{
                backgroundColor: `rgb(${cell.getValue<{ R: string }>().R},${
                  cell.getValue<{ G: string }>().G
                },${cell.getValue<{ B: string }>().B})`,
              }}
              className="mask mask-circle h-12 w-12 shadow-md"
            ></div>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: data ? data : mock,
    columns,
    getCoreRowModel: getCoreRowModel<Extended>(),
    getFilteredRowModel: getFilteredRowModel<Extended>(),
    getPaginationRowModel: getPaginationRowModel<Extended>(),
    getSortedRowModel: getSortedRowModel<Extended>(),
  });

  return (
    <div className="">
      <div className="join flex py-4">
        <input
          className="join-item my-2 rounded-md border p-2 focus:input-accent sm:my-0 "
          placeholder="Buscar"
          type="text"
        />
        <input
          className="join-item my-2 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-0 "
          placeholder="R"
          type="text"
        />
        <input
          className="join-item my-2 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-0 "
          placeholder="G"
          type="text"
        />
        <input
          className="join-item my-2 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-0 "
          placeholder="B"
          type="text"
        />

        <input
          id="from"
          className="join-item my-2 rounded-md border p-2 focus:input-accent placeholder:!text-red-500 sm:my-0"
          type="date"
        />
        <input
          id="to"
          className="join-item my-2 rounded-md border p-2 focus:input-accent placeholder:!text-red-500 sm:my-0"
          type="date"
        />
      </div>

      <table className="table overflow-x-scroll">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="hover:cursor-pointer"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="cursor-pointer hover:bg-accent/20">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-4 flex justify-center gap-2">
        {table.getCanPreviousPage() && (
          <button
            className="btn btn-outline"
            onClick={() => table.previousPage()}
          >
            <ArrowLeft />
          </button>
        )}
        {table.getCanNextPage() && (
          <button className="btn btn-outline" onClick={() => table.nextPage()}>
            <ArrowLeft className="rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ExtendedTable;
