import React from 'react'
import Appbar from './Appbar';
import { makeStyles, Typography, Grid, Card, CardMedia, CardContent, IconButton, Breadcrumbs, List, ListItem, Popover } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import Lake from './media/At the lake.jpg'

const useStyles = makeStyles((theme) => ({
    classGrid: {
        position: 'relative',
        alignContent: 'center'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    toolbar: theme.mixins.toolbar
}))

function ClassesWeek() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    
      function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <Appbar />

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            {/*Inside One Week*/ }
            <Breadcrumbs separator="›" aria-label="Breadcrumb">
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Link color="inherit" to="/mymodules" >
                    My Modules
                </Link>
                <Link color="inherit" to="/myclasses" >
                    Physics
                </Link>
                <Typography color="textPrimary">Week 1</Typography>
            </Breadcrumbs>
            <div>
                <Grid container spacing="3" className={classes.classGrid}>
                    <Grid item xs={12}> 
                        <Typography variant="h2">Week 1</Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton onClick={handleClick}>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton onClick={handleClick}>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton onClick={handleClick}>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardContent className={classes.cardContent}>
                                <CardMedia
                                    image="./media/At the lake.jpg"
                                />
                                <Typography variant="body2" component="p">
                                    Card meta data
                                </Typography>
                                <IconButton onClick={handleClick}>
                                    <MoreVertRounded />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Popover 
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
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
                    <ListItem>
                        Download
                    </ListItem>
                    <ListItem>
                        Save to favourites
                    </ListItem>
                </List>
            </Popover>
        </div>
    )

}

export default ClassesWeek;