"use client";
import { PrinterIcon } from "lucide-react";
import { type OrderWithRelations } from "pg/generated/zod";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintReg from "~/app/_components/print/PrintReg";
import { api } from "~/trpc/react";

const OrderPrint = ({ params }: { params: { id: string } }) => {
  const { data } = api.order.findUnique.useQuery(params.id);
  const { data: bases } = api.base.list.useQuery();
  const { data: colorantes } = api.colorante.list.useQuery();

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (!data || !bases || !colorantes) return;
  console.log(data);

  return (
    <>
      <div ref={componentRef}>
        <PrintReg
          key={data.id}
          bases={bases}
          colorantes={colorantes}
          color={data as OrderWithRelations}
          cantidad={data.amaunt}
        />
      </div>
      <button className="btn btn-outline w-full " onClick={handlePrint}>
        <PrinterIcon size={20} />
        Imprimir orden
      </button>
    </>
  );
};

export default OrderPrint;
