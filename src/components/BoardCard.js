import React from 'react'
import { Dialog, Card, CardActions, CardHeader, CardMedia, CardContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import StarOutlined from '@material-ui/icons/StarOutlined'
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined'
import CommentOutlined from '@material-ui/icons/CommentOutlined'

/* This is for when you click on the board.*/

function BoardCard(props) {
    return (
        <div>
            <Dialog>
                <Card>
                    <CardHeader 
                        title={props.title}
                        action={
                            <IconButton>
                                <StarOutlined />
                            </IconButton>
                        }
                    />
                    <CardMedia src={props.img}/>
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
        </div>
    )
}

export default BoardCard;
