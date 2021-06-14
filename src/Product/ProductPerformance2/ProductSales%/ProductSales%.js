import { Typography } from "@material-ui/core";
import React from "react";
import DoughnutGraph from "./DoughnutGraph";
import "./ProductSales%.css";

function ProductSalesper() {
  return (
    <div className="productSalesper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography className="productSaleperLine1">Product Sales %</Typography>
        <Typography style={{ color: "#FFB600", fontWeight: "bold" }}>
          12.5%
        </Typography>
      </div>

      <Typography className="productSaleperLine2">
        Compared to previous month
      </Typography>

      <div>
        <DoughnutGraph percentage="12.5" />
      </div>
    </div>
  );
}

export default ProductSalesper;
