
// src/components/Header.tsx

import React from 'react';
import Reveal from './Reveal';

const onlink =()=>{
window.location.href="https://in.linkedin.com/in/devanshu-sachdeva";
}
const Header = () => {
  return (
    <Reveal>
    <header className=" border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300 text-white p-4">
      <nav className="flex justify-center">
  <ul className="flex items-center gap-7">
    <li><a href="#home" className="hover:text-gray-400">Home</a></li>
    <li><a href="#Skill" className="hover:text-gray-400">Skills</a></li>
    <li><a href="#about" className="hover:text-gray-400">About</a></li>
    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>

    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={onlink}>
      Hire Me
    </button>
  </ul>
</nav>

    </header>
 </Reveal>
  );
};

export default Header;