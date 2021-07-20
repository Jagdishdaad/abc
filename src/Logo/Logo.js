import React from "react";
import { Typography } from "@material-ui/core";

function Logo() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "5%",
        marginTop: "5%",
        marginLeft: "-5%",
      }}
    >
      <div style={{ display: "flex", padding: "5%" }}>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "20px",
            color: " #FFFFFF",
          }}
        >
          Construction
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          background: "#FFB600",
          borderRadius: "4px",
          padding: "5%",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "20px",
            color: " #08090C",
          }}
        >
          Flow
        </Typography>
      </div>
    </div>
  );
}

export default Logo;
