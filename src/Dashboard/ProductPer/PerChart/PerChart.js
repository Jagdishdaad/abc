import React from "react";
import { Line } from "react-chartjs-2";

/* data: data, */
const options = {
  plugins: {
    legend: {
      display: true,
      align: "end",
      labels: {
        boxHeight: 0.2,
        boxWidth: 30,
        color: "#FFFFFF",
        padding: 15,
      },
    },
    // layout: {
    //   padding: {
    //     top: 120,
    //   },
    // },
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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "This Month",
      data: [30, 40, 35, 40, 45, 25],
      fill: true,
      backgroundColor: "rgba(55, 81, 255, 0)",
      borderColor: "#3751FF",
      tension: 0.4,
    },
    {
      label: "Previous Month",
      data: [10, 20, 5, 15, 25, 35],
      fill: false,
      borderColor: "#FFFFFF",
      tension: 0.4,
    },
  ],
};

function PerChart() {
  return (
    <div style={{ display: "flex", marginTop: "3%" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default PerChart;
