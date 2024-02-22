"use client";
import Decimal from "decimal.js";
import PrintReg from "~/app/_components/print/PrintReg";
import { api } from "~/trpc/react";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const OrderPrint = ({ params }: { params: { id: string } }) => {
  const { data, mutate } = api.registro.findColor.useMutation();
  const { data: bases } = api.base.list.useQuery();
  const { data: colorantes } = api.colorante.list.useQuery();

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    console.log(params.id);
    mutate({});
  }, []);

  if (!data?.[2] || !bases || !colorantes) return;

  return (
    <>
      <div ref={componentRef}>
        <PrintReg
          key={data[2].id}
          bases={bases}
          colorantes={colorantes}
          color={data[2]}
          cantidad={new Decimal(5)}
        />
      </div>
      <button className="btn" onClick={handlePrint}>
        Print this out!
      </button>
    </>
  );
};

export default OrderPrint;
