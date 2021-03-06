import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AppThunk } from 'store/store';
import { getProducts } from 'api/products/getProducts';
import { GetProductsParams, Product, GetProductsResponse } from 'api/products/getProducts.types';
import { PRODUCTS_LIMIT_PER_PAGE } from 'constants/products';

interface ProductsState {
  list: Product[]
  isLoading: boolean
  error: string | null
  reqParams: GetProductsParams
  pageCount: number
  pageCurrent: number
  pageNext: string
  pagePrev: string
  product: Product | null
  modalOpen: boolean
};

const ProductsInitialState: ProductsState = {
  list: [],
  isLoading: false,
  error: null,
  reqParams: {
    search: '',
    limit: PRODUCTS_LIMIT_PER_PAGE,
    page: 1,
    promo: undefined,
    active: undefined
  },
  pageCount: 0,
  pageCurrent: 0,
  pageNext: '',
  pagePrev: '',
  product: null,
  modalOpen: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: ProductsInitialState,
  reducers: {
    getProductsStart: startLoading,
    getProductsSuccess(state, { payload }: PayloadAction<GetProductsResponse>) {
      const { items, meta, links } = payload;
      state.list = items;
      state.isLoading = false;
      state.error = null;
      state.pageCount = meta.totalPages;
      state.pageCurrent = parseInt(meta.currentPage);
      state.pageNext = links.next;
      state.pagePrev = links.previous;
    },
    getProductsFailure: loadingFailed,
    setSearchParam(state, action: PayloadAction<string>) {
      state.reqParams = {
        ...state.reqParams,
        search: action.payload,
      };
    },
    setActiveParam(state, action: PayloadAction<boolean | undefined>) {
      state.reqParams = {
        ...state.reqParams,
        active: action.payload,
      };
    },
    setPromoParam(state, action: PayloadAction<boolean | undefined>) {
      state.reqParams = {
        ...state.reqParams,
        promo: action.payload,
      };
    },
    setPageParam(state, action: PayloadAction<number>) {
      state.reqParams = {
        ...state.reqParams,
        page: action.payload,
      };
    },
    setProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload;
    },
    setModalOpen(state, action: PayloadAction<boolean>) {
      state.modalOpen = action.payload;
    },
  }
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  setSearchParam,
  setActiveParam,
  setPromoParam,
  setPageParam,
  setProduct,
  setModalOpen
} = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = (
  params: GetProductsParams
): AppThunk => async dispatch => {
  try {
    dispatch(getProductsStart());
    const { data }: AxiosResponse<GetProductsResponse>  = await getProducts(params);
    dispatch(getProductsSuccess(data));
  } catch (err) {
    dispatch(getProductsFailure(err.toString()));
  }
}

function startLoading(state: ProductsState) {
  state.isLoading = true
}
  
function loadingFailed(state: ProductsState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}
