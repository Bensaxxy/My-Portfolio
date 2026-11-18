/** @format */

// import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { Mail } from "./Mail";
import PhoneCall from "./PhoneCall";

const Contact = () => {
  return (
    <main className="min-h-screen px-5 py-10 pb-28 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">Let&apos;s build something useful.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">I&apos;m open to frontend roles, product collaborations, and freelance opportunities. If you think we could work well together, I&apos;d love to hear from you.</p>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Send a message</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Tell me a little about the opportunity.</h2>
            <div className="mt-7"><Mail /></div>
          </div>

          <aside className="space-y-4">
            <a href="mailto:benjaminsegun38@gmail.com" className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-secondary/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary"><FiMail size={20} aria-hidden="true" /></span>
              <span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-400">Email</span><span className="mt-1 block font-semibold group-hover:text-primary dark:group-hover:text-secondary">benjaminsegun38@gmail.com</span></span>
            </a>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary"><FiPhone size={20} aria-hidden="true" /></span><span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-400">Phone</span><PhoneCall /></span></div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-zinc-400">Professional profiles</p>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/Bensaxxy" target="_blank" rel="noreferrer" aria-label="Visit Benjamin's GitHub profile" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-secondary dark:hover:text-secondary"><FiGithub size={18} /></a>
                <a href="https://www.linkedin.com/in/oluwasegun-benjamin-a80b76252/" target="_blank" rel="noreferrer" aria-label="Visit Benjamin's LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-secondary dark:hover:text-secondary"><FiLinkedin size={18} /></a>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Contact;
