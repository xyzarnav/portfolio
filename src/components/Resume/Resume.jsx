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
    <article className="card bg-smokyblack border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-5 sm:mb-8">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block text-[22px] sm:text-fs-1">
          Resume
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {/* Education Section */}
        <section className="timeline">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-gradient-blue-purple text-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-md">
              <ion-icon
                name="school-outline"
                size="small"
                class="sm:text-xl"
              ></ion-icon>
            </div>
            <h3 className="text-[18px] sm:text-fs-2 font-fw-500 text-white-2">
              Education
            </h3>
          </div>

          <ol className="border-l-2 border-accent-blue ml-4 space-y-4 sm:space-y-6 md:space-y-8">
            {education.map((item, i) => (
              <li
                className="ml-4 sm:ml-6 relative"
                key={i}
                style={{
                  animationName: "slideInBottom",
                  animationDuration: "0.5s",
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="absolute -left-6 sm:-left-9 flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-accent-blue/20 rounded-full ring-4 sm:ring-8 ring-eerie-black-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-blue rounded-full"></div>
                </span>
                <div className="card p-3 sm:p-5 border border-jet/30 hover:shadow-glow hover:border-accent-blue/30 transition-all duration-300">
                  <h4 className="text-[15px] sm:text-fs-3 font-fw-500 text-white-2 capitalize">
                    {item.title}
                  </h4>
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-fs-7 font-medium text-accent-blue bg-accent-blue/10 rounded-full">
                      <ion-icon name="time-outline" class="mr-1"></ion-icon>
                      {item.period}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-fs-7 font-medium text-accent-blue/80 bg-accent-blue/5 rounded-full">
                      <ion-icon name="location-outline" class="mr-1"></ion-icon>
                      {item.location}
                    </span>
                  </div>
                  <p className="text-white text-[11px] sm:text-fs-6 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience Section */}
        <section className="timeline">
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold p-3 sm:p-4 rounded-lg">
                <ion-icon
                  name="briefcase-outline"
                  class="text-xl sm:text-2xl text-eerie-black-1"
                ></ion-icon>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white-2">
                Professional Journey
              </h3>
              <p className="text-orange-yellow-crayola/80 text-sm">
                Building real-world experience
              </p>
            </div>
          </div>

          <ol className="border-l-2 border-orange-yellow-crayola/50 ml-4 space-y-6 sm:space-y-8">
            {experience.map((item, i) => (
              <li
                key={i}
                className="ml-4 sm:ml-6 relative"
                style={{
                  animationName: "slideInBottom",
                  animationDuration: "0.5s",
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: "both",
                }}
              >
                <span className="absolute -left-6 sm:-left-9 flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold rounded-full ring-4 sm:ring-8 ring-eerie-black-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-eerie-black-1 rounded-full"></div>
                </span>

                <div className="card p-5 sm:p-6 border border-jet/30 hover:shadow-glow hover:border-orange-yellow-crayola/30 transition-all duration-300 bg-gradient-to-br from-eerie-black-1/50 to-eerie-black-2/30 backdrop-blur-sm rounded-xl">
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <h4 className="text-[16px] sm:text-[18px] font-semibold text-white flex-1">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 text-[11px] font-medium text-orange-yellow-crayola bg-vegas-gold/10 rounded-full">
                      <ion-icon name="time-outline" class="mr-1"></ion-icon>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-orange-yellow-crayola/90 text-[14px] mb-4">
                    {item.company}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-white/90 bg-gradient-to-r from-orange-yellow-crayola/20 to-vegas-gold/20 rounded-full border border-orange-yellow-crayola/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {item.desc.map((point, index) => (
                      <li
                        key={index}
                        className={`relative pl-4 text-[13px] sm:text-[14px] ${
                          point.highlight ? "text-white" : "text-white/80"
                        }`}
                      >
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-orange-yellow-crayola/50"></span>
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

      {/* Skills Section */}
      <section className="skill mt-6 sm:mt-10 md:mt-14" ref={skillsRef}>
        <div className="flex items-center mb-8 sm:mb-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg">
              <ion-icon
                name="code-slash-outline"
                class="text-2xl sm:text-3xl text-white"
              ></ion-icon>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-[24px] sm:text-[28px] font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h3>
            <p className="text-white/60 text-sm mt-1">
              My professional skillset and technologies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease forwards ${i * 0.2}s`,
                perspective: "1000px",
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-eerie-black-2/95 backdrop-blur-xl border border-white/5 p-6 rounded-xl transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10">
                    {category.category === "Languages" && (
                      <ion-icon
                        name="code-slash-outline"
                        class="text-2xl text-pink-500"
                      ></ion-icon>
                    )}
                    {category.category === "Frameworks" && (
                      <ion-icon
                        name="layers-outline"
                        class="text-2xl text-purple-500"
                      ></ion-icon>
                    )}
                    {category.category === "Tools" && (
                      <ion-icon
                        name="construct-outline"
                        class="text-2xl text-pink-500"
                      ></ion-icon>
                    )}
                    {category.category === "DevOps/Cloud" && (
                      <ion-icon
                        name="cloud-outline"
                        class="text-2xl text-purple-500"
                      ></ion-icon>
                    )}
                  </div>
                  <h4 className="ml-3 text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                    {category.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 text-sm text-white bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg border border-white/10 
                      hover:border-pink-500 hover:from-pink-500/30 hover:to-purple-500/30 hover:text-white hover:scale-105 
                      transition-all duration-300 cursor-default transform hover:-translate-y-1 
                      hover:shadow-lg hover:shadow-pink-500/30 font-medium tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <a
          href="https://github.com/xyzarnav" // Replace with your actual resume link if available
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold p-0.5 text-eerie-black-1 shadow-glow hover:shadow-xl hover:shadow-orange-yellow-crayola/30 focus:outline-none"
        >
          <span className="relative flex items-center gap-2 rounded-md bg-eerie-black-1 px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in group-hover:bg-opacity-0">
            <ion-icon
              name="download-outline"
              class="text-orange-yellow-crayola group-hover:text-eerie-black-1 transition-colors"
            ></ion-icon>
            <span className="font-fw-500 text-white-2 group-hover:text-eerie-black-1 transition-colors text-[13px] sm:text-[15px]">
              Download Resume
            </span>
          </span>
        </a>
      </div>
    </article>
  );
};

export default Resume;
