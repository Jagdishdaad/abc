import React from 'react'
import NativeSelects from './AdPerChart/AdPerButton.js';
import AdPerChart from './AdPerChart/AdPerChart.js';

function AdverPer() {
    return (
        <div className="AdverPer">
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginLeft:'40px',marginRight:'7%'}}>
             <div style={{fontSize:'30px', color:'white'}}>
             Advertisment Performace
             </div>
                  <div style={{backgroundColor:'#FFB600', marginBottom:'1%',borderRadius:'10px'}}>
                  <NativeSelects />
                  </div> 
          </div>
          <div >
            <AdPerChart />
        </div>
        </div>
    )
}

export default AdverPer
