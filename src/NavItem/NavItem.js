import { InvertColors } from "@material-ui/icons";
import React from "react";
import "./Styles.css";
function NavItem({ name, index, val, setIndex, image }) {
  return (
    <div
      className={index === val ? "NavItemActive" : "NavItemPassive"}
      onClick={() => setIndex(val)}
    >
      <img
        src={image}
        style={
          (index === val && val != 0) || (val === 0 && index != 0)
            ? { marginRight: "5%", filter: "invert(100%)" }
            : { marginRight: "5%" }
        }
      />
      {name}
    </div>
  );
}

export default NavItem;
