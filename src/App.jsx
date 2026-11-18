/** @format */

// import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import motion
import Home from "./Components/Home/Home";
import MainSideBar from "./Components/Main-Side-bar/MainSideBar";
import AboutMe from "./Components/Pages/About/AboutMe";
import Resume from "./Components/Pages/Resume/Resume";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Testimonials from "./Components/Pages/Testimonials";
import Contact from "./Components/Pages/Contact/Contact";
import MiniSideBar from "./Components/Mini-Side-bar/MiniSideBar";

const pageMetadata = {
  "/": {
    title: "Oluwasegun Benjamin | Frontend Developer",
    description: "Portfolio of Oluwasegun Benjamin, a frontend developer building responsive, accessible React interfaces.",
  },
  "/about-me": {
    title: "About | Oluwasegun Benjamin",
    description: "Learn about Oluwasegun Benjamin, a frontend developer focused on accessible, polished web experiences.",
  },
  "/resume": {
    title: "Experience & Education | Oluwasegun Benjamin",
    description: "Explore Oluwasegun Benjamin's frontend engineering experience, professional background, and education.",
  },
  "/portfolio": {
    title: "Selected Work | Oluwasegun Benjamin",
    description: "Selected frontend projects and visual design work by Oluwasegun Benjamin.",
  },
  "/testimonials": {
    title: "Testimonials | Oluwasegun Benjamin",
    description: "Feedback from collaborators who have worked with Oluwasegun Benjamin.",
  },
  "/contact": {
    title: "Contact | Oluwasegun Benjamin",
    description: "Contact Oluwasegun Benjamin for frontend roles, product collaborations, and freelance opportunities.",
  },
};
const siteUrl = "https://benjamincodes-portfolio.vercel.app";

const App = () => {
  const location = useLocation(); // Get the current route
  const metadata = pageMetadata[location.pathname] || pageMetadata["/"];

  useEffect(() => {
    const pageUrl = `${siteUrl}${location.pathname === "/" ? "/" : location.pathname}`;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", pageUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", pageUrl);
  }, [location.pathname, metadata]);

  // paths where the sidebar should be hidden
  const hideSidebarPaths = ["/"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen bg-[#f8f8fc] font-primary text-slate-950 transition-colors dark:bg-[#09090b] dark:text-white">
      {/* Conditionally render the sidebar */}
      {!shouldHideSidebar && <MainSideBar />}

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about-me"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <AboutMe />
                </motion.div>
              }
            />
            <Route
              path="/resume"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Resume />
                </motion.div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Portfolio />
                </motion.div>
              }
            />
            <Route
              path="/testimonials"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Testimonials />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      {/* Mini Sidebar */}
      <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 lg:hidden">
        <MiniSideBar />
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
