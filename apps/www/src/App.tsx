import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useReveal } from "./hooks/useReveal";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { WhatWeDo } from "./pages/WhatWeDo";
import { WhyChooseUs } from "./pages/WhyChooseUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function RevealObserver() {
  useReveal();
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RevealObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
