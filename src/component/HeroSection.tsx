import React from "react";
import BelowHero from "./BelowHero";


const HeroSection: React.FC = () => {
  return (
   <>
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      {/* Main Heading */}
      <h1 className="mt-20 text-4xl md:text-6xl font-bold text-white leading-snug">
        99% of traders fail. <br />
        Unlock the secrets of the 1%.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-400 text-lg md:text-xl">
        Trade with our exclusive professional analysts.
      </p>

      {/* Features */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {/* Feature Card 1 */}
        <div className="flex items-center pl-4 pr-6 py-2 bg-gray-800 text-white rounded-full shadow-md">
          <span className="mr-2 w-4 h-4 bg-[#00ae54] rounded-full" /> {/* Placeholder for SVG */}
          <span className="text-sm font-medium">Daily live trading</span>
        </div>

        {/* Feature Card 2 */}
        <div className="flex items-center pl-4 pr-6 py-2 bg-gray-800 text-white rounded-full shadow-md">
          <span className="mr-2 w-4 h-4 bg-[#00ae54] rounded-full" /> {/* Placeholder for SVG */}
          <span className="text-sm font-medium">Trade alerts</span>
        </div>

        {/* Feature Card 3 */}
        <div className="flex items-center pl-4 pr-6 py-2 bg-gray-800 text-white rounded-full shadow-md">
          <span className="mr-2 w-4 h-4 bg-[#00ae54] rounded-full" /> {/* Placeholder for SVG */}
          <span className="text-sm font-medium">Mentorship</span>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 px-16 py-3 rounded-full text-[#fff] border-2 border-[#ffffff] hover:border-[#00ae54] hover:text-[#00ae54] transition-all duration-300">
        Join the 1%
      </button>
    
    <div className="mt-20 w-full">
        <BelowHero/>
    </div>
      
    </div>
    
   </>
  );
};

export default HeroSection;