import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { InputBase, Badge, ListItem, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Popover, List, SwipeableDrawer } from '@material-ui/core'
import Boardify from './media/Boardify.png'
import Lake from './media/At the lake.jpg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
}));

function Appbar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        isOpen: false,
    });

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }

    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({...state, isOpen: open });
      };
  
    const open = Boolean(anchorEl);

    return (
        <div className={classes.grow}>
        <AppBar position="static">
        <Toolbar>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
            </IconButton>
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
                <IconButton color="inherit" onClick={handleClick}>
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit" >
                    <Settings/>
                </IconButton>
                <IconButton color="inherit">
                    <Avatar src={Lake}></Avatar>    
                </IconButton>  
            </div>
            
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                >
                <List component="div">
                    <ListItem>
                        Glenn has liked your post!
                    </ListItem>
                </List>
            </Popover> 
            <SwipeableDrawer
                anchor="left"
                open={state.isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    <ListItem>
                        Hey there's supposed to be something here
                    </ListItem>
                </List>
            </SwipeableDrawer>     
            </Toolbar>  
        </AppBar>  
        </div>
    )
}

export default Appbar;
