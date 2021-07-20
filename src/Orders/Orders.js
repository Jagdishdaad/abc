import { Input, InputAdornment, Typography } from "@material-ui/core";
import React, { useState } from "react";
import OrderChartBox from "./OrderChartBox/OrderChartBox";
import "./Orders.css";
import OrdersDrop from "./OrdersDrop/OrdersDrop";
import OrdersTable from "./OrdersTable/OrdersTable";
import TotalOrders from "./TotalOrders/TotalOrders";
import { Search } from "@material-ui/icons";
import ButtonGroup from "../ButtonGroup";

function Orders() {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: " Open Sans",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "2vw",
              lineHeight: "2.5vw",
              marginBottom: "4%",
              marginLeft: "2%",
            }}
          >
            Orders
          </Typography>
          <OrderChartBox />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2%",
          }}
        >
          <ButtonGroup
            setistoday={setistoday}
            setismonth={setismonth}
            setisyear={setisyear}
            isyear={isyear}
            istoday={istoday}
            ismonth={ismonth}
          />

          <TotalOrders />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "5%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "101%",
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
              marginLeft: "1.5%",
            }}
          >
            Orders Details
          </Typography>
          <div style={{ display: "flex" }}>
            <Input
              style={{
                width: "12vw",
                height: "2.2vw",
                color: "#FFB600",
                border: "1px solid #FFB600",
                boxSizing: "border-box",
                borderRadius: "0.3vw",
                marginRight: "2%",
                marginTop: "2.3%",
              }}
              endAdornment={
                <InputAdornment>
                  <Search style={{ width: "1.6vw", height: "1.6vw" }} />
                </InputAdornment>
              }
            />
            <OrdersDrop />
          </div>
        </div>
        <OrdersTable />
      </div>
    </div>
  );
}

export default Orders;
