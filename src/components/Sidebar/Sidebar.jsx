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
        h-[100px] min-h-[100px] overflow-hidden transition-all duration-300 ease-in-out
        sm:p-[10px] sm:mb-[10px] sm:h-[130px] sm:min-h-[130px]
        md:w-[500px] md:mx-auto md:p-[20px] md:h-[160px] md:min-h-[160px] md:mb-[20px]
        ${isActive ? "h-[500px] sm:h-[550px] md:h-[700px]" : ""}
      ` : `
        xl:sticky xl:top-[50px] xl:h-auto xl:min-h-0 xl:mb-0 xl:pt-[50px] xl:z-10
      `}
    `}>
      <div className="relative flex justify-start items-center gap-2 sm:gap-[10px] md:gap-[20px] xl:flex-col">
        <div className="bg-gradient-onyx rounded-full p-0.5 sm:p-0.5 shadow-glow md:rounded-[25px] shrink-0">
          <img 
            src={avatar} 
            alt="Arnav Yadav" 
            className="w-14 sm:w-[70px] md:w-[100px] xl:w-[130px] rounded-full animate-floating"
          />
        </div>

        <div className="info-content flex-1">
          <h1 className="bg-text-gradient-yellow text-transparent bg-clip-text font-fw-600 text-[18px] sm:text-fs-3 -tracking-[0.25px] mb-0 sm:mb-[8px] md:mb-[10px] xl:whitespace-nowrap xl:text-center xl:text-fs-1">
            Arnav Yadav
          </h1>
          
          <div className="flex items-center justify-start flex-wrap gap-2 xl:justify-center xl:mx-auto">
            <div className="flex items-center">
              <span className="inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400 mr-1 sm:mr-1.5 animate-pulse"></span>
              <p className="text-white-1 bg-gradient-card backdrop-blur-sm text-[9px] sm:text-fs-8 font-fw-500 w-max py-0.5 px-2 sm:py-[2px] sm:px-[10px] rounded-full border border-white-1/10 md:py-[4px] md:px-[15px]">
                Engineer
              </p>
            </div>
            
            <p className="text-white-1 bg-gradient-card backdrop-blur-sm text-[9px] sm:text-fs-8 font-fw-500 w-max py-0.5 px-2 sm:py-[2px] sm:px-[10px] rounded-full border border-white-1/10 md:py-[4px] md:px-[15px]">
              Web3 Developer
            </p>
            
            <p className="text-white-1 bg-gradient-card backdrop-blur-sm text-[9px] sm:text-fs-8 font-fw-500 w-max py-0.5 px-2 sm:py-[2px] sm:px-[10px] rounded-full border border-white-1/10 md:py-[4px] md:px-[15px]">
              Blockchain Developer
            </p>
            
            <p className="text-white-1 bg-gradient-card backdrop-blur-sm text-[9px] sm:text-fs-8 font-fw-500 w-max py-0.5 px-2 sm:py-[2px] sm:px-[10px] rounded-full border border-white-1/10 md:py-[4px] md:px-[15px]">
              Full Stack
            </p>
          </div>
        </div>

        <button 
          className="info_more-btn absolute top-[-10px] right-[-10px] rounded-[0_15px] text-[12px] text-orange-yellow-crayola bg-border-gradient-onyx p-1.5 sm:p-[8px] shadow-shadow-2 transition-all duration-250 ease-in-out z-10 before:content-[''] before:absolute before:inset-[1px] before:rounded-inherit before:bg-gradient-jet before:transition-all before:duration-250 before:ease-in-out before:z-[-1] hover:bg-gradient-yellow-1 hover:before:bg-gradient-yellow-2 focus:bg-gradient-yellow-1 focus:before:bg-gradient-yellow-2 md:top-[-20px] md:right-[-20px] md:p-[8px_12px] xl:hidden hover:shadow-glow"
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
          ${isActive ? "opacity-100 max-h-[700px]" : "opacity-0 max-h-0"}
        ` : `
          xl:opacity-100 xl:max-h-none xl:overflow-visible
        `}
      `}>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-2 sm:my-[12px] md:my-[24px] xl:last-of-type:my-[10px] xl:last-of-type:opacity-0"></div>

        <ul className="grid grid-cols-1 gap-2 sm:gap-[12px] md:grid-cols-2 md:gap-[20px_10px] xl:grid-cols-1">
          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div>
              <p className="text-white text-[9px] sm:text-fs-8 uppercase">Email</p>
              <a href="mailto:arnav20604@gmail.com" className="text-white text-[11px] sm:text-fs-7">
                arnav20604@gmail.com
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div>
              <p className="text-white text-[9px] sm:text-fs-8 uppercase">Phone</p>
              <a href="tel:+917774063885" className="text-white text-[11px] sm:text-fs-7">
                +91 7774063885
              </a>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="max-w-[calc(100%-46px)] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]">
              <p className="text-white text-[9px] sm:text-fs-8 uppercase mb-0 sm:mb-[2px]">
                Birthday
              </p>
              <time dateTime="1982-06-23" className="text-white text-[11px] sm:text-fs-7 xl:text-fs-7 xl:font-fw-400">
                June 20, 2004
              </time>
            </div>
          </li>

          <li className="min-w-full flex items-center gap-3 sm:gap-[16px]">
            <div className="icon-box group-hover:shadow-glow">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="max-w-[calc(100%-46px)] w-[calc(100%-46px)] md:max-w-[calc(100%-64px)] md:w-[calc(100%-64px)]">
              <p className="text-white text-[9px] sm:text-fs-8 uppercase mb-0 sm:mb-[2px]">
                Location
              </p>
              <address className="text-white text-[11px] sm:text-fs-7 font-normal xl:text-fs-7 xl:font-fw-400">
                Mumbai, India
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-2 sm:my-[12px] md:my-[24px] xl:last-of-type:my-[10px] xl:last-of-type:opacity-0"></div>

        

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-jet to-transparent my-2 sm:my-[12px] md:my-[24px] xl:last-of-type:my-[10px] xl:last-of-type:opacity-0"></div>

               
        <ul className="flex justify-start items-center gap-[14px] pb-[2px] pl-[5px] xl:justify-center">
          <li>
            <a
              href="https://github.com/xyzarnav"
              className="text-[#fff] text-[22px] sm:text-[24px] hover:text-[#fbbc05] transition-colors"
              aria-label="GitHub"
              target="_blank" rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/arnav-yadav-56410329b/"
              className="text-[#0a66c2] text-[22px] sm:text-[24px] hover:text-[#fbbc05] transition-colors"
              aria-label="LinkedIn"
              target="_blank" rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your_twitter_handle"
              className="text-[#1da1f2] text-[22px] sm:text-[24px] hover:text-[#fbbc05] transition-colors"
              aria-label="Twitter"
              target="_blank" rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/your_telegram_handle"
              className="text-[#229ed9] text-[22px] sm:text-[24px] hover:text-[#fbbc05] transition-colors"
              aria-label="Telegram"
              target="_blank" rel="noopener noreferrer"
            >
              <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
          </li>
        </ul>
    
      </div>
    </aside>
  );
};

export default Sidebar;