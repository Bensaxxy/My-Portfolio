import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import projects from "./webDesigns";

const WebDesign = () => (
  <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Web development projects">
    {projects.map((project) => (
      <article key={project.id} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-black/25">
        <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-900">
          <img
            src={project.imageUrl}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary dark:text-secondary">{project.type}</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight">{project.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-300">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-zinc-300">{tag}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition hover:text-[#2a0875] dark:text-secondary dark:hover:text-white">
              Visit site <FiArrowUpRight aria-hidden="true" />
            </a>
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 transition hover:text-primary dark:text-zinc-300 dark:hover:text-secondary">
                Source <FiGithub aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </section>
);

export default WebDesign;
