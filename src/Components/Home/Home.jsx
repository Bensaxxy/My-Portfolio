import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiMail } from "react-icons/fi";
import HomePics from "./HomePics";
import SocialLinks from "./SocialLinks";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => (
  <main className="relative min-h-screen overflow-hidden bg-[#f8f8fc] text-slate-950 dark:bg-[#09090b] dark:text-white">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#1C0452]/10 blur-3xl dark:bg-[#AB9FBB]/10" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#AB9FBB]/20 blur-3xl dark:bg-[#1C0452]/30" />
    </div>

    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-28 pt-6 sm:px-8 lg:px-12 lg:pb-12">
      <header className="flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3" aria-label="Benjamin Oluwasegun home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-black tracking-tight text-white shadow-lg shadow-primary/20 transition-transform group-hover:-rotate-6">
            BO
          </span>
          <span className="hidden text-sm font-bold tracking-wide sm:block">BENJAMIN OLUWASEGUN</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:hover:border-secondary dark:hover:text-secondary"
        >
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </Link>
      </header>

      <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.12fr_0.88fr] lg:py-16">
        <div className="max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary dark:border-secondary/20 dark:bg-secondary/10 dark:text-secondary">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to frontend opportunities
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.08} className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-zinc-400">
            Frontend developer &amp; UI engineer
          </motion.p>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.16} className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            I build web experiences that feel <span className="text-primary dark:text-secondary">effortless.</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.24} className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
            I&apos;m Oluwasegun Benjamin, a React-focused frontend developer who turns product ideas and designs into responsive, accessible interfaces people enjoy using.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.32} className="mt-8 flex flex-wrap gap-3">
            {["React", "JavaScript", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span key={skill} className="rounded-full border border-slate-950/10 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4} className="mt-9 flex flex-wrap gap-3">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-[#2a0875] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-secondary dark:text-black dark:shadow-none dark:hover:bg-white">
              View selected work <FiBriefcase aria-hidden="true" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-slate-950/15 px-5 py-3 text-sm font-bold transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-white/20 dark:hover:border-secondary dark:hover:text-secondary">
              Contact me <FiMail aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.48} className="mt-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-zinc-400">Find me online</p>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2} className="mx-auto w-full max-w-md lg:max-w-none">
          <HomePics />
        </motion.div>
      </section>
    </div>
  </main>
);

export default Home;
