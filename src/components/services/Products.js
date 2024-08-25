import axios from "axios"
import { GetProductsAPI } from "./API"

export const getProducts= async()=>{
    const rsult = await axios.get(GetProductsAPI)
    return rsult
}