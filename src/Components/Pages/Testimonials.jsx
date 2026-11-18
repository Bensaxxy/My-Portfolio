/** @format */
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <main className="min-h-screen px-5 py-10 pb-28 sm:px-8 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-4xl">
        <header className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-secondary">Testimonials</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">Kind words from collaborators.</h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-zinc-300">Feedback from people I&apos;ve had the opportunity to work with.</p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-10"
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <svg
              className="absolute -left-2 -top-8 w-16 h-16 text-primary/10 opacity-80"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Testimonial Text */}
            <p className="relative z-10 border-l-2 border-primary pl-6 text-xl font-medium leading-9 text-slate-700 dark:border-secondary dark:text-zinc-200 sm:text-2xl sm:leading-10">
              &quot;I have been so impressed with your work, you have given us a
              major push on the project. Thank you&quot;
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-sm font-black text-white dark:bg-secondary dark:text-black">KI</span>
              <div>
                <p className="font-bold text-primary dark:text-secondary">Kenneth Idanwekhai</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                  {/* <svg
                    className="w-3 h-3 mr-1 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg> */}
                  Project Manager, Nexus Botix
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-10"
        >
          <p className="border-l-2 border-primary pl-6 text-xl font-medium leading-9 text-slate-700 dark:border-secondary dark:text-zinc-200 sm:text-2xl sm:leading-10">
            &quot;Benjamin is dependable, thoughtful, and consistent in the way he approaches frontend work. He takes feedback well, communicates clearly, and brings care to the quality of every interface he delivers.&quot;
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-sm font-black text-white dark:bg-secondary dark:text-black">EA</span>
            <div>
              <p className="font-bold text-primary dark:text-secondary">Emmanuel Abuo</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">Line Manager, Tongston Group</p>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
};

export default Testimonials;
