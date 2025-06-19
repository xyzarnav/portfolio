const services = [
  {
    title: "Web Development",
    icon: "/src/assets/images/web_d.png", // Updated path
    description:
      "Full-stack development with React, Laravel, and modern web technologies.",
  },
  {
    title: "Blockchain Development",
    icon: "/src/assets/images/blockchain.png", // Updated path
    description:
      "Smart contract development and Web3 integration using Solidity and Ethereum.",
  },
  {
    title: "Backend Development",
    icon: "/src/assets/images/back_end.png", // Updated path
    description:
      "Building robust server-side applications with PHP, MongoDB, and AWS.",
  },
  {
    title: "DevOps",
    icon: "/src/assets/images/blockchain.png", // Updated path
    description:
      "Implementation of CI/CD pipelines and cloud infrastructure management.",
  },
];

const About = () => {
  return (
    <article
      className="card bg-smoky-black  border border-white/10 rounded-[20px] p-[15px] sm:p-[20px]  w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full"
      style={{ fontFamily: "'Cascadia Code', monospace" }}
    >
      <header className="mb-5 sm:mb-8">
        <h2 className="section-title text-white inline-block text-[26px] sm:text-[36px] font-fw-600">
          About me
        </h2>
      </header>

      <section className="about-text mb-6 sm:mb-8">
        <p className="text-white text-[14px] sm:text-[18px] font-fw-300 leading-[1.8]">
          I'm an{" "}
          <span className="text-neon-blue font-fw-600">
            Information Technology student
          </span>{" "}
          at
          <span className="text-white font-fw-500"> VESIT Mumbai</span> with a
          CGPA of <span className="text-neon-blue font-fw-500">9.04</span>.
          Currently working as a{" "}
          <span className="text-white font-fw-500">Web Developer Intern</span>{" "}
          on the
          <span className="text-neon-blue font-fw-500">
            {" "}
            College Website Team
          </span>
          , I specialize in
          <span className="text-white font-fw-500">
            {" "}
            full-stack development
          </span>{" "}
          and
          <span className="text-neon-blue font-fw-500">
            {" "}
            blockchain technologies
          </span>
          .
        </p>
        <p className="text-white text-[14px] sm:text-[18px] font-fw-300 leading-[1.8] mt-4">
          My expertise includes working with{" "}
          <span className="text-neon-blue font-fw-500">Solidity</span>,{" "}
          <span className="text-neon-blue font-fw-500">Smart Contracts</span>, and{" "}
          <span className="text-white font-fw-500">React</span> for
          blockchain applications. I'm passionate about building{" "}
          <span className="text-neon-blue font-fw-500">
            decentralized applications (dApps)
          </span>{" "}
          and implementing{" "}
          <span className="text-neon-blue font-fw-500">
            blockchain solutions
          </span>{" "}
          with a focus on security and{" "}
          <span className="text-white font-fw-500">
            emerging Web3 technologies
          </span>.
        </p>
      </section>

      <section className="service mb-6 sm:mb-8">
        <h3 className="text-white text-[20px] sm:text-[22px] capitalize mb-4 sm:mb-6 border-b border-jet/50 pb-2 flex items-center gap-2">
          <ion-icon
            name="construct-outline"
            class="text-orange-yellow-crayola text-[24px]"
          ></ion-icon>
          What I'm doing
        </h3>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className="card relative transition-all duration-300 hover:-translate-y-2 p-4 sm:p-5 md:p-6 group bg-gradient-to-br from-eerie-black-1 to-eerie-black-2/50 backdrop-blur-sm rounded-[15px] overflow-hidden
              border border-orange-yellow-crayola/50 hover:border-[#4ade80]/80 hover:shadow-[0_0_10px_rgba(74,222,128,0.3)] transition-all duration-500
              hover:after:opacity-30 after:content-[''] after:absolute after:inset-[-2px] after:rounded-[17px] after:bg-gradient-to-r after:from-[#4ade80]/60 after:via-[#ff69b4]/60 after:to-[#4ade80]/60 after:opacity-0 after:transition-all after:duration-500 after:animate-borderMove after:z-[-1]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-center md:items-start gap-3 md:gap-4 sm:gap-5 relative z-10">
                  {/* Mobile view: Icon on left with compact layout */}
                  <div className="service-icon-box flex-shrink-0 bg-gradient-to-br from-jet to-eerie-black-1 p-2.5 rounded-xl shadow-glow md:mt-[5px] md:p-3">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width="30"
                      className="md:w-[36px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>

                  <div className="text-left">
                    <h4
                      className="text-white text-[15px] sm:text-fs-4 font-fw-500 capitalize mb-1 sm:mb-3 relative inline-block
                      after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-orange-yellow-crayola after:to-vegas-gold after:transition-all after:duration-300
                      group-hover:after:w-full"
                    >
                      {service.title}
                    </h4>
                    <p className="text-white/90 text-[12px] sm:text-fs-6 font-fw-300 leading-[1.5] sm:leading-[1.8] group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to action section */}
      <section className="mb-4 sm:mb-6">
        <div className="card p-4 sm:p-6 border border-jet/40 bg-gradient-to-br from-eerie-black-2/50 to-eerie-black-1/50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <h3 className="text-white-2 text-[18px] sm:text-[20px] font-fw-500">
              Ready to work together?
            </h3>
            <ion-icon
              name="chatbubble-ellipses-outline"
              class="text-orange-yellow-crayola text-xl hidden sm:block"
            ></ion-icon>
          </div>
          <p className="text-white text-[13px] sm:text-[15px] mb-3 sm:mb-4">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 font-fw-500 py-1.5 sm:py-2 px-3 sm:px-4 text-[13px] sm:text-[15px] rounded-md hover:shadow-glow transition-all duration-300"
          >
            Contact me
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>
      </section>
    </article>
  );
};

export default About;
