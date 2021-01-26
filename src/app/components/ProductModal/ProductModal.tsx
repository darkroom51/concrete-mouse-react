import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Backdrop, Fade, Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { Product } from 'api/products/getProducts.types';
import { selectModalOpen, selectProduct } from 'store/products/products.selectors';
import { RootState } from 'store/rootReducer';
import { setModalOpen } from 'store/products/products.slice';
import { useStyles } from './styles';

const ProductModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector<RootState, Product | null>(selectProduct);
  const modalOpen = useSelector<RootState, boolean>(selectModalOpen);

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  if (!product) {
    return null;
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalOpen}>
        <Box className={classes.paper}>
          <img 
            className={classes.media} 
            src={product.image} 
            alt={product.name} 
          />
          <Box className={classes.content}>
            <h2 className={classes.textPrimary}>
              {product.name}
            </h2>
            <p className={classes.textSecondary}>
              {product.description}
            </p>
          </Box>
          <IconButton 
            className={classes.close} 
            onClick={handleClose} 
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ProductModal;
