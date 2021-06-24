import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function BackButton() {
    return (
        <div>
            <button style={{backgroundColor:'#121417',borderColor:'#121417' ,fontSize:'30px',color:'white',marginTop:'4%',marginLeft:'80px' }}><ArrowBackIcon/> Back</button>
        </div>
    )
}

export default BackButton
