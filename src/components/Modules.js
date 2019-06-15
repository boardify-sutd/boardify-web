import React from 'react'
import Appbar from './Appbar';
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton, Breadcrumbs } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import Lake from './media/At the lake.jpg'

const useStyles = makeStyles((theme) => ({
    main: {
        
    },
    classGrid: {
        position: 'relative',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    toolbar: theme.mixins.toolbar
}))

function Modules() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Appbar />

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            <Breadcrumbs separator="›" aria-label="Breadcrumb">
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Typography color="textPrimary">My Modules</Typography>
            </Breadcrumbs>
            {/*One week grid*/ }
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item > 
                        <Typography> Term 1 > </Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Physics
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
                                    Maths
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
                                    HASS
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
                                    Bio-Chem
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default Modules;