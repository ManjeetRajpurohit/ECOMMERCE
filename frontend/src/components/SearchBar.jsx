import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  TrendingUp,
  Shirt,
  ShoppingBag,
} from "lucide-react";

export default function SearchBar() {
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
  } = useContext(ShopContext);

  const quickSearches = [
    "T-Shirts",
    "Hoodies",
    "Shoes",
    "Jackets",
    "Women",
    "Men",
  ];

  const closeSearch = () => {
    setShowSearch(false);
    setSearch("");
  };

  return (
    <AnimatePresence>
      {showSearch && (
        <>
          {/* Blur Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSearch}
            className="fixed inset-0 z-40 bg-indigo-700/35 backdrop-blur-sm"
          />

          {/* Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-24 z-50 w-[95%] max-w-4xl -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-[30px] border border-slate-800 bg-slate-900 shadow-[0_25px_80px_rgba(15,23,42,0.18)]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Search
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Find Your Perfect Style
                  </h2>

                </div>

                <button
                  onClick={closeSearch}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:rotate-90 hover:bg-indigo-600 hover:text-white"
                >
                  <X size={20} />
                </button>

              </div>

              {/* Input */}
              <div className="px-8 pt-8">

                <div className="flex items-center gap-4 rounded-2xl border-2 border-slate-800 bg-slate-950 px-6 py-5 transition-all duration-300 focus-within:border-indigo-500 focus-within:bg-slate-900">

                  <Search
                    size={22}
                    className="text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    autoFocus
                    placeholder="Search for shirts, shoes, hoodies..."
                    className="w-full bg-transparent text-lg text-slate-100 placeholder:text-slate-400 focus:outline-none"
                  />

                </div>

              </div>

              {/* Popular Searches */}
              <div className="px-8 pt-8">

                <div className="mb-4 flex items-center gap-2">

                  <TrendingUp
                    size={18}
                    className="text-slate-200"
                  />

                  <h3 className="font-semibold text-white">
                    Popular Searches
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {quickSearches.map((item) => (
                    <button
                      key={item}
                      onClick={() => setSearch(item)}
                      className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                    >
                      {item}
                    </button>
                  ))}

                </div>

              </div>

              {/* Categories */}
              <div className="grid gap-4 px-8 py-8 md:grid-cols-3">

                <div className="rounded-2xl bg-slate-800 p-5 transition hover:bg-indigo-600 hover:text-white">

                  <Shirt size={26} />

                  <h4 className="mt-4 font-semibold">
                    Latest Collection
                  </h4>

                  <p className="mt-2 text-sm opacity-70">
                    Explore fresh arrivals curated for every season.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-800 p-5 transition hover:bg-indigo-600 hover:text-white">

                  <ShoppingBag size={26} />

                  <h4 className="mt-4 font-semibold">
                    Best Sellers
                  </h4>

                  <p className="mt-2 text-sm opacity-70">
                    Discover the products loved by thousands.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-800 p-5 transition hover:bg-indigo-600 hover:text-white">

                  <Sparkles size={26} />

                  <h4 className="mt-4 font-semibold">
                    New Arrivals
                  </h4>

                  <p className="mt-2 text-sm opacity-70">
                    Premium styles added every week.
                  </p>

                </div>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}