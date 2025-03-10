import React, { useEffect, useState } from "react";

// Individual Step type
type Step = {
  id: number;
  title: string;
  description: string;
  step: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Plan",
    description: "Choose a plan from above and checkout.",
    step: "STEP 01",
  },
  {
    id: 2,
    title: "Whop",
    description: "If you don’t already have one, create a Whop account when prompted, using DISCORD as the means of signing in.",
    step: "STEP 02",
  },
  {
    id: 3,
    title: "Access",
    description:
      "You will be redirected to your Whop Hub, where you will be able to 'Claim Access' to your new Discord role.",
    step: "STEP 03",
  },
  {
    id: 4,
    title: "Dm",
    description:
      "Lookout for a DM on Discord from our customer experience lead.",
    step: "STEP 04",
  },
];

const OnboardingSteps: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  // Intersection Observer for scroll effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => Math.max(prev, Number(entry.target.id)));
          } else {
            setVisibleSteps((prev) => Math.min(prev, Number(entry.target.id) - 1));
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = document.querySelectorAll(".step-card");
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12">
      {/* Left-aligned Heading */}
      <div className="text-left w-full md:w-[50%] mb-8">
        <p className="text-[#0AAE55] uppercase text-sm tracking-wide">
          Onboarding Process
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          4 Simple Steps
        </h2>
      </div>
      
      {/* Cards Section */}
      <div className="relative mt-12">
        {/* Progressive Line */}
        <div
          className="absolute left-0 right-0 top-[50%] h-1 bg-gray-700"
          style={{
            background: `linear-gradient(to right, #0AAE55 ${
              (visibleSteps / steps.length) * 100
            }%, #323232 ${(visibleSteps / steps.length) * 100}%)`,
          }}
        ></div>

        <div className="relative z-10 flex flex-wrap justify-center gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              id={`${step.id}`}
              className={`step-card bg-[#0A0A0A] text-white rounded-lg p-6 shadow-md w-full sm:w-[48%] md:w-[22%] transition-all duration-700 ${
                visibleSteps >= step.id
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } border border-[#0AAE55]`}
            >
              <span className="inline-block bg-[#0AAE55] text-black px-3 py-1 rounded-full text-xs font-semibold">
                {step.step}
              </span>
              <h3 className="font-bold text-lg mt-4">{step.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 text-center">
        <button className="bg-[#0AAE55] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#088E45] transition-all">
          Join Now
        </button>

        <p className="mt-4 text-sm text-gray-400">
          ⭐ 4.83/5 on <u>Whop</u>
        </p>
      </div>
    </div>
  );
};

export default OnboardingSteps;