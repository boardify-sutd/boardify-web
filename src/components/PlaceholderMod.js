import React from "react";
import {
  makeStyles
} from "@material-ui/core";
import '../PlaceholderMod.scss'

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 0, 
        paddingTop: '56%'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

function PlaceholderMod(props) {
    const classes = useStyles()

    return (
        <div className="card" />
    )   
}

export default PlaceholderMod