import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  // Flatten cartItems {productId: {size: qty}} into a render-ready list
  const cartData = useMemo(() => {
    const list = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          list.push({ _id: itemId, size, quantity: cartItems[itemId][size] });
        }
      }
    }
    return list;
  }, [cartItems]);

  return (
    <div className="border-t border-slate-800 pt-10">
      <Title text1="Your" text2="Cart" />

      {cartData.length === 0 ? (
        <p className="mt-8 text-slate-400">Your cart is empty.</p>
      ) : (
        <div className="mt-8 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {cartData.map((cartItem) => {
              const productData = products.find(
                (p) => p._id === cartItem._id
              );

              if (!productData) return null;

              return (
                <div
                  key={`${cartItem._id}-${cartItem.size}`}
                  className="flex items-center gap-5 rounded-2xl border border-slate-800 p-4"
                >
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <p className="font-semibold text-white">
                      {productData.name}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-sm text-slate-400">
                      <span>
                        {currency}
                        {productData.price}
                      </span>
                      <span className="rounded-md border border-slate-700 px-2 py-0.5">
                        {cartItem.size}
                      </span>
                    </div>
                  </div>

                  <input
                    type="number"
                    min={1}
                    value={cartItem.quantity}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value > 0) {
                        updateQuantity(cartItem._id, cartItem.size, value);
                      }
                    }}
                    className="w-16 rounded-lg border border-slate-700 px-2 py-2 text-center text-sm"
                  />

                  <button
                    onClick={() =>
                      updateQuantity(cartItem._id, cartItem.size, 0)
                    }
                    className="rounded-full p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })}
          </div>

          <div>
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="mt-6 w-full rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}