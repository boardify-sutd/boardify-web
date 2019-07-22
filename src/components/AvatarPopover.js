import React, {useEffect} from "react";
import Appbar from "./Appbar";
import {
  makeStyles,
  List,
  ListItem,
  Popover,
  Typography
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Metrics from "./Metrics";

const useStyles =  makeStyles((theme) => ({
    metrics: {
        display: 'flex', 
        justifyContent: 'space-around'
    }
}))

function AvatarPopover(props) {
    const classes = useStyles()

    return(
        <Popover 
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        >
        <List component="div">
            <ListItem className={classes.metrics}>
                <Metrics className={classes.metricItem}/>
                <Metrics />
            </ListItem>
            <ListItem>
                Leaderboard
            </ListItem>
            <ListItem>
                Help
            </ListItem>
            <ListItem>
                Log Out
            </ListItem>
        </List>
    </Popover> 
    )
}

export default AvatarPopover;