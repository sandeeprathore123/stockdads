import axios from "axios";


export const crypto_payment = async (email: string, amount : number , currency: string) =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}cpayment/request`, {amount, currency, email})
        return response
        
    } catch (error) {
        
    }

}

export const is_payment_done = async (email: string) =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}cpayment/status`, {email})
        return response.data.data.payment_status === 'charge:confirmed'
    } catch (error) {

    }

}

