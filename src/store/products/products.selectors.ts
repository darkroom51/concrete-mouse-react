import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

const productsSelector = (state: RootState) => state.products;

export const selectProducts = createSelector(productsSelector, ({ list }) => list);
export const selectIsLoading = createSelector(productsSelector, ({ isLoading }) => isLoading);
export const selectReqParams = createSelector(productsSelector, ({ reqParams }) => reqParams);
export const selectPageCount = createSelector(productsSelector, ({ pageCount }) => pageCount);
export const selectPageCurrent = createSelector(productsSelector, ({ pageCurrent }) => pageCurrent);
export const selectPagePrev = createSelector(productsSelector, ({ pagePrev }) => pagePrev);
export const selectPageNex = createSelector(productsSelector, ({ pagePrev }) => pagePrev);
export const selectProduct = createSelector(productsSelector, ({ product }) => product);
export const selectModalOpen = createSelector(productsSelector, ({ modalOpen }) => modalOpen);