import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

const links = [
  { label: "GitHub", href: "https://github.com/Bensaxxy", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oluwasegun-benjamin-a80b76252/", icon: FaLinkedin },
  { label: "Frontend Mentor", href: "https://www.frontendmentor.io/profile/Bensaxxy", icon: SiFrontendmentor },
  { label: "X", href: "https://x.com/Bensaxxy11", icon: FaXTwitter },
];

const SocialLinks = () => (
  <nav className="flex flex-wrap gap-2" aria-label="Social profiles">
    {links.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit Benjamin's ${label} profile`}
        className="grid h-10 w-10 place-items-center rounded-full border border-slate-950/10 bg-white text-slate-700 transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-secondary dark:hover:bg-secondary dark:hover:text-black"
      >
        <Icon size={18} aria-hidden="true" />
      </a>
    ))}
  </nav>
);

export default SocialLinks;
