import React from "react";
import Appbar from "./Appbar";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  IconButton
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  main: {},
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
  }
}));

const mods = ["Physics", "Math", "HASS", "Biology"];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Appbar />
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
            href="/mymodules"
          >
            See all
          </Button>
        </div>
        <Grid container spacing={3}>
          {mods.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      <Folder />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="More options">
                      <MoreVertRounded />
                    </IconButton>
                  }
                  title={card}
                  subheader="15 boards"
                />
              </Card>
            </Grid>
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
            href="/mymodules"
          >
            See all
          </Button>
        </div>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      <FavoriteIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="More Options">
                      <MoreVertRounded />
                    </IconButton>
                  }
                  title={card}
                  subheader="17:58"
                />
              </Card>
            </Grid>
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
            href="/mymodules"
          >
            See all
          </Button>
        </div>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      <FavoriteIcon />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="Settings">
                      <MoreVertRounded />
                    </IconButton>
                  }
                  title={card}
                  subheader="June 16 2019"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Homepage;
