import React from "react";
import Graph1Box from "./Graph1Box/Graph1Box";
import TopProduct from "./TopProduct/TopProduct";

function ProPer1() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "10vh",
        justifyContent: "space-between",
        justifyContent: "space-around",
      }}
    >
      <Graph1Box />
      <TopProduct />
    </div>
  );
}

export default ProPer1;
