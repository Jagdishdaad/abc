import React from "react";
import { Line } from "react-chartjs-2";
import { Utils } from "react-utils";

/* data: data, */
const options = {
  plugins: {
    legend: {
      display: false,
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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "User",
      data: [5, 40, 35, 40, 45, 25],
      fill: true,
      backgroundColor: "rgba(55, 81, 255, 0)",
      borderColor: "#3751FF",
      tension: 0.4,
    },
  ],
};

function PerChart() {
  return (
    <div style={{ width: "98.5%", marginTop: "-5%" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default PerChart;
