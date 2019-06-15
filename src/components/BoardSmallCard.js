import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import Lake from './media/At the lake.jpg'

/* This shows up as a small preview. */

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    }
}))

function BoardSmallCard() {
    const classes = useStyles()
    return (
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
    )   
}

export default BoardSmallCard