import { ApiResponseSingleType } from "@/types";
import apiClient from "./config/ApiClient";
import { Basketype } from "@/types/api/Basket";


export async function basketApiCall(): Promise<ApiResponseSingleType<Basketype>> {
  return await apiClient.get('/my-basket')
};