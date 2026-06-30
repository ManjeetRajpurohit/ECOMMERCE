import React from "react";
import { motion } from "framer-motion";

export default function Title({ text1, text2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      {/* Top Label */}
      <span className="mb-3 inline-flex rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-sm">
        Premium Fashion
      </span>

      {/* Main Heading */}
      <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        {text1}{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-slate-200">
            {text2}
          </span>

          <span className="absolute bottom-1 left-0 -z-0 h-3 w-full rounded-full bg-slate-800"></span>
        </span>
      </h2>

      {/* Divider */}
      <div className="mt-6 flex items-center gap-3">
        <span className="h-px w-12 bg-slate-700"></span>

        <span className="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>

        <span className="h-px w-12 bg-slate-700"></span>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
        Explore thoughtfully curated collections designed with premium
        craftsmanship, timeless aesthetics, and everyday elegance.
      </p>
    </motion.div>
  );
}