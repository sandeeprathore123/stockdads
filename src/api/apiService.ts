import axios from 'axios'

//create order api call 
export const order = async (amount: number) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}api/payment/order`, { amount });
        // console.log("API Response:", response.data);

        return response.data.data;
    } catch (error) {
        console.error("Error creating order:", error.response?.data || error.message);
        throw error;
    }
};

// export const verifyPayment = async (razorpay_order_id: string, razorpay_payment_id: string ,razorpay_signature: string ) => {
//     try {
//         const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}api/payment/verify`, {razorpay_order_id, razorpay_payment_id, razorpay_signature});
//         console.log("Payment Verification Response:", response.data);
//         alert("Payment verified successfully!");
//     } catch (error) {
//         console.error("Payment Verification Error:", error.response?.data || error.message);
//         alert("Payment verification failed.");
//     }
// };

export const verifyPayment = async (razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}api/payment/verify`, { 
            razorpay_order_id, razorpay_payment_id, razorpay_signature 
        });
        debugger;

        console.log("Payment Verification Response:", response.data);

        // ✅ Check if API response indicates success
        if (response.data.success) {
            console.log("Payment verified successfully!");
        } else {
            throw new Error("Payment verification failed: " + (response.data.message || "Unknown error"));
        }

    } catch (error) {
        debugger;
        console.error("Payment Verification Error:", error.response?.data || error.message);
        console.log("Payment verification failed.");
    }
};
