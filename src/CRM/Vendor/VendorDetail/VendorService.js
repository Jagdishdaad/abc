import { Typography } from "@material-ui/core";
import React from "react";

function VendorService() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          justifyContent: "space-around",
          width: "320px",
          height: "80px",
          borderBottom: "1px solid #FFFFFF",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              fontSize: "12px",
              lineHeight: "19px",
              color: "#FFFFFF",
              marginLeft: -100,
            }}
          >
            Added On: MM/YY
          </Typography>
        </div>
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

export default VendorService;
