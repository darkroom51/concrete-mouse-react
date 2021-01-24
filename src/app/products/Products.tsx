import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppRoute } from 'routing/AppRoute.enum';
import { RootState } from 'store/rootReducer';
import { Product } from 'api/products/getProducts.types';
import { selectProducts, selectIsLoading } from 'store/products/products.selectors';
import { fetchProducts } from 'store/products/products.slice';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);


  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>

      {isLoading ? <div>Loading...</div> : (
        <div>
          {products.map(product=><div key={product.id}>{product.name}</div>)}
        </div>
      )}
    </>
  );
};
