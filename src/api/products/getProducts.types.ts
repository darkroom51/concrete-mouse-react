export interface GetProductsParams {
  search?: string;
  limit?: number;
  page?: number;
  promo?: boolean | undefined
  active?: boolean | undefined
}

export interface GetProductsResponse {
  items: Product[];
  meta: Meta;
  links: Links;
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

export interface Meta {
  currentPage: string
  itemCount: number
  itemsPerPage: string
  totalItems: number
  totalPages: number
}

export interface Links {
  first: string
  last: string
  next: string
  previous: string
}
