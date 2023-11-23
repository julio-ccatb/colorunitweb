import RegistroCreateForm from "~/app/_components/forms/registros/RegistrosCreateForm";
import { withRoles } from "../../../_components/auth/withRoles";

const Registropage = () => {
  return (
    <div className="rounded-md bg-white p-4 shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Registros</h1>
      <RegistroCreateForm />
    </div>
  );
};

export default withRoles(Registropage, ["admin", "editor"]);
