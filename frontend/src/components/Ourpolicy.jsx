import React from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Ourpolicy() {
  const policies = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Free delivery on all orders above ₹999 across India.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      desc: "Hassle-free 7 day returns and quick refunds.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "100% secure checkout with trusted payment gateways.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our team is always ready to help you anytime.",
    },
  ];

  return (
    <section className="relative py-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-sm">
          Why Shop With Us
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Premium Shopping Experience
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          We believe shopping should be simple, secure and enjoyable from
          browsing to doorstep delivery.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
        {policies.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl"
            >
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={30} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 rounded-[30px] border border-slate-800 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-950 px-8 py-10 text-center shadow-2xl"
      >
        <h3 className="text-3xl font-bold text-white">
          Trusted by Thousands of Customers
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
          Fast shipping, premium quality, secure payments and excellent
          customer support make every purchase a seamless experience.
        </p>
      </motion.div>
    </section>
);
}