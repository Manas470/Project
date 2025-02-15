import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesNew from './components/FeaturesNew';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsNew from './components/TestimonialsNew';
import TrustedBySection from './components/TrustedBySection';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';
import ComparisonPage from './components/ComparisonPage';
import HowItWorksNew from './components/HowItWorksNew';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-b from-gray-50 to-white">
              <Navbar />
              <Hero />
              <ComparisonPage />
              {/* <HowItWorks /> */}
              <FeaturesNew />
              <FeaturesSection />
              <TestimonialsNew />
              <TrustedBySection />
              <Footer />
            </div>
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-it-works" element={<HowItWorksNew/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
