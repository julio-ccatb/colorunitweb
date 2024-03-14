import { type Customer } from "pg/generated/zod";
import { api } from "~/trpc/react";

const ExtendedTable = ({ customer }: { customer: Customer }) => {
  const extendidos = api.exteded.findByCustomerId.useQuery(customer.id);

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
      createExtended
      <table></table>
    </div>
  );
};

export default ExtendedTable;
