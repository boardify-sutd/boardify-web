import React from 'react'
import Appbar from './Appbar'
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import Lake from './media/At the lake.jpg'

const useStyles = makeStyles((theme) => ({
    main: {
    },
    toolbar: theme.mixins.toolbar,
    classGrid: {
        position: 'relative',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    }
}))

function Homepage() {   
    const classes = useStyles()
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
                        <Card>
                            <Typography>Physics</Typography>
                        </Card>
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
            </div>
        </div>
    )

}

export default Homepage;