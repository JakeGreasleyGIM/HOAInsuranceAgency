import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";
import "./AboutUs.css";

const BELIEFS = [
  "Boards deserve clarity regarding insurance matters",
  "Coverage should align with the governing documents (all-in vs. bare walls)",
  "Deductibles and limits matter as much as price — per-unit deductibles, water losses, and loss assessment exposure need careful attention",
  "HO-6 coordination is part of doing the job right — when unit owners understand master policy gaps, it reduces claims conflicts",
];

const APPROACH = [
  "Structured renewal timeline",
  "Clean submission data preparation",
  "Clear coverage summaries for board review",
  "Claims-informed guidance",
  "Long-term risk approach",
];

export function AboutUs() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Independent insurance brokerage specializing in HOA master insurance and HO-6 condo unit owner policies. We serve one type of customer: shared-ownership communities and the people responsible for protecting them."
        backgroundImage="/images/board-meeting.jpg"
        backgroundVideo="/images/hero-video.mp4"
        compact
      />

      <section className="section">
        <div className="container about-intro-grid">
          <div className="about-intro-content">
            <p>
              HOAs have unique requirements — shared buildings, shared liability, board governance, and long-term maintenance realities. We build insurance programs around those realities and explain them in plain English.
            </p>
            <p>
              We're not a generalist agency that happens to sell condo policies. HOA insurance is our focus — the complexities, the underwriting, the board-level conversations.
            </p>
          </div>
          <div className="about-intro-image">
            <img src="/images/about-hero.jpg" alt="Community building" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">What We Believe</h2>
          <ul className="beliefs-list">
            {BELIEFS.map((b) => (
              <li key={b} className="belief-item">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="section-title">Independent Market Access</h3>
          <p style={{ fontSize: 16, color: "var(--color-gray-600)", lineHeight: 1.7, maxWidth: 720 }}>
            We're not tied to a single insurer. We can access multiple carriers and specialty markets to place the best fit for your association. Coverage is subject to underwriting, policy terms, and eligibility — but our responsibility is consistent: advise the association and place the best program available.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">How We Work With Associations</h2>
          <ul className="approach-list">
            {APPROACH.map((a) => (
              <li key={a} className="approach-item">{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Compliance &amp; Professional Standards</h2>
          <p style={{ fontSize: 16, color: "var(--color-gray-600)", lineHeight: 1.7, maxWidth: 720 }}>
            HOA Insurance Agency is a licensed insurance agency. We provide insurance guidance and placement — not legal advice. Final coverage depends on actual policy language and endorsements issued by the insurer.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link to="/why-choose-us" className="btn btn-primary">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
