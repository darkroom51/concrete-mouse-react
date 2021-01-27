import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, InputAdornment, IconButton, FormControlLabel, Checkbox  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { RootState } from 'store/rootReducer';
import { GetProductsParams } from 'api/products/getProducts.types';
import { selectIsLoading, selectReqParams } from 'store/products/products.selectors';
import { fetchProducts, setActiveParam, setPromoParam, setSearchParam } from 'store/products/products.slice';
import { useStyles } from './styles';


const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {search, limit, page, promo, active} = useSelector<RootState, GetProductsParams>(selectReqParams);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
    dispatch(setSearchParam(target.value));
  };

  const handleActiveFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveParam(target.checked ? true : undefined));
  };

  const handlePromoFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPromoParam(target.checked  ? true : undefined));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    if (searchInput && !isLoading) {
      dispatch(fetchProducts({search, limit, page, promo, active}));
    }
  };
 
  return (
    <Box className={classes.root}>
      <form onSubmit={handleFormSubmit} className={classes.form}>
        <TextField
          className={classes.searchInput}
          placeholder="Search"
          variant="outlined" 
          name="search" 
          value={searchInput}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="search products"
                  onClick={handleFormSubmit}
                  onMouseDown={handleFormSubmit}
                >
                  <SearchIcon /> 
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControlLabel
          className={classes.filterCheckbox}
          control={
            <Checkbox
              checked={active}
              onChange={handleActiveFilterChange}
              name="active"
              color="primary"
            />
          }
          label="Active"
        />      
        <FormControlLabel
          className={classes.filterCheckbox}
          control={
            <Checkbox
              checked={promo}
              onChange={handlePromoFilterChange}
              name="active"
              color="primary"
            />
          }
          label="Promo"
        /> 
      </form>
    </Box>
  );
}

export default Search;
