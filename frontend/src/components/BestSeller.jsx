import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductItem from "./ProductItem.jsx";
import Title from "./Title.jsx";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

export default function BestSeller() {
  const { products } = useContext(ShopContext);

  const bestSellers = useMemo(() => {
    return products.filter((item) => item.bestseller).slice(0, 5);
  }, [products]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-slate-800 blur-[140px]"></div>
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-slate-800 blur-[120px]"></div>
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-slate-800 blur-[120px]"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 shadow-sm">
          <Crown size={14} />
          Customer Favorites
        </div>

        <div className="mt-5">
          <Title text1="Best" text2="Sellers" />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          The most loved products chosen by thousands of customers.
          Crafted with premium quality, timeless design, and everyday comfort.
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
        {bestSellers.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
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

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-950 px-8 py-10 shadow-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <div className="mb-4 flex items-center gap-2 text-amber-400">
                <Sparkles size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Premium Collection
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold text-white lg:text-4xl">
                Discover Our Most Loved Fashion Picks
              </h2>

              <p className="mt-4 max-w-xl text-slate-300 leading-7">
                Join thousands of happy customers shopping premium
                collections with unbeatable quality and timeless style.
              </p>

            </div>

            <button className="rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl">
              Shop Best Sellers
            </button>

          </div>

        </div>
      </motion.div>

    </section>
  );
}