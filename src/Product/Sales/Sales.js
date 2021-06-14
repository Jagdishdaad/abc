import React from "react";
import "./Sales.css";
import SalesCard from "./SalesCard";

function Sales() {
  return (
    <div className="salesMain">
      <div>
        <SalesCard title="Vendor Sales" money="75,000" growth="0.7" />
      </div>
      <div>
        <SalesCard title="User Sales" money="56,000" growth="1.7" />
      </div>
      <div>
        <SalesCard title="Total Sales" money="1,31,000" growth="1" />
      </div>
    </div>
  );
}

export default Sales;
