import React, {useEffect} from "react";
import Appbar from "./Appbar";
import {
  makeStyles,
  List,
  ListItem,
  Typography,
  Icon,
  SvgIcon
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeSharp from '@material-ui/icons/HomeSharp';
import Book from '@material-ui/icons/Book';
import ViewCompact from '@material-ui/icons/ViewCompact';

const useStyles = makeStyles(theme => ({
    navmenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    icon: {
        
    }, 
    row: {
        display: 'flex',
        justifyContent: 'space-around'
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
                <ListItemLink href="/home" className={classes.row}>
                    <HomeSharp className={classes.icon}/>
                    <Typography> Homepage </Typography>
                </ListItemLink>
            
                <ListItemLink href="/mymodules" className={classes.row}>
                    <Book className={classes.icon}/>
                    <Typography> My Modules </Typography>
                </ListItemLink>
            
                <ListItemLink href="/weeks" className={classes.row}>
                    <ViewCompact className={classes.icon}/>
                    <Typography> Recently Viewed </Typography>
                </ListItemLink>
            
                <ListItemLink href="/weeks" className={classes.row}>
                    <FavoriteIcon className={classes.icon}/>
                    <Typography> Favourites </Typography>
                </ListItemLink>
            </List>
        </div>
    )
}

export default NavigationMenu;
