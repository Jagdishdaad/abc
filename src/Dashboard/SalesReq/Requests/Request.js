import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'
import {Pie} from 'react-chartjs-2';
import './Request.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const config = {
    type: 'pie',
    /* data: data, */
  };

  const data = {
   
    datasets: [{
      label: 'My First Dataset',
      data: [ 50,50,50,300 ],
      backgroundColor: [
        'rgb(255, 255, 0)',
        'rgb(255, 0, 0)',
        'rgb(0,154,205)',
        'rgb(102,255,0)'
      ],
      hoverOffset: 4
    }]
  };


function Request() {
    return (
        <div >
        <Card  className="card1">
        <CardContent className="Card" >
        <Typography >       
                            <div style={{fontSize:'30px'}}>
                            Requests
                            </div>
                            <div>
                            This month
                            </div> 
                 </Typography>
                <div   > 
                <Typography > <Pie data={data} config={config} /></Typography>
                </div>
                <div  className="Status" > 
                <Typography ><div>
                <FiberManualRecordIcon className="icon1"/>
                            Complete 
                            </div>
                            <div>
                <FiberManualRecordIcon className="icon2"/>
                            Pending
                            </div> 
                 </Typography>
               
                <Typography >
                            <div>
                            <FiberManualRecordIcon className="icon3"/>
                            Rejected
                            </div>
                            <div>
                            <FiberManualRecordIcon className="icon4"/>
                            In-progress
                            </div> 
                 </Typography>
                </div>

            </CardContent>
        </Card>

        </div>
    )
}

export default Request
