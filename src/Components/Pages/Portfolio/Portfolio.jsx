import { useState } from "react";
import { motion } from "framer-motion";
import WebDesign from "./WebDesign";
import GraphicDesign from "./GraphicDesign";

const tabs = ["Web development", "Graphic design"];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="min-h-screen px-5 py-10 pb-28 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Selected work</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">Practical work with a product mindset.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
            A focused selection of web projects and visual design work. Each piece represents an effort to make a clear, useful, and polished experience.
          </p>
        </header>

        <div className="mt-10 flex w-fit rounded-xl border border-slate-200 bg-white p-1.5 dark:border-white/10 dark:bg-white/[0.03]" role="tablist" aria-label="Portfolio categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition sm:px-5 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-sm dark:bg-secondary dark:text-black"
                  : "text-slate-500 hover:text-primary dark:text-zinc-400 dark:hover:text-secondary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          role="tabpanel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {activeTab === "Web development" ? <WebDesign /> : <GraphicDesign />}
        </motion.div>
      </div>
    </main>
  );
};

export default Portfolio;
