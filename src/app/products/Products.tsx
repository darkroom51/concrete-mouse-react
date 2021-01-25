import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { AppRoute } from 'routing/AppRoute.enum';
import { RootState } from 'store/rootReducer';
import { GetProductsParams, Product } from 'api/products/getProducts.types';
import { selectProducts, selectIsLoading } from 'store/products/products.selectors';
import { fetchProducts, setSearchParam } from 'store/products/products.slice';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector<RootState, Product[]>(selectProducts);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filtersInputs, setFiltersInputs] = useState<any>({active: false, promo: false});

  useEffect(() => {
    debouncedFetchProducts({search: searchInput, active: filtersInputs.active, promo: filtersInputs.promo});
  }, [searchInput, filtersInputs]);

  const debouncedFetchProducts = useCallback(debounce((reqParams: GetProductsParams) => {
    dispatch(fetchProducts(reqParams));
  }, 400), []);

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
    dispatch(setSearchParam(searchInput));
  };

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFiltersInputs({...filtersInputs, [target.name]: target.checked ?? undefined });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    dispatch(setSearchParam(searchInput));
    dispatch(fetchProducts({search: searchInput, active: filtersInputs.active, promo: filtersInputs.promo}));
  };

  return (
    <>
      <span>Products page</span>
      <Link to={AppRoute.login}> Login </Link>

      <form onSubmit={handleFormSubmit}>
        <input name="search" value={searchInput} onChange={handleSearchChange} />
        <button onClick={handleFormSubmit}>go</button>
        a:<input onChange={handleFilterChange} type="checkbox" name="active" />
        p:<input onChange={handleFilterChange} type="checkbox" name="promo" />
      </form>

      {isLoading ? <div>Loading...</div> : (
        <div>
          {products.map(product=><div key={product.id}>{product.name}</div>)}
        </div>
      )}
    </>
  );
};
