import { Typography } from "@material-ui/core";
import React from "react";
import SalesChart1 from "./SalesChat1/SalesChart1";
import Request from "./Requests/Request";

function SalesReq() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "5%",
        width: "100%",
        justifyContent: "space-between",

        height: "35vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          color: "white",
          width: "60%",
        }}
      >
        <div
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2vw",
            lineHeight: "2.5vw",
            letterSpacing: "0.4px",
            color: "#FFFFFF",
            marginLeft: "1.8%",
          }}
        >
          Sales
        </div>
        <div
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "0.95vw",
            lineHeight: "1.2vw",
            letterSpacing: "0.1px",
            color: "#FFFFFF",
            marginLeft: "1.8%",
          }}
        >
          as of 12 May 2021,09:41 PM
        </div>

        <SalesChart1 />
      </div>

      <Request />
    </div>
  );
}

export default SalesReq;
