import React, { useState } from "react";

interface NavbarProps {
  benefitRef: React.RefObject<HTMLDivElement>;
  reviewref: React.RefObject<HTMLDivElement>;
  price: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;


}

const Navbar: React.FC<NavbarProps> = ({ benefitRef, reviewref, price, faqRef }) => {

  // const handleOnClick = () => {
  //   price.current?.scrollIntoView({ behavior: "smooth" });
  //   // window.location.href = "https://sachin4803.graphy.com//s/authenticate";
  // };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for the hamburger menu

  // Function to scroll to the Benefits section
  const scrollToBenefits = () => {
    benefitRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false)
  };

  const scroll_to_sliding_testimonial = () => {
    reviewref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false)
  }

  const scroll_to_pricing_section = () => {
    price.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false)
    console.log("hello")
  }

  const scrolltoFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false)
  }
  const click_on_logo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={click_on_logo} className="text-2xl font-bold">
              <span className="text-white">G</span>
              <span className="text-[#00ae54]">TA</span>
            </button>

            {/* Hamburger for Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? "✖️" : "☰"} {/* Hamburger Icon */}
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              <button
                onClick={scrollToBenefits} // Added scrollToBenefits function here
                className="text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300"
              >
                Benefits
              </button>
              {/* <NavLink to="#calendar">Calendar</NavLink> */}
              <button onClick={scroll_to_pricing_section} className="text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">Pricing</button>
              <button onClick={scroll_to_sliding_testimonial} className="text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">Review</button>
              <button onClick={scrolltoFaq} className="text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">FAQs</button>
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <button onClick={scroll_to_pricing_section} className="px-6 py-2 text-[#00ae54] border border-[#00ae54] rounded-full hover:bg-[#00ae54] hover:text-white transition-all duration-300">
                Join the 1%
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col py-6 z-40 border-t border-gray-700">
            <button onClick={scrollToBenefits} className="py-2 text-center text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">
              Benefits
            </button>
            <button onClick={scroll_to_sliding_testimonial} className="py-2 text-center text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">
              Review
            </button>
            <button onClick={scroll_to_pricing_section} className="py-2 text-center text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">
              pricing
            </button>
            <button onClick={scrolltoFaq} className="py-2 text-center text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300">
              Review
            </button>

            {/* Button */}
            <div className="mt-4 text-center">
              <button className="px-6 py-2 text-[#00ae54] border border-[#00ae54] rounded-full hover:bg-[#00ae54] hover:text-white transition-all duration-300">
                Join the 1%
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

// Reusable NavLink Component
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = "" }) => {
  return (
    <a
      href={to}
      className={`text-white hover:font-bold hover:text-[#00ae54] transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default Navbar;
