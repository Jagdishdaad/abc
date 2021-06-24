import { Directions } from "@material-ui/icons";
import React from "react";
import LabelCards from "./LabelCards/LabelCards.js";
import SalesReq from "./SalesReq/SalesReq.js";
import RegionalSales from "./RegionalSales/RegionalSales.js";
import RecentOrder from "./RecentOrder/RecentOrder.js";
import ProductPer from "./ProductPer/ProductPer.js";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <LabelCards />
      <SalesReq className="SalesReq" />
      <RecentOrder />
      <ProductPer />
      <RegionalSales />
    </div>
  );
};

export default Dashboard;
