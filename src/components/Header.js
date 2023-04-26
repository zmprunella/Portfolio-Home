import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <a
              href="https://distrokid.com/hyperfollow/enbrayer/horizon"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Music
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
