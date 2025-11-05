import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ language = "sv", setLanguage = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [texts, setTexts] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/texts?page=navbar&language=${language}`
        );
        const data = await res.json();
        const textMap = {};
        data.forEach((item) => {
          textMap[item.key] = item.value;
        });
        setTexts(textMap);
      } catch (err) {
        console.error("Error fetching texts", err);
      }
    };
    fetchTexts();
  }, [language]);

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="nav-logo">
          <span className="logo-number">123</span>
          <span className="logo-text">Fakturera</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <a href="/" className="nav-link">
            <span>{texts.home || "Home"}</span>
            <div className="link-underline"></div>
          </a>
          <a href="/terms" className="nav-link">
            <span>{texts.terms || "Terms"}</span>
            <div className="link-underline"></div>
          </a>
          <a href="/about" className="nav-link">
            <span>{texts.about || "About"}</span>
            <div className="link-underline"></div>
          </a>
          <a href="/contact" className="nav-link">
            <span>{texts.contact || "Contact"}</span>
            <div className="link-underline"></div>
          </a>
        </div>

        {/* Language Switcher */}
        <div className="language-switch">
          <div className="lang-toggle">
            <button
              className={`lang-btn ${language === "sv" ? "active" : ""}`}
              onClick={() => setLanguage("sv")}
            >
              <img
                src="https://storage.123fakturere.no/public/flags/SE.png"
                alt="Swedish"
                className="flag-img"
              />
              <span>SV</span>
            </button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              <img
                src="https://storage.123fakturere.no/public/flags/GB.png"
                alt="English"
                className="flag-img"
              />
              <span>EN</span>
            </button>
            <div
              className={`lang-slider ${language === "en" ? "right" : ""}`}
            ></div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {["Home", "Terms", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              onClick={toggleMenu}
              className="mobile-link"
            >
              <span>{texts[label.toLowerCase()] || label}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 10L13 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 7L13 10L10 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
