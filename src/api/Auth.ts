import axios from "axios";

// Enroll user to graphy 

export const registration = async (email:string , password:string ) =>{
  const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}enrollUser/register`, {email, password})
  console.log("====>response from register =======>",response)
}

export const enroll_course = async (email:string, name:string, password:string, mobile:string, productId:string, plan:string) => {
  const response = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}enrollUser/assign`,{email,name,password,mobile, productId, plan})
  console.log(response)

}
