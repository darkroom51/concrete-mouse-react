import React from 'react';
import { Modal, Backdrop, Fade, Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

const product = {
  name:'hello', 
  description: 'hello world', 
  image:'https://picsum.photos/640/480?random=8451'
};


const ProductModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        open test modal
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <img 
              className={classes.media} 
              src={product.image} 
              alt={product.name} 
            />
            <Box className={classes.content}>
              <p className={classes.textPrimary}>
                {product.name}
              </p>
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
    </div>
  );
}

export default ProductModal;
