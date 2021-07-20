import React from "react";
import TotalOrdersCom from "./TotalOrdersCom";

function TotalOrders() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2vw",
        width: "18vw",
        height: "20vw",
        justifyContent: "space-between",
        background: "#121417",
        borderRadius: "0.5vw",
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
