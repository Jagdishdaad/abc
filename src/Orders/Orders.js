import { Input, InputAdornment, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import OrderChartBox from "./OrderChartBox/OrderChartBox";
import "./Orders.css";
import OrdersDrop from "./OrdersDrop/OrdersDrop";
import OrdersTable from "./OrdersTable/OrdersTable";
import TotalOrders from "./TotalOrders/TotalOrders";
import { Search } from "@material-ui/icons";

function Orders() {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  const todayClicked = () => {
    setistoday(true);
    setismonth(false);
    setisyear(false);
  };
  const monthClicked = () => {
    setistoday(false);
    setismonth(true);
    setisyear(false);
  };
  const yearClicked = () => {
    setistoday(false);
    setismonth(false);
    setisyear(true);
  };
  return (
    <div style={{ display: "flex", marginTop: "110px", marginLeft: "300px " }}>
      <div>
        <Typography
          style={{
            width: "81px",
            height: "33px",
            color: "#FFFFFF",
            fontFamily: " Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33px",
          }}
        >
          Orders
        </Typography>
        <OrderChartBox />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
        <ToggleButtonGroup exclusive className="ordersBtns1 ">
          <ToggleButton
            onClick={todayClicked}
            style={{
              backgroundColor: istoday ? "#ffb600" : "#121417",
              color: istoday ? "#121417" : "#ffb600",
              textTransform: "unset",
            }}
          >
            Today
          </ToggleButton>
          <ToggleButton
            onClick={monthClicked}
            style={{
              backgroundColor: ismonth ? "#ffb600" : "#121417",
              color: ismonth ? "#121417" : "#ffb600",
              textTransform: "unset",
            }}
          >
            Month
          </ToggleButton>
          <ToggleButton
            onClick={yearClicked}
            style={{
              backgroundColor: isyear ? "#ffb600" : "#121417",
              color: isyear ? "#121417" : "#ffb600",
              textTransform: "unset",
            }}
          >
            Year
          </ToggleButton>
        </ToggleButtonGroup>
        <TotalOrders />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1020px",
            left: "289px",
            justifyContent: "space-between",
            position: "absolute",
            top: "556px",
          }}
        >
          <Typography
            style={{
              width: "400px",
              height: "33px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "33px",
              letterSpacing: "0.4px",
              color: "#FFFFFF",
            }}
          >
            Order Details
          </Typography>
          <div style={{ display: "flex" }}>
            <Input
              style={{
                width: "142px",
                height: "30px",
                color: "#FFB600",
                border: "1px solid #FFB600",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
              endAdornment={
                <InputAdornment>
                  <Search />
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
