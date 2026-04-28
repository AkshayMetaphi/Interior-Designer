import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";

import logo from "../assets/company_logo.png";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/process", label: "Process" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/services", label: "Services" },
    // { path: "/contact", label: "Contact" },
  ];

  // Update page title and reset body overflow on route change
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    
    // Find matching link for title
    const currentLink = navLinks.find(link => link.path === location.pathname);
    let pageTitle = "TRIVIE";
    
    if (currentLink) {
      pageTitle = `TRIVIE - ${currentLink.label}`;
    } else if (location.pathname === "/contact") {
      pageTitle = "TRIVIE - Contact";
    } else if (location.pathname.startsWith("/portfolio/")) {
      pageTitle = "TRIVIE - Project Details";
    } else if (location.pathname.startsWith("/services/")) {
      pageTitle = "TRIVIE - Service Details";
    }
    
    document.title = pageTitle;
  }, [location.pathname]);

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container flex-between">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
            TRIVIE INTERRIORS
          </Link>

          {/* Desktop Nav */}
          <div className="desktop-menu-wrapper">
            <nav className="desktop-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              className={`btn btn-global desktop-only ${
                location.pathname === "/contact" ? "contact-active" : ""
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
