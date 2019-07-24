import React, {useEffect, Suspense, lazy } from "react";
import {
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    metrics: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }, 
}))

function Metrics(props) {
    const classes = useStyles()

    return (
        <div className={classes.metrics}>
            <Typography variant="h3" className={classes.number}>{props.number}</Typography>
            <Typography>{props.metricname}</Typography>
        </div>

    )   
}

export default Metrics