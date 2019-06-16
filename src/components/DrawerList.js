import React, { useState } from 'react'
import { List, SwipeableDrawer, ListItem } from '@material-ui/core'
import { PropTypes } from 'prop-types'

function DrawerList(props) {
    const isOpen = props.isOpen;

    return (
        <SwipeableDrawer
            anchor="right"
            open={isOpen}
            onClose={props.toggleDrawer(false)}
            onOpen={props.toggleDrawer(true)}
        >
            <List>
                <ListItem>
                    Hey there's supposed to be something here
                </ListItem>
            </List>
        </SwipeableDrawer>   
    )
}



export default DrawerList;