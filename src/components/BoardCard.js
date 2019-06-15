import React from 'react'
import { Dialog, Card, CardActions, CardHeader, CardMedia, CardContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import StarOutlined from '@material-ui/icons/StarOutlined'
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined'
import CommentOutlined from '@material-ui/icons/CommentOutlined'
import { makeStyles } from '@material-ui/styles';
import Lake from './media/At the lake.jpg'

/* This is for when you click on the board.*/
const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    }
}))

function BoardCard(props) {
    const classes = useStyles()

    return (
        <Dialog 
            onClose={props.handleClose} 
            open={props.open}>

            <Card>
                <CardHeader 
                    action={
                        <IconButton>
                            <StarOutlined />
                        </IconButton>
                    }
                />
                <CardMedia
                    className={classes.cardMedia}
                    image={Lake}
                />
                <CardActions>
                    <IconButton>
                        <FavoriteOutlined/>
                    </IconButton>
                    <IconButton>
                        <CommentOutlined />
                    </IconButton>
                </CardActions>
            </Card>
        </Dialog>
    )
}

export default BoardCard;
