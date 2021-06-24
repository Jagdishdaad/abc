import { Typography } from "@material-ui/core";
import React from "react";
import "./RegionalSales.css";
import RegionalSalesData from "./RegionalSalesData/RegionalSalesData";
import RegionalSalesMap from "./RegionalSalesMap/RegionalSalesMap";

function RegionalSales() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        width: "100%",
      }}
    >
      <Typography
        style={{
          display: "flex",
          marginLeft: "3vw",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "33px",
          letterSpacing: "0.4px",
          marginBottom: "2%",
          color: "#FFFFFF",
        }}
      >
        Regional Sales
      </Typography>

      <div className="Rsp2">
        <div className="Rspp1">
          <RegionalSalesMap />
        </div>
        <div className="Rspp2">
          <RegionalSalesData />
        </div>
      </div>
    </div>
  );
}

export default RegionalSales;
