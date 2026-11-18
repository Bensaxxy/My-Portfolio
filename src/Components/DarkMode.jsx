import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const Icon = theme === "dark" ? MdNightlightRound : MdOutlineLightMode;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-9 w-9 place-items-center rounded-xl text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/70 dark:text-black/65 dark:hover:bg-black/10 dark:hover:text-black"
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
};

export default DarkMode;
