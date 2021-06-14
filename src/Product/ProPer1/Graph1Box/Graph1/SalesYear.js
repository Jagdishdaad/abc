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

      data: [6, 8, 7, 6, 1, 2, 3, 4.5, 3.8, 6.4, 2.7, 6.2],
      unitSuffix: "k",
    },
    {
      label: "Vendor",
      backgroundColor: "yellow",

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

  legend: {
    display: true,
    position: "right",
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      grid: {
        borderWidth: 0,
        color: "#C4C4C4",
        borderDash: [3, 3],
      },
    },
  },
};

function SalesYear() {
  return (
    <div>
      <Graph1 data={data} options={options} />
    </div>
  );
}

export default SalesYear;
