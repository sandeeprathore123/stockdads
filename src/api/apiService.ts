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



export const verifyPayment = async (razorpay_order_id: string, razorpay_payment_id: string, razorpay_signature: string) => {
    var return_value;
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}api/payment/success`, { 
            razorpay_order_id, razorpay_payment_id, razorpay_signature
        });
        return_value = response.status
    } catch (error) {
        console.error("Payment Verification Error:", error.response?.data || error.message);
    }
    return return_value
};
