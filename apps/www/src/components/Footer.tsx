import { Link } from "react-router-dom";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  SOCIAL,
  NAV_LINKS,
} from "../constants";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col footer-brand">
          <img src="/logo.png" alt="HOA Insurance Agency" className="footer-logo" />
          <p className="footer-tagline">
            Insurance built for associations.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          {NAV_LINKS.map((l) => (
            <Link key={l.path} to={l.path} className="footer-link">
              {l.label}
            </Link>
          ))}
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="footer-link">
            Terms of Service
          </Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <a href={PHONE_HREF} className="footer-link">{PHONE}</a>
          <a href={EMAIL_HREF} className="footer-link">{EMAIL}</a>
          <p className="footer-address">
            {ADDRESS_LINE1}
            <br />
            {ADDRESS_LINE2}
          </p>
          <div className="footer-social">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} HOA Insurance Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
