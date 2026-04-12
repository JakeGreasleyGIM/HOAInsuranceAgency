import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS, QUOTE_URL } from "../constants";
import "./Navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleNavClick(path: string) {
    setOpen(false);
    // Handle hash links (e.g. /#contact)
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      const targetRoute = route || "/";
      if (pathname === targetRoute) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(targetRoute);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="HOA Insurance Agency" />
        </Link>

        <div className={"navbar-links" + (open ? " navbar-links--open" : "")}>
          {NAV_LINKS.map((l) => {
            const isHash = l.path.includes("#");
            const isActive = !isHash && pathname === l.path;
            if (isHash) {
              return (
                <button
                  key={l.path}
                  type="button"
                  className="navbar-link"
                  onClick={() => handleNavClick(l.path)}
                >
                  {l.label}
                </button>
              );
            }
            return (
              <Link
                key={l.path}
                to={l.path}
                className={"navbar-link" + (isActive ? " navbar-link--active" : "")}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
          <a href={QUOTE_URL} className="btn btn-gold navbar-cta">
            Request Insurance Review
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
