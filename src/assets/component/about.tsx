import React from "react";
import Reveal from "./Reveal";
const About = () => {
  return (
    <Reveal>
    <section id="about" className="py-16">
      <div className="w-[1000px] h-[300px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-amber-100">
          About Me
        </h2>

        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8">
          <p className="text-lg text-5xl text-amber-50 leading-relaxed">
            I am a frontend developer with experience in React, JavaScript, HTML,
            and CSS. I enjoy building modern, responsive, and user-friendly web
            applications. My main focus is creating clean UI designs with smooth
            user experience. I like working with reusable components and writing
            structured code. I also use Tailwind CSS to build fast and consistent
            layouts. I have worked on projects like Notes App, Chatbot, and
            E-commerce UI. I love learning new frontend technologies and
            improving my logic daily. My goal is to become a strong full-stack
            developer in the future. I am always excited to build real-world
            projects and grow my skills.
          </p>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default About;