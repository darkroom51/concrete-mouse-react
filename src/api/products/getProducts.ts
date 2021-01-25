import { api } from '../api';
import { GetProductsParams, GetProductsResponse } from './getProducts.types';
import { API_ENDPOINT_PRODUCT } from 'constants/api';


export const getProducts = async (params?: GetProductsParams) => {
  return api.get<GetProductsResponse>(API_ENDPOINT_PRODUCT, {
    params: {
      ...params,
    },
  });
};
