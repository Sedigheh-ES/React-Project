
import apiClient from "@/api/config/ApiClient";
import { ApiResponseType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { useQuery } from "@tanstack/react-query";

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

export function getProductApiCall({ populate, filters, sort = [], pagination = {} }: Props): Promise<ApiResponseType<ProductType>> {

    return apiClient.get('/products', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination,
            widthCount: false
           
        }
    })
}

export const getProductsKey = (key?: string) => [getProductApiCall.name, key];
export function useProducts({key,,data}) {
    const query = useQuery<ApiResponseType<ProductType>>({
        queryKey: getProductsKey(key);
    queryFn: () => getProductApiCall({ populate: ["categories", "thumbnail"], filters: { is_popular: { $eq: true } } })
  });

}