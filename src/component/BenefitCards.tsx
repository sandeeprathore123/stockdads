import React from "react";
import first_png from '../assets/1.png'
import second_png from '../assets/2.png'
import third_png from '../assets/3.png'
import fourt_png from '../assets/4.png'
import fifth_png from '../assets/5.png'
import sixth_png from '../assets/6.png'
import seventh_png from '../assets/7.png'
import eighth_png from '../assets/8.png'
import { Element } from "react-scroll";




const benefits = [
  {
    id: 1,
    img: first_png,
    title: "Expert Analysts",
    description:
      "Gain insights from our vetted team with over 50 years of combined experience in forex and Indian markets.",
    cta: "Explore Expert Insights",
  },
  {
    id: 2,
    img: second_png,
    title: "Real-Time Trade Ideas",
    description:
      "Follow live trade setups, including entries, exits, and risk management strategies.",
    cta: "Access trade ideas",
  },
  {
    id: 3,
    img: third_png,
    title: "Live Trading Sessions",
    description:
      "Join daily voice sessions with analysts as they trade live and explain their moves",
    cta: "Unlock live trading",
  },
  {
    id: 4,
    img: fourt_png,
    title: "Trading Academy",
    description:
      "Learn at your own pace with our structured courses—covering forex basics, NSE/BSE trading, and advanced strategies.",
    cta: "Start Learning ",
  },
  {
    id: 5,
    img: fifth_png,
    title: "Thriving Community",
    description:
      "Connect with thousands of traders in India and beyond, sharing tips and motivation.",
    cta: "Join the Community",
  },
  {
    id: 6,
    img: sixth_png,
    title: "24/7 Support",
    description:
      "Our customer success managers are available 24/7 to help you with any questions or issues.",
    cta: "Get started",
  },
  {
    id: 7,
    img: seventh_png,
    title: "Mentorship Program",
    description:
      "Graduate from the Academy and unlock one-on-one guidance from top traders",
    cta: "Apply for Mentorship",
  },
  {
    id: 8,
    img: eighth_png,
    title: "Financial Planning",
    description:
      "Get expert advice on personal finance and long-term wealth-building.",
    cta: "Secure Your Future",
  },
];

interface benifitscards {
  scroll_to_price: React.RefObject<HTMLDivElement>
}

const BenefitCards: React.FC<benifitscards> = ({ scroll_to_price }) => {
  const handleclick = () => {
    scroll_to_price.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Element name="benefits"> {/* 👈 wrap everything inside this */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-[80%] mx-auto flex flex-col items-center text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80%] mx-auto">
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
              {/* <a
                href="#"
                className="mt-4 text-[#00AE54] underline font-medium text-left"
              >
                {benefit.cta} →
              </a> */}
              <button onClick={handleclick} className="mt-4 text-[#00AE54] underline font-medium text-left" >{benefit.cta} →</button>
            </div>
          ))}

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
                {/* <a
                  href="#"
                  className="mt-4 text-[#00AE54] underline font-medium text-left"
                >
                  {benefit.cta} →
                </a> */}
                <button onClick={handleclick} className="mt-4 text-[#00AE54] underline font-medium text-left" >{benefit.cta} →</button>
              </div>
            ))}
          </div>

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
              <button onClick={handleclick} className="mt-4 text-[#00AE54] underline font-medium text-left" >{benefit.cta} →</button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button onClick={handleclick} className="bg-[#00AE54] text-black font-medium py-3 px-8 rounded-full hover:bg-green-600 transition-all">
            Explore All Benefits
          </button>
        </div>
      </div>
    </Element>
  );
};

export default BenefitCards;
