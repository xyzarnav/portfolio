// import { useState } from 'react';
import { useEffect, useRef } from "react";
import trustChainImg from "../../assets/images/portfolio/TrustChain.png";
import arbitrageImg from "../../assets/images/portfolio/arbitage.png";
import turfImg from "../../assets/images/portfolio/Turf.png";

const projects = [
  {
    title: "TrustChain",
    category: "Blockchain",
    tech: ["Next.js", "React", "TailwindCSS", "Ethereum", "Solidity"],
    image: trustChainImg,
    live: "https://trustchain-demo.com",
    keyPoints: [
      "Transparent government bidding platform",
      "100+ simulated transactions",
      "Smart contract automation",
    ],
    description:
      "Web3-based platform for transparent government bidding processes, eliminating corruption through immutable transaction records and smart contracts.",
  },
  {
    title: "Crypto Arbitrage Bot",
    category: "Trading",
    tech: ["Python", "WebSockets", "Binance API", "TA-Lib"],
    image: arbitrageImg,
    github: "https://github.com/xyzarnav/crypto-arbitrage-bot",
    keyPoints: [
      "500+ simulated trades",
      "Real-time market data",
      "10% test profit",
    ],
    description:
      "High-frequency crypto trading bot exploiting price differences across exchanges, with real-time market data streaming and automated execution.",
  },
  {
    title: "Turf Booking System",
    category: "Web App",
    tech: ["React", "MongoDB", "TailwindCSS"],
    image: turfImg,
    live: "https://turf-booking-demo.com",
    github: "https://github.com/xyzarnav/test_turf",
    keyPoints: [
      "Real-time reservations",
      "40% faster bookings",
      "Mobile-first design",
    ],
    description:
      "Full-stack turf booking platform with real-time slot reservations, payment integration, wallet, and group cost-splitting functionality.",
  },
];
const Portfolio = (props) => {
  const latestProjectRef = useRef(null);

  useEffect(() => {
    // Add highlight class for a smooth transition, then remove it
    if (latestProjectRef.current) {
      latestProjectRef.current.classList.add("portfolio-highlight");
      const timeout = setTimeout(() => {
        latestProjectRef.current.classList.remove("portfolio-highlight");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <article
      className={`card bg-transparent border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] ${
        props?.isMobile ? "flex flex-col h-full min-h-0" : ""
      }`}
    >
      <header className="mb-8 sm:mb-10">
        <h2 className="text-[24px] sm:text-[28px] font-bold text-white">
          Featured Projects
        </h2>
        <p className="text-white/60 text-sm mt-2">
          Showcasing my latest work in Web3 and full-stack development
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={index === 0 ? latestProjectRef : null}
            className={`group relative bg-gradient-to-br from-eerie-black-1 to-eerie-black-2 rounded-xl overflow-hidden border border-orange-yellow-crayola/50 hover:shadow-glow transition-all duration-300 flex flex-col portfolio-fade-in`}
            style={{
              animation: `portfolioFadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards ${
                index * 0.18 + 0.1
              }s`,
            }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 text-xs font-medium text-white bg-orange-yellow-crayola/20 backdrop-blur-sm rounded-full border border-orange-yellow-crayola/30">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Key Points */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.keyPoints.map((point, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium text-white/90 bg-white/5 rounded-md border border-white/10"
                  >
                    {point}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] font-medium text-orange-yellow-crayola/90 bg-gradient-to-br from-orange-yellow-crayola/10 to-vegas-gold/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-start mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-2 bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 rounded-lg px-4 py-2 text-sm transition-all duration-300"
                >
                  <ion-icon name="logo-github" class="text-lg"></ion-icon>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Portfolio;
