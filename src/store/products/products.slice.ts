import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { getProducts } from 'api/products/getProducts';
import { GetProductsParams, Product, GetProductsResponse } from 'api/products/getProducts.types';
import { AppThunk } from 'store/store';

interface ProductsState {
  list: Product[]
  isLoading: boolean
  error: string | null
  reqParams: GetProductsParams
};

const ProductsInitialState: ProductsState = {
  list: [],
  isLoading: false,
  error: null,
  reqParams: {
    search: '',
    limit: 3,
    page: 1,
    promo: undefined,
    active: undefined
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState: ProductsInitialState,
  reducers: {
    getProductsStart: startLoading,
    getProductsSuccess(state, { payload }: PayloadAction<GetProductsResponse>) {
      const { items } = payload;
      state.list = items;
      state.isLoading = false;
      state.error = null;
    },
    getProductsFailure: loadingFailed,
    setSearchParam(state, action: PayloadAction<string>) {
      state.reqParams = {
        ...state.reqParams,
        search: action.payload,
      };
    },
    setActiveParam(state, action: PayloadAction<boolean>) {
      state.reqParams = {
        ...state.reqParams,
        active: action.payload,
      };
    },
    setPromoParam(state, action: PayloadAction<boolean>) {
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
  }
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  setSearchParam,
  setActiveParam,
  setPromoParam,
  setPageParam
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
