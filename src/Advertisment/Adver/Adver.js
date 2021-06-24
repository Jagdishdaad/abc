import React from 'react';
import NativeSelects from './AdverButton/AdverButton.js';
import Advercard from './AdverCard/Advercard.js';
import Adimg from './Image/advertisment.png';

function Adver() {
    return (
        <div>
             <div style={{display:'flex',justifyContent:'space-between',color:'white',margin:'2%',marginLeft:'40px',marginRight:'7%'}}>
                <div style={{fontSize:'30px'}}>
                Advertisment
                </div>
                <div style={{backgroundColor:'orange',borderRadius:'10px'}}>
                <NativeSelects />
                </div>
            </div>
        <div style={{width:'100%' ,display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',color:'white'}}>
        <Advercard product_image={Adimg} product_name="Ultra tech Cement" product_service="Product/service:" product_s="Cement/Construction Materials" product_impression="Impressions:" product_i="654" date="11/05/2021"/>
        <Advercard product_image={Adimg} product_name="Ultra tech Cement" product_service="Product/service:" product_s="Cement/Construction Materials" product_impression="Impressions:" product_i="654" date="11/05/2021"/>
        <Advercard product_image={Adimg} product_name="Ultra tech Cement" product_service="Product/service:" product_s="Cement/Construction Materials" product_impression="Impressions:" product_i="654" date="11/05/2021"/>
        </div>

        </div>
        
    )
}

export default Adver
