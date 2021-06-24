import './Label.css';
import React from 'react';
import { Card, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Label =(props) =>{
return(
    <div className="labels">
    
            <Card className="dashboard-label">
            <div className="dashboard-title"> 
                <Typography style={{fontSize:'1.5rem'}}>{props.title}</Typography>
                </div>
                
                <div className="dashboard-number"> 
                <Typography className="number">{props.number}</Typography>
                </div>
                <div className="dashboard-footer">
                <div className="container-font">
                <Typography >{props.percentage}</Typography>
                <ArrowUpwardIcon className="icon"/>
                </div>
                <Typography className="text-footer">{props.duration}</Typography>
                </div>
        </Card>
    </div>
)
}


export default Label;