import React from 'react'
import { Grid ,Button} from '@material-ui/core'
import useStyles from './styles'
import CartList from './CartList/CartList'
import {Link} from 'react-router-dom'
const Cart = ({cart,updateItem,deleteItem}) => {

    const classes = useStyles();
    const EmptyCart = () => {
        return (
            <h1 style={{
                textAlign:'center'
            }}
            >No items in cart</h1>
        )
    }
       return (
        <main className={classes.main}>
        <Grid container  spacing={4}>
            { cart.length != 0 &&
                cart.map((cart_item) => (
                    <Grid item key={cart_item.id} xs={12} sm={6} md={4} lg={3}>
                        <CartList item={cart_item} updateItem={updateItem} deleteItem={deleteItem}/>
                    </Grid>
                ))
            }
        </Grid>
            {cart.length != 0 ? 
                <Button variant="contained" color="primary" m='2rem' className={classes.checkout} component={Link} to='/checkout'>Checkout</Button>
                : <EmptyCart />
            }
        </main>
    )
}

export default Cart
