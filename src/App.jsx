import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ProductJourney from "./components/ProductJourney";
import CoreDifference from "./components/CoreDifference";
import AIAgent from "./components/AIAgent";
import HumanAI from "./components/HumanAi";
import Marketing from "./components/Marketing";
import WorkflowBuilder from "./components/WorkflowBuilder";
import Industries from "./components/Industries";
import UseCases from "./components/UseCases";
import Analytics from "./components/Analytics";
import WhySandesa from "./components/WhySandesa";
import Comparison from "./components/Comparison";
import SeeInAction from "./components/SeeInAction";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Problem />
      <ProductJourney />
      <CoreDifference />
      <AIAgent />
      <HumanAI />
      <Marketing />
      <WorkflowBuilder />
      <Industries />
      <UseCases />
      <Analytics />
      <WhySandesa />
      <Comparison />
      <SeeInAction />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;