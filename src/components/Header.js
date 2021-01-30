import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //add and remove active class on the links
  useEffect(() => {
    const links = [...document.querySelectorAll(".navbar li")];

    links.map((link) =>
      link.addEventListener("click", () => {
        setIsMenuOpen(false);
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      })
    );
  }, [isMenuOpen]);

  //toggle opening and closing of menu
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header">
        <nav className="nav">
          <Link to="/">
            <div className="nav-logo">
              <img src="/images/logo.svg" alt="logo" />
              <span className="nav-brand">
                Insta<span>driver</span>
              </span>
            </div>
          </Link>
        </nav>
        <ul className={isMenuOpen ? "navbar show-nav" : "navbar"}>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/get-social">Get Social</Link>
          </li>
          <li className="active">
            <Link to="/accounts">James Keen</Link>
          </li>
          <div>
            Menu <span className="fa fa-bars" onClick={handleToggle}></span>
          </div>
        </ul>
      </div>
      <div className="bottom-header"></div>
    </header>
  );
};

export default Header;
