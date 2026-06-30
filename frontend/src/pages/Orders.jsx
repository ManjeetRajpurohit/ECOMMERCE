import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import axios from "axios";
import { Package } from "lucide-react";

export default function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      if (!token) return;

      try {
        const response = await axios.post(
          backendUrl + "/api/order/userorders",
          {},
          { headers: { token } }
        );

        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadOrders();
  }, [token, backendUrl]);

  return (
    <div className="border-t border-slate-800 pt-10">
      <Title text1="My" text2="Orders" />

      {orders.length === 0 ? (
        <p className="mt-8 text-slate-400">You haven't placed any orders yet.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {orders.map((order, orderIndex) =>
            order.items.map((item, itemIndex) => (
              <div
                key={`${orderIndex}-${itemIndex}`}
                className="flex flex-col gap-4 rounded-2xl border border-slate-800 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image?.[0]}
                    alt={item.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <div className="mt-1 flex items-center gap-4 text-sm text-slate-400">
                      <span>
                        {currency}
                        {item.price}
                      </span>
                      <span>Qty: {item.quantity}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">
                      Date: {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-slate-200">
                    {order.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}