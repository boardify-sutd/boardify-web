// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import {makeStyles} from '@material-ui/core/styles';
// import { Paper, InputBase, Button, Divider } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import FormControl from '@material-ui/core/FormControl'
// import { withStyles } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
// import Switch from '@material-ui/core/Switch';
// import { Link } from 'react-router-dom';

// const outerTheme = createMuiTheme({
//     palette: {
//         primary: {

//         }
//     },
// });

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
//     paper: {
//         marginTop: theme.spacing.unit * 8,
//         display:'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
//     },
//     line: {
//         marginTop: theme.spacing.unit * 20,
//     }, 
//     termsandconditions: {
//         position: "relative",
//         marginTop: theme.spacing("5")
//     }
// }));

// function Signup() {
//     const classes = useStyles();
//     return (
//         <div className="backgroundSignIn">
//             <main className={classes.main}>
//                 <Paper className={classes.paper}>
//                     <form className={classes.form} method="POST">
//                         <FormControl margin="normal" required fullWidth>
//                             <InputBase className={classes.username} placeholder="Username"/>
//                         </FormControl>
//                         <FormControl margin="normal" required fullWidth>
//                             <InputBase className={classes.email} placeholder="Email"/>
//                         </FormControl>
//                         <FormControl margin="normal" required fullWidth>
//                             <InputBase className={classes.password} placeholder="Password"/>    
//                         </FormControl>
//                     </form>
//                     <Typography>With this, you agree to Boardify's terms and conditions.</Typography>
//                     <Button type="submit">SIGN UP</Button>
//                 </Paper>

//                 <Link to="/">Log in to your account</Link>
//             </main>
//         </div>
//     );
// }

// //export default withStyles(theme)(Login);
// export default (Signup);

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to Boardify's Terms and Conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
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