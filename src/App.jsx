import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeatureSetion } from "./components/FeatureSetion";
import { Eorkflow } from "./components/Eorkflow";
import { Priceing } from "./components/Priceing";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSetion />
        <Eorkflow />
        <Priceing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
