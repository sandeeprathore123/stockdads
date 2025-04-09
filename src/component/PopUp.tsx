import React, { useState } from "react";
import { X, CreditCard, Bitcoin } from "lucide-react";

// ------------------
// Type Definitions
// ------------------
// type Plan = {
//     id: number;
//     packageId: string;
//     name: string;
//     price: string;
//     duration: string;
//     discount?: string;
//     features: { id: number; title: string }[];
// };

// ------------------
// Plan Data
// ------------------
// const plans: { [key: string]: Plan } = {
//     Monthly: {
//         id: 1,
//         packageId: '67d0f24cf36fe343f46e38b0',
//         name: "Dad Pro",
//         price: "$99.99",
//         duration: "monthly",
//         features: [
//             { id: 1, title: "Live Trading Sessions" },
//             { id: 2, title: "Real-Time Entries & Exits" },
//             { id: 3, title: "24/7 Coaching & Support" },
//         ],
//     },
//     quaterly: {
//         id: 2,
//         packageId: '67d0f38526d3e260f4954d91',
//         name: "Dad Advance",
//         price: "$249.99",
//         duration: "quaterly",
//         discount: "15% Off",
//         features: [
//             { id: 1, title: "Live Trading Sessions" },
//             { id: 2, title: "Real-Time Entries & Exits" },
//             { id: 3, title: "24/7 Coaching & Support" },
//             { id: 4, title: "Market Updates & Analysis" },
//         ],
//     },
//     Yearly: {
//         id: 3,
//         packageId: '67d0f39f3fe6546230097f9e',
//         name: "Dad Bundle",
//         price: "$1,500.00",
//         duration: "yearly",
//         discount: "42% Off",
//         features: [
//             { id: 1, title: "Live Trading Sessions" },
//             { id: 2, title: "Real-Time Entries & Exits" },
//             { id: 3, title: "24/7 Coaching & Support" },
//             { id: 4, title: "Market Updates & Analysis" },
//             { id: 5, title: "VIP Discord Access" },
//             { id: 6, title: "Educational Resources" },
//         ],
//     },
// };

// ------------------
// Email Modal (Collects full user details)
// ------------------
interface EmailModalProps {
    onClose: (user: { name: string; email: string; password: string; mobile: string }) => void;

}


export const EmailModal: React.FC<EmailModalProps> = ({ onClose }) => {
    const [user, setUser] = useState({ name: "", email: "", password: "", mobile: "" });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <div className="relative bg-[#181818] p-10 rounded-2xl w-[450px] md:w-[500px] shadow-[0_0_10px_#22C55E]">

                {/* Close Button */}
                <button
                    onClick={() => onClose({ name: "", email: "", password: "", mobile: "" })}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Enter Your Details</h2>
                <div className="space-y-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-transparent text-white focus:border-[#22C55E] outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-transparent text-white focus:border-[#22C55E] outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-transparent text-white focus:border-[#22C55E] outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        value={user.mobile}
                        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                        className="w-full p-3 border border-gray-400 rounded-lg bg-transparent text-white focus:border-[#22C55E] outline-none"
                    />
                </div>
                <button
                    onClick={() => onClose(user)}
                    className="w-full bg-transparent text-[#22C55E] border-2 border-[#22C55E] p-3 mt-6 rounded-lg font-semibold transition duration-300 hover:bg-[#22C55E] hover:text-white"
                    disabled={!user.name || !user.email || !user.password || !user.mobile}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};



// ------------------
// Payment Modal
// ------------------
interface PaymentModalProps {
    onPay: () => void;
    onClose: () => void;
    onPayCrypto: () => void;
}

export const PopUp: React.FC<PaymentModalProps> = ({ onPay, onClose, onPayCrypto }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#181818] p-10 rounded-2xl w-[450px] md:w-[500px] text-white border border-[#22C55E] relative shadow-lg">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-white">
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-center">Dummy Payment Page</h2>
                <p className="mb-6 text-center text-gray-300">Select a payment method:</p>

                {/* Pay with Card/UPI */}
                <button
                    onClick={onPay}
                    className="w-full flex items-center justify-center gap-3 border border-[#23C45E] text-[#23C45E] p-4 rounded-lg text-lg font-medium transition-all hover:bg-[#23C45E] hover:text-white"
                >
                    <CreditCard size={22} />
                    Pay with Card / UPI
                </button>

                {/* Pay with Crypto */}
                <button
                    onClick={onPayCrypto}
                    className="w-full flex items-center justify-center gap-3 border border-[#23C45E] text-[#23C45E] p-4 rounded-lg text-lg font-medium mt-5 transition-all hover:bg-[#23C45E] hover:text-white"
                >
                    <Bitcoin size={22} />
                    Pay with Crypto
                </button>
            </div>
        </div>
    );
};

