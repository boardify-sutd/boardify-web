import React from 'react'
import Appbar from './Appbar';
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Breadcrumbs } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative'
    },
    classGrid: {
        position: 'relative',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    }
}))

function Classes() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Appbar />
            <Breadcrumbs separator="›" aria-label="Breadcrumb">
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Typography color="textPrimary">Physics</Typography>
            </Breadcrumbs>
            {/*One week grid*/ }
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item > 
                        <Link to="/week1"> Week 1 > </Link>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Lecture 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Tutorial 1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Tutorial 2
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default Classes;