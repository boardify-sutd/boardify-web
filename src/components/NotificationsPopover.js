import React from 'react'

function NotificationsPopover() {
    return (
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
    )
}

export default NotificationsPopover