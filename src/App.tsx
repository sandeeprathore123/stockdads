import React, { HtmlHTMLAttributes, useRef } from "react";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FounderCard from "./component/FounderCard";
import BenefitCards from "./component/BenefitCards";
import Testimonial from "./component/Testimonial";
import PricingSection from "./component/PricingSection";
import Results from './component/Results'
import Faq from "./component/Faq";
import SlidingTestimonial from "./component/SlidingTestimonial";
import Action from "./component/Action";
import Footer from './component/Footer'


const App: React.FC = () => {
  const benefitRef = useRef<HTMLDivElement>(null);
  const reviewref = useRef<HTMLDivElement>(null);
  const pricing = useRef<HTMLDivElement>(null);
  const Faq_ref = useRef<HTMLDivElement>(null);
  const founder = useRef<HTMLDivElement>(null);



  return (
    <>
      <div className="scroll-smooth">
        <Navbar benefitRef={benefitRef} reviewref={reviewref} price={pricing} faqRef={Faq_ref} />
        <HeroSection scroll_to_price={pricing} />
        <div ref={founder} >
          <FounderCard scroll_to_price={pricing} />
        </div>
        {/* 🔥 Here’s the change */}
        <div ref={benefitRef}>
          <BenefitCards scroll_to_price={pricing} />
        </div>

        <Testimonial />
        <div ref={pricing}>
          <PricingSection />
        </div>

        <Results />
        <div ref={Faq_ref}>
          <Faq />
        </div>
        <div ref={reviewref}>
          <SlidingTestimonial />
        </div>

        <Action scroll_to_price={pricing} />
        <Footer move_to_founder={founder} scroll_to_price={pricing} scroll_to_benifit={benefitRef} scroll_to_faq={Faq_ref} scroll_to_review={reviewref} />
      </div>
    </>
  );
};

export default App
