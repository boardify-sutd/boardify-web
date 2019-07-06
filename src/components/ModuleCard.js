import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardActionArea,
  IconButton
} from "@material-ui/core";
import MoreVertRounded from "@material-ui/icons/MoreVertRounded";
import Avatar from "@material-ui/core/Avatar";
import Folder from "@material-ui/icons/Folder";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Classes from './Classes'

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none'
    }
}));

function ModuleCard(props) {
    const classes = useStyles()

    return(
        <Grid item key={props.modName} xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
                <CardActionArea>
                    <Link to={{
                        pathname: '/myclasses',
                        state: {
                            modName: props.modName
                        }
                    }}
                    className={classes.link}
                    >
                    <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                        <Folder />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="More options">
                        <MoreVertRounded />
                        </IconButton>
                    }
                    title={props.modName}
                    subheader="15 boards"
                    />
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default ModuleCard

