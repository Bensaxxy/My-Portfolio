import { NavLink } from "react-router-dom";
import {
  FiBriefcase,
  FiFileText,
  FiHome,
  FiMail,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";
import DarkMode from "../DarkMode";

const links = [
  { path: "/", label: "Home", icon: FiHome },
  { path: "/about-me", label: "About", icon: FiUser },
  { path: "/resume", label: "Résumé", icon: FiFileText },
  { path: "/portfolio", label: "Work", icon: FiBriefcase },
  { path: "/testimonials", label: "Testimonials", icon: FiMessageCircle },
  { path: "/contact", label: "Contact", icon: FiMail },
];

const MainSideBar = () => (
  <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-white/10 bg-primary px-6 py-8 text-white lg:flex">
    <NavLink to="/" className="flex items-center gap-3" aria-label="Benjamin Oluwasegun home">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-sm font-black tracking-tight text-primary">BO</span>
      <span>
        <span className="block text-sm font-bold tracking-wide">BENJAMIN</span>
        <span className="block text-xs text-white/60">Frontend Developer</span>
      </span>
    </NavLink>

    <nav className="mt-16 space-y-2" aria-label="Primary navigation">
      {links.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-primary shadow-lg shadow-black/10"
              : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/65 transition hover:bg-white/10 hover:text-white"
          }
        >
          <Icon size={18} aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="mt-auto space-y-3">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <span>
          <span className="block text-sm font-semibold">Appearance</span>
          <span className="mt-0.5 block text-xs text-white/55">Switch light or dark mode</span>
        </span>
        <DarkMode />
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-white/75">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for opportunities
        </span>
        <p className="text-xs leading-5 text-white/55">Building thoughtful, accessible web experiences with React.</p>
      </div>
    </div>
  </aside>
);

export default MainSideBar;
