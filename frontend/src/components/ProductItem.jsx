import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Heart,
  ShoppingBag,
  Star,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, products, addToCart, navigate } = useContext(ShopContext);

  // Card view has no size selector, so default to the product's first
  // available size, add it to the cart, then send the user to the cart page.
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const productData = products.find((p) => p._id === id);
    const defaultSize =
      productData && productData.sizes && productData.sizes.length > 0
        ? productData.sizes[0]
        : "Free Size";

    addToCart(id, defaultSize);
    toast.success("Added to cart");
    navigate("/cart");
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group h-full"
    >
      <Link
        to={`/product/${id}`}
        className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800/80 bg-slate-900 shadow-sm transition-all duration-500 hover:border-slate-700 hover:shadow-2xl"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-950">

          <img
            src={image[0]}
            alt={name}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Badge */}
          <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg">
            New
          </span>

          {/* Wishlist */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/95 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-red-50"
          >
            <Heart
              size={18}
              className="text-slate-300 transition hover:text-red-500"
            />
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-indigo-700/5 opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Bottom Actions */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-all duration-500 group-hover:translate-y-0">

            <div className="bg-slate-900/95 p-4 backdrop-blur-xl">

              <div className="flex gap-3">

                <button
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <ShoppingBag size={17} />
                  Add to Cart
                </button>

                <button
                  onClick={handleQuickView}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition hover:bg-slate-800"
                >
                  <Eye size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Product Content */}
        <div className="flex flex-1 flex-col p-5">

          {/* Rating */}
          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-xs font-medium text-slate-400">
              4.9 (128)
            </span>

          </div>

          {/* Product Name */}
          <h3 className="min-h-[54px] text-[16px] font-semibold leading-6 text-slate-100 transition duration-300 group-hover:text-white">
            {name}
          </h3>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Price */}
          <div className="mt-6 flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Price
              </p>

              <h2 className="mt-1 text-2xl font-bold text-white">
                {currency}
                {price}
              </h2>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white transition duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </div>

          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default ProductItem;