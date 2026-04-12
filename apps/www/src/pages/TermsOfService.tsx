import { Hero } from "../components/Hero";
import "./LegalPage.css";

export function TermsOfService() {
  return (
    <>
      <Hero
        title="Terms of Service"
        backgroundImage="/images/about-hero.jpg"
        compact
      />
      <section className="section legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: January 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the ProtectMyHOA.com website, you accept and agree to be bound by these terms of service. If you do not agree, please do not use this website.
          </p>

          <h2>Services Description</h2>
          <p>
            HOA Insurance Agency is a licensed insurance brokerage providing insurance guidance and placement services for HOA master policies and HO-6 condo unit owner coverage. We are not a law firm and do not provide legal advice. Final coverage is determined by actual policy language and endorsements issued by the insurer.
          </p>

          <h2>No Guarantee of Coverage</h2>
          <p>
            Information provided on this website is for general informational purposes only. All insurance coverage is subject to underwriting approval, policy terms, conditions, exclusions, and eligibility requirements of each carrier. Submitting a quote request does not guarantee coverage.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            While we strive to keep the information on this website accurate and up to date, we make no warranties or representations about the completeness, accuracy, or reliability of the content. Insurance products, coverage options, and regulations change frequently.
          </p>

          <h2>User Responsibilities</h2>
          <p>
            You agree to provide accurate and complete information when submitting quote requests or contacting us. You are responsible for reviewing your actual policy documents for definitive coverage terms.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of HOA Insurance Agency or its content suppliers and is protected by applicable intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            HOA Insurance Agency shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on information provided herein.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at insurance@ProtectMyHOA.com or call 508-233-2261.
          </p>
        </div>
      </section>
    </>
  );
}
