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
        marginTop: "5%",
        width: "100%",
        marginLeft: "5%",
      }}
    >
      <Typography
        style={{
          display: "flex",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "33px",
          letterSpacing: "0.4px",
          marginBottom: "2%",
          color: "#FFFFFF",
          marginLeft: "-1%",
        }}
      >
        Regional Sales
      </Typography>

      <div className="Rsp22">
        <div className="Rspp11">
          <Typography
            style={{
              display: "flex",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: " 0.4px",
              color: "#FFFFFF",
              marginLeft: "52%",
            }}
          >
            Map showing area of operations
          </Typography>

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
