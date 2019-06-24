import React from 'react'
import { Dialog, Card, CardActions, CardHeader, CardMedia, CardContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import StarOutlined from '@material-ui/icons/StarOutlined'
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined'
import CommentOutlined from '@material-ui/icons/CommentOutlined'
import { makeStyles } from '@material-ui/styles';

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

function BoardDialog(props) {
    const classes = useStyles()

    return (
        <Dialog 
            onClose={props.handleClose} 
            open={props.open}
            className={classes.dialog}>

            <Card>
                <CardHeader 
                    title={props.card.title}
                />
                <CardMedia
                    className={classes.cardMedia}
                    image={props.card.url}
                />
                <CardActions>
                    <IconButton>
                        <FavoriteOutlined/>
                    </IconButton>
                    <IconButton>
                        <StarOutlined />
                    </IconButton>
                    <IconButton>
                        <CommentOutlined />
                    </IconButton>
                </CardActions>

                <CardContent>
                    {props.card.description}
                </CardContent>
            </Card>
        </Dialog>
    )
}

export default BoardDialog;
