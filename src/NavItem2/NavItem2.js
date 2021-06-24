import React from 'react'
import "./NavItem2.css"
function NavItem2({name,index,val,setIndex}) {
    return (
        <div className="nav" style={index === val ? {color:"#ffb600"} : {color:"white"}} onClick={() => setIndex(val)}>
            {name}
        </div>
    )
}

export default NavItem2
