import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiPagination from '@material-ui/lab/Pagination';
import { Box } from '@material-ui/core';

import { RootState } from 'store/rootReducer';
import { selectPageCount, selectPageCurrent } from 'store/products/products.selectors';
import { setPageParam } from 'store/products/products.slice';
import { useStyles } from './styles';


const Pagination = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageCount: number = useSelector<RootState, number>(selectPageCount)!;
  const pageCurrent: number = useSelector<RootState, number>(selectPageCurrent);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageParam(value));
  }

  return (
    <Box className={classes.root}>
      <MuiPagination
        page={pageCurrent}
        count={pageCount}
        onChange={handlePageChange}
        color="primary"
        variant="text"
        showFirstButton
        showLastButton
        hideNextButton
        hidePrevButton
        size="small"
        shape="rounded"
      />
    </Box>
  );
}

export default Pagination;
