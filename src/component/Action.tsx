import React from "react";
import { FaCheck, FaChartLine, FaUserGraduate, FaDiscord, FaClipboardList } from "react-icons/fa";

const Action: React.FC = () => {
  return (
    <div className="bg-black text-white py-24 px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="tracking-widest text-[#22C55E] text-sm mb-2 uppercase">
          Take Action
        </p>
        <h2 className="text-5xl font-bold">
          The <span className="text-[#22C55E]">Choice</span> is Yours
        </h2>
      </div>

      {/* Content Boxes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Box (Do Nothing) */}
        <div className="border border-[#22C55E] rounded-lg p-10 bg-[#0F0F0F] shadow-lg transition-all duration-300 hover:shadow-[0px_0px_20px_#22C55E] h-[536px] flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#1a1a1a] p-3 rounded-lg">
                <span role="img" aria-label="clock">⏳</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Do Nothing</h3>
                <p className="text-gray-400 text-sm">Keep wasting time.</p>
              </div>
            </div>
            {/* Gray Separator */}
            <hr className="border-gray-600 my-4" />
          </div>
          <ul className="text-gray-400 space-y-4 text-sm">
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#22C55E] text-xs" />
              <span>Missed Opportunities</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#22C55E] text-xs" />
              <span>Limited Financial Growth</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#22C55E] text-xs" />
              <span>Lack Of Personal Development</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#22C55E] text-xs" />
              <span>Dependence On One Income Source</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheck className="text-[#22C55E] text-xs" />
              <span>No Mentorship Or Community Support</span>
            </li>
          </ul>
          <button
            className="mt-6 w-full py-3 px-4 rounded-lg text-gray-600 bg-[#0F0F0F] border border-gray-600"
            disabled
          >
            Boulevard of Broken Dreams
          </button>
        </div>

        {/* Right Box (Take Action) */}
        <div className="border border-[#22C55E] rounded-lg p-10 bg-[#0F0F0F] shadow-lg transition-all duration-300 hover:shadow-[0px_0px_20px_#22C55E] h-[536px] flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#22C55E] text-black p-3 rounded-lg">
                <span role="img" aria-label="rocket">🚀</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#22C55E]">Take Action</h3>
                <p className="text-gray-400 text-sm">Join Stock Dads.</p>
              </div>
            </div>
          </div>

          <ul className="text-gray-300 space-y-4 text-sm">
            <li className="flex items-center space-x-2">
              <FaChartLine className="text-[#22C55E]" />
              <span>Live Trading Sessions</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardList className="text-[#22C55E]" />
              <span>Real-Time Entries And Exits</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUserGraduate className="text-[#22C55E]" />
              <span>24/7 Coaching & Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaDiscord className="text-[#22C55E]" />
              <span>VIP Discord Access</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardList className="text-[#22C55E]" />
              <span>Market Updates & Analysis</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUserGraduate className="text-[#22C55E]" />
              <span>Educational Resources</span>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="mt-6 w-full py-3 px-4 rounded-lg border border-[#22C55E] text-[#22C55E] font-bold shadow-lg hover:bg-[#22C55E] hover:text-white transition">
            Join the 1%
          </button>
        </div>
      </div>
    </div>
  );
};

export default Action;