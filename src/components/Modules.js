import React from 'react'
import Appbar from './Appbar';
import { 
    makeStyles, 
    Typography, 
    Grid, 
    Container, 
    Button, 
    Breadcrumbs } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import Lake from './media/At the lake.jpg'
import ModuleCard from './ModuleCard'
import Classes from './Classes'

const useStyles = makeStyles((theme) => ({
    main: {
        
    },
    breadcrumb: {

    },
    header: {
        display: "inline-flex",
        marginBottom: theme.spacing(2)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(4)
    },
    cardContent: {
        flexGrow: 1
    },
    cardMedia: {
        height: 0,
        paddingTop: "56%"
    },
    toolbar: theme.mixins.toolbar
}))

const mods = ['Physics', 'HASS', 'Math', 'Biology'];
function Modules() {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Appbar />

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            <Breadcrumbs className={classes.breadcrumb} separator="›" aria-label="Breadcrumb">
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Typography color="textPrimary">My Modules</Typography>
            </Breadcrumbs>

            {/*One week grid*/ }
            <div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <div className={classes.header}>
                        <Typography variant="h4" color="primary">
                            My Modules
                        </Typography>
                    </div>
                    <Grid container spacing={3}>
                        {mods.map(mod => (
                            <ModuleCard modName={mod}/>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )

}

export default Modules;