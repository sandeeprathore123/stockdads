import { useEffect, useState } from "react";
import { order, verifyPayment } from '../api/apiService'
import { EmailModal, PopUp } from './popUp'
import { registration, enroll_course } from "../api/Auth";

const PricingSection = () => {
  const [paymentStatus, setPaymentStatus] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; price: number }>({
    id: "3monthly",
    price: 49
  });
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [userDetails, setUserDetails] = useState<{ name: string; email: string; password: string; mobile: string } | null>(null);

  useEffect(() => {
    if (paymentStatus === 200) {
      console.log("yahi aya k verify karega");

      enroll_course(
        userDetails?.name ?? "",
        userDetails?.email ?? "",
        userDetails?.password ?? "",
        userDetails?.password ?? "",
        selectedPlan.id,
        "67e37133dce10d69e30769e9"
      ).then(() => {
        // Redirect the user after enrollment is successful
        window.location.href = "https://sachin4803.graphy.com/s/authenticate";
      }).catch((error) => {
        console.error("Error in enrollment:", error);
      });
    } else if (paymentStatus !== null) {
      console.log("Enroll nahi ho raha");
    }
  }, [paymentStatus]);



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

  const handle_checkout = async (data: any) => {
    const options = {
      key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID,  // Your Razorpay Key
      amount: data.amount,  // Amount in paise
      currency: data.currency,
      name: "Your Company Name",
      description: "Payment for Premium Plan",
      order_id: data.id,
      handler: async function (response: any) {
        try {
          console.log('--->', response)
          // ✅ Awaiting ensures proper error handling

          const return_val = await verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
          setPaymentStatus(return_val ?? null)

        } catch (error) {
          console.error("Error in payment verification:", error);
        }
      },

      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999"
      },
      theme: { color: "#3399cc" }
    };

    setShowPaymentModal(false)

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  }


  const handleUserDetailsSubmit = async (user: { name: string; email: string; password: string; mobile: string }) => {
    setUserDetails(user);
    setShowEmailModal(false);
    try {
      await registration(user.email, user.password)
      setShowPaymentModal(true)
    } catch (error) {
      console.log('error in registration user', error)
    }

  }

  const handlePayment = async () => {
    try {
      const order_data = await order(selectedPlan.price)
      console.log("Order Created:", order_data);
      handle_checkout(order_data)


    } catch (error) {
      console.error("Error creating order:", error);
    }
  }

  const handleClose = () => {
    setShowPaymentModal(false)
    console.log("thiis is payment vala ")
  }


  const handleCrypto = () => {
    console.log("find out way to integrate the crypto")
  }


  const handlePlanSelection = async (planId: string, planPrice: number) => {
    setSelectedPlan({ id: planId, price: planPrice });
    setShowEmailModal(true);
    console.log(`Selected Plan: ${planId}, Price: ${planPrice}`);
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
              ${selectedPlan.id === plan.id ? "border-green-500 shadow-green-500/50" : ""}

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
              onClick={() => handlePlanSelection(plan.id, parseFloat(plan.price.replace("$", "")))}
              className={`w-full mt-6 py-3 rounded-full font-semibold text-lg transition 
                bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white
              `}
            >
              {selectedPlan.id === plan.id ? "SELECTED" : "CHOOSE PLAN"}
            </button>
          </div>
        ))}
      </div>
      {showEmailModal && <EmailModal onClose={handleUserDetailsSubmit} />}
      {showPaymentModal && <PopUp onPay={handlePayment} onClose={handleClose} onPayCrypto={handleCrypto} />}
    </div>
  );
};

export default PricingSection;


