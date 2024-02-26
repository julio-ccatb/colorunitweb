"use client";
import PrintReg from "~/app/_components/print/PrintReg";
import { api } from "~/trpc/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { type OrderWithRelations } from "pg/generated/zod";

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
      <button className="btn" onClick={handlePrint}>
        Print this out!
      </button>
    </>
  );
};

export default OrderPrint;
