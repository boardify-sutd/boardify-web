import React, {useEffect, Suspense, lazy } from "react";
import {
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import BoardDialog from './BoardDialog';
import BoardSmallCard from './BoardSmallCard';
import ModuleCard from './ModuleCard'
import { Link } from 'react-router-dom';

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
function Homepage() {   
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [card, setCard] = React.useState('');
    // const [boards, setBoards] = React.useState([]);
    // const [favourites, setFavourites] = React.useState([]);
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
                // setBoards(data.boards.slice(0, 8));
                // setFavourites(data.boards.slice(0, 8));
                setRecents(data.boards.slice(0, 8)) //only get the eight most recent
              } else {
                // setBoards(data.boards)
                // setFavourites(data.boards)
                setRecents(data.boards)
              }
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
              {recents.map(card => (
                <Suspense fallback={<div>Loading...</div>} >
                  <BoardSmallCard handleClickOpen={handleClickOpen} card={card} url={card.url} title={card.title} />
                </Suspense>
              ))}
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
