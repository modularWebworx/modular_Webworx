import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/General/About";
import Services from "./pages/Services/Services";
import WebDevelopment from "./pages/Services/WebDevelopment";
import SeoMarketing from "./pages/Services/Marketing";
import UxUiDesign from "./pages/Services/UxUiDesign";
import Maintenance from "./pages/Services/Maintenance";
import Support from "./pages/Services/Support";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/General/Contact";
import PrivacyPolicy from "./pages/General/PrivacyPolicy";
import TermsOfService from "./pages/General/TermsOfService";
import Faq from "./pages/General/Faq";
import SupportCenter from "./pages/Services/Support";
import Testimonials from "./pages/Testimonials/Testimonials";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/seo-marketing" element={<SeoMarketing />} />
            <Route path="/uxui-design" element={<UxUiDesign />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/support" element={<Support />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/support-center" element={<SupportCenter />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
    </Router >
  );
}

export default App;

