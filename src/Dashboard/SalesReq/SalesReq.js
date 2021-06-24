import { Typography } from '@material-ui/core'
import React from 'react'
import SalesChart1 from './SalesChat1/SalesChart1'
import Request from './Requests/Request'

function SalesReq() {
    return (
        <div style={{display:'flex',justifyContent:'space-between', margin:'3% 1% 1% 1%'}}>
            <div style={{display:'flex', flexDirection:'column', color:'white', width:'60%'}}>
            
                <div  style={{fontSize:'30px',marginLeft:'10px'}}>
                   Sales 
                </div>
                <div  style={{marginLeft:'10px'}}>
                as of 12 May 2021,09:41 PM
                </div>
               
                <SalesChart1 />
              
            </div>
            
            <Request/>
            
        </div>
    )
}

export default SalesReq
