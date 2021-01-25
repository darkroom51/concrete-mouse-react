import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { AppRoute } from 'routing/AppRoute.enum';
import { RootState } from 'store/rootReducer';
import { GetProductsParams, Product } from 'api/products/getProducts.types';
import { selectProducts, selectIsLoading, selectReqParams } from 'store/products/products.selectors';
import { fetchProducts, setActiveParam, setPromoParam, setSearchParam } from 'store/products/products.slice';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);
  const {search, limit, page, promo, active} = useSelector(selectReqParams);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    debouncedFetchProducts({search, limit, page, promo, active});
  }, [search, limit, page, promo, active]);

  const debouncedFetchProducts = useCallback(debounce((reqParams: GetProductsParams) => {
    dispatch(fetchProducts(reqParams));
  }, 200), []);

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
    dispatch(setSearchParam(target.value));
  };

  const handleActiveFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveParam(target.checked));
  };

  const handlePromoFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPromoParam(target.checked));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    debouncedFetchProducts({search, limit, page, promo, active});
  };

  return (
    <>
      <span>Products page</span>
      <Link to={AppRoute.login}> Login </Link>

      <form onSubmit={handleFormSubmit}>
        <input name="search" value={searchInput} onChange={handleSearchChange} />
        <button onClick={handleFormSubmit}>go</button>
        a:<input onChange={handleActiveFilterChange} type="checkbox" name="active" />
        p:<input onChange={handlePromoFilterChange} type="checkbox" name="promo" />
      </form>

      {isLoading ? <div>Loading...</div> : (
        <div>
          {products.map(product=><div key={product.id}>{product.name}</div>)}
        </div>
      )}
    </>
  );
};
