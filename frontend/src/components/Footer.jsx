import React from "react";
import { assets } from "../assets/assets.js";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[160px]" />
      </div>

      <div className="relative">

        {/* Top Strip */}
        <div className="border-b border-white/10">

          <div className="grid gap-8 px-6 py-8 md:grid-cols-3 lg:px-0">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Truck size={26} />
              </div>

              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-slate-400">
                  Orders above ₹999
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck size={26} />
              </div>

              <div>
                <h4 className="font-semibold">Secure Shopping</h4>
                <p className="text-sm text-slate-400">
                  Trusted payment gateways
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <CreditCard size={26} />
              </div>

              <div>
                <h4 className="font-semibold">Easy Payments</h4>
                <p className="text-sm text-slate-400">
                  Cards • UPI • Wallets
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Main Footer */}
        <div className="grid gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-0">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <img
              src={assets.logo}
              alt="Logo"
              className="mb-8 w-40"
            />

            <p className="leading-8 text-slate-400">
              Discover premium fashion that blends timeless elegance,
              modern trends and exceptional craftsmanship.
            </p>

            <div className="mt-8 flex gap-4">

              {[
                Instagram,
                Facebook,
                Twitter,
                Linkedin,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-900"
                >
                  <Icon size={18} />
                </div>
              ))}

            </div>

          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-5">

              {[
                ["Home", "/"],
                ["Collection", "/collection"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="group flex items-center justify-between text-slate-400 transition hover:text-white"
                  >
                    {name}

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Customer */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-xl font-bold">
              Customer Care
            </h3>

            <ul className="space-y-5 text-slate-400">

              {[
                "FAQ",
                "Shipping Policy",
                "Return Policy",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition hover:text-white"
                >
                  {item}
                </li>
              ))}

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone
                  className="mt-1 text-slate-300"
                  size={18}
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="text-slate-300">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail
                  className="mt-1 text-slate-300"
                  size={18}
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-slate-300">
                    support@yourstore.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <MapPin
                  className="mt-1 text-slate-300"
                  size={18}
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Address
                  </p>

                  <p className="text-slate-300">
                    Mumbai, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">

          <div className="flex flex-col items-center justify-between gap-5 py-8 text-sm text-slate-500 md:flex-row">

            <p>
              © 2026 YourStore. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}