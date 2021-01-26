import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@material-ui/core';

import { RootState } from 'store/rootReducer';
import { Product } from 'api/products/getProducts.types';
import { selectProducts, selectIsLoading, selectPageCurrent } from 'store/products/products.selectors';
import Loading from '../Loading/Loading';
import ProductBox from '../ProductBox/ProductBox';
import NoResultFound from '../NoResultFound/NoResultFound';
import Pagination from '../Pagination/Pagination';
import ProductModal from '../ProductModal/ProductModal';
import { useStyles } from './styles';


const ProductsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);
  const page: number = useSelector<RootState, number>(selectPageCurrent);

  const renderProductsList = useCallback(() => {
    if (isLoading) {
      return <Loading />
    }

    if (!products.length && page) {
      return <NoResultFound />
    }

    return products.map(product => (
      <ProductBox product={product} key={product.id} />
    ));
  }, [isLoading, products]);

  return (
      <Grid container component="main" className={classes.root}>
        <ProductModal />
        <Grid container className={classes.container}>
          <Grid container item xs={12} spacing={1} className={classes.grid}>
            {renderProductsList()}
          </Grid>
          {(!isLoading && products.length) ? <Pagination /> : null}
        </Grid>
    </Grid>
  );
}

export default ProductsList;
