import React from 'react'
import { Dialog, TextField, Card, CardActions, CardHeader, CardMedia, CardContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import SendOutlined from '@material-ui/icons/SendOutlined'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined'
import CommentOutlined from '@material-ui/icons/CommentOutlined'
import { makeStyles } from '@material-ui/styles';
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import MoreOptionsPopover from './MoreOptionsPopover';

/* This is for when you click on the board.*/
const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-between'
    }, 
    commentbox: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    }
}))

function BoardDialog(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [liked, setLiked] = React.useState(false)
    const [shown, setShown] = React.useState(false)
    const open = Boolean(anchorEl)

    function handleClickOptions(event) {
        setAnchorEl(event.currentTarget);
    }
    
    function handleClose() {
        setAnchorEl(null);
    }

    function handleClickLike() {
        setLiked(!liked)
    }

    function handleClickComments() {
        setShown(!shown)
    }

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
                <CardActions className={classes.icons}>
                    <div>
                        <IconButton onClick={handleClickLike}>
                            {liked ? <FavoriteOutlined/> : <FavoriteBorderOutlined/>}
                        </IconButton>
                        <IconButton>
                            <CommentOutlined />
                        </IconButton>
                    </div>
                    <IconButton >
                        <MoreVertRounded onClick={handleClickOptions}/>
                    </IconButton>
                </CardActions>

                <CardContent>
                    {props.card.description}
                </CardContent>

                <CardContent className={classes.comment}>
                    <Typography onClick={handleClickComments}>
                        {shown ? "View all comments": "Hide all comments"}
                    </Typography>
                </CardContent>

                <CardContent className={classes.commentbox}>
                    <TextField
                    id="outlined-uncontrolled"
                    placeholder="Add a comment"
                    className={classes.textField}
                    margin="normal"
                    multiline={true}
                    fullWidth={true}
                    />
                    <IconButton>
                        <SendOutlined />
                    </IconButton>
                </CardContent>
            </Card>
            <MoreOptionsPopover open={open} anchorEl={anchorEl} handleClose={handleClose}/>
        </Dialog>
    )
}

export default BoardDialog;
