import React,{useState} from 'react'
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,IconButton,Typography} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Remove , Add} from '@material-ui/icons';
import useStyles from './styles'

const ProductList = ({ product ,addToCart }) => {
    const classes = useStyles();
    const [count,setCount] = useState(1);

    const handleIncreaseQuantity = () => setCount((PrevCount) => PrevCount + 1)
    const handleDecreaseQuantity = () => (count != 1) ? setCount((PrevCount) => PrevCount - 1 ) : ''
    
    const handleAddToCart = () => {
      addToCart(product.id,count) 
      setCount(1)
    }
    return (
      <Card className={classes.root}>
        <CardActionArea className={classes.carAction}>
          <CardMedia
            className={classes.media}
            image={product.imageSource}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography> 
            <Typography gutterBottom variant="subtitle2">
              Rs. {product.price}
            </Typography> 
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleDecreaseQuantity}>
              <Remove />
          </Button>
          {count}
          <Button size="small" color="primary" onClick={handleIncreaseQuantity}>
              <Add />
          </Button>
          <Button size="small" color="primary" onClick={handleAddToCart}>
              <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    )
}

export default ProductList;