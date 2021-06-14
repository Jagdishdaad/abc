import { Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import Chart2 from "./Chart2";
import ConMatDrop from "./ConMatdrop/ConMatDrop";
import PopularServices from "./PopularServices/PopularServices";
import "./ProductPerformance2.css";
import ProductSalesper from "./ProductSales%/ProductSales%";

function ProductPerformance2() {
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
    <div className="proPer2">
      <div>
        <div style={{ display: "flex" }}>
          <Typography className="proPer2Line1">Product Performance</Typography>

          <ConMatDrop />
        </div>
        <Typography className="proPer2Line2">
          as of 12 May 2021, 09:41 PM
        </Typography>

        <ToggleButtonGroup exclusive className="proPer2btngrp">
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
        <div>
          <Chart2 />
        </div>
      </div>
      <div className="proPer22">
        <PopularServices />

        <ProductSalesper />
      </div>
    </div>
  );
}

export default ProductPerformance2;
