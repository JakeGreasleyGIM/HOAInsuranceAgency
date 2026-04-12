import { Hero } from "../components/Hero";
import "./LegalPage.css";

export function PrivacyPolicy() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        backgroundImage="/images/about-hero.jpg"
        compact
      />
      <section className="section legal-section">
        <div className="container legal-content">
          <p className="legal-updated">Last updated: January 2026</p>

          <h2>Information We Collect</h2>
          <p>
            When you use our website or quote request form, we may collect personal information such as your name, email address, phone number, and details about your association or property. This information is provided voluntarily when you submit a form or contact us.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your insurance inquiries and quote requests</li>
            <li>Provide insurance-related guidance and recommendations</li>
            <li>Communicate with you about your coverage needs</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with insurance carriers and underwriters as necessary to process your insurance requests. We may also disclose information when required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at insurance@ProtectMyHOA.com or call 508-233-2261.
          </p>
        </div>
      </section>
    </>
  );
}
