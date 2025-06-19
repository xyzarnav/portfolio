const services = [
  {
    title: "Web Development",
    icon: "/images/icon-dev.svg",
    description:
      "Full-stack development with React, Laravel, and modern web technologies.",
  },
  {
    title: "Blockchain Development",
    icon: "/images/icon-blockchain.svg",
    description:
      "Smart contract development and Web3 integration using Solidity and Ethereum.",
  },
  {
    title: "Backend Development",
    icon: "/images/icon-backend.svg",
    description:
      "Building robust server-side applications with PHP, MongoDB, and AWS.",
  },
  {
    title: "DevOps",
    icon: "/images/icon-devops.svg",
    description:
      "Implementation of CI/CD pipelines and cloud infrastructure management.",
  },
];

const About = () => {
  return (
    <article className="card bg-eerie-black-2 border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
      <header className="mb-5 sm:mb-8">
        <h2 className="section-title bg-text-gradient-yellow text-transparent bg-clip-text inline-block text-[22px] sm:text-fs-1">
          About me
        </h2>
      </header>

      <section className="about-text mb-6 sm:mb-8">
        <p className="text-light-gray text-[13px] sm:text-fs-6 font-fw-300 leading-[1.6]">
          I'm an Information Technology student at VESIT Mumbai with a CGPA of
          9.04. Currently working as a Web Developer Intern on the College
          Website Team, I specialize in full-stack development and blockchain
          technologies.
        </p>
        <p className="text-light-gray text-[13px] sm:text-fs-6 font-fw-300 leading-[1.6]">
          My expertise includes working with Laravel, React, and Solidity for
          blockchain applications. I'm passionate about creating efficient,
          user-friendly solutions and have experience in both traditional web
          development and emerging Web3 technologies.
        </p>
      </section>

      <section className="service mb-6 sm:mb-8">
        <h3 className="text-white-2 text-[18px] sm:text-fs-2 capitalize mb-4 sm:mb-6 border-b border-jet/50 pb-2 flex items-center gap-2">
          <ion-icon name="construct-outline" class="text-orange-yellow-crayola"></ion-icon>
          What I'm doing
        </h3>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className="card transition-all duration-300 hover:shadow-glow hover:-translate-y-1 p-4 sm:p-5 md:p-6 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="md:flex md:justify-start md:items-start md:gap-4 sm:gap-5">
                <div className="service-icon-box mb-3 sm:mb-4 md:mb-0 md:mt-[5px]">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width="36"
                    className="mx-auto md:mx-0 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-white-2 text-[15px] sm:text-fs-4 font-fw-500 capitalize mb-2 sm:mb-3 relative 
                    after:content-[''] after:block after:w-0 after:h-[1px] after:bg-orange-yellow-crayola after:transition-all after:duration-300
                    group-hover:after:w-full">
                    {service.title}
                  </h4>
                  <p className="text-light-gray text-[12px] sm:text-fs-6 font-fw-300 leading-[1.6] sm:leading-[1.8]">
                    {service.description}
                  </p>
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
            <h3 className="text-white-2 text-[16px] sm:text-fs-4 font-fw-500">
              Ready to work together?
            </h3>
            <ion-icon
              name="chatbubble-ellipses-outline"
              class="text-orange-yellow-crayola text-xl hidden sm:block"
            ></ion-icon>
          </div>
          <p className="text-light-gray text-[12px] sm:text-fs-6 mb-3 sm:mb-4">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 font-fw-500 py-1.5 sm:py-2 px-3 sm:px-4 text-[12px] sm:text-fs-6 rounded-md hover:shadow-glow transition-all duration-300"
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
