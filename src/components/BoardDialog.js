import React from 'react'
import { Dialog, Card, CardActions, CardHeader, CardMedia, CardContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import StarOutlined from '@material-ui/icons/StarOutlined'
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
    }
}))

function BoardDialog(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    function handleClickOptions(event) {
        setAnchorEl(event.currentTarget);
    }
    
      function handleClose() {
        setAnchorEl(null);
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
                        <IconButton>
                            <FavoriteOutlined/>
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
            </Card>
            <MoreOptionsPopover open={open} anchorEl={anchorEl} handleClose={handleClose}/>
        </Dialog>
    )
}

export default BoardDialog;
