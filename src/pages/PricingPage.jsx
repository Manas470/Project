import React from 'react';
import Navbar from '../components/Navbar';
import PricingNew from '../components/PricingNew';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <PricingNew />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
