"use client";
import { api } from "~/trpc/react";
import { useState } from "react";
import { formatDate } from "~/app/_utils/dateFunctions";
import { type OrderWithRelations } from "pg/generated/zod";
import { useRouter } from "next/navigation";
import { ROUTES } from "~/app/_utils/routesEnum";

const OrderPage = () => {
  const { data: orders } = api.order.list.useQuery();

  const [tab, setTab] = useState<"idle" | "process" | "completed" | "canceled">(
    "idle",
  );

  if (!orders) {
    return <div>Loading...</div>;
  }

  // Separate orders based on status
  const idleOrders = orders.filter((order) => order.status === 0);
  const processingOrders = orders.filter((order) => order.status === 1);
  const completedOrders = orders.filter((order) => order.status === 2);
  const canceledOrders = orders.filter((order) => order.status === 4);

  return (
    <section className="rounded-md bg-white p-4 shadow-md ">
      <h1 className="mb-4 text-2xl font-bold">Ordenes</h1>

      <div role="tablist" className="tabs tabs-lifted overflow-x-auto">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Idle"
          defaultChecked
          checked={tab === "idle"}
          onClick={() => setTab("idle")}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 px-6 pt-6"
        >
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Nombre / Cantidad</th>
                  <th>Estado</th>
                  <th>Linea temporal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {idleOrders
                  ? idleOrders.map((order) => (
                      <OrderTableRow
                        key={order.id}
                        order={order as OrderWithRelations}
                      />
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab checked:text-accent"
          aria-label="In Process"
          checked={tab === "process"}
          onClick={() => setTab("process")}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 px-6 pt-6"
        >
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Nombre / Cantidad</th>
                  <th>Estado</th>
                  <th>Linea temporal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {processingOrders
                  ? processingOrders.map((order) => (
                      <OrderTableRow
                        key={order.id}
                        order={order as OrderWithRelations}
                      />
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Completed"
          checked={tab === "completed"}
          onClick={() => setTab("completed")}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 px-6 pt-6"
        >
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Nombre / Cantidad</th>
                  <th>Estado</th>
                  <th>Linea temporal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {completedOrders
                  ? completedOrders.map((order) => (
                      <OrderTableRow
                        key={order.id}
                        order={order as OrderWithRelations}
                      />
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_4"
          role="tab"
          className="tab checked:text-accent"
          aria-label="Canceled"
          checked={tab === "canceled"}
          onClick={() => setTab("canceled")}
        />
        <div
          role="tabpanel"
          className="tab-content rounded-box border-base-300 bg-base-100 px-6 pt-6"
        >
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Nombre / Cantidad</th>
                  <th>Estado</th>
                  <th>Linea temporal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {canceledOrders
                  ? canceledOrders.map((order) => (
                      <OrderTableRow
                        key={order.id}
                        order={order as OrderWithRelations}
                      />
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrderTableRow = ({ order }: { order: OrderWithRelations }) => {
  const router = useRouter();

  const OrderBadge = ({ status }: { status: number }) => {
    let badgeClass = "";
    let badgeContent = "";

    switch (status) {
      case 0:
        badgeContent = "Idle";
        badgeClass = " badge-info";
        break;
      case 1:
        badgeContent = "Processing";
        badgeClass = " badge-secondary";
        break;
      case 2:
        badgeContent = "Completed";
        badgeClass = " badge-success";
        break;
      case 4:
        badgeContent = "Canceled";
        badgeClass = " badge-error";
        break;
      default:
        badgeContent = "Unknown";
        badgeClass = " badge-warning";
        break;
    }

    return (
      <span className={`badge ${badgeClass} badge-outline badge-md`}>
        {badgeContent}
      </span>
    );
  };

  return (
    <tr key={order.id}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div
              style={{
                backgroundColor: `rgb(${order.regcol.R},${order.regcol.G},${order.regcol.B})`,
              }}
              className="mask mask-circle h-12 w-12 shadow-md"
            ></div>
          </div>
          <div>
            <div className="font-bold capitalize">
              {order.regcol.description}
            </div>
            <div className="text-sm opacity-50">
              {order.amaunt.toString()} GL
            </div>
          </div>
        </div>
      </td>
      <td>{<OrderBadge status={order.status} />}</td>
      <td>
        {`CR ${formatDate(order.createdAt)}`}
        <br />
        {order.processAt ? `PR ${formatDate(order.processAt)}` : ""}
        <br />
        {order.closedAt ? `CL ${formatDate(order.closedAt)}` : ""}
      </td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() =>
            router.push(`${ROUTES.LABORATORY_ORDER_ID}${order.id}`)
          }
        >
          details
        </button>
      </th>
    </tr>
  );
};

export default OrderPage;
