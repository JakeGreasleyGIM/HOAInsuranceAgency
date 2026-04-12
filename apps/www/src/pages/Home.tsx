import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";
import { QUOTE_URL } from "../constants";
import "./Home.css";

const COVERAGES = [
  { title: "HOA Master Property Insurance", desc: "Buildings, common areas, replacement cost coverage for your association's shared assets.", icon: "building" },
  { title: "General Liability", desc: "Slip and fall, premises liability, operations coverage, medical payments and defense costs.", icon: "shield" },
  { title: "Umbrella / Excess Liability", desc: "Extends limits above underlying liability policies for broader protection.", icon: "umbrella" },
  { title: "Directors & Officers (D&O)", desc: "Governance allegations, decision disputes, wrongful acts, and defense costs.", icon: "briefcase" },
  { title: "Crime / Fidelity", desc: "Employee theft, forgery, computer fraud coverage for your association's funds.", icon: "lock" },
  { title: "Ordinance or Law", desc: "Covers increased costs when rebuilding must meet current building codes.", icon: "scale" },
];

const ICONS: Record<string, JSX.Element> = {
  building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"/><path d="M10 21v-3h4v3"/></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"/></svg>,
  umbrella: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="M2 12a10 10 0 0120 0H2z"/><path d="M12 12v7a3 3 0 01-6 0"/></svg>,
  briefcase: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/><path d="M3 13h18"/></svg>,
  lock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>,
  scale: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-2 6a4 4 0 008 0L9 7"/><path d="M19 7l-2 6a4 4 0 008 0l-2-6"/></svg>,
};

const STEPS = [
  { num: "01", title: "Review", desc: "We review current policies, loss history, key exposures, and governing documents (when available)." },
  { num: "02", title: "Identify gaps", desc: "We flag common HOA issues: deductible structure, ordinance/law, building valuation, water losses, and liability limits." },
  { num: "03", title: "Market & negotiate", desc: "We shop the account across appropriate carriers and specialty markets." },
  { num: "04", title: "Present options clearly", desc: "Boards get a clean summary — coverage, deductibles, limits, and tradeoffs." },
  { num: "05", title: "Support through renewal", desc: "We stay involved before, during, and after the renewal date." },
];

const CLIENT_TYPES = [
  "HOA boards and trustees",
  "Condominium associations and condo trusts",
  "Property managers",
  "Unit owners seeking aligned HO-6 coverage",
];

export function Home() {
  return (
    <>
      <Hero
        title="HOA Insurance, Built for Associations"
        subtitle="Independent brokerage specializing in HOA master policies and HO-6 condo unit owner coverage. Boards and trustees make high-stakes decisions. Our job is to make those decisions clear, defendable, and properly insured."
        backgroundImage="/images/hero-people.jpg"
        backgroundVideo="/images/hero-video.mp4"
        ctaText="Request Insurance Review"
        ctaHref={QUOTE_URL}
      />

      {/* Intro value prop */}
      <section className="section">
        <div className="container intro-grid reveal">
          <div className="intro-content">
            <h2 className="section-title">
              Insurance Built for Associations isn't just a slogan — it's how we operate.
            </h2>
            <p>
              HOA Insurance Agency is an independent insurance brokerage focused on insurance programs for HOAs and condo associations, plus HO-6 condo unit owner coverage aligned with the master policy.
            </p>
            <p className="intro-callout">
              Boards and trustees make high-stakes decisions. Our job is to make those decisions clear, defendable, and properly insured.
            </p>
            <Link to="/what-we-do" className="text-link">Learn More &gt;</Link>
          </div>
          <div className="intro-image">
            <img src="/images/about-hero.jpg" alt="HOA community" />
          </div>
        </div>
      </section>

      {/* Coverages */}
      <section className="section section--alt">
        <div className="container">
          <h3 className="section-title">Specialists in HOA Master Insurance</h3>
          <p className="section-subtitle">
            We help associations place and manage the core coverages that protect shared assets and governance.
          </p>
          <div className="card-grid">
            {COVERAGES.map((c) => (
              <div key={c.title} className="card reveal">
                <div className="card-icon">{ICONS[c.icon]}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="coverages-note">
            Our focus is not "cheap insurance." It's appropriate insurance that holds up when a claim happens.
          </p>
          <div className="section-cta-wrap">
            <Link to="/what-we-do" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* HO-6 */}
      <section className="section">
        <div className="container ho6-grid reveal">
          <div className="ho6-content">
            <h3 className="section-title">HO-6 Condo Insurance for Unit Owners</h3>
            <p>
              Many coverage problems happen because the master policy and unit owner coverage aren't coordinated. We make it easy to align:
            </p>
            <ul className="check-list">
              <li>What the association covers (master policy)</li>
              <li>What unit owners must cover (HO-6)</li>
              <li>Loss assessment exposure</li>
            </ul>
            <p className="ho6-callout">
              If your association's master policy has large deductibles, HO-6 coverage is not optional — it's essential.
            </p>
            <Link to="/what-we-do" className="btn btn-primary">
              Learn More
            </Link>
          </div>
          <div className="ho6-image">
            <img src="/images/modern-building.jpg" alt="Modern condo building" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="container">
          <h3 className="section-title">A Board-Friendly Process</h3>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.num} className="step-card reveal">
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta-wrap">
            <Link to="/about-us" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: "center" }}>
          <h3 className="section-title">Who We Work With</h3>
          <ul className="client-list">
            {CLIENT_TYPES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="section-subtitle" style={{ margin: "24px auto 36px" }}>
            If your HOA renewal is approaching — or you want a second opinion — start with a quick review.
          </p>
          <a href="#contact" className="btn btn-white">
            Contact HOA Insurance Agency
          </a>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
