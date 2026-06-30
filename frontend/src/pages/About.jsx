import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.jsx";
import { motion } from "framer-motion";
import { Heart, Leaf, Truck } from "lucide-react";

export default function About() {
  return (
    <div className="border-t border-slate-800">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center"
      >
        <Title text1="About" text2="Us" />
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          We're a small team obsessed with making everyday fashion feel
          considered — quality fabrics, honest pricing, and a shopping
          experience that respects your time.
        </p>
      </motion.section>

      <section className="grid gap-14 pb-20 lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={assets.about_img}
          alt=""
          className="w-full rounded-3xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Title text1="Our" text2="Story" />

          <p className="mt-6 leading-8 text-slate-300">
            What started as a small idea has grown into a collection people
            actually reach for every day. We work directly with manufacturers
            to keep quality high and prices fair, cutting out the markup that
            usually comes with "fast fashion."
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Every piece is chosen with the same question in mind: would we
            wear this ourselves, season after season? If the answer's no,
            it doesn't make the cut.
          </p>
        </motion.div>
      </section>

      <section className="pb-20">
        <div className="mb-12 text-center">
          <Title text1="Why" text2="Choose Us" />
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Made With Care",
              desc: "Every product is checked for quality before it ships.",
            },
            {
              icon: Leaf,
              title: "Honest Pricing",
              desc: "No inflated markups — fair prices, always.",
            },
            {
              icon: Truck,
              title: "Reliable Delivery",
              desc: "Fast, tracked shipping on every order.",
            },
          ].map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 p-8 text-center"
            >
              <f.icon size={30} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <NewsLetterBox />
    </div>
  );
}