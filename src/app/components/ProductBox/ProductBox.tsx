import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Box } from '@material-ui/core';

import { Product } from 'api/products/getProducts.types';
import { setModalOpen, setProduct } from 'store/products/products.slice';
import { useStyles } from './styles';

interface ProductBoxProps {
  product: Product;
}


const ProductBox = ({ product }: ProductBoxProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { active, description, image, name, promo, rating } = product;

  const handleProductBoxClick = () => {
    dispatch(setProduct(product));
    dispatch(setModalOpen(true));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea 
        className={classes.actionArea}
        disabled={!active}
        onClick={handleProductBoxClick}
      >
        {promo && active && <Box className={classes.promoBadge}>Promo</Box>}
        <CardMedia
          className={clsx(classes.media, {[classes.mediaDisabled]: !active})}
          image={image}
          title={name}
        />
        <CardContent  className={classes.content}>
          <h2 className={classes.textPrimary}>
            {name}
          </h2>
          <p className={classes.textSecondary}>
            {description}
          </p>
        </CardContent>
      </CardActionArea>
      <Rating 
        className={classes.rating} 
        name="rating" 
        value={rating} 
        readOnly 
        size="small"
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      <CardActions  className={classes.actions}>
        <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          fullWidth
          disabled={!active}
          onClick={handleProductBoxClick}
        >
          {active ? 'Show details' : 'Unavailable'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductBox;
