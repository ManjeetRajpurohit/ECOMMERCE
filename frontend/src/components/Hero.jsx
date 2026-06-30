import React from "react";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-xl">

      {/* Background Blur */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-800/40 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-900/20 blur-3xl"></div>

      <div className="relative grid min-h-[620px] grid-cols-1 items-center gap-14 px-7 py-14 sm:px-10 md:px-14 lg:grid-cols-2 lg:px-20 lg:py-20">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 shadow-sm">
            New Arrival 2026
          </span>

          <h1 className="mt-7 max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
            Wear Confidence.
            <br />
            Live Your Style.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-300 md:text-lg">
            Discover timeless fashion crafted with premium quality,
            modern aesthetics, and everyday comfort. Designed for those
            who believe style should feel effortless.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl">
              Shop Collection
            </button>

            <button className="rounded-2xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg">
              Explore More
            </button>

          </div>

          <div className="mt-14 grid max-w-md grid-cols-3 gap-8">

            <div>
              <h2 className="text-3xl font-bold text-white">15k+</h2>
              <p className="mt-2 text-sm text-slate-400">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="mt-2 text-sm text-slate-400">
                Premium Products
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">4.9★</h2>
              <p className="mt-2 text-sm text-slate-400">
                Customer Rating
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[420px] w-[420px] rounded-full bg-slate-800 blur-3xl opacity-50"></div>

          <img
            src={assets.hero_img}
            alt="Hero"
            className="relative z-10 max-h-[650px] w-full max-w-xl object-contain drop-shadow-2xl transition duration-500 hover:scale-[1.03]"
          />

          <div className="absolute left-0 top-10 hidden rounded-3xl bg-slate-900/90 p-5 shadow-xl backdrop-blur md:block">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Premium Quality
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              Handpicked Fashion
            </h3>
          </div>

          <div className="absolute bottom-8 right-2 hidden rounded-3xl bg-indigo-600 px-6 py-5 text-white shadow-2xl md:block">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Flat Offer
            </p>
            <h3 className="mt-1 text-2xl font-bold">
              40% OFF
            </h3>
          </div>

        </motion.div>

      </div>
    </section>
  );
}