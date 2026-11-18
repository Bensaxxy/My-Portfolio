/** @format */

// import React from "react";
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

const App = () => {
  const location = useLocation(); // Get the current route

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
