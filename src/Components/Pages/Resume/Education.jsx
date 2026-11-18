/** @format */

// import React from "react";

const Education = () => {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Education</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Computer Science</h2>
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary dark:text-secondary">2023 — 2025</p>
          <h3 className="mt-3 text-xl font-bold">Higher National Diploma</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">Federal Polytechnic Nasarawa</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-zinc-300">Advanced study in Computer Science, including database systems, artificial intelligence and machine learning, and project management.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary dark:text-secondary">2018 — 2020</p>
          <h3 className="mt-3 text-xl font-bold">National Diploma</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">Federal Polytechnic Nasarawa</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-zinc-300">A foundation in Computer Science and information technology, including programming fundamentals and web development.</p>
        </article>
      </div>
    </div>
  );
};

export default Education;
