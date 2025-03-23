import React from 'react';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import OurCraft from './components/OurCraft';
import WhyCloudBrew from './components/WhyCloudBrew';
import AboutUs from './components/AboutUs';
import HowWeWork from './components/HowWeWork';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-coffee-cream/30">
      <TopMenu />
      <div className="pt-20">
        <HeroBanner />
        <main className="container mx-auto px-4 md:px-6 lg:px-8">
          <OurCraft />
          <WhyCloudBrew />
          <AboutUs />
          <HowWeWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
