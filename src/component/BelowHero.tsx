import React from "react";
import { FiTrendingUp, FiStar, FiCheckCircle, FiCoffee } from "react-icons/fi";
import { motion } from "framer-motion";

const BelowHero: React.FC = () => {
  const icons = [
    { icon: <FiTrendingUp className="text-white" size={40} />, label: "Top Charts" },
    { icon: <FiStar className="text-white" size={40} />, label: "Top Rated" },
    { icon: <FiCheckCircle className="text-white" size={40} />, label: "Whoop Verified" },
    { icon: <FiCoffee className="text-white" size={40} />, label: "Whoop Pick" },
  ];

  return (
    <div className="w-full bg-black py-4">
      <div className="overflow-hidden">
        {/* Scrolling container */}
        <motion.div
          className="flex space-x-8 items-center w-[200%] md:w-[150%] lg:w-[100%] justify-around animate-marquee"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shrink-0 space-y-1"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="text-white text-sm md:text-md">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BelowHero;