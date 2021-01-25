import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiPagination from '@material-ui/lab/Pagination';
import { selectPageCount, selectPageCurrent } from 'store/products/products.selectors';
import { setPageParam } from 'store/products/products.slice';

const Pagination = () => {
  const dispatch = useDispatch();
  const count: number = useSelector(selectPageCount)!;
  const page: number = useSelector(selectPageCurrent);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageParam(value));
  }

  return (
    <MuiPagination
      page={page}
      count={count}
      onChange={handlePageChange}
      color="primary"
      variant="text"
      showFirstButton
      showLastButton
      hideNextButton
      hidePrevButton
    />
  );
}

export default Pagination;