import React, {useEffect} from 'react'
import { makeStyles, Container, Typography, Grid, Card, CardMedia, CardContent, IconButton, Breadcrumbs, List, ListItem, Popover } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import BoardSmallCard from './BoardSmallCard'
import BoardDialog from './BoardDialog'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
    header: {
        display: "inline-flex",
        marginBottom: theme.spacing(2)
    },
    breadcrumb: {
        display: "inline-flex"
    },
    mainContent: {
        display: 'flex',
        flexDirection:'column'
    },
    toolbar: theme.mixins.toolbar
}))

/* Change breadcrumb link color to gray*/

function ClassesWeek(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [card, setCard] = React.useState('');
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
    });

    return (
        <div className={classes.mainContent}>

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            {/*Inside One Week*/ }
            <Breadcrumbs separator="›" aria-label="Breadcrumb" className={classes.breadcrumb}>
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Link color="inherit" to="/mymodules" >
                    My Modules
                </Link>
                <Link color="inherit" to={{
                        pathname: '/myclasses',
                        state: {
                            modName: props.location.state.modName,
                            className: props.location.state.className
                        }}} >
                    {props.location.state.modName}
                </Link>
                <Typography color="textPrimary">
                    {props.location.state.className}
                </Typography>
            </Breadcrumbs>
            
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={3}>
                    {boards.map(card => (
                        <BoardSmallCard handleClickOpen={handleClickOpen} card={card} url={card.url} title={card.title} />
                    ))}
                </Grid>
            </Container>

            <BoardDialog open={open} handleClose={handleClose} card={card}/>
        </div>
    )

}

export default ClassesWeek;