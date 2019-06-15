import React from 'react'
import { List, ListItem, SwipeableDrawer } from '@material-ui/core'

function DrawerList() {
    return (
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
    )
}

export default DrawerList;