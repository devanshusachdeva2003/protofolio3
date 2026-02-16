import React from "react";
import Reveal from "./Reveal";

const skillsData = {
  Languages: [
    {
      name: "JavaScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      name: "TypeScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png",
    },
    {
      name: "C++",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png",
    },
    {
      name: "Java",
      src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
  ],
  Frontend: [
    {
      name: "HTML",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      name: "CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/960px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      name: "React",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
      name: "Tailwind",
      src: "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp",
    },
  ],
  backend: [
    {
      name: "Node.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    },
    {
      name: "MongoDB",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/3840px-MongoDB_Logo.svg.png",
    },
  ],
};

const tools = [
  {
    name: "VS Code",
    src: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxj7kCzMIlSC20SNjaJf9GmG15ocnF.zbBRgxMSlB7Ejh6FbgNzxLvZOoW7N3ML56fn3m5Z4MO.M8pYrCFVKIhqM-&format=source",
  },
  {
    name: "Github",
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
  },
  {
    name: "Figma",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgl7wpiJVouzQ_6Jgf4zGvIN4uiRsOYOcbQ&s",
  },
  {
    name: "Replit",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZejTztc86ryVystPqXKZAlrtr9bcP7w4wQ&s",
  },
];

const Skill = () => {
  return (
    <Reveal>
      <div className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-100">Skill & Tools</h1>

        <p className="mt-3 text-lg text-amber-50">
          My primary focus lies in frontend development
        </p>

        {Object.entries(skillsData).map(([category, items]) => (
          <div key={category} className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-amber-50">
              {category}
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="w-32 h-32 flex flex-col items-center justify-center 
                           border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg 
                           hover:shadow-2xl hover:-translate-y-2 
                           transition duration-300"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-black">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Tools Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-amber-50">Tools</h2>

          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="w-32 h-32 flex flex-col items-center justify-center 
                         border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="w-20 h-20 object-contain mb-2"
                />
                <span className="text-sm font-medium text-black">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Skill;