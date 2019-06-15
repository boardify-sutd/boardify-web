import React from 'react'

function AvatarMenu() {
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