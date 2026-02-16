import React from "react";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <Reveal>
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto rounded-2xl border border-white/4 bg-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.45)] p-10"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-50">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
              <img
                src="note.png"
                alt="Note App"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 text-amber-100">
                Note App
              </h3>
              <p className="mb-4 text-amber-100">
                A simple note-taking app where users can create, edit, and delete
                notes.
              </p>

              <div className="flex justify-center space-x-4 text-amber-100">
                <a
                  href="https://genuine-salmiakki-c47ac2.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  View Page
                </a>
              </div>
            </div>

            <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
              <img
                src="https://img.sanishtech.com/u/ecb6f0005d77ad5315a755c5ae808170.png"
                alt="Chatbot"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold mb-2 text-amber-100">
                Chatbot
              </h3>
              <p className="text-amber-100 mb-4">
                An interactive chatbot built using React and Google Gemini API.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://dschat-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  View Page
                </a>
              </div>
            </div>

            <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
              <img
                src="https://img.sanishtech.com/u/468c55301406df876a467af76314de56.png"
                alt="Portfolio"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl text-amber-100 font-semibold mb-2">
                Portfolio
              </h3>
              <p className="text-amber-100 mb-4">
                My personal portfolio to showcase my web development skills and
                projects.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  View Page
                </a>
              </div>
            </div>

            <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
              <img
                src="https://img.sanishtech.com/u/58592586f0010bf8c44438094577aa56.png"
                alt="E-Commerce"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl text-amber-100 font-semibold mb-2">
                E-Commerce
              </h3>
              <p className="text-amber-100 mb-4">
                A simple e-commerce website that lets users browse and purchase
                products.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://your-live-ecommerce.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Projects;