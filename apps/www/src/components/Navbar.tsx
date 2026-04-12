import { useState, useEffect } from "react";
import { NAV_LINKS, QUOTE_URL } from "../constants";
import "./Navbar.css";

export function Navbar({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"navbar" + (scrolled ? " navbar--scrolled" : "")}>
      <div className="navbar-inner container">
        <a href="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="HOA Insurance Agency" />
        </a>

        <div className={"navbar-links" + (open ? " navbar-links--open" : "")}>
          {NAV_LINKS.map((l) => {
            const isHash = l.path.includes("#");
            const isActive = !isHash && currentPath.replace(/\/$/, "") === l.path.replace(/\/$/, "");
            return (
              <a
                key={l.path}
                href={l.path}
                className={"navbar-link" + (isActive ? " navbar-link--active" : "")}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
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
