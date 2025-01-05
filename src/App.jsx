/** @format */

import React from "react";
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

  // Define paths where the sidebar should be hidden
  const hideSidebarPaths = ["/"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  // Animation Variants
  const pageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex font-primary">
      {/* Conditionally render the sidebar */}
      {!shouldHideSidebar && <MainSideBar />}

      {/* Main Content */}
      <div className="flex-grow">
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
      <div className="fixed bottom-0 md:top-1/2 md:right-2 md:transform md:-translate-y-1/2 w-full md:w-auto flex justify-center items-center">
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
