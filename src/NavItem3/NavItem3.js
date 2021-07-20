import React from "react";
import "./Styles.css";

function NavItem3({ name, index, val, setIndex, image }) {
  return (
    <div
      className={
        index === val[0] || index === val[1] || index === val[2]
          ? "NavItemActive"
          : "NavItemPassive"
      }
      onClick={() => setIndex(val[0])}
    >
      <img
        src={image}
        style={
          ((index === val[0] || index === val[1] || index === val[2]) &&
            (val[0] !== 0 || val[1] !== 0 || val[2] !== 0)) ||
          ((val[0] === 0 || val[1] === 0 || val[2] === 0) && index !== 0)
            ? { marginRight: "5%", filter: "invert(100%)" }
            : { marginRight: "5%" }
        }
      />
      {name}
    </div>
  );
}

export default NavItem3;
