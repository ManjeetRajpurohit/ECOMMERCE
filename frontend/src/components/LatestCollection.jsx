import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductItem from "./ProductItem.jsx";
import Title from "./Title.jsx";
import { motion } from "framer-motion";

export default function LatestCollection() {
  const { products } = useContext(ShopContext);

  const latestProducts = useMemo(() => {
    return products.slice(0, 10);
  }, [products]);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-slate-800 blur-3xl opacity-70"></div>
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-800 blur-3xl opacity-70"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 shadow-sm">
          Just Arrived
        </span>

        <div className="mt-5">
          <Title text1="Latest" text2="Collection" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
          Fresh arrivals crafted with premium fabrics, elegant silhouettes,
          and timeless aesthetics. Upgrade your wardrobe with our latest
          fashion essentials.
        </p>
      </motion.div>

      {/* Products */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {latestProducts.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mt-20 flex justify-center"
      >
        <button className="rounded-2xl border border-indigo-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:text-white hover:shadow-xl">
          View Complete Collection
        </button>
      </motion.div>
    </section>
  );
}