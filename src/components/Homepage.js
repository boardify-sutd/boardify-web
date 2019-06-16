import React, {useEffect} from 'react'
import Appbar from './Appbar'
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, IconButton, CardActionArea } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import Lake from './media/At the lake.jpg'
import BoardCard from './BoardCard';
import ClassModuleCard from './ClassModuleCard'

const useStyles = makeStyles((theme) => ({
    main: {
        
    },
    toolbar: theme.mixins.toolbar,
    classGrid: {
        justifyContent: 'space-around',
        
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    },
    moduleLink: {
        textDecoration: 'none'
    }
}))

function Homepage() {   
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [boards, setBoards] = React.useState([]);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    };

    useEffect(() => {
        fetch('http://boardify.ml/module/1')
            .then(response => response.json())
            .then(data => console.log(data));
    })

    return (
        <div className={classes.main}>
            <Appbar />
            
            <div className={classes.toolbar} />
            {/*Classes grid*/}
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item xs = {12}> 
                        <Link to="/mymodules"> My Modules > </Link>
                    </Grid>
                    <Grid item xs = {3}>
                        <Link to="/myclasses" className={classes.moduleLink}>
                            <Card>
                                <CardActionArea>
                                    <Typography>Physics</Typography>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <Typography>Maths</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <Typography>HASS</Typography>
                        </Card>
                    </Grid>
                
                </Grid>
            </div>


            {/*Recently viewed grid*/}
            
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item xs = {12}> 
                        <Link to="/myclasses"> Recently Viewed > </Link>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardActionArea onClick={handleClickOpen}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={Lake}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="body2" component="p">
                                        Card meta data
                                    </Typography>
                                    <IconButton>
                                        <MoreVertRounded />
                                    </IconButton>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                                <CardMedia
                                    image={Lake}
                                    className={classes.cardMedia}
                                />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            

            <div>

            </div>


            {/*Stars grid*/}
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item xs = {12}> 
                        <Link to="/myclasses"> Favourites > </Link>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs = {3}>
                        <Card>
                            <CardMedia
                                image={Lake}
                                className={classes.cardMedia}
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <BoardCard open={open} handleClose={handleClose}/>
            </div>
        </div>
    )

}

export default Homepage;