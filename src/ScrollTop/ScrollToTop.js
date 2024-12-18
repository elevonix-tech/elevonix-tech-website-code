import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, [location.pathname]); // Runs whenever the path changes

  return null; // No UI is rendered
};

export default ScrollToTop;
