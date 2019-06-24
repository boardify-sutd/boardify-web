import React, {useEffect} from "react";
import Appbar from "./Appbar";
import {
  makeStyles,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
    navmenu: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function NavigationMenu() {
    const classes = useStyles();

    return (
        <div className={classes.navmenu}>
            <List component="nav" aria-label="Navigation Menu">
                <ListItemLink href="/home">
                    <Typography> Homepage </Typography>
                </ListItemLink>
            
                <ListItemLink href="/mymodules">
                    <Typography> My Modules </Typography>
                </ListItemLink>
            
                <ListItemLink href="/week1">
                    <Typography> Recently Viewed </Typography>
                </ListItemLink>
            
                <ListItemLink href="/week1">
                    <Typography> Favourites </Typography>
                </ListItemLink>
            </List>
        </div>
    )
}

export default NavigationMenu;
