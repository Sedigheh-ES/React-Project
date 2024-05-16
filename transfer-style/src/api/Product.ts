import apiClient from "./config/ApiClient";

interface Props{
    populate?: Array<"categories" | "thumbnail" | "gallery">,
    filters?: {
        is_popular?: boolean;
        is_popular_fruit?:boolean
    }
}

interface Filters{
    is_popular?: { $eq: boolean }
}
export function getAllProductApiCall({ populate, filters }: Props) {
    const customFilter:Filters = {};

    if (filters?.is_popular) {
        customFilter.is_popular = { $eq:filters.is_popular };
    }
    if (filters?.is_popular_fruit) {
        customFilter.is_popular = { $eq:filters.is_popular_fruit };
    }
    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters
        }
    })

    
  
}
