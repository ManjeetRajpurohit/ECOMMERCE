import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  Filter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["Men", "Women", "Kids"];
const SUB_CATEGORIES = ["Topwear", "Bottomwear", "Winterwear"];

export default function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);

  const [mobileFilter, setMobileFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggle = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (showSearch && search) {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      list = list.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length) {
      list = list.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "low-high") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sortType === "high-low") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [
    products,
    search,
    showSearch,
    category,
    subCategory,
    sortType,
  ]);

  return (
    <section className="relative py-14">

      {/* Header */}
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

        <Title text1="All" text2="Collections" />

        <div className="flex items-center gap-4">

          <button
            onClick={() => setMobileFilter(true)}
            className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold shadow-sm transition hover:shadow-lg lg:hidden"
          >
            <Filter size={18} />
            Filters
          </button>

          <div className="relative">

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="appearance-none rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 pr-12 text-sm font-medium shadow-sm outline-none transition hover:border-indigo-500"
            >
              <option value="relevant">Relevant</option>
              <option value="low-high">Price : Low to High</option>
              <option value="high-low">Price : High to Low</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

          </div>

        </div>

      </div>

      <div className="grid gap-10 lg:grid-cols-[300px_1fr]">

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">

          <div className="sticky top-28 rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">

            <h3 className="mb-8 text-2xl font-bold">
              Filters
            </h3>

            {/* Category */}

            <div>

              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Category
              </h4>

              <div className="space-y-3">

                {CATEGORIES.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-slate-800"
                  >
                    <input
                      type="checkbox"
                      checked={category.includes(item)}
                      onChange={() =>
                        toggle(
                          item,
                          category,
                          setCategory
                        )
                      }
                      className="h-4 w-4 accent-slate-900"
                    />

                    <span>{item}</span>

                  </label>
                ))}

              </div>

            </div>

            <div className="my-8 h-px bg-slate-800" />

            {/* Type */}

            <div>

              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Type
              </h4>

              <div className="space-y-3">

                {SUB_CATEGORIES.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 rounded-xl p-3 transition hover:bg-slate-800"
                  >
                    <input
                      type="checkbox"
                      checked={subCategory.includes(item)}
                      onChange={() =>
                        toggle(
                          item,
                          subCategory,
                          setSubCategory
                        )
                      }
                      className="h-4 w-4 accent-slate-900"
                    />

                    <span>{item}</span>

                  </label>
                ))}

              </div>

            </div>

          </div>

        </aside>

        {/* Products */}

        <div>

          <div className="mb-8 flex items-center justify-between">

            <p className="text-slate-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {filteredProducts.length}
              </span>{" "}
              Products
            </p>

          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex h-80 items-center justify-center rounded-[30px] border border-dashed border-slate-700 bg-slate-950">

              <div className="text-center">

                <h2 className="text-2xl font-bold text-white">
                  No Products Found
                </h2>

                <p className="mt-3 text-slate-400">
                  Try changing your filters or search.
                </p>

              </div>

            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </motion.div>
          )}

        </div>

      </div>

      {/* Mobile Filter */}

      <AnimatePresence>

        {mobileFilter && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilter(false)}
              className="fixed inset-0 z-40 bg-indigo-700/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-[320px] bg-slate-900 shadow-2xl"
            >

              <div className="flex items-center justify-between border-b p-6">

                <h2 className="text-xl font-bold">
                  Filters
                </h2>

                <button
                  onClick={() =>
                    setMobileFilter(false)
                  }
                >
                  <X />
                </button>

              </div>

              <div className="space-y-8 p-6">

                <div>

                  <h3 className="mb-4 font-semibold">
                    Category
                  </h3>

                  <div className="space-y-3">

                    {CATEGORIES.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <input
                          type="checkbox"
                          checked={category.includes(item)}
                          onChange={() =>
                            toggle(
                              item,
                              category,
                              setCategory
                            )
                          }
                        />

                        {item}
                      </label>
                    ))}

                  </div>

                </div>

                <div>

                  <h3 className="mb-4 font-semibold">
                    Type
                  </h3>

                  <div className="space-y-3">

                    {SUB_CATEGORIES.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <input
                          type="checkbox"
                          checked={subCategory.includes(item)}
                          onChange={() =>
                            toggle(
                              item,
                              subCategory,
                              setSubCategory
                            )
                          }
                        />

                        {item}
                      </label>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          </>
        )}

      </AnimatePresence>

    </section>
  );
}