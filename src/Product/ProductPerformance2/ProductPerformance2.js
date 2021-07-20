import { Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import ButtonGroup from "../../ButtonGroup";
import Chart2 from "./Chart2";
import ConMatDrop from "./ConMatdrop/ConMatDrop";
import PopularServices from "./PopularServices/PopularServices";
import "./ProductPerformance2.css";
import ProductSalesper from "./ProductSales%/ProductSales%";

function ProductPerformance2() {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  return (
    <div className="proPer2">
      <div className="proPer21">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "2vw" }}
          >
            <Typography className="proPer2Line1">
              Product Performance
            </Typography>

            <Typography className="proPer2Line2">
              as of 12 May 2021, 09:41 PM
            </Typography>
          </div>

          <ConMatDrop />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "3%",
            marginLeft: "55%",
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
        </div>
        <div style={{ marginTop: "5vw" }}>
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
