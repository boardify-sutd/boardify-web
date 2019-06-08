import React from'react'
import Login from './Login'
import Signup from './Signup';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'spaceAround'
    },
    gridItem: {

    }
}));

function LoginSignup() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item className = {classes.gridItem}>
                <Login />
            </Grid>

            <Grid item className = {classes.gridItem}>
                <Signup />
            </Grid>
        </Grid>
    )
}

export default LoginSignup;
