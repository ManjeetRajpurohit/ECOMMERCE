import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function PlaceOrder() {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    products,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const [placing, setPlacing] = useState(false);

  // Dynamically loads the Razorpay checkout script (only once)
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const buildOrderItems = () => {
    let orderItems = [];

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const itemInfo = products.find((p) => p._id === itemId);
          if (itemInfo) {
            orderItems.push({ ...itemInfo, size, quantity: cartItems[itemId][size] });
          }
        }
      }
    }
    return orderItems;
  };

  // Opens the Razorpay checkout widget for a given order returned by the backend
  const initRazorpayPayment = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      handler: async (razorpayResponse) => {
        try {
          const verifyResponse = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            { razorpay_order_id: razorpayResponse.razorpay_order_id },
            { headers: { token } }
          );

          if (verifyResponse.data.success) {
            setCartItems({});
            toast.success("Payment successful, order placed");
            navigate("/orders");
          } else {
            toast.error(verifyResponse.data.message || "Payment verification failed");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        } finally {
          setPlacing(false);
        }
      },
      modal: {
        ondismiss: () => {
          setPlacing(false);
          toast.info("Payment cancelled");
        },
      },
      theme: { color: "#4f46e5" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => {
      setPlacing(false);
      toast.error("Payment failed, please try again");
    });
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (placing) return;
    setPlacing(true);

    try {
      const orderItems = buildOrderItems();

      if (orderItems.length === 0) {
        toast.error("Your cart is empty");
        setPlacing(false);
        return;
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      if (method === "cod") {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          setCartItems({});
          toast.success("Order placed successfully");
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
        setPlacing(false);
      } else if (method === "razorpay") {
        const scriptLoaded = await loadRazorpayScript();

        if (!scriptLoaded) {
          toast.error("Unable to load payment gateway. Check your connection.");
          setPlacing(false);
          return;
        }

        const response = await axios.post(
          backendUrl + "/api/order/razorpay",
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          initRazorpayPayment(response.data.order);
        } else {
          toast.error(response.data.message);
          setPlacing(false);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setPlacing(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-12 border-t border-slate-800 pt-10 lg:flex-row"
    >
      {/* Delivery info */}
      <div className="flex-1">
        <Title text1="Delivery" text2="Information" />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            required
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            placeholder="First name"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            placeholder="Last name"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="Email address"
            className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="street"
            value={formData.street}
            onChange={onChangeHandler}
            placeholder="Street"
            className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="city"
            value={formData.city}
            onChange={onChangeHandler}
            placeholder="City"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="state"
            value={formData.state}
            onChange={onChangeHandler}
            placeholder="State"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="zipcode"
            value={formData.zipcode}
            onChange={onChangeHandler}
            placeholder="Zipcode"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="country"
            value={formData.country}
            onChange={onChangeHandler}
            placeholder="Country"
            className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={onChangeHandler}
            placeholder="Phone"
            className="sm:col-span-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Payment + total */}
      <div className="w-full lg:max-w-md">
        <CartTotal />

        <div className="mt-8">
          <p className="mb-4 text-sm font-semibold text-slate-200">
            Payment Method
          </p>

          <div className="space-y-3">
            <label
              className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer ${
                method === "cod"
                  ? "border-indigo-500 bg-indigo-600/20"
                  : "border-slate-700"
              }`}
            >
              <input
                type="radio"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label
              className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer ${
                method === "razorpay"
                  ? "border-indigo-500 bg-indigo-600/20"
                  : "border-slate-700"
              }`}
            >
              <input
                type="radio"
                checked={method === "razorpay"}
                onChange={() => setMethod("razorpay")}
              />
              Card / UPI / Razorpay
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={placing}
          className="mt-8 w-full rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {placing ? "Processing..." : "Place Order"}
        </button>
      </div>
    </form>
  );
}