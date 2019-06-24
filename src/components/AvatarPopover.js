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

function AvatarPopover(props) {
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
            <ListItem>
                Log out function etc etc
            </ListItem>
        </List>
    </Popover> 
    )
}

export default AvatarPopover;