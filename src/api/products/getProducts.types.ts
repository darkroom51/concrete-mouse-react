export interface GetProductsParams {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean;
  active?: boolean;
}

export interface GetProductsResponse {
  items: Product[];
}
  
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  promo: boolean;
  active: boolean;
}