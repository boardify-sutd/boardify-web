import React, { useEffect } from 'react'
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
import ModuleCard from './ModuleCard'
import Classes from './Classes'
import { getThemeProps } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    main: {
        
    },
    breadcrumb: {
        marginBottom: theme.spacing(2)
    },
    header: {
        display: "inline-flex",
        marginBottom: theme.spacing(2)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    cardGrid: {
        paddingTop: theme.spacing(1),
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

//TODO: find a way to retrieve user's mods and sort by term
const mods = ['Mathematics', 'Information Systems and Programming', 'Computational Structures', 'Introduction to Algorithms', 'Humanities and Social Sciences', 'Biology'];
function Modules(props) {

    const classes = useStyles()
    return (
        <div className={classes.main}>

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            {/*One week grid*/ }
            <div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Breadcrumbs className={classes.breadcrumb} separator="›" aria-label="Breadcrumb">
                        <Link color="inherit" to="/home" >
                            Home
                        </Link>
                        <Typography color="textPrimary">{props.location.state.name}</Typography>
                    </Breadcrumbs>
                    <div className={classes.header}>
                        <Typography variant="h4" color="primary">
                            {props.location.state.name}
                        </Typography>
                    </div>
                    <Grid container spacing={3}>
                        {mods.map(mod => (
                            <ModuleCard modName={mod} link='/mymodules' name={props.location.state.name}/>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )

}

export default Modules;