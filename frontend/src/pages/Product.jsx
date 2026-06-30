import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import RelatedProducts from "../components/RelatedProducts.jsx";
import { toast } from "react-toastify";
import {
  Star,
  ShieldCheck,
  RotateCcw,
  Truck,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Product() {
  const { productId } = useParams();

  const { products, currency, addToCart, navigate } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="border-t border-slate-800 py-10"
  >
    <div className="grid gap-12 lg:grid-cols-2">

      {/* Images */}

      <div className="flex flex-col-reverse gap-5 lg:flex-row">

        <div className="flex gap-3 overflow-x-auto lg:w-28 lg:flex-col">

          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              onClick={() => setImage(item)}
              className={`cursor-pointer rounded-2xl border-2 transition duration-300 ${
                image === item
                  ? "border-indigo-600"
                  : "border-slate-800 hover:border-indigo-300"
              }`}
            />
          ))}

        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950"
        >
          <img
            src={image}
            alt={productData.name}
            className="w-full object-cover transition duration-500 hover:scale-110"
          />
        </motion.div>

      </div>

      {/* Details */}

      <div className="lg:sticky lg:top-24 h-fit rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-sm">

        <div className="mb-3 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
          Premium Collection
        </div>

        <h1 className="text-4xl font-bold text-white">
          {productData.name}
        </h1>

        <div className="mt-5 flex items-center gap-1">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
              className="text-yellow-400"
            />
          ))}

          <span className="ml-3 text-slate-400">(122 Reviews)</span>

        </div>

        <h2 className="mt-6 text-4xl font-bold text-indigo-600">
          {currency}
          {productData.price}
        </h2>

        <p className="mt-6 leading-8 text-slate-300">
          {productData.description}
        </p>

        <div className="mt-10">

          <p className="mb-4 font-semibold text-slate-100">
            Choose Size
          </p>

          <div className="flex flex-wrap gap-3">

            {productData.sizes.map((item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`rounded-xl border px-5 py-3 font-medium transition ${
                  size === item
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-700 hover:border-indigo-500"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={() => {
              if (!size) {
                toast.error("Please select a size");
                return;
              }
              addToCart(productData._id, size);
              toast.success("Added to cart");
              navigate("/cart");
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-600"
          >
            <ShoppingBag size={18} />
            Add To Cart
          </button>

          <button className="rounded-xl border border-slate-700 p-4 transition hover:border-red-400 hover:text-red-500">
            <Heart size={20} />
          </button>

        </div>

        <div className="mt-10 space-y-5 rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">
            <Truck className="text-indigo-600" size={20} />
            <span>Free Shipping above ₹999</span>
          </div>

          <div className="flex items-center gap-3">
            <RotateCcw className="text-indigo-600" size={20} />
            <span>Easy 7 Days Return</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-indigo-600" size={20} />
            <span>100% Genuine Product</span>
          </div>

        </div>

      </div>

    </div>

    {/* Description */}

    <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Product Description
      </h2>

      <p className="leading-8 text-slate-300">
        {productData.description}
      </p>

      <p className="mt-5 leading-8 text-slate-300">
        Crafted with premium quality materials for maximum comfort and
        durability. Perfect for everyday wear while maintaining a modern,
        stylish appearance.
      </p>

    </div>

    <RelatedProducts
      category={productData.category}
      subCategory={productData.subCategory}
    />
  </motion.div>
) : (
  <div className="py-32"></div>
);
}