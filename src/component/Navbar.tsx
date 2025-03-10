import React, { useState } from "react";

const Navbar: React.FC = () => {

  const handleOnClick = () =>{
    window.location.href = "https://sachin4803.graphy.com//s/authenticate";
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for the hamburger menu

  return (
    <div className="bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-white">STOCK</span>
              <span className="text-[#00ae54]">DADS</span>
            </div>

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
              <NavLink to="#benefits">Benefits</NavLink>
              <NavLink to="#calendar">Calendar</NavLink>
              <NavLink to="#reviews">Reviews</NavLink>
              <NavLink to="#pricing">Pricing</NavLink>
              <NavLink to="#faqs">FAQs</NavLink>
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <button onClick={handleOnClick} className="px-6 py-2 text-[#00ae54] border border-[#00ae54] rounded-full hover:bg-[#00ae54] hover:text-white transition-all duration-300">
                Join the 1%
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col py-6 z-40 border-t border-gray-700"
          >
            <NavLink to="#benefits" className="py-2 text-center">
              Benefits
            </NavLink>
            <NavLink to="#calendar" className="py-2 text-center">
              Calendar
            </NavLink>
            <NavLink to="#reviews" className="py-2 text-center">
              Reviews
            </NavLink>
            <NavLink to="#pricing" className="py-2 text-center">
              Pricing
            </NavLink>
            <NavLink to="#faqs" className="py-2 text-center">
              FAQs
            </NavLink>

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