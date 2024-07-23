import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="primary-header flex">
      <div>
        <img src="/shared/logo.svg" alt="space tourism logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">{isOpen ? "Close Menu" : "Menu"}</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          aria-hidden={!isOpen}
          className="primary-navigation underline-indicators flex"
        >
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>00</span>Home</Link>
          </li>
          <li className={location.pathname === "/destination" ? "active" : ""}>
            <Link to="/destination" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>Destination</Link>
          </li>
          <li className={location.pathname === "/crew" ? "active" : ""}>
            <Link to="/crew" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>Crew</Link>
          </li>
          <li className={location.pathname === "/technology" ? "active" : ""}>
            <Link to="/technology" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
