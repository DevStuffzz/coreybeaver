// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // gets current URL path

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top whenever pathname changes
  }, [pathname]);

  return null; // this component doesn't render anything
};

export default ScrollToTop;
