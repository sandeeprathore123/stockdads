import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tutorimg from '../assets/Mentor Image.png'
import signature from '../assets/sign.png'

gsap.registerPlugin(ScrollTrigger);

const FounderCard: React.FC = () => {
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]); // Array of paragraph refs

  useEffect(() => {
    // GSAP Scroll Animation for paragraphs
    paragraphRefs.current.forEach((paragraph) => {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 20 }, // Start hidden
        {
          opacity: 1,
          y: 0, // Animate into position
          scrollTrigger: {
            trigger: paragraph,
            start: "top bottom", // Start when top of paragraph enters viewport
            end: "top center", // End when top is at center
            scrub: true, // Smooth animation tied to scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 md:px-8">
      {/* Card */}
      <div className="relative bg-[#0A0A0A] rounded-xl p-8 md:p-12 w-full max-w-4xl mx-auto overflow-hidden min-h-[650px] flex flex-col justify-center items-center text-center gap-8">
        {/* Glowing Border Animation */}
        <div className="absolute inset-0 rounded-xl border-[3px] border-transparent animate-border-gradient bg-border-gradient"></div>

        {/* Card Container */}
        <div className="  relative z-10 flex flex-col md:flex-row items-center md:items-center gap-12 w-full text-center md:text-left">
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-center justify-center space-y-6">
            {/* Circular Image Border */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-[5px] border-[#00ae54]">
              <img
                src={tutorimg}
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Sachin Rao
            </h2>

            {/* Designation */}
            <p className="text-base md:text-lg text-gray-400">
              CEO and Founder, 10x traders
            </p>

            {/* Catchy Line */}
            <p className="italic text-sm md:text-base text-white">
              "It was either this or OnlyFans"
            </p>

            {/* Signature */}
            <div className="mt-4">
              <img
                src={signature}
                alt="Signature"
                className="h-12"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 w-full flex flex-col justify-center items-center gap-4">
            {/* Paragraphs */}
            <p
              className="text-white text-base md:text-lg mb-4"
              ref={(el) => el && paragraphRefs.current.push(el)}
            >
              I was just a regular dad with no financial background, searching
              everywhere for trustworthy resources to teach me how to make money
              in the stock market.
            </p>
            <p
              className="text-white text-base md:text-lg mb-4"
              ref={(el) => el && paragraphRefs.current.push(el)}
            >
              I couldn't find what I was looking for, so I built it myself, and
              called it Stock Dads.
            </p>
            <p
              className="text-white text-base md:text-lg mb-4"
              ref={(el) => el && paragraphRefs.current.push(el)}
            >
              I assembled a world-class team of 13 exclusive analysts — each part
              of the 1% club of consistently profitable traders (for years, with
              verifiable proof) — to share their expertise with me, and anyone
              else that wanted to join me.
            </p>
            <p
              className="text-white text-base md:text-lg mb-4"
              ref={(el) => el && paragraphRefs.current.push(el)}
            >
              Now, thousands of traders have the resource that I was searching
              for.
            </p>

            {/* Call-to-Action Button */}
            <button className="mt-6 px-6 py-2 bg-[#00ae54] text-sm md:text-base text-black font-medium rounded-full hover:bg-green-600 transition-all self-baseline">
              Join the 1%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;