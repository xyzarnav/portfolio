import { useState, useEffect, useRef } from 'react';

const education = [
  {
    title: 'University School of the Arts',
    period: '2007 — 2008',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'New York Academy of Art',
    period: '2006 — 2007',
    desc: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..',
  },
  {
    title: 'High School of Art and Design',
    period: '2002 — 2004',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.',
  },
];

const experience = [
  {
    title: 'Creative Director',
    period: '2015 — Present',
    desc: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'Art Director',
    period: '2013 — 2015',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'Web Designer',
    period: '2010 — 2013',
    desc: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
];

const skills = [
  { name: 'Web Design', value: 80 },
  { name: 'Graphic Design', value: 70 },
  { name: 'Branding', value: 90 },
  { name: 'WordPress', value: 50 },
];

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
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
    <article className="card bg-eerie-black-2 border border-jet/40 rounded-[20px] p-[15px] sm:p-[20px] shadow-shadow-1 animate-[fadeIn_0.5s_ease_backwards] w-full sm:w-[90%] md:w-[520px] md:mx-auto md:p-[30px] xl:w-auto xl:min-h-full">
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
              <ion-icon name="school-outline" size="small" class="sm:text-xl"></ion-icon>
            </div>
            <h3 className="text-[18px] sm:text-fs-2 font-fw-500 text-white-2">Education</h3>
          </div>
          
          <ol className="border-l-2 border-accent-blue ml-4 space-y-4 sm:space-y-6 md:space-y-8">
            {education.map((item, i) => (
              <li 
                className="ml-4 sm:ml-6 relative" 
                key={i}
                style={{
                  animationName: 'slideInBottom',
                  animationDuration: '0.5s',
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <span className="absolute -left-6 sm:-left-9 flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-accent-blue/20 rounded-full ring-4 sm:ring-8 ring-eerie-black-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-blue rounded-full"></div>
                </span>
                <div className="card p-3 sm:p-5 border border-jet/30 hover:shadow-glow hover:border-accent-blue/30 transition-all duration-300">
                  <h4 className="text-[15px] sm:text-fs-3 font-fw-500 text-white-2 capitalize">{item.title}</h4>
                  <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-fs-7 font-medium text-accent-blue bg-accent-blue/10 rounded-full my-1 sm:my-2">
                    <ion-icon name="time-outline" class="mr-1"></ion-icon>
                    {item.period}
                  </span>
                  <p className="text-light-gray text-[11px] sm:text-fs-6 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience Section */}
        <section className="timeline">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-eerie-black-1 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-md">
              <ion-icon name="briefcase-outline" size="small" class="sm:text-xl"></ion-icon>
            </div>
            <h3 className="text-[18px] sm:text-fs-2 font-fw-500 text-white-2">Experience</h3>
          </div>
          
          <ol className="border-l-2 border-orange-yellow-crayola ml-4 space-y-4 sm:space-y-6 md:space-y-8">
            {experience.map((item, i) => (
              <li 
                className="ml-4 sm:ml-6 relative" 
                key={i}
                style={{
                  animationName: 'slideInBottom',
                  animationDuration: '0.5s',
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <span className="absolute -left-6 sm:-left-9 flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 bg-orange-yellow-crayola/20 rounded-full ring-4 sm:ring-8 ring-eerie-black-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-yellow-crayola rounded-full"></div>
                </span>
                <div className="card p-3 sm:p-5 border border-jet/30 hover:shadow-glow hover:border-orange-yellow-crayola/30 transition-all duration-300">
                  <h4 className="text-[15px] sm:text-fs-3 font-fw-500 text-white-2 capitalize">{item.title}</h4>
                  <span className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-fs-7 font-medium text-orange-yellow-crayola bg-vegas-gold/10 rounded-full my-1 sm:my-2">
                    <ion-icon name="time-outline" class="mr-1"></ion-icon>
                    {item.period}
                  </span>
                  <p className="text-light-gray text-[11px] sm:text-fs-6 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Skills Section */}
      <section className="skill mt-6 sm:mt-10 md:mt-14" ref={skillsRef}>
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-accent-purple to-accent-blue text-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-md">
            <ion-icon name="code-slash-outline" size="small" class="sm:text-xl"></ion-icon>
          </div>
          <h3 className="text-[18px] sm:text-fs-2 font-fw-500 text-white-2">My Skills</h3>
        </div>
        
        <div className="card p-4 sm:p-6 border border-jet/30">
          <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 md:grid-cols-2 md:gap-x-6 md:gap-y-6">
            {skills.map((skill, i) => (
              <div className="skills-item" key={i}>
                <div className="flex justify-between mb-1 sm:mb-2">
                  <h5 className="font-fw-500 text-white-2 text-[13px] sm:text-[15px]">{skill.name}</h5>
                  <span className="text-[11px] sm:text-fs-7 font-medium text-orange-yellow-crayola">{skill.value}%</span>
                </div>
                <div className="w-full bg-eerie-black-1 rounded-full h-1.5 sm:h-2.5">
                  <div 
                    className="h-1.5 sm:h-2.5 rounded-full transition-all duration-1500 ease-out bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold"
                    style={{ 
                      width: isVisible ? `${skill.value}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resume Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold p-0.5 text-eerie-black-1 shadow-glow hover:shadow-xl hover:shadow-orange-yellow-crayola/30 focus:outline-none">
          <span className="relative flex items-center gap-2 rounded-md bg-eerie-black-1 px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in group-hover:bg-opacity-0">
            <ion-icon name="download-outline" class="text-orange-yellow-crayola group-hover:text-eerie-black-1 transition-colors"></ion-icon>
            <span className="font-fw-500 text-white-2 group-hover:text-eerie-black-1 transition-colors text-[13px] sm:text-[15px]">Download Resume</span>
          </span>
        </button>
      </div>
    </article>
  );
};

export default Resume;
