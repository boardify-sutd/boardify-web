import React, {useEffect} from "react";
import Appbar from "./Appbar";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardActionArea,
  IconButton
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreOptionsPopover from './MoreOptionsPopover'


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

function BoardSmallCard(props) {
    const classes = useStyles()
    const [card, setCard] = React.useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    function handleClickOptions(event) {
        setAnchorEl(event.currentTarget);
    }
    
      function handleClose() {
        setAnchorEl(null);
    }

    useEffect(() => {
        setCard(props.card);
    })

    return (
        <Grid item key={props.id} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardActionArea onClick={event => props.handleClickOpen(event, props.card)}>
                    <CardMedia
                    className={classes.cardMedia}
                    image={props.url}
                    title={props.title}
                    />
                </CardActionArea>
                    <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                        <FavoriteIcon />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="More Options" onClick={handleClickOptions}>
                            <MoreVertRounded />
                        </IconButton>
                    }
                    title={props.title}
                    subheader="17:58"
                    />
            </Card>
            <MoreOptionsPopover open={open} anchorEl={anchorEl} handleClose={handleClose}/>
        </Grid>

    )   
}

export default BoardSmallCard