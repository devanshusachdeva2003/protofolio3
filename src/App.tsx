import React from "react";
import { motion } from "framer-motion";

import Header from "./assets/component/hero";
import Home from "./assets/component/home";
import About from "./assets/component/about";
import Projects from "./assets/component/project";
import Contact from "./assets/component/contact";
import Skill from "./assets/component/skill";
import EducationWork from "./assets/component/glass";
import Services from "./assets/component/service";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Full Website Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Home />
        <About />
        <Services />
        <Skill />
        <Projects />
        <EducationWork />
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;