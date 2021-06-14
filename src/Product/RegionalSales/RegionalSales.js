import { Typography } from "@material-ui/core";
import React from "react";
import "./RegionalSales.css";
import RegionalSalesData from "./RegionalSalesData/RegionalSalesData";
import RegionalSalesMap from "./RegionalSalesMap/RegionalSalesMap";

function RegionalSales() {
  return (
    <div className="Rsmp">
      <div className="Rsp1">
        <Typography
          style={{
            position: "absolute",
            width: "400px",
            height: "33px",

            top: "2179px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
            /* identical to box height */

            letterSpacing: "0.4px",

            /* White */

            color: "#FFFFFF",
          }}
        >
          Regional Sales
        </Typography>
      </div>
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
