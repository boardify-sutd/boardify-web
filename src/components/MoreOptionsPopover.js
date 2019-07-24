import React from 'react'
import { makeStyles, Typography, List, ListItem, Popover } from '@material-ui/core';

function MoreOptionsPopover(props){
    return (
        <Popover 
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                >
                <List component="nav">
                    <ListItem button>
                        Download
                    </ListItem>
                    <ListItem button>
                        Save to favourites
                    </ListItem>
                </List>
            </Popover>
    )
}

export default MoreOptionsPopover