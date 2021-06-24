import React from 'react'
import "./Styles.css"
function NavItem({name,index,val,setIndex}) {
    return (
        <div className={index === val ? "NavItemActive" : "NavItemPassive"} onClick={() => setIndex(val)}>
            {name}
        </div>
    )
}

export default NavItem
