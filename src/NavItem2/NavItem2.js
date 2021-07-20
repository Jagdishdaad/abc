import React from "react";
import "./NavItem2.css";
function NavItem2({ name, index, val, setIndex }) {
  return (
    <div
      className="nav"
      style={
        index === val[0] ||
        index === val[1] ||
        index === val[2] ||
        index === val[3]
          ? { color: "#ffb600" }
          : { color: "white" }
      }
      onClick={() => setIndex(val[0])}
    >
      {name}
    </div>
  );
}

export default NavItem2;
