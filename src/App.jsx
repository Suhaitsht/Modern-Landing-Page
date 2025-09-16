import "./App.css";
import CompanyLogo from "./Components/CompanyLogo";
import FeaturesSection from "./Components/FeaturesSection";
import Hero from "./Components/Hero";
import MonitorSection from "./Components/MonitorSection";
import Navbar from "./Components/Navbar";
import NewsSection from "./Components/NewsSection";
import PricingSection from "./Components/PricingSection";
import PurposeSection from "./Components/PurposeSection";
import Schedule from "./Components/Schedule";
import ServicesSection from "./Components/ServicesSection";
import TestimonialsSection from "./Components/TestimonialsSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <Schedule />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsSection />
      </div>
    </main>
  );
}

export default App;
