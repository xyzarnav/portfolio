import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Update active page based on URL
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setActivePage(path || "about");
  }, [location]);

  // Check screen size for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-eerie-black-1 to-smoky-black -z-10"></div>
      <div className="fixed inset-0 opacity-30 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-72 md:h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 md:w-72 md:h-72 bg-orange-yellow-crayola rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 left-10 w-60 h-60 md:w-72 md:h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-20 animate-pulse-slow"></div>
      </div>
      
      <main className="overflow-x-hidden pb-6 sm:pb-8">
        <div className="px-3 sm:px-4 pt-5 md:pt-[70px] xl:flex xl:max-w-[1200px] xl:mx-auto xl:justify-center xl:items-start xl:gap-[25px]">
          <Sidebar />
          <div className="main-content xl:min-w-[75%] xl:w-[75%] xl:m-0 relative mx-auto">
            <div className="w-full overflow-x-auto no-scrollbar">
              <div className="min-w-max">
                <Navbar activePage={activePage} setActivePage={setActivePage} />
              </div>
            </div>
            
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About isMobile={isMobile} />} />
              <Route path="/resume" element={<Resume isMobile={isMobile} />} />
              <Route path="/portfolio" element={<Portfolio isMobile={isMobile} />} />
              <Route path="/blog" element={<Blog isMobile={isMobile} />} />
              <Route path="/contact" element={<Contact isMobile={isMobile} />} />
              <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;