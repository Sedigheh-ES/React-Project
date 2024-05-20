import { ApiResponseType } from "@/types";
import apiClient from "./config/ApiClient";
import { ProductType } from "@/types/api/Product";

interface Props{
    populate?: Array<"categories" | "thumbnail" | "gallery">,
    filters?: {},
    sort?: Array<string>,
    pagination?: {
        withCount?: boolean;
        page?: number;
        pageSize?: number;
        start?: number;
        limit?: number;
    }
}

interface Filters{
    is_popular?: { $eq: boolean }
}
export function getAllProductApiCall({ populate, filters,sort=[],pagination={} }: Props):Promise<ApiResponseType<ProductType>> {

    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination,
            widthCount:false
           
        }
    })

    
  
}
