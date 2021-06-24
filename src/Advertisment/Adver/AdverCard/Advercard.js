import { Card ,Typography } from '@material-ui/core';
import React from 'react'
import './AdverCard.css';

const Advercard=(props) => {
    return (
        <div >
            <Card style={{backgroundColor:'#2D2D2D', width:'1500px',height:'200px',border: '0.5px  solid #FFFFFF',
                        borderRadius:' 20px',margin:'20px', display:'flex',flexDirection:'row',padding:'2%'}}>
               <div style={{display:'flex',flexDirection:'row' , justifyContent:'space-between', alignItems:'center', width:1500}}>
                    <div > 
                    <img src={props.product_image} width='250px' height='200px'/>
                    </div>
            
                    <div style={{ display:'flex',flexDirection:'column' , marginRight:600 }}>        
                        <Typography style={{fontSize:'40px',color:'white'}}>{props.product_name}</Typography>
                         
                        <div>
                            <div style={{ display:'flex' }}>       
                            <Typography style={{fontSize:'30px',color:'white'}}>{props.product_impression}</Typography>
                            <Typography style={{fontSize:'20px',color:'white',marginTop:10 ,marginLeft:5}}>{props.product_i}</Typography>
                            </div>
                            <div style={{ display:'flex' }}>
                            <Typography style={{fontSize:'30px',color:'white'}}>{props.product_service}</Typography>
                            <Typography style={{fontSize:'20px',color:'white', marginTop:10 ,marginLeft:5}}>{props.product_s}</Typography>
                            </div>   
                        </div>         
                        
                            
                    </div>
                    <div style={{ display:'flex', marginTop:200 }}>
                    <Typography style={{fontSize:'20px',color:'white'}}>{props.date}</Typography>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Advercard
