import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";

export default function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="rounded-2xl border border-slate-800 p-6">
      <Title text1="Cart" text2="Totals" />

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between text-slate-300">
          <span>Subtotal</span>
          <span>
            {currency}
            {subtotal}.00
          </span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Shipping Fee</span>
          <span>
            {currency}
            {subtotal === 0 ? 0 : delivery_fee}.00
          </span>
        </div>

        <div className="border-t border-slate-800 pt-4 flex justify-between text-base font-bold text-white">
          <span>Total</span>
          <span>
            {currency}
            {total}.00
          </span>
        </div>
      </div>
    </div>
  );
}