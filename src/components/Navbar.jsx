import { useState, useEffect } from "react";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScreenResize = () => {
    setScreenSize(window.innerWidth);

    if (window.innerWidth > 540) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return (
    <>
      <div className="z-[300] navbar-container relative">
        <div className="nav">
          <div className="nav-container-left">
            <div className="image-place"></div>
            <span>Hrițcu Serafim</span>
          </div>

          {screenSize > 540 ? (
            <div className="nav-container-right">
              <button>
                {" "}
                <a href="#projects-section">Projects</a>
              </button>
              {/* <button><a href="#projects-section">About me</a></button> */}
              <button className="button-std">
                <a href="#contact-section">Get in touch</a>
              </button>
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              <img src="/images/hamburger-menu.png" className="w-[24px]" />
            </button>
          )}

          {screenSize <= 540 && (
            <div
              className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}
            >
              <div className="mobile-menu-content">
                <button onClick={closeMenu} className="mobile-menu-item">
                  <a href="#projects-section">Projects</a>
                </button>
                {/* <button
                                onClick={closeMenu}
                                className="mobile-menu-item"
                            >
                                <a href="#projects-section">About</a>
                            </button> */}
                <button
                  onClick={closeMenu}
                  className="mobile-menu-item button-std"
                >
                  <a href="#contact-section">Get in touch</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
