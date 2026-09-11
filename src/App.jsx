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

import { FaWhatsapp } from "react-icons/fa";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import { getWhatsAppLink, isMobileDevice } from "./utils/whatsapp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
              <ContactUs/>
              <FAQ />
              <FinalCTA />
              <Footer />

              <a
                href={getWhatsAppLink()}
                target={isMobileDevice() ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          }
        />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;