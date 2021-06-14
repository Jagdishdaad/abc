import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CRMChart from "../Components/CRMChart/CRMChart";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "User",
      data: [33, 43, 10, 20, 24, 58],
      fill: true,
      backgroundColor: "rgba(55, 81, 255, 0)",
      borderColor: "#3751FF",
      tension: 0.2,
    },
  ],
};

const options = {
  y: -10,
  plugins: {
    legend: {
      labels: {
        display: false,
      },
    },
  },
  layout: {
    padding: {
      top: 120,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: "right",

      grid: {
        borderWidth: 0,
        color: "#C4C4C4",
      },
    },
    x: {
      grid: {
        borderWidth: 0,
        tickColor: "grey",
      },
    },
  },
};
const useStyles = makeStyles({
  chart: {
    position: "absolute",
    width: "1105px",
    height: "380px ",
    left: "295px",
    right: "40px",
    top: "750.8px",
  },
});

function VendorChart() {
  return (
    <div>
      <CRMChart data={data} options={options} useStyles={useStyles} />
    </div>
  );
}

export default VendorChart;
