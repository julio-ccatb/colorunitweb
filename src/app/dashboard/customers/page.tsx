"use client";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { type Customer } from "pg/generated/zod";
import { useState } from "react";
import SearchCustomerModal from "~/app/_components/modals/searchCustomer";
import CreateCustomerModal from "../../_components/modals/createCustomer";
import ExtendedTable from "~/app/_components/tables/extendedTable";
import CreateExtendedModal from "~/app/_components/modals/createExtended";

// In your main component or page file
const CustomerPage = () => {
  const [customer, setCustomer] = useState<Customer>();

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div className="flex-1 overflow-x-auto">
        <div className="mt-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Clientes y Extendidos</h1>
        </div>
        <div className="join p-1 ">
          <input
            value={customer && `${customer?.firstName} ${customer?.lastName}`}
            className=" input join-item input-bordered input-sm capitalize focus:input-accent "
            type="text"
            id="cliente"
            placeholder="Cliente"
          />
          <button
            className="join-item flex items-center justify-center border px-1 transition-all duration-150 hover:text-accent focus:text-accent "
            onClick={() => {
              const dialog = document.getElementById(
                "seachCustomer",
              ) as HTMLDialogElement;
              dialog.showModal();
            }}
          >
            <SearchIcon size={25} />
          </button>

          <button
            className="join-item flex items-center justify-center border px-1 transition-all duration-150 hover:text-accent focus:text-accent "
            onClick={() => {
              const dialog = document.getElementById(
                "createExtended",
              ) as HTMLDialogElement;
              dialog.showModal();
            }}
          >
            <PlusCircleIcon size={25} />
          </button>
          <CreateCustomerModal setCustomer={setCustomer} />
          <SearchCustomerModal setCustomer={setCustomer} />
        </div>
        {customer && (
          <>
            <button
              className="join-item flex items-center justify-center border px-1 transition-all duration-150 hover:text-accent focus:text-accent "
              onClick={() => {
                const dialog = document.getElementById(
                  "createExtended",
                ) as HTMLDialogElement;
                dialog.showModal();
              }}
            >
              <PlusCircleIcon size={25} />
            </button>
            <CreateExtendedModal customer={customer} />
            <ExtendedTable customer={customer} />
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerPage;
