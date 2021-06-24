import { InputLabel } from '@material-ui/core';
import React from 'react'
import SelectB from './SelectButton/SelectB';
import Iconimg from './Imageicon1/upload.png';
import SelectB2 from './SelectButton/SelectB2';
import SelectB3 from './SelectButton/SelectB3';


function AddForm() {
    return (
        
        <div style={{display:'flex',padding:'5%'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',justifyContent:'center' ,backgroundColor:'#2D2D2D',width:'400px',height:'350px',color:'white'}}>    
                <div style={{marginLeft:'75px'}}>
                <img src={Iconimg} width='250px' height='200px'/>
                </div>
                <div style={{marginLeft:'80px',fontSize:'20px'}}>
                    Drag and Drop image here
                </div>
                <div style={{marginLeft:'75px',marginTop:'20px'}}>
                    <button style={{backgroundColor:'orange',fontSize:'20px',borderRadius:'10px',padding:'5%'}}>Select from your device </button>
                </div>
            </div>
            <div style={{color:'white', marginLeft:'300px'}}>
                <div style={{marginLeft:'10px',fontWeight:'bold',fontSize:'40px'}}>
                    Advertisment
                </div>
                <div style={{marginLeft:'10px',fontSize:'20px',color:'#2D2D2D'}}>
                    Dimensions
                </div>
                <div>
                    <SelectB style={{Color:'#2D2D2D',color:'white'}}/>
                </div>
                <div style={{marginLeft:'10px',fontSize:'20px',color:'#2D2D2D'}}>
                    Advertisment Format
                </div>
                <div>
                    <SelectB2 style={{Color:'#2D2D2D',color:'white'}}/>
                </div>
                <div style={{marginLeft:'10px',fontSize:'20px',color:'#2D2D2D'}}>
                    product
                </div>
                <div>
                    <input placeholder="Type Product/Services" style={{ type:'text' ,backgroundColor:'#2D2D2D',borderColor:'#121417',width:'450px',height:'60px',color:'white',marginLeft:'5px'}}/>
                </div>
                <div style={{marginLeft:'10px',fontSize:'20px',color:'#2D2D2D'}}>
                    Advertisment Placement
                </div>
                <div>
                    <input placeholder="Hero Banner" style={{ type:'text' ,backgroundColor:'#2D2D2D',borderColor:'#121417',width:'450px',height:'60px',color:'white',marginLeft:'5px'}}/>
                </div>
                <div style={{marginLeft:'10px',fontSize:'20px',color:'#2D2D2D'}}>
                Advertisment Placement Page
                </div>
                <div>
                    <SelectB3 style={{Color:'#2D2D2D',color:'white'}}/>
                </div>
                <div>
                    <button style={{backgroundColor:'orange',fontSize:'30px',borderRadius:'10px',padding:'5%', marginTop:'100px' ,marginLeft:'10px'}}>Save </button>
                </div>
            </div>
        </div>
    )
}

export default AddForm
