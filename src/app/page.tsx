'use client';
import Image from "next/image";
import Cards from "@/components/Cards";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.slide-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Existing overlay buttons */}
      <main className="p-4 sm:p-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center slide-in-section">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Transforming Tomorrow with AI</h1>
          <p className="text-xl mb-8 max-w-2xl">Leading the future of technology with innovative solutions in AI, robotics, and automation.</p>
          <Image
            className="mx-auto hover:scale-105 transition-transform duration-300"
            src="/deepersensor.jpg"
            alt="Deepersensor logo"
            width={240}
            height={80}
            priority
          />
        </section>

        {/* Cards Section */}
        <section className="py-20 slide-in-section">
          <Cards />
        </section>

        {/* Features Section */}
        <section className="py-20 slide-in-section">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['AI Integration', 'Robotics', 'Automation', 'Consulting'].map((feature) => (
              <div key={feature} className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600 dark:text-gray-300">Innovative solutions that drive business growth and efficiency.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 slide-in-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Clients' },
              { number: '50+', label: 'Countries' },
              { number: '200+', label: 'Projects' },
              { number: '95%', label: 'Satisfaction' }
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
