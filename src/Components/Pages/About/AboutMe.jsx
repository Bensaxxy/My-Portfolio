import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const highlights = [
  { value: "4+", label: "Years in digital work" },
  { value: "React", label: "Frontend specialization" },
  { value: "12", label: "Core tools and workflows" },
  { value: "Remote", label: "Collaboration experience" },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "Framer Motion",
  "REST APIs",
  "Vite",
];

const AboutMe = () => (
  <main className="min-h-screen px-5 py-10 pb-28 sm:px-8 lg:px-12 lg:py-14">
    <div className="mx-auto max-w-6xl">
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-3xl"
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">About me</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          I care about the details people feel, not just the code they see.
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
          I&apos;m Oluwasegun Benjamin, a frontend developer with a design background. I turn product ideas into responsive, accessible interfaces that are clear, fast, and enjoyable to use.
        </p>
      </motion.header>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Professional highlights">
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-3xl font-black tracking-tight text-primary dark:text-secondary">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{item.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How I work</h2>
          <div className="mt-6 space-y-5 text-[0.98rem] leading-8 text-slate-600 dark:text-zinc-300">
            <p>I approach frontend work as both an engineering and communication problem: understand the goal, make the interface easy to navigate, and build it with maintainable components.</p>
            <p>My toolkit centres on React, JavaScript, TypeScript, Tailwind CSS, and modern browser APIs. I enjoy collaborating with designers and backend engineers to bring complete product experiences to life.</p>
            <p>Before shipping, I pay attention to responsive behaviour, semantic structure, keyboard access, and the small interaction details that make an interface feel considered.</p>
          </div>
          <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2a0875] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-secondary dark:text-black dark:hover:bg-white">
            See selected work <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Toolkit</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">Technologies I use</h2>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default AboutMe;
