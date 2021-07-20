import React from "react";
import Graph1 from "./Graph1";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "User",
      backgroundColor: "black",

      data: [1, 2, 3, 8, 7, 6, 3, 4.5, 3.8, 6.4, 2.7, 6.2],
      unitSuffix: "k",
    },
    {
      label: "Vendor",
      backgroundColor: "#FFB600",

      data: [1, 1.3, 2.7, 2, 6, 2, 2, 5.2, 4.7, 2.7, 7.2, 2],
    },
  ],
};
const options = {
  title: {
    display: true,
    text: "Average Rainfall per month",
    fontSize: 20,
    titleFontColor: "#F9F0F0",
  },

  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxHeight: 0.2,
        boxWidth: 30,
        color: "#FFFFFF",
        padding: 15,
      },
    },
  },
  scales: {
    y: {
      grid: {
        borderWidth: 0,
        color: "#C4C4C4",
        borderDash: [3, 3],
      },
    },
  },
};

function SalesMonth() {
  return (
    <div>
      <Graph1 data={data} options={options} />
    </div>
  );
}

export default SalesMonth;
