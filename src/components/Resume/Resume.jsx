import { useState, useEffect, useRef } from "react";

const education = [
  {
    title: "Vivekanand Education Society's Institute Of Technology (VESIT)",
    period: "August 2022 - May 2026",
    desc: "B.E. in Information Technology, CGPA: 9.04 (Sem-VI)",
    location: "Mumbai",
  },
  {
    title: "MNR School of Excellence",
    period: "June 2020 - May 2022",
    desc: "HSC, Central Board of Secondary Education, Percentage: 72.6%",
    location: "Kamothe, Maharashtra",
  },
  {
    title: "Ryewood International School",
    period: "March 2010 - July 2020",
    desc: "ICSE, Indian Certificate of Secondary Education, Percentage: 88%",
    location: "Lonavala, Maharashtra",
  },
];

const experience = [
  {
    title: "Web Developer Intern",
    company: "Vivekanand Education Society's Institute Of Technology (VESIT)",
    period: "Jul 2024 – Present",
    highlights: [
      "30% faster load times",
      "40% upload success rate",
      "5-member team",
    ],
    desc: [
      {
        text: "Developed and deployed responsive web pages using",
        tech: ["Laravel", "JavaScript", "PHP"],
        impact:
          "optimized performance to reduce load time by 30% across mobile and desktop.",
        highlight: true,
      },
      {
        text: "Resolved PHP file upload issues, leading to",
        impact: "40% increase in successful submissions",
        extra:
          "integrated basic CI/CD flow via GitHub Actions for automated deployment",
        highlight: true,
      },
    ],
  },
];

