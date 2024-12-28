import React from "react";

export default function Cards() {
  const cardData = [
    { 
      title: "Robotics", 
      desc: "Cutting-edge robotic solutions for industrial automation and efficiency.",
      icon: "🤖"
    },
    { 
      title: "AI", 
      desc: "Advanced artificial intelligence systems transforming business operations.",
      icon: "🧠"
    },
    { 
      title: "Automation", 
      desc: "Streamlined processes that save time and reduce operational costs.",
      icon: "⚙️"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="relative overflow-hidden p-6 rounded-xl 
                     bg-white dark:bg-neutral-800 
                     shadow-xl dark:shadow-2xl
                     transform transition-all duration-300
                     hover:scale-105 hover:shadow-2xl
                     dark:text-white text-gray-800"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{card.title}</div>
          <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-bl-full" />
        </div>
      ))}
    </div>
  );
}
