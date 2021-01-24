import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { getProducts } from 'api/products/getProducts';
import { GetProductsParams, Product, GetProductsResponse } from 'api/products/getProducts.types';
import { AppThunk } from 'store/store';

interface ProductsState {
  list: Product[]
  isLoading: boolean
  error: string | null
};

const ProductsInitialState: ProductsState = {
  list: [],
  isLoading: false,
  error: null
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
    getProductsFailure: loadingFailed
  }
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure
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