const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "Solidity", "PHP", "SQL"],
  },
  {
    category: "Web 3",
    items: ["Ethers.js", "Hardhat", "Viem", "Remix IDE", "Metamask"],
  },
  {
    category: "Frameworks",
    items: ["Laravel", "React Native", "Scaffold-ETH"],
  },

  {
    category: "DevOps/Cloud",
    items: ["AWS", "Linux", "WebSockets"],
  },
];

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <article className="card bg-smokyblack border border-jet/40 rounded-[20px] p-[20px] sm:p-[25px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[95%] md:w-[540px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full max-w-[1200px] mx-auto">
      <header className="mb-6 sm:mb-8">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block text-[24px] sm:text-[28px] font-bold">
          Resume
        </h2>
      </header>

      {/* Skills Section */}
      <section className="skill mt-4 sm:mt-6" ref={skillsRef}>
        <div className="flex items-center mb-4 sm:mb-5">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 p-2.5 rounded-lg">
              <ion-icon
                name="code-slash-outline"
                class="text-xl text-white"
              ></ion-icon>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-[20px] font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h3>
            <p className="text-white/60 text-xs">
              My professional skillset and technologies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((category, i) => (
            <div
              key={i}
              className="group relative flex-1"
              style={{
                animation: `fadeInUp 0.5s ease forwards ${i * 0.15}s`,
                perspective: "1000px",
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-eerie-black-2/95 backdrop-blur-xl border border-white/5 p-3 rounded-xl transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl h-full">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10">
                    {category.category === "Languages" && (
                      <ion-icon
                        name="code-slash-outline"
                        class="text-lg text-pink-500"
                      ></ion-icon>
                    )}
                    {category.category === "Web 3" && (
                      <ion-icon
                        name="globe-outline"
                        class="text-lg text-purple-500"
                      ></ion-icon>
                    )}
                    {category.category === "Frameworks" && (
                      <ion-icon
                        name="layers-outline"
                        class="text-lg text-purple-500"
                      ></ion-icon>
                    )}
                    {category.category === "DevOps/Cloud" && (
                      <ion-icon
                        name="cloud-outline"
                        class="text-lg text-purple-500"
                      ></ion-icon>
                    )}
                  </div>
                  <h4 className="ml-2 text-base font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {category.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs text-white bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-md border border-white/10 
                      hover:border-pink-500/40 hover:from-pink-500/30 hover:to-purple-500/30 hover:text-white 
                      transition-all duration-200 cursor-default transform hover:-translate-y-0.5 
                      hover:shadow-sm hover:shadow-pink-500/20 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 mt-12">
        {/* Education Section */}
        <section className="timeline">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-blue-purple text-white p-2.5 rounded-full mr-3 shadow-md">
              <ion-icon
                name="school-outline"
                class="text-lg"
              ></ion-icon>
            </div>
            <h3 className="text-[18px] font-medium text-white-2">
              Education
            </h3>
          </div>

          <ol className="border-l-2 border-accent-blue ml-4 space-y-4">
            {education.map((item, i) => (
              <li
                className="ml-4 relative"
                key={i}
                style={{
                  animationName: "slideInBottom",
                  animationDuration: "0.5s",
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="absolute -left-[22px] flex items-center justify-center w-4 h-4 bg-accent-blue/20 rounded-full ring-4 ring-eerie-black-2">
                  <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                </span>
                <div className="card p-3.5 border border-jet/30 hover:shadow-glow hover:border-accent-blue/30 transition-all duration-300 rounded-lg">
                  <h4 className="text-[15px] font-medium text-white-2 capitalize">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-accent-blue bg-accent-blue/10 rounded-full">
                      <ion-icon name="time-outline" class="mr-1"></ion-icon>
                      {item.period}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium text-accent-blue/80 bg-accent-blue/5 rounded-full">
                      <ion-icon name="location-outline" class="mr-1"></ion-icon>
                      {item.location}
                    </span>
                  </div>
                  <p className="text-white/90 text-xs leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience Section */}
        <section className="timeline">
          <div className="flex items-center mb-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold p-2.5 rounded-lg">
                <ion-icon
                  name="briefcase-outline"
                  class="text-lg text-eerie-black-1"
                ></ion-icon>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-[18px] font-medium text-white-2">
                Professional Experience
              </h3>
              <p className="text-orange-yellow-crayola/80 text-xs">
                Building real-world experience
              </p>
            </div>
          </div>

          <ol className="border-l-2 border-orange-yellow-crayola/50 ml-4 space-y-5">
            {experience.map((item, i) => (
              <li
                key={i}
                className="ml-4 relative"
                style={{
                  animationName: "slideInBottom",
                  animationDuration: "0.5s",
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="absolute -left-[22px] flex items-center justify-center w-5 h-5 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold rounded-full ring-4 ring-eerie-black-2">
                  <div className="w-2 h-2 bg-eerie-black-1 rounded-full"></div>
                </span>

                <div className="card p-4 border border-jet/30 hover:shadow-glow hover:border-orange-yellow-crayola/30 transition-all duration-300 bg-gradient-to-br from-eerie-black-1/50 to-eerie-black-2/30 backdrop-blur-sm rounded-lg">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h4 className="text-[16px] font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-medium text-orange-yellow-crayola bg-vegas-gold/10 rounded-full">
                      <ion-icon name="time-outline" class="mr-1"></ion-icon>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-orange-yellow-crayola/90 text-xs mb-3">
                    {item.company}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 text-[10px] font-medium text-white/90 bg-gradient-to-r from-orange-yellow-crayola/20 to-vegas-gold/20 rounded-full border border-orange-yellow-crayola/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {item.desc.map((point, index) => (
                      <li
                        key={index}
                        className={`relative pl-4 text-xs ${
                          point.highlight ? "text-white" : "text-white/80"
                        }`}
                      >
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-orange-yellow-crayola/50"></span>
                        {point.text}
                        {point.tech && (
                          <span className="text-orange-yellow-crayola font-medium">
                            {" "}
                            {point.tech.join(", ")}{" "}
                          </span>
                        )}
                        {point.impact && (
                          <span className="text-vegas-gold font-medium">
                            {" "}
                            {point.impact}{" "}
                          </span>
                        )}
                        {point.extra && (
                          <span className="text-white/70">
                            {" "}
                            • {point.extra}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Download Resume Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/xyzarnav"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold p-[2px] text-eerie-black-1 shadow-glow hover:shadow-lg hover:shadow-orange-yellow-crayola/30 focus:outline-none"
        >
          <span className="relative flex items-center gap-2 rounded-md bg-eerie-black-1 px-4 py-2 transition-all duration-300 ease-in group-hover:bg-opacity-0">
            <ion-icon
              name="download-outline"
              class="text-orange-yellow-crayola group-hover:text-eerie-black-1 transition-colors"
            ></ion-icon>
            <span className="font-medium text-white-2 group-hover:text-eerie-black-1 transition-colors text-sm">
              Download Resume
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};

export default Resume;
