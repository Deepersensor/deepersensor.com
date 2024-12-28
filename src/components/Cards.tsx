import React from "react";

export default function Cards() {
  const cardData = [
    { title: "Robotics", desc: "Cutting-edge solutions" },
    { title: "AI", desc: "Transforming industries" },
    { title: "Automation", desc: "Streamlined processes" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all hover:scale-105"
        >
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="mt-2">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
