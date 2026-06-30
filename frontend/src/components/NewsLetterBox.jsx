import React from "react";
import { Mail, ArrowRight, ShieldCheck, Gift, Bell } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsLetterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-slate-100 blur-[120px]"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-slate-200 blur-[140px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-black shadow-[0_25px_80px_rgba(15,23,42,0.35)]"
      >
        {/* Decorative Circles */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/5"></div>

        <div className="relative px-8 py-20 lg:px-20">

          {/* Top Icon */}
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
          >
            <Mail size={40} className="text-white" />
          </motion.div>

          {/* Heading */}
          <div className="mx-auto mt-10 max-w-3xl text-center">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              Stay Connected
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Subscribe &
              <br />
              Never Miss an Update
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Get early access to premium collections, exclusive discounts,
              limited-time offers and fashion inspiration delivered straight
              to your inbox.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={onSubmitHandler}
            className="mx-auto mt-14 flex w-full max-w-4xl flex-col gap-4 rounded-[24px] bg-white p-3 shadow-2xl lg:flex-row"
          >
            <div className="flex flex-1 items-center rounded-2xl bg-slate-100 px-5">

              <Mail
                size={20}
                className="mr-3 text-slate-500"
              />

              <input
                type="email"
                required
                placeholder="Enter your email address..."
                className="h-16 w-full bg-transparent text-slate-800 placeholder:text-slate-500 focus:outline-none"
              />

            </div>

            <button
              type="submit"
              className="group flex h-16 items-center justify-center gap-3 rounded-2xl bg-slate-900 px-10 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
            >
              Subscribe

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Features */}
          <div className="mt-12 grid gap-5 text-white sm:grid-cols-3">

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-lg">

              <Gift className="text-emerald-400" size={22} />

              <div className="text-left">
                <h4 className="font-semibold">
                  Exclusive Offers
                </h4>
                <p className="text-sm text-slate-400">
                  Members-only discounts
                </p>
              </div>

            </div>

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-lg">

              <Bell className="text-amber-400" size={22} />

              <div className="text-left">
                <h4 className="font-semibold">
                  Instant Updates
                </h4>
                <p className="text-sm text-slate-400">
                  Latest arrivals first
                </p>
              </div>

            </div>

            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-lg">

              <ShieldCheck
                className="text-cyan-400"
                size={22}
              />

              <div className="text-left">
                <h4 className="font-semibold">
                  Spam Free
                </h4>
                <p className="text-sm text-slate-400">
                  Unsubscribe anytime
                </p>
              </div>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}