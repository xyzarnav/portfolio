import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollNavigation = (isMobile, activePage, fullpageApi, containerRef) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile || !fullpageApi) return;

    const navigationMap = {
      'about': { next: '/resume', index: 1 },
      'resume': { next: '/portfolio', index: 2 },
      'portfolio': { next: '/contact', index: 3 },
      'contact': { next: '/about', index: 0 }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && navigationMap[activePage]) {
        fullpageApi.moveTo(navigationMap[activePage].index);
        navigate(navigationMap[activePage].next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, activePage, navigate, fullpageApi]);

  useEffect(() => {
    if (!containerRef?.current) return;
    
    const handleScroll = () => {
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, activePage, containerRef, navigate]);
};

export default useScrollNavigation;
