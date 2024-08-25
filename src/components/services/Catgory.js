import axios from "axios"
import { GetCategoryAPI } from "./API"

export const getCategory= async ()=>{
    const rsult = await axios.get(GetCategoryAPI)
    return rsult
}