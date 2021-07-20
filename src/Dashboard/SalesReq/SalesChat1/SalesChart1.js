import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Utils } from "react-utils";

const options = {
  plugins: {
    legend: {
      display: true,
      align: "end",
      labels: {
        boxHeight: 0.2,
        boxWidth: 30,
        color: "#FFFFFF",
      },
    },
  },

  scales: {
    y: {
      beginAtZero: true,
      position: "right",
      type: "linear",

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
      label: "Today",
      data: [30, 40, 35, 40, 45, 25],
      fill: true,
      backgroundColor: "rgba(55, 81, 255, 0)",
      borderColor: "#3751FF",
      tension: 0.4,
    },
    {
      label: "Yesterday",
      data: [10, 20, 5, 15, 25, 35],
      fill: false,
      borderColor: "#FFFFFF",
      tension: 0.4,
    },
  ],
};

function SalesChart1() {
  let temp;
  const getaccpeted = async () => {
    await axios
      .get("http://localhost:7000/user/recent_orders_filter/Pending")
      .then(function (response) {
        temp = response?.data;
      });
    console.log(temp);
  };

  useEffect(() => {
    getaccpeted();
  }, []);
  return (
    <div
      style={{
        width: "50vw",
        marginTop: "4vw",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
}

export default SalesChart1;
