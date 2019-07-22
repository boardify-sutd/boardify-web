import React, {useEffect, Suspense, lazy } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import BoardDialog from './BoardDialog';
import BoardSmallCard from './BoardSmallCard';
import ModuleCard from './ModuleCard'
import { Link } from 'react-router-dom';
import PlaceholderCard from "./PlaceholderCard";

const useStyles = makeStyles((theme) => ({
    metrics: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

function Metrics(props) {
    const classes = useStyles()

    return (
        <div className={classes.metrics}>
            <Typography>52</Typography>
            <Typography>Upvotes</Typography>
        </div>

    )   
}

export default Metrics