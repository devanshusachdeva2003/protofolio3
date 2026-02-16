
import React from "react";
import Reveal from "./Reveal";
export default function EducationWork() {
  return (
    <Reveal>
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-16 ">
      <div className="w-full max-w-6xl rounded-2xl border border-white/4 bg-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.45)] p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">🏫</span> Education
            </h2>

            <div className="mt-10 pb-8 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">
                Jecrc Unviresity
              </h3>
              <p className="text-white/70 mt-1">
                Master of Computer Applications (MCA)
              </p>

              <div className="flex items-center gap-2 text-white/60 text-sm mt-3">
                <span>📅</span>
                <span>Jul 2024 - Current</span>
              </div>
            </div>

            <div className="mt-8 pb-8 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">
                Engineering College Bikaner
              </h3>
              <p className="text-white/70 mt-1">
                Bachelor of Computer Applications (BCA)
              </p>

              <div className="flex items-center gap-2 text-white/60 text-sm mt-3">
                <span>📅</span>
                <span>Aug 2021 - May 2024</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl">💼</span> Work Experience
            </h2>

            <div className="mt-10 pb-8 border-b border-white/10 flex gap-5">
              <div className="h-12 w-12 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-xl">
                🚀
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Emizen Tech</h3>
                <p className="text-white/70 mt-1">Full Stack Developer</p>

                <div className="flex items-center gap-2 text-white/60 text-sm mt-3">
                  <span>📅</span>
                  <span>Jan 2026 - Current</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pb-8 border-b border-white/10 flex gap-5">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xl">
                🎵
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  Content Creation
                </h3>
                <p className="text-white/70 mt-1">LinkedIn Content Creator</p>

                <div className="flex items-center gap-2 text-white/60 text-sm mt-3">
                  <span>📅</span>
                  <span>Jun 2023 - Current</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
</Reveal>
  );
}