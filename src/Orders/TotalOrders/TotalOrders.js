import React from "react";
import TotalOrdersCom from "./TotalOrdersCom";

function TotalOrders() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "294px",
        height: "291px",
        top: "191px",
        justifyContent: "space-between",
        background: "#121417",
        borderRadius: "4px",
      }}
    >
      <TotalOrdersCom
        numbers="100"
        heading="Total orders in week"
        percentage="10"
      />
      <TotalOrdersCom
        numbers="1000"
        heading="Total orders in month"
        percentage="50"
      />
      <TotalOrdersCom
        numbers="10000"
        heading="Total orders in year"
        percentage="80"
      />
    </div>
  );
}

export default TotalOrders;
