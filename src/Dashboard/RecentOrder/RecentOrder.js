import React, { useState } from "react";
import DenseTable from "./OrderTabel/Ordertabel.js";
import "./RecentOrder.css";
import NativeSelects from "./OrderTabel/Button.js";
import { Input, InputAdornment, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import RecentDrop from "./RecentDrop.js";

function RecentOrder() {
  const [filterIndex, setFilterIndex] = useState("/recent_orders_newest");

  return (
    <div className="RecentOrder">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "2vw",
            lineHeight: "2.5vw",
            letterSpacing: "0.4px",
            color: "#FFFFFF",
          }}
        >
          Recent Orders
        </Typography>
        <div style={{ display: "flex" }}>
          <Input
            style={{
              width: "11vw",
              height: "2.1vw",
              color: "#FFB600",
              border: "1px solid #FFB600",
              boxSizing: "border-box",
              borderRadius: "0.3vw",
              marginRight: "1.5%",
              marginLeft: "-4%",
              marginTop: "2.8%",
            }}
            endAdornment={
              <InputAdornment>
                <Search />
              </InputAdornment>
            }
          />
          <RecentDrop
            filterIndex={filterIndex}
            setFilterIndex={setFilterIndex}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {filterIndex === "/recent_orders_newest" ? (
          <DenseTable filterIndex={filterIndex} />
        ) : (
          ""
        )}
        {filterIndex === "/recent_orders_filter/pending" ? (
          <DenseTable filterIndex={filterIndex} />
        ) : (
          ""
        )}
        {filterIndex === "/recent_orders_filter/accepted" ? (
          <DenseTable filterIndex={filterIndex} />
        ) : (
          ""
        )}
        {filterIndex === "/recent_orders_filter/in-process" ? (
          <DenseTable filterIndex={filterIndex} />
        ) : (
          ""
        )}
        {filterIndex === "/recent_orders_filter/rejected" ? (
          <DenseTable filterIndex={filterIndex} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default RecentOrder;
