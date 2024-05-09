import apiClient from '@/api/config/ApiClient';
import { ApiResponseType } from '@/types';
import {MenuType} from '@/types/'

export async function getMenuApiCall():Promise<ApiResponseType<MenuType>> {
  return await apiClient.get('/menus', {
        params: {
            populate: '*'
        }
    });   
}