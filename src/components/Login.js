import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { Paper, InputBase, Link, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Switch from '@material-ui/core/Switch';

// const outerTheme = createMuiTheme({
//     palette: {
//         primary: {

//         }
//     },
// });

const useStyles = makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'flex', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    typo: {
        color: '#000',
        fontFamily: 'Bahnschrift Light',
        align: 'center',
        marginTop: theme.spacing.unit * 3
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display:'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    loggedin: {
        display:'flex',
        flexDirection: 'row_space_around'
    },
    loggedintoggle:{
        alignSelf:'right'
    }
}));

function Login() {
    const classes = useStyles();
    return (
        <div className="backgroundSignIn">
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography 
                        className = {classes.typo} 
                        component= "h1"
                        variant="h4">
                        Welcome back!
                    </Typography>
                    <form className={classes.form} method="POST">
                        <FormControl margin="normal" required fullWidth>
                            <InputBase className={classes.username} placeholder="Username"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputBase className={classes.password} placeholder="Password"/>    
                        </FormControl>
                        <div className = {classes.loggedin}>
                            <Typography className={classes.loggedintext}>Keep Me Logged In</Typography>
                            <Switch className={classes.loggedintoggle}>    
                            </Switch>
                        </div>
                        <Link href={"https://www.youtube.com/watch?v=Ip3uZX0I79Y"}>
                            Forgot Password?
                        </Link>
                        <Button type="submit">LOG IN</Button>
                    </form>
                </Paper>
            </main>
        </div>
    );
}

//export default withStyles(theme)(Login);
export default (Login);