/** @format */

import { experienceData } from "./experienceData";

const Experience = () => {
  return (
    <div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Career</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {experienceData.map((item, index) => (
            <article key={`${item.company}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary dark:text-secondary">{item.year}</p>
              <h3 className="mt-3 text-xl font-bold tracking-tight">{item.role}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-zinc-400">{item.company}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
