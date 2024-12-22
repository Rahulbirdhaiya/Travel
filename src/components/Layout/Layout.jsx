import React from 'react';
import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import SafetyAlert from '../SafetyAlert/SafetyAlert';


const Layout = () => {
  const safetyMessage = "Please be aware of local COVID-19 guidelines and travel advisories before planning your trip.";

  return (
    <>
      <Header />
      <div className="safety-alert-container">
        <SafetyAlert message={safetyMessage} />
      </div>
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
