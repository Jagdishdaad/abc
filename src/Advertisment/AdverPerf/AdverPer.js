import React from "react";

import AdPerChart from "./AdPerChart/AdPerChart.js";
import { Typography } from "@material-ui/core";
import AdverDrop from "./AdPerChart/AdverDrop/AdverDrop.js";

function AdverPer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3% 3% 5% 3%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "98%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
            letterSpacing: "0.4px",
            color: "#FFFFFF",
          }}
        >
          {" "}
          Adevertisement Performance
        </Typography>

        <AdverDrop />
      </div>
      <div>
        <AdPerChart />
      </div>
    </div>
  );
}

export default AdverPer;
