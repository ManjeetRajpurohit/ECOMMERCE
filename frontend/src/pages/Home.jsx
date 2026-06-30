import React from "react";
import Hero from "../components/Hero.jsx";
import LatestCollection from "../components/LatestCollection.jsx";
import BestSeller from "../components/BestSeller.jsx";
import Ourpolicy from "../components/Ourpolicy.jsx";
import NewsLetterBox from "../components/NewsLetterBox.jsx";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />

      <div className="border-t border-slate-800">
        <LatestCollection />
      </div>

      <div className="border-t border-slate-800">
        <BestSeller />
      </div>

      <div className="border-t border-slate-800">
        <Ourpolicy />
      </div>

      <div className="border-t border-slate-800">
        <NewsLetterBox />
      </div>
    </div>
  );
}