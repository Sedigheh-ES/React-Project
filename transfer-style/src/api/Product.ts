import { ApiResponseType } from "@/types";
import apiClient from "./config/ApiClient";
import { ProductType } from "@/types/api/Product";

interface Props{
    populate?: Array<"categories" | "thumbnail" | "gallery">,
    filters?: {}
}

interface Filters{
    is_popular?: { $eq: boolean }
}
export function getAllProductApiCall({ populate, filters }: Props):Promise<ApiResponseType<ProductType>> {

    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters
        }
    })

    
  
}
