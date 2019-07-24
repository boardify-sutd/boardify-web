import React, {useEffect, Suspense, lazy } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import BoardDialog from './BoardDialog';
import BoardSmallCard from './BoardSmallCard';
import ModuleCard from './ModuleCard'
import { Link } from 'react-router-dom';
import PlaceholderCard from "./PlaceholderCard";

const LazyBoardCard = lazy(() => import('./BoardSmallCard'))

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  toolbar: theme.mixins.toolbar,
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4)
  },
  cardContent: {
    flexGrow: 1
  },
  cardMedia: {
    height: 0,
    paddingTop: "56%"
  },
  icon: {
    marginLeft: "auto"
  },
  header: {
    display: "inline-flex",
    marginBottom: theme.spacing(2)
  },
  button: {
    marginLeft: theme.spacing(2)
  },
  navmenu: {
    paddingTop: theme.spacing(8) 
  }
}));

//TODO: find a way to retrieve user's mods and sort by term
const mods = ['Mathematics', 'Information Systems and Programming', 'Computational Structures', 'Introduction to Algorithms', 
'Humanities and Social Sciences', 'Biology'];
const favemods = ['Biology', 'Mathematics', 'Computational Structures']
const placeholderArray = ['0', '1', '2', '3', '4', '5', '6', '7']
function Homepage() {   
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [card, setCard] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [recents, setRecents] = React.useState([]);

    function handleClickOpen(event, card) {
        console.log(card);
        setCard(card);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    };

    useEffect(() => {
        fetch('http://boardify.ml/module/0')
            .then(response => response.json())
            .then(data => {
              if (data.boards.length > 8) {
                setRecents(data.boards.slice(0, 8)) //only get the eight most recent
              } else {
                setRecents(data.boards)
              }
              setReady(true);
            });           
    });

    return (

    <div>

      <div className={classes.main}>
        <div className={classes.mainContent}>
          {/*Classes grid*/}
          <Container className={classes.cardGrid} maxWidth="lg">
            <div className={classes.header}>
              <Typography variant="h4" color="primary">
                My Modules
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
				        className={classes.button}
				        component = {Link}
                to={{
                  pathname:"/mymodules", 
                  state: {
					          name: 'My Modules'
                }}}
              >
                See all
              </Button>
            </div>
            <Grid container spacing={3}>
              {mods.map(mod => (
                  <ModuleCard modName={mod} link='/mymodules' name='My Modules' />
              ))}
            </Grid>
          </Container>

          {/*Recently viewed grid*/}
          <Container className={classes.cardGrid} maxWidth="lg">
            <div className={classes.header}>
              <Typography variant="h4" color="primary">
                Recently Viewed
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                href="/recent"
              >
                See all
              </Button>
            </div>
            <Grid container spacing={4}>
              {ready ? recents.map(card => (
                <BoardSmallCard handleClickOpen={handleClickOpen} card={card} url={card.url} title={card.title} /> 
              )): placeholderArray.map(place => (<PlaceholderCard />))}
            </Grid>
          </Container>

          {/*Favourites grid*/}
          <Container className={classes.cardGrid} maxWidth="lg">
            <div className={classes.header}>
              <Typography variant="h4" color="primary">
                Favourites
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                component = {Link}
                to={{
                  pathname:"/mymodules", 
                  state: {
					          name: 'Favourites'
                }}}
              >
                See all
              </Button>
            </div>
            <Grid container spacing={4}>
              {favemods.map(mod => 
                <ModuleCard modName={mod} link='/mymodules' name='Favourites'/>
              )}
            </Grid>
          </Container>
          <BoardDialog open={open} handleClose={handleClose} card={card}/>
        </div>
        
      </div>
    </div>
  );
}

export default Homepage;
