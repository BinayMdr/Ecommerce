import React from 'react'
import { Card,CardMedia,CardActionArea,Typography ,Button,CardActions,CardContent} from '@material-ui/core'
import { Remove,Add} from '@material-ui/icons'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'
const CartList = ({item , updateItem ,deleteItem}) => {
    const classes = useStyles();

    const handleUpdateItem = (quantity,method) => updateItem(item.id,quantity ,method)
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.carAction}>
            <CardMedia
                className={classes.media}
                image={item.imageSource}
                title={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                    Rs. {item.price} ( {item.price * item.quantity})
                </Typography> 
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary" onClick={() => handleUpdateItem(item.quantity - 1,'decrement')}>
                <Remove />
            </Button>
                {item.quantity}
            <Button size="small" color="primary" onClick={() => handleUpdateItem(item.quantity + 1,'increment')}>
                <Add />
            </Button>
            <Button size="small" color="primary" onClick={() => deleteItem(item.id)}>
                <DeleteIcon/>
            </Button>
            </CardActions>
        </Card>
    )
}

export default CartList
