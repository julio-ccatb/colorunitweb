import { type Customer } from "pg/generated/zod";
import { type Dispatch, type SetStateAction } from "react";

const SearchCustomerModal = ({
  setCustomer,
}: {
  setCustomer: Dispatch<SetStateAction<Customer | undefined>>;
}) => {
  return (
    <dialog id="seachCustomer" className="modal">
      <div className="modal-box max-w-xl">
        <h3 className="text-lg font-bold">Search</h3>
      </div>
    </dialog>
  );
};

export default SearchCustomerModal;
