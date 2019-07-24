import React, {useEffect} from 'react'
import { makeStyles, Container, Typography, Grid, Card, CardMedia, CardContent, IconButton, Breadcrumbs, List, ListItem, Popover } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import BoardSmallCard from './BoardSmallCard'
import BoardDialog from './BoardDialog'
import PlaceholderCard from './PlaceholderCard'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4)
    },
    header: {
        display: "inline-flex",
        marginBottom: theme.spacing(2)
    },
    breadcrumb: {
        marginBottom: theme.spacing(2)
    },
    mainContent: {
        display: 'flex',
        flexDirection:'column'
    },
    toolbar: theme.mixins.toolbar
}))

/* Change breadcrumb link color to gray*/
const placeholderArray = ['0', '1', '2', '3', '4', '5', '6', '7']
function ClassesWeek(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [card, setCard] = React.useState('');
    const [ready, setReady] = React.useState(false);
    const [boards, setBoards] = React.useState([]);

    function handleClickOpen(event, card) {
        console.log(card);
        setCard(card);
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    };

    useEffect(() => {
        fetch('http://boardify.ml/module/1')
            .then(response => response.json())
            .then(data => {
              setBoards(data.boards);
            });     
            setReady(true);      
    });

    return (
        <div className={classes.mainContent}>

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />
            
            <Container className={classes.cardGrid} maxWidth="lg">
                <Breadcrumbs className={classes.breadcrumb} separator="›" aria-label="Breadcrumb" className={classes.breadcrumb}>
                    <Link color="inherit" to="/home" >
                        Home
                    </Link>
                    <Link color="inherit" to={{
                    pathname: "/mymodules",
                    state: {
                        name: props.location.state.name
                    }
                    }} >
                        {props.location.state.name}
                    </Link>
                    <Link color="inherit" to={{
                            pathname: '/myclasses',
                            state: {
                                modName: props.location.state.modName,
                                className: props.location.state.className,
                                name: props.location.state.name
                            }}} >
                        {props.location.state.modName}
                    </Link>
                    <Typography color="textPrimary">
                        {props.location.state.className}
                    </Typography>
                </Breadcrumbs>

                <Grid container spacing={3}>
                    {ready ? boards.map(card => (
                        <BoardSmallCard handleClickOpen={handleClickOpen} card={card} url={card.url} title={card.title} />
                    )): placeholderArray.map(place => <PlaceholderCard />)}
                </Grid>
            </Container>

            <BoardDialog open={open} handleClose={handleClose} card={card}/>
        </div>
    )

}

export default ClassesWeek;