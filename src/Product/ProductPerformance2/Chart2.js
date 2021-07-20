import React from "react";
import { Line } from "react-chartjs-2";

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
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 80.62, 45, 68, 90, 95, 88],
      fill: false,

      borderColor: "#56CCF2",
      tension: 0.4,
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#FFB600",
      tension: 0.4,
    },
    {
      label: "Third dataset",
      data: [13, 35, 55, 31, 44, 26],
      fill: false,
      borderColor: "#DC7979",
      tension: 0.4,
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Chart Title",
  },
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      grid: {
        borderWidth: 0,
        color: "#C4C4C4",
        borderDash: [5, 5],
      },
    },
  },
};

function Chart2() {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart2;
