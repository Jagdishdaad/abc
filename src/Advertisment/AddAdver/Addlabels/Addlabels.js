import React from 'react'
import { Card, Typography } from '@material-ui/core';
import './Addlabels.css'


 const Addlabels =(props) =>{
return(
    <div >
    
            <Card className="add-label">
            <div className="add-title"> 
                <Typography style={{fontSize:'1.5rem',fontWeight:'bold'}}>{props.title}</Typography>
                </div>
                
                <div > 
                <Typography style={{fontSize:'30px',color:'white'}}>{props.number}</Typography>
                </div>
                
        </Card>
    </div>
    )
}

export default Addlabels
