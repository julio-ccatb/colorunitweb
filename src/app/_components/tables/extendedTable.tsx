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
import { format } from "date-fns";
import { ArrowLeft, NotebookPenIcon, RefreshCwIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate, isValidDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";

const ExtendedTable = ({ customerId }: { customerId: string }) => {
  const { data: types } = api.base.listTypeBase.useQuery();

  const [startDate, setStartDate] = useState<Date>();
  const { data, mutate } = api.exteded.findByCustomerId.useMutation();
  const [endDate, setEndDate] = useState<Date>();

  const mock: Extended[] = [];

  useEffect(
    () =>
      void mutate({
        customerId,
      }),
    [customerId],
  );

  const columns: ColumnDef<Extended>[] = [
    { header: "ID", accessorKey: "id" },
    {
      header: "Nombre / RGB",
      accessorFn: (row) => {
        return { ...row };
      },
      cell: ({ cell }) => {
        const extended = cell.getValue<Extended>();

        return (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div
                style={{
                  backgroundColor: `rgb(${extended.R},${extended.G},${extended.B})`,
                }}
                className="mask mask-circle h-12 w-12 shadow-md"
              ></div>
            </div>
            <div>
              <div className="font-bold">{extended.name}</div>
              <div className="text-sm opacity-50">
                [{extended.R},{extended.G},{extended.B}]
              </div>
            </div>
          </div>
        );
      },
    },
    {
      header: "Tipo",
      accessorFn: (row) =>
        types?.find((t) => t.id === row.tbaseId)?.description,
    },
    {
      header: "Fecha",
      accessorFn: (row) => formatDate(row.createdAt),
    },
    {
      header: "",
      id: "ordenes",
      cell: () => {
        return (
          <button className="btn btn-outline btn-sm hidden sm:inline-flex ">
            <NotebookPenIcon size={20} />
          </button>
        );
      },
    },
  ];

  const table = useReactTable<Extended>({
    data: data ?? mock,
    columns,
    getCoreRowModel: getCoreRowModel<Extended>(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel<Extended>(),
    getSortedRowModel: getSortedRowModel<Extended>(),
  });

  return (
    <div className="">
      <div className="mb-4 flex items-center justify-between">
        <div className="join join-vertical flex py-4 sm:join-horizontal">
          <input
            className="join-item my-0 rounded-md border p-2 focus:input-accent sm:my-2  "
            placeholder="Buscar"
            type="text"
          />
          <div className="flex sm:join-item">
            <input
              className="join-item my-0 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-2  "
              placeholder="R"
              type="text"
            />
            <input
              className="join-item my-0 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-2"
              placeholder="G"
              type="text"
            />
            <input
              className="join-item my-0 w-16 rounded-md border p-2 text-center focus:input-accent sm:my-2  "
              placeholder="B"
              type="text"
            />
          </div>

          <div className="join py-2 sm:join-item sm:flex">
            <input
              id="from"
              className="join-item my-2 rounded-md border p-2 uppercase  focus:input-accent  sm:my-0"
              type="date"
              value={
                isValidDate(startDate) && startDate
                  ? format(startDate, "yyyy-MM-dd")
                  : format(new Date("2023-01-02"), "yyyy-MM-dd")
              }
              onChange={(e) => {
                try {
                  setStartDate(
                    new Date(e.target.value) || new Date("2023-01-02"),
                  );
                } catch {
                  setStartDate(new Date("2023-01-02"));
                }
              }}
            />
            <input
              id="to"
              className="join-item my-2 rounded-md border p-2 uppercase  focus:input-accent  sm:my-0"
              type="date"
              value={
                isValidDate(endDate) && endDate
                  ? format(endDate, "yyyy-MM-dd")
                  : format(new Date("2025-01-02"), "yyyy-MM-dd")
              }
              onChange={(e) => {
                try {
                  setEndDate(
                    new Date(e.target.value) || new Date("2025-01-02"),
                  );
                } catch {
                  setEndDate(new Date("2025-01-02"));
                }
                console.log(endDate);
              }}
            />
          </div>
        </div>

        <button
          className="r-2 btn btn-outline hidden sm:inline-flex"
          onClick={() => {
            void mutate({
              customerId,
              startDate: startDate,
              endDate: endDate,
            });
          }}
        >
          <RefreshCwIcon />
          <span>Refrescar</span>
        </button>
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
