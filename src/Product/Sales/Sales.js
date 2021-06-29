import React, { useState, useEffect } from "react";
import "./Sales.css";
import SalesCard from "./SalesCard";

function Sales() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://localhost:3000/product/maximum_sales_count")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        console.log(items),

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div className="salesMain">
      <SalesCard title="Vendor Sales" money="75,000" growth="0.7" />

      <SalesCard title="User Sales" money="56,000" growth="1.7" />

      <SalesCard title="Total Sales" money="1,31,000" growth="1" />
    </div>
  );
}

export default Sales;
