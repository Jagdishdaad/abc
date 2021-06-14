import { Typography } from "@material-ui/core";
import React from "react";

function CustomerOrder() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          justifyContent: "space-around",
          width: "340px",
          height: "80px",
          borderBottom: "1px solid #FFFFFF",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: " normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingLeft: "16.64px",
          }}
        >
          Construction Materials
        </Typography>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: " normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "19px",
            color: "#FFFFFF",
            paddingLeft: "16.64px",
          }}
        >
          Ultratech OPC 53
        </Typography>
      </div>
    </div>
  );
}

export default CustomerOrder;
