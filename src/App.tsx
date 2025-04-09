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
  return (
    <>
      <Navbar />
      <HeroSection />
      <FounderCard />
      <BenefitCards />
      <Testimonial />
      <PricingSection />
      <Results />
      <Faq />
      <SlidingTestimonial />
      <Action />
      <Footer />


    </>
  );
};

export default App
