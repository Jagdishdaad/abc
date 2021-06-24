import React from "react";

import "./Product.css";
import ProductList from "./ProductList/ProductList.js";
import ProductPerformance2 from "./ProductPerformance2/ProductPerformance2.js";
import RegionalSales from "./RegionalSales/RegionalSales.js";
import Sales from "./Sales/Sales.js";
import ProPer1 from "./ProPer1/ProPer1";

function Product() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Sales />
      <ProPer1 />
      <ProductPerformance2 />
      <div
        style={{
          width: "100%",
        }}
      >
        <ProductList />
      </div>
      <RegionalSales />
    </div>
  );
}

export default Product;
