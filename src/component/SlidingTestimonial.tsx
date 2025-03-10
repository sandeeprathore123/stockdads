import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { user: "countgabu", profilePic: "https://randomuser.me/api/portraits/men/32.jpg", timeAgo: "13 days ago", message: "Shout out to the amazing Customer service team at Stock Dad's for helping me with my payment issue..." },
  { user: "casperclous", profilePic: "https://randomuser.me/api/portraits/men/33.jpg", timeAgo: "22 days ago", message: "I have been here for 3 months, it has been a great place, good callers..." },
  { user: "flynn_37250", profilePic: "https://randomuser.me/api/portraits/men/34.jpg", timeAgo: "2 months ago", message: "This is a place to be for serious traders. Daddy’s home. When you wanna go ahead with selling options strategies..." },
  { user: "litty2739", profilePic: "https://randomuser.me/api/portraits/men/35.jpg", timeAgo: "2 months ago", message: "Great set of traders here! From experienced scalpers to reliable swing traders..." },
    { user: "countgabu", profilePic: "https://randomuser.me/api/portraits/men/32.jpg", timeAgo: "13 days ago", message: "Shout out to the amazing Customer service team at Stock Dad's for helping me with my payment issue..." },
  { user: "casperclous", profilePic: "https://randomuser.me/api/portraits/men/33.jpg", timeAgo: "22 days ago", message: "I have been here for 3 months, it has been a great place, good callers..." },
  { user: "flynn_37250", profilePic: "https://randomuser.me/api/portraits/men/34.jpg", timeAgo: "2 months ago", message: "This is a place to be for serious traders. Daddy’s home. When you wanna go ahead with selling options strategies..." },
  { user: "litty2739", profilePic: "https://randomuser.me/api/portraits/men/35.jpg", timeAgo: "2 months ago", message: "Great set of traders here! From experienced scalpers to reliable swing traders..." },
];

const SlidingTestimonial: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState(1);
  const [translateValue, setTranslateValue] = useState(16); // Default for desktop
  // const [itemsPerView, setItemsPerView] = useState(3); // Default: Show 3 cards in desktop

  // Adjust Settings Based on Screen Size
  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setTranslateValue(95); // Full-width transition for mobile
        // setItemsPerView(1); // Show only one card
      } else {
        setTranslateValue(16); // Smaller transition for desktop
        // setItemsPerView(3); // Show 3 cards
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-black text-white py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="tracking-widest text-[#22C55E] text-sm mb-2">TESTIMONIAL</p>
        <h2 className="text-5xl font-bold">Stock Dads Member Stories</h2>
        <p className="text-gray-400 mt-2">Don't take our word for it, hear it from them</p>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center overflow-hidden w-full">
        <div className="relative w-full max-w-[850px] flex justify-center items-center">
          <motion.div
            className="flex w-full" // Removed gap completely
            animate={{ x: `-${activeIndex * translateValue}%` }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] px-10"
              >  
                <div className={`relative p-4 w-[340px] h-[420px] rounded-xl overflow-hidden transition-all ${activeIndex === index ? "bg-[#181818] shadow-xl" : "bg-[#0F0F0F] opacity-50"}`}>
                  
                  {/* User Message */}
                  <p className={`p-3 rounded-lg text-sm ${activeIndex === index ? "bg-[#22C55E] text-black" : "text-gray-400"}`}>
                    {item.message}
                  </p>
                  
                  {/* Brand Reply */}
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">Stock Dads</p>
                    <div className="w-fit px-4 py-1 text-sm bg-gray-700 rounded-lg">Thanks!</div>
                  </div>

                  {/* User Info (Correctly Inside the Card) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center w-full">
                    <img
                      src={item.profilePic}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-gray-600"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-white truncate">{item.user} ✅</p>
                      <p className="text-xs text-gray-400">{item.timeAgo}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons BELOW Testimonials */}
      <div className="flex justify-center mt-8 space-x-6">
        <button onClick={handlePrev} className="w-12 h-12 bg-black border border-[#22C55E] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-[#22C55E] hover:text-black transition">
          ←
        </button>
        <button onClick={handleNext} className="w-12 h-12 bg-black border border-[#22C55E] rounded-full flex items-center justify-center text-[#22C55E] hover:bg-[#22C55E] hover:text-black transition">
          →
        </button>
      </div>
    </div>
  );
};

export default SlidingTestimonial;