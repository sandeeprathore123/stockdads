import axios from "axios";


export const crypto_payment = async (amount : number , currency: String) =>{
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}cpayment/request`, {amount, currency})
        return response
        
    } catch (error) {
        
    }

}