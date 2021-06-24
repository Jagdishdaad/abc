import React from 'react'
import DenseTable from './OrderTabel/Ordertabel.js'
import './RecentOrder.css'
import NativeSelects from './OrderTabel/Button.js'
import { Input, InputAdornment, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

function RecentOrder() {
    return (
        <div className="RecentOrder">
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <div style={{fontSize:'30px'}}>
             Recent Orders
             </div>
             <div style={{display:"flex",margin:"1%"}}>
              <div>
              <Input
              style={{
                width: "142px",
                height: "40px",
                color: "#FFB600",
                border: "1px solid #FFB600",
                boxSizing: "border-box",
              }}
              endAdornment={
                <InputAdornment>
                  <Search />
                </InputAdornment>
              }
              />      
              </div>


             <div style={{backgroundColor:'#FFB600', marginBottom:'1%',borderRadius:'10px',width: "142px",height: "40px",margin:"1%"}}>
                  <NativeSelects />
                  </div>
             </div>  
             </div>
            <div style={{width:'100%'}}> 
            <DenseTable/>
            </div>
        </div>
    )
}

export default RecentOrder
