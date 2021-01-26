import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { Grid } from '@material-ui/core';

import { RootState } from 'store/rootReducer';
import { GetProductsParams } from 'api/products/getProducts.types';
import { selectReqParams } from 'store/products/products.selectors';
import { fetchProducts } from 'store/products/products.slice';
import Header from 'app/components/Header/Header';
import ProductsList from 'app/components/ProductsList/ProductsList';
import { useStyles } from './styles';


export const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {search, limit, page, promo, active} = useSelector<RootState, GetProductsParams>(selectReqParams);
  
  useEffect(() => {
    debouncedFetchProducts({search, limit, page, promo, active});
  }, [search, limit, page, promo, active]);

  const debouncedFetchProducts = useCallback(debounce((reqParams: GetProductsParams) => {
    dispatch(fetchProducts(reqParams));
  }, 200), []);

  return (
    <Grid className={classes.root}>
      <Header />
      <ProductsList />
    </Grid>
  );
};
