import React, { useState, useEffect } from "react";
import "./Sales.css";
import SalesCard from "./SalesCard";

function Sales() {
  return (
    <div className="salesMain">
      <SalesCard title="Vendor Sales" money="75,000" growth="0.7" />

      <SalesCard title="User Sales" money="56,000" growth="1.7" />

      <SalesCard title="Total Sales" money="1,31,000" growth="1" />
    </div>
  );
}

export default Sales;
