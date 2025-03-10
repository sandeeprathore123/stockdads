import React from "react";
import { FaDiscord, FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const people = [
  { name: "John Tiliacos", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Sarah Smith", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "James Doe", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Emily Davis", img: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Michael Brown", img: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Footer Top Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Newsletter Subscription */}
        <div className="border border-[#22C55E] rounded-lg bg-[#0F0F0F] p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">STOCK<span className="text-[#22C55E]">DADS</span></h2>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <FaDiscord className="text-white text-xl cursor-pointer" />
            <FaInstagram className="text-white text-xl cursor-pointer" />
            <FaFacebook className="text-white text-xl cursor-pointer" />
            <FaTwitter className="text-white text-xl cursor-pointer" />
            <FaTiktok className="text-white text-xl cursor-pointer" />
          </div>
          
          <p className="text-gray-400 text-sm mb-4">
            Get the DADvantage Daily Market Newsletter, Priority Updates on Free Events, and more.
          </p>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-black border border-gray-600 text-white placeholder-gray-400 mb-4"
          />

          {/* Sign-Up Button */}
          <button className="w-full py-3 rounded-lg border border-[#22C55E] text-[#22C55E] font-bold shadow-lg
            hover:bg-[#22C55E] hover:text-white transition">
            Sign Up →
          </button>
        </div>

        {/* About Section */}
        <div className="text-end">
          <h3 className="text-lg font-bold text-white mb-3">ABOUT</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-[#22C55E] cursor-pointer">Founder</li>
            <li className="hover:text-[#22C55E] cursor-pointer">Reviews</li>
            <li className="hover:text-[#22C55E] cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Links Section */}
        <div >
          <h3 className="text-lg font-bold text-white mb-3">LINKS</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-[#22C55E] cursor-pointer">Benefits</li>
            <li className="hover:text-[#22C55E] cursor-pointer">Pricing</li>
            <li className="hover:text-[#22C55E] cursor-pointer">FAQs</li>
          </ul>
        </div>
      </div>

      {/* Team / People Avatars */}
      <div className="flex justify-center space-x-4 mt-12">
        {people.map((person, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={person.img}
              alt={person.name}
              className="w-12 h-12 rounded-full border-2 border-[#22C55E] transition duration-300 transform group-hover:scale-110"
            />
            {/* Hover Name Popup */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-[#22C55E] text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
              {person.name}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bottom Navigation */}
      <div className="text-center text-gray-500 text-sm mt-8 space-x-6">
        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Return Policy</a>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm mt-4">
        © 2024 Stock Dads. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;