import RegistroCreateForm from "~/app/_components/forms/registros/RegistrosCreateForm";

export default function Registropage() {
  return (
    <div className="rounded-md bg-white p-4 shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Registros</h1>
      <RegistroCreateForm />
    </div>
  );
}
