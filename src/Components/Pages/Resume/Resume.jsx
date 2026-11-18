/** @format */

// import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  return (
    <main className="min-h-screen px-5 py-10 pb-28 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Experience & education</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">A foundation in design, operations, and frontend engineering.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">A concise view of the roles and studies that shape how I build digital products today.</p>
        </header>

        <section className="mt-14">
          <Education />
        </section>
        <section className="mt-16 border-t border-slate-200 pt-16 dark:border-white/10">
          <Experience />
        </section>
      </div>
    </main>
  );
};

export default Resume;
