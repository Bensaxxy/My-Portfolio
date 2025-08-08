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
    <Icon
      onClick={toggleTheme}
      size={20}
      className="cursor-pointer text-gray duration-300 hover:text-secondary"
    />
  );
};

export default DarkMode;
