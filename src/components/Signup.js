import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import { Paper, InputBase, Button, Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';

// const outerTheme = createMuiTheme({
//     palette: {
//         primary: {

//         }
//     },
// });

const useStyles = makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    line: {
        marginTop: theme.spacing.unit * 20,
    }, 
    termsandconditions: {
        position: "relative",
        marginTop: theme.spacing("5")
    }
}));

function Signup() {
    const classes = useStyles();
    return (
        <div className="backgroundSignIn">
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <form className={classes.form} method="POST">
                        <FormControl margin="normal" required fullWidth>
                            <InputBase className={classes.username} placeholder="Username"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputBase className={classes.email} placeholder="Email"/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputBase className={classes.password} placeholder="Password"/>    
                        </FormControl>
                    </form>
                    <Typography>With this, you agree to Boardify's terms and conditions.</Typography>
                    <Button type="submit">SIGN UP</Button>
                </Paper>

                <Link to="/">Log in to your account</Link>
            </main>
        </div>
    );
}

//export default withStyles(theme)(Login);
export default (Signup);