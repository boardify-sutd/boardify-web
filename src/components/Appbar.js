import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlined from '@material-ui/icons/NotificationsNoneOutlined'
import { InputBase, Badge, ListItem, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import Avatar from '@material-ui/core/Avatar'
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Popover, List, SwipeableDrawer } from '@material-ui/core'
import Boardify from './media/Boardify.png'
import Lake from './media/At the lake.jpg'

const useStyles = makeStyles(theme => ({
    appbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "transparent",
        boxShadow: 'none',
        justifyContent: 'space-between'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },    
    searchField: {
        height: 'auto', 
        width: 'auto'
    },
    sideIcons: {
    },
    image: {
    }
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
        <AppBar position="fixed" className = {classes.appbar}>
            <img className={classes.image} src={Boardify}></img>
            <div className={classes.search}>
                <InputBase
                    placeholder="Search classes, boards or keywords" 
                />
                <IconButton className={classes.button}>
                    <SearchIcon />
                </IconButton>
            </div>
            <div className={classes.sideIcons}>
                <IconButton className={classes.button} onClick={handleClick}>
                    <Badge variant="dot" color="primary">
                        <NotificationsNoneOutlined />
                    </Badge>
                </IconButton>
                <IconButton className={classes.button}>
                    <SettingsOutlined />
                </IconButton>
                <IconButton className={classes.button} onClick={toggleDrawer(true)}>
                    <Avatar src={Lake}></Avatar>    
                </IconButton>  
            </div>      
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
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
                        Glenn has liked your post!
                    </ListItem>
                </List>
            </Popover> 
            <SwipeableDrawer
                anchor="right"
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
        </AppBar>  
    )
}

export default Appbar;
