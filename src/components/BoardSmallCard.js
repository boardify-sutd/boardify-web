import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, CardAcCardActionArea } from '@material-ui/core'
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import Lake from './media/At the lake.jpg'

/* This shows up as a small preview. */

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

function BoardSmallCard() {
    const classes = useStyles()
    return (
        <Grid item xs = {3}>
            <Card>
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </Grid>
    )   
}

export default BoardSmallCard