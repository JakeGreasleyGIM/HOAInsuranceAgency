import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, QUOTE_URL } from "../constants";
import "./Navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="HOA Insurance Agency" />
        </Link>

        <div className={"navbar-links" + (open ? " navbar-links--open" : "")}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={"navbar-link" + (pathname === l.path ? " navbar-link--active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href={QUOTE_URL} className="btn btn-primary navbar-cta">
            Get a Quote
          </a>
        </div>

        <button
          className="navbar-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={"hamburger-bar" + (open ? " hamburger-bar--open" : "")} />
          <span className={"hamburger-bar" + (open ? " hamburger-bar--open" : "")} />
          <span className={"hamburger-bar" + (open ? " hamburger-bar--open" : "")} />
        </button>
      </div>
    </nav>
  );
}
