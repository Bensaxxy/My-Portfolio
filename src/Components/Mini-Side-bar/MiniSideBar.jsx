import { FiBriefcase, FiFileText, FiHome, FiMail, FiMessageCircle, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode";

const links = [
  { to: "/", label: "Home", icon: FiHome },
  { to: "/about-me", label: "About", icon: FiUser },
  { to: "/resume", label: "Résumé", icon: FiFileText },
  { to: "/portfolio", label: "Work", icon: FiBriefcase },
  { to: "/testimonials", label: "Testimonials", icon: FiMessageCircle },
  { to: "/contact", label: "Contact", icon: FiMail },
];

const MiniSideBar = () => (
  <nav className="grid grid-cols-7 gap-1 rounded-2xl border border-white/15 bg-primary/95 p-2 text-white shadow-xl shadow-primary/30 backdrop-blur dark:bg-secondary dark:text-black" aria-label="Mobile navigation">
    <div className="flex items-center justify-center">
      <DarkMode />
    </div>
    {links.map(({ to, label, icon: Icon }) => (
      <NavLink
        key={to}
        to={to}
        aria-label={label}
        className={({ isActive }) =>
          isActive
            ? "grid h-9 w-9 place-items-center rounded-xl bg-white text-primary shadow-sm dark:bg-black dark:text-secondary"
            : "grid h-9 w-9 place-items-center rounded-xl text-white/75 transition hover:bg-white/10 hover:text-white dark:text-black/65 dark:hover:bg-black/10 dark:hover:text-black"
        }
      >
        <Icon size={18} aria-hidden="true" />
      </NavLink>
    ))}
  </nav>
);

export default MiniSideBar;
