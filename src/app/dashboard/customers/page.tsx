"use client";
import { PlusCircleIcon, SearchIcon, TestTube2Icon } from "lucide-react";
import { type Customer } from "pg/generated/zod";
import { useState } from "react";
import SearchCustomerModal from "~/app/_components/modals/searchCustomer";
import CreateCustomerModal from "../../_components/modals/createCustomer";
import ExtendedTable from "~/app/_components/tables/extendedTable";
import CreateExtendedModal from "~/app/_components/modals/createExtended";
import { random } from "lodash";

// In your main component or page file
const CustomerPage = () => {
  const [customer, setCustomer] = useState<Customer>();

  return (
    <div className="flex flex-col rounded-md bg-white p-4 shadow-sm">
      <div className="flex-1 overflow-x-auto">
        <div className="mt-4 flex justify-between">
          <h1 className="mb-4 text-2xl font-bold">Clientes y Extendidos</h1>
        </div>
        <div className="join join-vertical p-1 sm:join-horizontal">
          <h3 className="w-60 rounded-md border px-2">
            {customer && `${customer?.firstName} ${customer?.lastName}`}
          </h3>
          <div className="join join-item">
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
                  "createCustomer",
                ) as HTMLDialogElement;
                dialog.showModal();
              }}
            >
              <PlusCircleIcon size={25} />
            </button>
            <button
              className="join-item flex items-center justify-center gap-1 !rounded-r-md border px-2 disabled:cursor-not-allowed disabled:bg-gray-200"
              disabled={!customer}
              onClick={() => {
                const dialog = document.getElementById(
                  "createExtended",
                ) as HTMLDialogElement;
                dialog.showModal();
              }}
            >
              Crear Extendido <TestTube2Icon size={20} />
            </button>
          </div>
          <CreateCustomerModal setCustomer={setCustomer} />
          <SearchCustomerModal setCustomer={setCustomer} />
        </div>
        {customer && (
          <div>
            <CreateExtendedModal key={random()} customer={customer} />
            <ExtendedTable key={random()} customerId={customer.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerPage;
