import React from "react";
import stock_img from '../assets/trade.png';
import img_stock from '../assets/traders.png';

const benefits = [
  {
    id: 1,
    img: stock_img,
    title: "13 Exclusive Traders",
    description:
      "Gain access to our thoroughly vetted and handpicked team with over 60 years of combined experience.",
    cta: "Join the pros",
  },
  {
    id: 2,
    img: img_stock,
    title: "Real-Time Trade Ideas",
    description:
      "See our team execute trades in real-time, giving entries, exits, take profits, and stop losses.",
    cta: "Access trade ideas",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/150",
    title: "Live Trading Sessions",
    description:
      "Join our analysts daily in live voice chat and watch them trade with full transparency.",
    cta: "Unlock live trading",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/150",
    title: "Trading Academy",
    description:
      "Everything you need to become a knowledgeable trader in an organized, self-paced learning environment.",
    cta: "Learn trading",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/150",
    title: "1:1 Mentorship",
    description:
      "Complete the Academy and gain access to a private mentorship experience.",
    cta: "Get mentored",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/150",
    title: "24/7 Support",
    description:
      "Our customer success managers are available 24/7 to help you with any questions or issues.",
    cta: "Get started",
  },
  {
    id: 7,
    img: "https://via.placeholder.com/150",
    title: "Thriving Community",
    description:
      "Connect with thousands of people just like you on their journey to financial freedom.",
    cta: "Access our network",
  },
  {
    id: 8,
    img: "https://via.placeholder.com/150",
    title: "Financial Resources",
    description:
      "Get personal finance and retirement questions answered by licensed financial professionals.",
    cta: "Secure your future",
  },
];

const BenefitCards: React.FC = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-[80%] mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2 className="text-lg uppercase text-[#FFD700] tracking-wide font-medium mb-4">
          Benefits
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Inside Stock Dads
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-16">
          The last trading community you'll ever need.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80%] mx-auto">
        {/* First Row: 3 Cards */}
        {benefits.slice(0, 3).map((benefit) => (
          <div
            key={benefit.id}
            className="bg-[#0A0A0A] border-[2px] border-[#00AE54] rounded-xl p-6 flex flex-col justify-between"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-full h-40 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              {benefit.description}
            </p>
            <a
              href="#"
              className="mt-4 text-[#00AE54] underline font-medium text-left"
            >
              {benefit.cta} →
            </a>
          </div>
        ))}

        {/* Second Row: 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 col-span-full">
          {benefits.slice(3, 5).map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#0A0A0A] border-[2px] border-[#00AE54] rounded-xl p-6 flex flex-col justify-between"
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-full h-40 object-cover rounded-md mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                {benefit.description}
              </p>
              <a
                href="#"
                className="mt-4 text-[#00AE54] underline font-medium text-left"
              >
                {benefit.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Third Row: 3 Cards */}
        {benefits.slice(5, 8).map((benefit) => (
          <div
            key={benefit.id}
            className="bg-[#0A0A0A] border-[2px] border-[#00AE54] rounded-xl p-6 flex flex-col justify-between"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-full h-40 object-cover rounded-md mb-6"
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              {benefit.description}
            </p>
            <a
              href="#"
              className="mt-4 text-[#00AE54] underline font-medium text-left"
            >
              {benefit.cta} →
            </a>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#00AE54] text-black font-medium py-3 px-8 rounded-full hover:bg-green-600 transition-all">
          Explore All Benefits
        </button>
      </div>
    </div>
  );
};

export default BenefitCards;
