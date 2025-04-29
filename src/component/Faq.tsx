import React, { useState } from "react";
import { motion } from "framer-motion"; // Smooth animations

const FAQs = [
  {
    question: "What’s included in the trade ideas?",
    answer: "Detailed setups with entry points, stop losses, and profit targets—everything you need to trade confidently.",
  },
  {
    question: "Do your analysts trade what they share?",
    answer: "Yes, our analysts trade alongside our members to ensure transparency.",
  },
  {
    question: "How many trade ideas can I expect daily?",
    answer: "3–5 high-quality ideas across forex and Indian stocks, depending on market conditions.",
  },
  {
    question: "I’m new to trading—will this be too advanced?",
    answer: "Not at all! Our Academy starts with the basics, and our community supports you every step of the way.",
  },
  {
    question: "What’s your refund policy?",
    answer: "14-day money-back guarantee—If loss occurred & backtesting on our master strategy.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* LEFT CONTAINER */}
        <div className="md:w-1/3">
          <h2 className="text-5xl font-bold mb-4">Got Questions?</h2>
          <p className="text-gray-400 mb-6">Everything you need to know before you buy.</p>

          {/* Client Testimonial */}
          <div className="flex items-center space-x-4 bg-[#0D0D0D] p-4 rounded-lg border border-[#22C55E]">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support"
              className="w-12 h-12 rounded-full border-2 border-[#22C55E]"
            />
            <div>
              <p className="text-sm text-gray-300">
                Hey, I’m here to help if you have any questions!
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-6">
            <button className="border-2 border-[#22C55E] text-[#22C55E] py-3 px-6 rounded-full font-bold shadow-md transition hover:bg-[#22C55E] hover:text-white">
              Contact us
            </button>
          </div>
        </div>

        {/* RIGHT CONTAINER - FAQ */}
        <div className="md:w-2/3">
          {FAQs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-[#0F0F0F] rounded-lg transition-all flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="text-[#22C55E] text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Expandable Answer with Smooth Animation */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="bg-[#0F0F0F] text-gray-300 px-4 pb-4">
                  {faq.answer}
                </div>
              </motion.div>

              {/* Separator Line */}
              <div className="border-b border-white/20"></div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};

export default Faq;