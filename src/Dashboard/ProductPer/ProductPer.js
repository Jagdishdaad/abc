import React from 'react'
import PerChart from './PerChart/PerChart'
 import './ProductPer.css' 
 import NativeSelects from './PerChart/Button.js'

function ProductPer() {
    return (
        <div className="ProductPer">
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
             <div style={{fontSize:'30px'}}>
             Product Performace
             </div>
                  <div style={{backgroundColor:'#FFB600', marginBottom:'1%',borderRadius:'10px',width: "142px",height: "40px"}}>
                  <NativeSelects />
                  </div> 
          </div>
          <div >
            <PerChart/>
        </div>
      </div>
    )
}

export default ProductPer
