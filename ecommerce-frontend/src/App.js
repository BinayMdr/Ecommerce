import axios from 'axios';
import React,{useState,useEffect} from 'react'
import NavBar from './Components/NavBar/NavBar'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import { BrowserRouter as Router, Link ,Switch ,Route} from 'react-router-dom';
import { Alert } from '@material-ui/lab';

const App = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [cartItem,setCartItem] = useState(0);
    const [success,setSuccess] = useState(null)

    const getProduct = async() => {
        const response = await fetch('http://127.0.0.1:8000/api/get-products')
        const data = await response.json()
        setProducts(data);
    }
    // useEffect(() => {
        
    //     if(token != null){
    //         axios.post('http://127.0.0.1:8000/api/me',{},{
    //              headers:{
    //                 "Authorization" : `bearer ${token}`,
    //              }  
    //             })
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    //     }
     // axios.post('http://127.0.0.1:8000/api/login',{ email : 'binaymdr25@gmail.com', password : 'password'})
        //     .then((response) => {
        //         setToken(response.data.access_token)
        //         console.log(response.data)
        //     })
    // },[token]);

    useEffect(()=>{
        getProduct();
        let cart_item = localStorage.getItem('cart')
        if(cart_item != null) setCart(JSON.parse(localStorage.getItem('cart')))
    },[]);


    useEffect(()=>{
        setCartItem(cart.length)
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart]);
    
    const addToCart = async (productId,quantity) => { 
        if(!cart.length) {
            const response = await fetch(`http://127.0.0.1:8000/api/get-products-details?id=${productId}`)
            const data = await response.json()
            setCart([{'id':productId,'title':data.title,'quantity':quantity,'imageSource':data.imageSource,'price':data.price}])
        }
        else{
            var add_to_cart = 0
            setCart(cart.map((cart_item) => {
                if(cart_item.id == productId)
                {   add_to_cart++
                    return{
                        ...cart_item,quantity: cart_item.quantity + quantity
                    }
                }
                return cart_item
            }))
            if(add_to_cart == 0) {
                const response = await fetch(`http://127.0.0.1:8000/api/get-products-details?id=${productId}`)
                const data = await response.json()
                setCart([...cart,{'id':productId,'title':data.title,'quantity':quantity,'imageSource':data.imageSource,'price':data.price}])
            } 
        }
    }

    const updateItem = (productId,quantity,method) => {
        setCart(cart.map((cart_item) => {
            if(cart_item.id == productId)
            {   
                return{
                    ...cart_item,quantity: quantity
                }
            }
            return cart_item
        }))
    }
    
    const deleteItem = (productId) => {
        setCart(cart.filter((el) => el.id !== productId))
    }

    const handleCheckout = (formData) => {
        const data = {
            formData: formData,
            cart: cart
        };
        axios.post('http://127.0.0.1:8000/api/checkout',{data})
        .then(function(response){
            if(!response.data.error) {
                setCart([]);
                setSuccess(response.data.message)
                localStorage.removeItem('cart')
            }
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <Router>
            <NavBar cartItem={cartItem}/>
            { success != null && <Alert onClose={() => {setSuccess(null)}}> {success} </Alert> }
            <Switch>
                <Route path="/" exact>
                     <Product products={products} addToCart={addToCart}/>
                </Route>
                <Route path="/cart" exact >
                    <Cart cart={cart} updateItem={updateItem} deleteItem={deleteItem}/>
                </Route>
                <Route path="/checkout" exact >
                    <Checkout handleCheckout={handleCheckout} cart={cart}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;