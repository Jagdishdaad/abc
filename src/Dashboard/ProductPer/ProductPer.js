import React from "react";
import PerChart from "./PerChart/PerChart";
import "./ProductPer.css";

import { Typography } from "@material-ui/core";
import ProductDrop from "./ProductDrop";

function ProductPer() {
  return (
    <div className="ProductPer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2vw",
            lineHeight: "2.5vw",
            letterSpacing: "0.4px",
            color: "#FFFFFF",
            marginLeft: "1%",
          }}
        >
          Product Performace
        </Typography>

        <ProductDrop />
      </div>
      <div>
        <PerChart />
      </div>
    </div>
  );
}

export default ProductPer;
