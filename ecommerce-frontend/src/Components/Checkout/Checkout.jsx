import React,{useEffect} from 'react'
import { useForm,Controller } from "react-hook-form";
import { Button,Grid ,Paper,Container,Typography } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import useStyles from './styles';
import { useHistory } from 'react-router';

const Checkout = ({handleCheckout,cart}) => {
    const classes = useStyles();
    let history = useHistory();
    const { handleSubmit, control, formState: { errors },reset } = useForm();
    const onSubmit = (data) => {
        handleCheckout(data);
        reset({Full_name:'',Email:'',Phone_number:'',Address:''})
    }

    useEffect(() => {
        if(cart.length == 0) history.push('/')
    });
    return (
        <Container maxWidth='sm' className={classes.main}>
            <Paper elevation={3}>
                <Typography varient='h6'>
                    Checkout Form
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <label>Full Name</label>
                            <br/>
                            <Controller
                                name="Full_name"
                                control={control}
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field }) => <Input {...field} />}
                            /><br/>
                            {errors.Full_name && "Full Name is required"}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Email</label>
                            <br/>
                            <Controller
                                name="Email"
                                control={control}
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field }) => <Input {...field} />}
                            /><br/>
                            {errors.Email && "Email is required"}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Phone Number</label>
                                <br/>
                            <Controller
                                name="Phone_number"
                                control={control}
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field }) => <Input {...field} />}
                            /><br/>
                            {errors.Phone_number && "Phone Number is required"}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label>Address</label>
                                <br/>
                            <Controller
                                name="Address"
                                control={control}
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field }) => <Input {...field} />}
                            /><br/>
                            {errors.Address && "Address is required"}
                        </Grid>
                    </Grid>
                    <Button type='submit' variant="contained" color="secondary" className={classes.submit} >Submit</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Checkout
