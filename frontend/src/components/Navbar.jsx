import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  LogOut,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 text-slate-200 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-xl shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-5">

          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="w-36 transition hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] transition ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-slate-200 hover:text-indigo-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          <div className="flex items-center gap-5">

            <button
              onClick={() => setShowSearch(true)}
              className="rounded-full p-2 transition hover:bg-slate-800"
            >
              <Search size={20} />
            </button>

            <div className="relative group">

              <button
                onClick={() => (!token ? navigate("/login") : null)}
                className="rounded-full p-2 transition hover:bg-slate-800"
              >
                <User size={20} />
              </button>

              {token && (
                <div className="invisible absolute right-0 top-12 w-48 rounded-2xl border border-slate-800 bg-slate-900 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

                  <button
                    onClick={() => navigate("/orders")}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800"
                  >
                    <Package size={18} />
                    Orders
                  </button>

                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-500 transition hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>
              )}

            </div>

            <Link
              to="/cart"
              className="relative rounded-full p-2 transition hover:bg-slate-800"
            >
              <ShoppingBag size={20} />

              {getCartCount() > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-semibold text-white">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <button
              onClick={() => setVisible(true)}
              className="rounded-full p-2 transition hover:bg-slate-800 lg:hidden"
            >
              <Menu size={22} />
            </button>

          </div>

        </div>
      </header>

      <AnimatePresence>

        {visible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-800 p-6">

              <img
                src={assets.logo}
                className="w-32 brightness-0 invert"
                alt=""
              />

              <button onClick={() => setVisible(false)} className="text-white">
                <X size={28} />
              </button>

            </div>

            <div className="mt-8 flex flex-col">

              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setVisible(false)}
                  className="border-b border-slate-800 px-8 py-5 text-lg text-white transition hover:bg-slate-800"
                >
                  {item.name}
                </NavLink>
              ))}

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}