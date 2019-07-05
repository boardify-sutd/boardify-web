import React, { useEffect } from 'react'
import Appbar from './Appbar';
import { makeStyles, Typography, Grid, Container, Card, CardMedia, CardContent, CardActions, IconButton, Breadcrumbs } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import ClassCard from './ClassCard';

const useStyles = makeStyles((theme) => ({
    main: {
        
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
    toolbar: theme.mixins.toolbar
}))

var classList = ["Lecture 1", "Lecture 2", "Cohort"]
function Classes(props) {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Appbar />

            {/*This div is to move content below appbar */}
            <div className={classes.toolbar} />

            <Breadcrumbs separator="›" aria-label="Breadcrumb">
                <Link color="inherit" to="/home" >
                    Home
                </Link>
                <Link color="inherit" to='/mymodules' >
                    My Modules
                </Link>
                <Typography color="textPrimary">
                    {props.location.state.modName}
                </Typography>
            </Breadcrumbs>
            {/*One week grid*/ }
            <div>

                <Container className={classes.cardGrid} maxWidth="lg">
                    <div className={classes.header}>
                        <Typography variant="h5" color="primary">
                            Week 1
                        </Typography>
                    </div>
                    <Grid container spacing={3}>
                        {classList.map(classItem => (
                            <ClassCard 
                                modName={props.location.state.modName} 
                                className ={classItem}
                            />
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )

}

export default Classes;