import React,{ useState } from 'react'
import { AppBar , Toolbar, Typography, IconButton ,MenuItem,Menu,Badge} from '@material-ui/core'
import { AccountCircle , ShoppingCart ,ExitToApp} from '@material-ui/icons'
import useStyles from './styles';
import {Link} from 'react-router-dom';

const NavBar = ({cartItem}) => {
    const classes = useStyles();

    return (
        <div>
        <AppBar position="static" className={classes.app}>
            <Toolbar>
            <Typography variant="h6" className={classes.title} component={Link} to='/'>
                Wazza
            </Typography>
                <div>
                    {/* <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton> */}
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        component={Link}
                        to='/cart'
                    >
                    <Badge badgeContent={cartItem} color="primary">
                        <ShoppingCart/>
                    </Badge>
                    </IconButton>
                    {/* <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ExitToApp/>
                    </IconButton> */}

                </div>
            
            </Toolbar>
        </AppBar>  
        </div>
    )
}

export default NavBar