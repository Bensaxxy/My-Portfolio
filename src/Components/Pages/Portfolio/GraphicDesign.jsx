import { useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";
import data from "./graphDesign";

const GraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section aria-label="Graphic design projects">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((item) => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <button type="button" onClick={() => setSelectedImage(item)} className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-zinc-900" aria-label={`Open ${item.title} full size`}>
              <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
              <span className="absolute inset-0 grid place-items-center bg-slate-950/45 text-white opacity-0 transition group-hover:opacity-100">
                <FiMaximize2 size={24} aria-hidden="true" />
              </span>
            </button>
            <div className="p-5"><h2 className="text-lg font-bold">{item.title}</h2></div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-5" role="dialog" aria-modal="true" aria-label={`${selectedImage.title} preview`} onClick={() => setSelectedImage(null)}>
          <button type="button" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 transition hover:scale-105" aria-label="Close image preview" onClick={() => setSelectedImage(null)}><FiX size={22} /></button>
          <img src={selectedImage.imageUrl} alt={selectedImage.title} className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default GraphicDesign;
