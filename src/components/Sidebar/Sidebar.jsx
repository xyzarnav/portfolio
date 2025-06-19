import { useState, useEffect } from "react";
import avatar from "../../assets/images/my-avatar.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <aside className={`card bg-eerie-black-2 border border-jet rounded-[20px] p-3 shadow-shadow-1 z-10 mb-3 
      ${isMobile ? `
        h-[120px] min-h-[120px] overflow-hidden transition-all duration-300 ease-in-out
        sm:p-[15px] sm:mb-[15px] sm:h-[150px] sm:min-h-[150px]
        md:w-[520px] md:mx-auto md:p-[30px] md:h-[180px] md:min-h-[180px] md:mb-[30px]
        ${isActive ? "h-[600px] sm:h-[650px] md:h-[800px]" : ""}
      ` : `
        xl:sticky xl:top-[60px] xl:h-auto xl:min-h-0 xl:mb-0 xl:pt-[60px] xl:z-10
      `}
    `}>
      <div className="relative flex justify-start items-center gap-3 sm:gap-[15px] md:gap-[25px] xl:flex-col">
        <div className="bg-gradient-onyx rounded-full p-0.5 sm:p-1 shadow-glow md:rounded-[30px] shrink-0">
          <img 
            src={avatar} 
            alt="Arnav Yadav" 
            className="w-16 sm:w-[80px] md:w-[120px] xl:w-[150px] rounded-full animate-floating"
          />
        </div>

        <div className="info-content flex-1">
          <h1 className="bg-text-gradient-yellow text-transparent bg-clip-text font-fw-600 text-[20px] sm:text-fs-3 -tracking-[0.25px] mb-1 sm:mb-[10px] md:mb-[15px] xl:whitespace-nowrap xl:text-center xl:text-fs-1">
            Arnav Yadav
          </h1>
          
          <div className="flex items-center justify-start xl:justify-center xl:mx-auto">
            <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400 mr-1 sm:mr-2 animate-pulse"></span>
            <p className="text-white-1 bg-gradient-card backdrop-blur-sm text-[10px] sm:text-fs-8 font-fw-500 w-max py-0.5 px-2 sm:py-[3px] sm:px-[12px] rounded-full border border-white-1/10 md:py-[5px] md:px-[18px] xl:mx-auto">
              IT Student & Web Developer
            </p>
          </div>
        </div>

        <button 
          className="info_more-btn absolute top-[-15px] right-[-15px] rounded-[0_15px] text-[13px] text-orange-yellow-crayola bg-border-gradient-onyx p-2 sm:p-[10px] shadow-shadow-2 transition-all duration-250 ease-in-out z-10 before:content-[''] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-all before:duration-250 before:ease-in-out before:z-[-1] hover:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:bg-gradient-yellow-1 focus:before:bg-gradient-yellow-2 md:top-[-30px] md:right-[-30px] md:p-[10px_15px] xl:hidden hover:shadow-glow"
          onClick={toggleSidebar}
          aria-label={isActive ? "Show less" : "Show more"}
        >
          <span className="hidden md:block text-fs-8">
            {isActive ? "Show less" : "Show more"}
          </span>
          <ion-icon name={isActive ? "chevron-up" : "chevron-down"} class="text-sm sm:text-base md:hidden"></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info_more 
        ${isMobile ? `
          transition-all duration-300 ease-in-out overflow-hidden
          ${isActive ? "opacity-100 max-h-[800px]" : "opacity-0 max-h-0"}
        ` : `
          xl:opacity-100 xl:max-h-none xl:overflow-visible
        `}
      `}>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-3 sm:my-[16px] md:my-[32px] xl:last-of-type:my-[15px] xl:last-of-type:opacity-0"></div>

        <ul className="grid grid-cols-1 gap-3 sm:gap-[16px] md:grid-cols-2 md:gap-[30px_15px] xl:grid-cols-1">
          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div>
              <p className="text-light-gray-70 text-[9px] sm:text-fs-8 uppercase">Email</p>
              <a href="mailto:arnav20604@gmail.com" className="text-white-2 text-[11px] sm:text-fs-7">
                arnav20604@gmail.com
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div>
              <p className="text-light-gray-70 text-[9px] sm:text-fs-8 uppercase">Phone</p>
              <a href="tel:+917774063885" className="text-white-2 text-[11px] sm:text-fs-7">
                +91 7774063885
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="max-w-[calc(100%-46px)] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]">
              <p className="text-light-gray-70 text-[9px] sm:text-fs-8 uppercase mb-0 sm:mb-[2px]">
                Birthday
              </p>
              <time dateTime="1982-06-23" className="text-white-2 text-[11px] sm:text-fs-7 xl:text-fs-7 xl:font-fw-400">
                June 23, 1982
              </time>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="max-w-[calc(100%-46px)] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]">
              <p className="text-light-gray-70 text-[9px] sm:text-fs-8 uppercase mb-0 sm:mb-[2px]">
                Location
              </p>
              <address className="text-white-2 text-[11px] sm:text-fs-7 font-normal xl:text-fs-7 xl:font-fw-400">
                Sacramento, California
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-3 sm:my-[16px] md:my-[32px] xl:last-of-type:my-[15px] xl:last-of-type:opacity-0"></div>

        <div className="skills-section px-2 opacity-100 visible">
          <div className="mb-6">
            <h3 className="text-orange-yellow-crayola text-[14px] sm:text-fs-6 font-fw-600 mb-3 flex items-center">
              <ion-icon name="code-slash-outline" class="mr-2"></ion-icon>
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["C++", "JavaScript", "TypeScript", "Solidity", "PHP", "SQL"].map((skill) => (
                <span key={skill} className="text-white-2 text-[10px] sm:text-fs-8 py-1 px-3 rounded-full bg-gradient-to-r from-jet to-eerie-black-1 border border-jet hover:border-orange-yellow-crayola/50 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-orange-yellow-crayola text-[14px] sm:text-fs-6 font-fw-600 mb-3 flex items-center">
              <ion-icon name="layers-outline" class="mr-2"></ion-icon>
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "React Native", "Scaffold-ETH"].map((skill) => (
                <span key={skill} className="text-white-2 text-[10px] sm:text-fs-8 py-1 px-3 rounded-full bg-gradient-to-r from-jet to-eerie-black-1 border border-jet hover:border-orange-yellow-crayola/50 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-orange-yellow-crayola text-[14px] sm:text-fs-6 font-fw-600 mb-3 flex items-center">
              <ion-icon name="construct-outline" class="mr-2"></ion-icon>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "MongoDB", "Chrome DevTools"].map((skill) => (
                <span key={skill} className="text-white-2 text-[10px] sm:text-fs-8 py-1 px-3 rounded-full bg-gradient-to-r from-jet to-eerie-black-1 border border-jet hover:border-orange-yellow-crayola/50 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-orange-yellow-crayola text-[14px] sm:text-fs-6 font-fw-600 mb-3 flex items-center">
              <ion-icon name="cloud-outline" class="mr-2"></ion-icon>
              DevOps/Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Linux", "WebSockets"].map((skill) => (
                <span key={skill} className="text-white-2 text-[10px] sm:text-fs-8 py-1 px-3 rounded-full bg-gradient-to-r from-jet to-eerie-black-1 border border-jet hover:border-orange-yellow-crayola/50 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-3 sm:my-[16px] md:my-[32px] xl:last-of-type:my-[15px] xl:last-of-type:opacity-0"></div>

        <ul className="flex justify-start items-center gap-[15px] pb-[4px] pl-[7px] xl:justify-center">
          <li>
            <a href="https://github.com/xyzarnav" className="text-light-gray-70 text-base sm:text-[20px] hover:text-orange-yellow-crayola">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/arnav-yadav-56410329b/" className="text-light-gray-70 text-base sm:text-[20px] hover:text-orange-yellow-crayola">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;