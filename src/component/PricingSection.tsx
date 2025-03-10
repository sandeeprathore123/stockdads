import React, { useState } from "react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const pricingPlans = [
    {
      id: "monthly",
      price: "$49.99",
      duration: "/ month",
      name: "Cadet",
      features: [
        "✅ Access to all TRW Campuses",
        "✅ Daily live broadcasts",
        "✅ Daily course updates",
        "✅ Beginner-friendly mentorship",
        "✅ Priority email support",
      ],
    },
    {
      id: "3months",
      price: "$149",
      duration: "/ 3 months",
      name: "Challenger",
      features: [
        "✅ All benefits of Cadet",
        "✅ Daily coin bonus",
        "✅ Power level boost",
        "✅ Exclusive trade strategies",
        "✅ Weekly Q&A sessions",
      ],
      badge: "Most Popular",
    },
    {
      id: "yearly",
      price: "$497",
      duration: "/ year",
      name: "Hero",
      features: [
        "✅ All benefits of Challenger",
        "✅ Max daily coin bonus",
        "✅ Big power level boost",
        "✅ Private discord consultation",
        "✅ Early access to new features",
      ],
      badge: "Save $103",
    },
  ];

  const handlePlanSelection = (planId: React.SetStateAction<string>) => {
    setSelectedPlan(planId);
    console.log(`Selected Plan: ${planId}`);
  };

  return (
    <div className="bg-black text-white py-20 px-6">
      {/* 🟢 Increased Space Between Heading & Cards */}
      <h2 className="text-center text-5xl font-bold text-green-500 mb-28">
        Pricing 
      </h2>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`
              relative /* Prevents overlapping */
              w-full max-w-md md:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px]
              h-[580px] lg:h-[620px] xl:h-[650px] 
              p-10 rounded-2xl transition-all shadow-lg border border-green-500/50 bg-[#0f0f0f]
              transform scale-105 hover:scale-110 duration-300 ease-in-out hover:shadow-2xl hover:shadow-green-500/30
              ${selectedPlan === plan.id ? "border-green-500 shadow-green-500/50" : ""}
              ${index === 1 ? "md:scale-110 lg:scale-115 xl:scale-[1.2]" : ""}
            `}
          >
            {/* Badge for Popular or Discount */}
            {plan.badge && (
              <span className={`text-sm font-bold px-4 py-2 rounded-full ${plan.id === "yearly" ? "bg-green-500 text-black" : "bg-gray-700 text-white"}`}>
                {plan.badge}
              </span>
            )}

            <h2 className="text-3xl font-bold mt-4">
              {plan.price}{" "}
              <span className="text-lg font-normal">{plan.duration}</span>
            </h2>
            <h3 className="text-2xl font-semibold my-5">{plan.name}</h3>
            
            {/* Features Section */}
            <ul className="text-lg space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => handlePlanSelection(plan.id)}
              className={`w-full mt-6 py-3 rounded-full font-semibold text-lg transition 
                bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white
              `}
            >
              {selectedPlan === plan.id ? "SELECTED" : "CHOOSE PLAN"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;