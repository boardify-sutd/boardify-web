import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Badge, ListItem, Toolbar, List, Divider, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { fade } from '@material-ui/core/styles/colorManipulator';
import Lake from './media/At the lake.jpg'
import NotificationsPopover from './NotificationsPopover';
import { Typography } from '@material-ui/core';
import AvatarPopover from './AvatarPopover';
import Drawer from '@material-ui/core/Drawer';
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeSharp from '@material-ui/icons/HomeSharp';
import Book from '@material-ui/icons/Book';
import ViewCompact from '@material-ui/icons/ViewCompact';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
      },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: "block",
        },
    },
    // appbar: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     backgroundColor: "transparent",
    //     boxShadow: 'none',
    //     justifyContent: 'space-between'
    // },
    search: {
        position: 'relative',
        borderRadius: '30px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.29),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
    sectionDesktop: {
        display: 'flex',
      },
    // searchField: {
    //     height: 'auto', 
    //     width: 'auto'
    // },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      toolbar: theme.mixins.toolbar,
}));

function Appbar() {
    const classes = useStyles()
    const [anchorNotif, setAnchorNotif] = React.useState(null);
    const [anchorAvatar, setAnchorAvatar] = React.useState(null);
    const [state, setState] = React.useState({
        isOpen: false,
    });

    function handleClickNotif(event) {
      setAnchorNotif(event.currentTarget);
    }
  
    function handleCloseNotif() {
      setAnchorNotif(null);
    }
  
    const openNotif = Boolean(anchorNotif);

    
    function handleClickAvatar(event) {
        setAnchorAvatar(event.currentTarget);
      }
    
      function handleCloseAvatar() {
        setAnchorAvatar(null);
      }
    
      const openAvatar = Boolean(anchorAvatar);

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>Boardify</Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}><SearchIcon/></div>
                <InputBase
                    placeholder="Search..." 
                    classes={{
                        root: classes.inputRoot, 
                        input: classes.inputInput}}
                    inputProps={{ 'aria-label': 'Search'}}
                />
            </div>
            <div className={classes.grow}/>
            <div className={classes.sectionDesktop}>
                <IconButton color="inherit" onClick={handleClickNotif}>
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit" >
                    <Settings/>
                </IconButton>
                <IconButton color="inherit" onClick={handleClickAvatar}>
                    <Avatar src={Lake}></Avatar>    
                </IconButton>  
            </div>      
            
            <NotificationsPopover 
                open={openNotif} 
                anchorEl={anchorNotif} 
                handleClose={handleCloseNotif}/>  
            <AvatarPopover
                open={openAvatar} 
                anchorEl={anchorAvatar} 
                handleClose={handleCloseAvatar}
            />

            
            </Toolbar>  
        </AppBar>  
 
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>

            <ListItem button component={Link} to="/home">
                    <ListItemIcon><HomeSharp/></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            
                <ListItem button component={Link} to="/mymodules">
                <ListItemIcon><Book/></ListItemIcon>
                <ListItemText primary="My Modules" />
                </ListItem>
            
                <ListItem button component={Link} to="/weeks">
                    <ListItemIcon><ViewCompact/></ListItemIcon>
                    <ListItemText primary="Recently Viewed" />
                </ListItem>
            
                <ListItem button component={Link} to="/weeks">
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary="Favourites" />
                </ListItem>
        </List>
      </Drawer>

      {/* Put contents of page here ? */}

        </div>
    )
}

export default Appbar;
