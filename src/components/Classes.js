import React, { useEffect } from 'react'
import { makeStyles, Typography, Grid, Container, Card, CardMedia, CardContent, CardActions, IconButton, Breadcrumbs } from '@material-ui/core';
import MoreVertRounded from '@material-ui/icons/MoreVertRounded'
import { Link } from 'react-router-dom';
import ClassCard from './ClassCard';

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
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4)
    },
    toolbar: theme.mixins.toolbar
}))

var classList = ["Lecture 1", "Lecture 2", "Cohort"]
function Classes(props) {
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
                        <Link color="inherit" to={{
                            pathname: props.location.state.link,
                            state: {
                                name: props.location.state.name
                            }    
                        }} >
                            {props.location.state.name}
                        </Link>
                        <Typography color="textPrimary">
                            {props.location.state.modName}
                        </Typography>
                    </Breadcrumbs>
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
                                name={props.location.state.name}
                            />
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )

}

export default Classes;