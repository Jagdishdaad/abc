import { Typography } from "@material-ui/core";
import React from "react";

function VendorService({ details, index }) {
  return (
    <div
      style={
        index === 0
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "22vw",
              height: "5vw",
              padding: "1vw",
            }
          : {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "22vw",
              height: "5vw",
              borderTop: "0.1vw solid #FFFFFF",
              padding: "1vw",
            }
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: " normal",
            fontWeight: "bold",
            fontSize: "1vw",
            lineHeight: "1.4vw",
            color: "#FFFFFF",
          }}
        >
          {details.service}
        </Typography>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: " normal",
            fontWeight: "normal",
            fontSize: "1vw",
            lineHeight: "1.4vw",
            color: "#FFFFFF",
            marginLeft: -100,
          }}
        >
          Added On: {details.updatedAt}
        </Typography>
      </div>
      <Typography
        style={{
          fontFamily: "Open Sans",
          fontStyle: " normal",
          fontWeight: "normal",
          fontSize: "1vw",
          lineHeight: "1.4vw",
          color: "#FFFFFF",
        }}
      >
        {details.type}
      </Typography>
    </div>
  );
}

export default VendorService;
