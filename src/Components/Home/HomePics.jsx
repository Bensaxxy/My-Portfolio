import homeImage from "/ben.jpg";

const HomePics = () => (
  <div className="hidden md:block relative mx-auto aspect-[4/5] w-full max-w-[30rem]">
    <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-primary/10 dark:bg-secondary/10" aria-hidden="true" />
    <div className="relative h-full overflow-hidden rounded-[1.7rem] border border-white/70 bg-slate-200 shadow-2xl shadow-primary/15 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/30">
      <img src={homeImage} alt="Oluwasegun Benjamin" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-slate-950/70 p-4 text-white backdrop-blur-md">
        <p className="text-sm font-bold">Oluwasegun Benjamin</p>
        <p className="mt-1 text-xs text-zinc-300">Frontend Developer · React · UI Engineering</p>
      </div>
    </div>
  </div>
);

export default HomePics;
