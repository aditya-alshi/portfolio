import React from "react";

import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

function App() {
  const theTheme = JSON.parse(localStorage.getItem("theme"));
  const [darkMode, setDarkMode] = React.useState(theTheme || false);
  function handleToggle() {
    setDarkMode((prev) => {
      const toggle = !prev;
      localStorage.setItem("theme", toggle);
      return toggle;
    });
  }

  return (
    <div
      data-testid="wrapper"
      className={darkMode ? "dark--the--main--wrapper" : "the--main--wrapper"}
    >
      <header
        className={darkMode ? "dark--header--wrapper" : "header--wrapper"}
      >
        <Link className={darkMode ? "dark--my--name" : "my--name"}>
          Aditya Alshi
        </Link>
        {darkMode ? (
          <MdLightMode onClick={handleToggle} className="darkmode--toggle" />
        ) : (
          <MdDarkMode onClick={handleToggle} className="darkmode--toggle" />
        )}
        <nav className="navbar">
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer--wrapper">
        <a
          href="https://www.linkedin.com/in/aditya-alshi-49a3632a4/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiLinkedin className="footer--icons" />
        </a>
        <a
          href="https://github.com/aditya-alshi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsGithub className="footer--icons" />
        </a>
      </footer>
    </div>
  );
}

export default App;
