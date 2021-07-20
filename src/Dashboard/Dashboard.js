import React from "react";
import LabelCards from "./LabelCards/LabelCards.js";
import SalesReq from "./SalesReq/SalesReq.js";
import RecentOrder from "./RecentOrder/RecentOrder.js";
import ProductPer from "./ProductPer/ProductPer.js";
import RegionalSales from "../Product/RegionalSales/RegionalSales.js";

export const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "3%" }}>
      <LabelCards />
      <SalesReq />
      <RecentOrder />
      <ProductPer />
      <div style={{ marginLeft: "-3%", marginRight: "-3%" }}>
        <RegionalSales />
      </div>
    </div>
  );
};

export default Dashboard;
