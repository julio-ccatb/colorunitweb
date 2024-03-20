import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { random } from "lodash";
import { ArrowLeft } from "lucide-react";
import { type Customer } from "pg/generated/zod";
import { useState, type Dispatch, type SetStateAction } from "react";
import { formatDate } from "~/app/_utils/dateFunctions";
import { api } from "~/trpc/react";

const SearchCustomerModal = ({
  setCustomer,
}: {
  setCustomer: Dispatch<SetStateAction<Customer | undefined>>;
}) => {
  const { data } = api.customer.list.useQuery();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const mock: Customer[] = [];
  const columns: ColumnDef<Customer>[] = [
    { header: "ID", accessorKey: "id" },
    {
      header: "Nombre Completo / Empresa",
      accessorFn: (row) =>
        `${row.firstName} ${row.isCompany == null ? row.lastName : ""}`,
    },
    { header: "Email", accessorKey: "email" },
    {
      header: "Creado",
      accessorKey: "createdAt",
      cell: (info) => formatDate(info.cell.getValue() as Date),
    },
    {
      header: "Empresa",
      accessorKey: "isCompany",
      cell: ({ cell }) => {
        return (
          <input
            className="checkbox justify-center"
            type="checkbox"
            defaultChecked={cell.getValue() as boolean}
          />
        );
      },
    },
  ];

  const table = useReactTable({
    data: data ? data : mock,
    columns,
    getCoreRowModel: getCoreRowModel<Customer>(),
    getFilteredRowModel: getFilteredRowModel<Customer>(),
    getPaginationRowModel: getPaginationRowModel<Customer>(),
    getSortedRowModel: getSortedRowModel<Customer>(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const Exit = () => {
    const dialog = document.getElementById(
      "seachCustomer",
    ) as HTMLDialogElement;
    dialog.close();
  };

  return (
    <dialog id="seachCustomer" className="modal ">
      <div className="modal-box h-min max-w-5xl">
        <h3 className="py-2 text-lg font-bold">Buscar cliente</h3>
        <div className="overflow-x-auto">
          <input
            className="my-2 rounded-md border p-2 focus:input-accent sm:my-0 "
            placeholder="Buscar"
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />

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
                <tr
                  key={row.id + random()}
                  className="cursor-pointer hover:bg-accent/20"
                  onClick={() => {
                    setCustomer(row.original);
                    Exit();
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
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
              <button
                className="btn btn-outline"
                onClick={() => table.nextPage()}
              >
                <ArrowLeft className="rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SearchCustomerModal;
