import React from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import NewsLetterBox from "../components/NewsLetterBox.jsx";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="border-t border-slate-800">

      {/* Hero */}

      <motion.section
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-20 text-center"
      >
        <Title text1="Contact" text2="Us" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          We'd love to hear from you. Whether you have a question about
          products, orders or anything else, our team is always ready to help.
        </p>
      </motion.section>

      {/* Contact */}

      <section className="grid gap-14 pb-24 lg:grid-cols-2">

        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={assets.contact_img}
          alt=""
          className="w-full rounded-3xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-sm"
        >

          <Title text1="Get In" text2="Touch" />

          <div className="mt-10 space-y-8">

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-indigo-600/20 p-3 text-indigo-400">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Visit Our Store
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  54709 Wills Station
                  <br />
                  Suite 350, Washington, USA
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-indigo-600/20 p-3 text-indigo-400">
                <Phone size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="mt-2 text-slate-300">
                  +1 (415) 555-0132
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-indigo-600/20 p-3 text-indigo-400">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="mt-2 text-slate-300">
                  support@yourstore.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="rounded-xl bg-indigo-600/20 p-3 text-indigo-400">
                <Clock size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Working Hours
                </h3>

                <p className="mt-2 text-slate-300">
                  Monday - Saturday
                  <br />
                  9:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>

          <div className="mt-12 rounded-2xl bg-indigo-600 p-8 text-white">

            <div className="flex items-center gap-3">
              <Briefcase size={24} />
              <h3 className="text-2xl font-bold">
                Join Our Team
              </h3>
            </div>

            <p className="mt-4 leading-8 text-slate-300">
              We're always looking for passionate people to join our
              growing team. Explore exciting career opportunities with us.
            </p>

            <button className="mt-8 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-indigo-600 hover:text-white">
              Explore Careers
            </button>

          </div>

        </motion.div>

      </section>

      <NewsLetterBox />

    </div>
  );
}