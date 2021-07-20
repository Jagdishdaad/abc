import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DoughnutGraph from "./DoughnutGraph";
import "./ProductSales%.css";
import axios from "axios";

function ProductSalesper() {
  let temp;

  const [per, setPer] = useState(0);
  const getdata = async () => {
    await axios
      .get("http://localhost:7000/user/product_sales%")
      .then(function (response) {
        temp = response?.data;

        setPer(temp.data);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="productSalesper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography className="productSaleperLine1">Product Sales %</Typography>
        <Typography className="productSaleperLine15">{per}%</Typography>
      </div>

      <Typography className="productSaleperLine2">
        Compared to previous month
      </Typography>

      <div
        style={{
          dispaly: "flex",
          width: "14.5vw",
          height: "14.5vw",
          marginLeft: "4.5vw",
          marginTop: "0.5vw",
        }}
      >
        <DoughnutGraph percentage={per} />
      </div>
    </div>
  );
}

export default ProductSalesper;
