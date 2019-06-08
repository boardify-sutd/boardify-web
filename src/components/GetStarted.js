import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    justifyContent: 'center', // Used to set Text Component Vertically Center
    alignItems: 'center'
  },

  button: {
    marginTop: theme.spacing.unit * 10,
    background: '#D26163',
    width: '409px',
    height: '63px'
  },
  typo: {
    marginTop: theme.spacing.unit * 4
  }
}));

function GetStarted() {
  const classes = useStyles();

    return(
        <div className={classes.root}>
          <CssBaseline />
            <Typography variant="h1" component="h2" className={classes.typo}>
                Welcome to Boardify!
            </Typography>
            <Button variant="contained" className={classes.button}>Get Started!</Button>
        </div>
    )
}

export default GetStarted;