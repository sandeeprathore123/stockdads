import React from "react";
import Marquee from "react-fast-marquee";
// Import your images (replace with actual image paths)
import img1 from "../assets/sign.png";
import img2 from "../assets/trade.png";
import img3 from "../assets/traders.png";
import img4 from "../assets/sign.png";

const images = [img1, img2, img3, img4];

const Results: React.FC = () => {
  return (
    <div className="bg-black py-32 px-6"> {/* Increased space from previous section */}
      {/* Increased Spacing Above & Below */}
      <h2 className="text-center text-4xl font-bold text-green-500 mb-4">
        💰 Proof in the Profits 📈
      </h2>
      
      {/* Added Membership Pays for Itself Text */}
      <p className="text-center text-lg text-gray-400 mb-24">
        Membership pays for itself
      </p>

      {/* Continuous Scrolling Carousel */}
      <Marquee speed={22} gradient={false} pauseOnHover={true} className="overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="mx-8 flex justify-center"> {/* Increased gap between cards */}
            <img
              src={image}
              alt={`Trade ${index}`}
              className="w-[320px] h-[190px] sm:w-[370px] sm:h-[220px] lg:w-[420px] lg:h-[260px] 
                       xl:w-[450px] xl:h-[280px] rounded-xl border border-green-500 shadow-lg
                       transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Results;