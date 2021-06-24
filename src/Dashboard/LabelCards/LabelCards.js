import React from 'react'
import Label from './Labels/Label.js'

function LabelCards() {
    return (
        <div style={{display:'flex'}}>
            <Label title="Total No. of Vendors" number="500" percentage="20%" duration="Since last month"
        />
        <Label title="Total No. of Users" number="800" percentage="20%" duration="Since last month"
    
        />
        <Label title="Revenue Genetrated By Vendors" number="800" percentage="20%" duration="Since last month"
        />
        <Label title="Revenue Genetrated By Users" number="800" percentage="20%" duration="Since last month"
        />
        <Label title="New Vendors" number="800" percentage="20%" duration="Since last month"
        />
         <Label title="New Users" number="500" percentage="20%" duration="Since last month"
        />
        </div>
    )
}

export default LabelCards;
