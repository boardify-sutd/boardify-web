// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles} from '@material-ui/core/styles';
// import { Paper, InputBase, Button } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import FormControl from '@material-ui/core/FormControl'
// import { withStyles } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import Switch from '@material-ui/core/Switch';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     main: {
//         width: 'auto',
//         display: 'block', // Fix IE 11 issue.
//         marginLeft: theme.spacing.unit * 3,
//         marginRight: theme.spacing.unit * 3,
//         [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
//             width: 400,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//         },
//     },
//     typo: {
//         color: '#000',
//         fontFamily: 'Bahnschrift Light',
//         align: 'center',
//         marginTop: theme.spacing.unit * 3
//     },
//     paper: {
//         marginTop: theme.spacing.unit * 8,
//         display:'flex',
//         flexDirection: 'column',
//         alignSelf: 'center',
//         padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//     },
//     loggedin: {
//         display:'flex',
//         flexDirection: 'row_space_around'
//     },
//     loggedintoggle:{
//         alignSelf:'right'
//     }
// }));

// function Login() {
//     const classes = useStyles();
//     return (
//         <div className="backgroundSignIn">
//             <main className={classes.main}>
//                 <CssBaseline />
//                 <Paper className={classes.paper}>
//                     <Typography 
//                         className = {classes.typo} 
//                         component= "h1"
//                         variant="h4">
//                         Welcome back!
//                     </Typography>
//                     <form className={classes.form} method="POST">
//                         <FormControl margin="normal" required fullWidth>
//                             <InputBase className={classes.username} placeholder="Username"/>
//                         </FormControl>
//                         <FormControl margin="normal" required fullWidth>
//                             <InputBase className={classes.password} placeholder="Password"/>    
//                         </FormControl>
//                         <div className = {classes.loggedin}>
//                             <Typography className={classes.loggedintext}>Keep Me Logged In</Typography>
//                             <Switch className={classes.loggedintoggle}>    
//                             </Switch>
//                         </div>
//                         <Link href={"https://www.youtube.com/watch?v=Ip3uZX0I79Y"}>
//                             Forgot Password?
//                         </Link>
//                         <Button type="submit">LOG IN</Button>
//                     </form>
//                 </Paper>

//                 <Link to="/signup">Create an account</Link>
//             </main>
//         </div>
//     );
// }

// //export default withStyles(theme)(Login);
// export default (Login);

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Boardify from './media/Boardify.png'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Boardify} alt="Boardify logo"/>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}