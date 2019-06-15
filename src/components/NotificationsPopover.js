import React, {useState} from 'react'
import {Popover, List, ListItem} from '@material-ui/core'

function NotificationsPopover(props) {
    const open = props.open;

    return (
        <Popover 
            open={open}
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
                    Glenn has liked your post!
                </ListItem>
            </List>
        </Popover> 
    )
}

export default NotificationsPopover