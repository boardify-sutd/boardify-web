import React from 'react';
import { Card, Link, Typography, CardActionArea } from '@material-ui/core';

function ClassModuleCard(props) {
    return(
        <Card>
            <Link to="/myclasses">
                <Card>
                    <CardActionArea>
                        <Typography>Physics</Typography>
                    </CardActionArea>
                </Card>
            </Link>
        </Card>
    )
}

export default ClassModuleCard

