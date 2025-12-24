
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoyaltySection from './components/LoyaltySection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import LiquidBackground from './components/LiquidBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <LiquidBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <LoyaltySection />
          <FeedbackSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
