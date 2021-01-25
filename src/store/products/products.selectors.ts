import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

const productsSelector = (state: RootState) => state.products;

export const selectProducts = createSelector(productsSelector, ({ list }) => list);
export const selectIsLoading = createSelector(productsSelector, ({ isLoading }) => isLoading);
export const selectReqParams = createSelector(productsSelector, ({ reqParams }) => reqParams);
