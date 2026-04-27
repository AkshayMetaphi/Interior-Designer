import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Ensure gtag is available (it's initialized in index.html)
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-MCPER8V548", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;
