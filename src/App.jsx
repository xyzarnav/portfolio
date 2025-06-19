import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import useScrollNavigation from "./hooks/useScrollNavigation";
import SwipeIndicator from "./components/SwipeIndicator/SwipeIndicator";
import Squares from './blocks/Backgrounds/Squares/Squares';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("about");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mainContentRef = useRef(null);
  
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

  // Use our custom scroll navigation hook
  useScrollNavigation(isMobile, activePage, mainContentRef);

  const fullpageOptions = {
    scrollingSpeed: 700,
    touchSensitivity: 15,
    scrollHorizontally: true,
    scrollHorizontallyKey: 'your_key_here',
    direction: 'horizontal',
    slides: true,
    scrollHorizontal: true,
    controlArrows: false,
    slidesNavigation: false,
    onSlideLeave: (section, origin, destination) => {
      const paths = ["about", "resume", "portfolio", "contact"];
      const newPath = paths[destination.index];
      setActivePage(newPath);
      navigate(`/${newPath}`);
    },
    afterSlideLoad: (section, origin, destination) => {
      const paths = ["about", "resume", "portfolio", "contact"];
      const newPath = paths[destination.index];
      setActivePage(newPath);
      if (location.pathname !== `/${newPath}`) {
        navigate(`/${newPath}`);
      }
    },
  };

  // Add new effect to handle manual URL changes in mobile view
  useEffect(() => {
    if (isMobile) {
      const paths = ["about", "resume", "portfolio", "contact"];
      const currentPath = location.pathname.replace('/', '');
      const slideIndex = paths.indexOf(currentPath);
      
      if (slideIndex !== -1 && window.fullpage_api) {
        window.fullpage_api.silentMoveTo(1, slideIndex);
      }
    }
  }, [location.pathname, isMobile]);

  const renderContent = () => (
    <>
      {/* Background elements */}
      <div className="fixed inset-0 bg-smoky-black -z-10"></div>
      <div className="fixed inset-0 opacity-15 -z-10 overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#FFFF00"
          hoverFillColor="#fff"
        />
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-72 md:h-72 bg-accent-purple rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 md:w-72 md:h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10 animate-pulse-slow"></div>
        <div className="absolute -bottom-32 left-10 w-60 h-60 md:w-72 md:h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-10 animate-pulse-slow"></div>
      </div>

      <main className="overflow-hidden pb-6 sm:pb-8">
        <div className="px-3 sm:px-4 pt-5 md:pt-[70px] xl:flex xl:max-w-[1200px] xl:mx-auto xl:justify-center xl:items-start xl:gap-[25px]">
          <Sidebar />
          <div className="main-content xl:min-w-[75%] xl:w-[75%] xl:m-0 relative mx-auto">
            <div className="w-full overflow-x-auto no-scrollbar sticky top-0 z-50 bg-smoky-black/80 backdrop-blur-sm">
              <div className="min-w-max">
                <Navbar activePage={activePage} setActivePage={setActivePage} />
              </div>
            </div>

            {isMobile ? (
              <div className="mt-0 pt-0">
                <ReactFullpage
                  {...fullpageOptions}
                  render={() => (
                    <ReactFullpage.Wrapper>
                      <div className="section overflow-hidden">
                        <div className="slide h-[calc(100vh-4rem)] overflow-y-auto scrollbar-none">
                          <About isMobile={isMobile} />
                        </div>
                        <div className="slide h-[calc(100vh-4rem)] overflow-y-auto scrollbar-none">
                          <Resume isMobile={isMobile} />
                        </div>
                        <div className="slide h-[calc(100vh-4rem)] overflow-y-auto scrollbar-none">
                          <Portfolio isMobile={isMobile} />
                        </div>
                        <div className="slide h-[calc(100vh-4rem)] overflow-y-auto scrollbar-none">
                          <Contact isMobile={isMobile} />
                        </div>
                      </div>
                    </ReactFullpage.Wrapper>
                  )}
                />
              </div>
            ) : (
              <div className="mt-16 overflow-y-auto scrollbar-none">
                <Routes>
                  <Route path="/" element={<Navigate to="/about" replace />} />
                  <Route
                    path="/about"
                    element={<About isMobile={isMobile} />}
                  />
                  <Route
                    path="/resume"
                    element={<Resume isMobile={isMobile} />}
                  />
                  <Route
                    path="/portfolio"
                    element={<Portfolio isMobile={isMobile} />}
                  />
                  <Route
                    path="/contact"
                    element={<Contact isMobile={isMobile} />}
                  />
                  <Route path="*" element={<Navigate to="/about" replace />} />
                </Routes>
              </div>
            )}

            {/* Swipe Indicator - Only visible on mobile */}
            {isMobile && <SwipeIndicator />}
          </div>
        </div>
      </main>
    </>
  );

  return renderContent();
}

export default App;