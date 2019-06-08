import React from 'react'
import Appbar from './Appbar'
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, CardActions, IconButton } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    classGrid: {
        position: 'relative',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    }
}))

function Homepage() {   
    const classes = useStyles()
    return (
        <div>
            <Appbar />
            
            {/*Classes grid*/}
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item xs = {12}> 
                        <Link to="/myclasses"> My Classes > </Link>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card>
                            <Typography>Physics</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
                        <Card>
                            <Typography>Maths</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs = {4}>
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
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