import React from "react";
import Reveal from "./Reveal";

export default function Services() {
  const cards = [
    {
      title: "What I can do for you",
      desc:
        "Faster, better products that your users love. Here's all the services I provide:",
      points: [
        "Front-end Development",
      ],
      icon: "◐",
    },
    {
      title: "Tools I'm fluent in",
      desc:
        "Every developer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
      points: ["Git & GitHub", "Figma", "Canva"],
      icon: "⟪⟫",
    },
    {
      title: "What you can expect",
      desc:
        "I develop products that are more than pretty. I make them shippable and usable.",
      points: [
        "Clean and functional Code",
        "Responsible person and Leadership skills",
      ],
      icon: "◔",
    },
  ];

  return (
    <Reveal>
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-16 ">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.35)] p-8 transition duration-300 hover:scale-[1.02] hover:border-white/25"
          >
            <div className="text-6xl font-bold text-black drop-shadow-[0_0_15px_rgba(255,0,255,0.25)]">
              {card.icon}
            </div>

            <h2 className="text-2xl font-bold text-white mt-6">
              {card.title}
            </h2>

            <p className="text-white/65 mt-3 leading-relaxed">
              {card.desc}
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white/70"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
</Reveal>
  );
}