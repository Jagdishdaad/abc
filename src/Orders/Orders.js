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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          justifyContent: "space-around",
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
              fontSize: "24px",
              lineHeight: "33px",
              marginBottom: "5vh",
              marginLeft: "2vw",
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
            marginTop: "2vh",
          }}
        >
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
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            justifyContent: "space-around",
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
                marginRight: "2%",
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
