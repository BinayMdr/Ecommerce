import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import ProductList from './ProductList/ProductList'


const Product = ({products , addToCart}) => {
    const classes = useStyles();
   

    return (
        <main className={classes.main}>
            <Grid container justify="center" spacing={4}>
                { products.length != 0 &&
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <ProductList product={product} addToCart={addToCart}/>
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Product
