import React from 'react'
import Addlabels from './Addlabels/Addlabels.js';

function AddAdver() {
    return (
        <div>
            <button style={{backgroundColor:'orange',fontSize:'30px',marginTop:'2%',marginLeft:'40px',borderRadius:'10px',padding:'1%'}}>+ Add Advertisment</button>
        
        <div>            
        <div style={{display:'flex', justifyContent:'center', justifyContent:'space-around',margin:'2%'}}>
            <Addlabels title="Total Impression" number="29.6K" 
        />
        <Addlabels title="Total view" number="56K" 
    
        />
        <Addlabels title="Total Advertisment" number="Ultra Tech cement" 
        />
        
        </div>  
        </div>
        
        </div>
    )}

export default AddAdver
