import React, {useEffect, Suspense, lazy} from 'react'
import { makeStyles, Container, Typography, Grid, Card, CardMedia, CardContent, IconButton, Breadcrumbs, List, ListItem, Popover } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import BoardSmallCard from './BoardSmallCard'
import BoardDialog from './BoardDialog'

const LazyBoardCard = lazy(() => import('./BoardSmallCard'))

const useStyles = makeStyles(theme => ({
    header: {
        display: "inline-flex",
        marginBottom: theme.spacing(2)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
}))

function RecentlyViewed(props) {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [card, setCard] = React.useState('');
    const [favourites, setFavourites] = React.useState([]);

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
              if (data.boards.length > 20) {
                setFavourites(data.boards.slice(0, 20));
              } else {
                setFavourites(data.boards)
              }
            });           
    });

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <div className={classes.header}>
                    <Typography variant="h4" color="primary">
                        Recently Viewed
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    {favourites.map(fave => 
                    <BoardSmallCard
                        handleClickOpen={handleClickOpen} 
                        card={fave} 
                        url={fave.url} 
                        title={fave.title}/>
                    )}
                </Grid>
            </Container>
            <BoardDialog open={open} handleClose={handleClose} card={card}/>
        </div>
    )
}

export default RecentlyViewed;