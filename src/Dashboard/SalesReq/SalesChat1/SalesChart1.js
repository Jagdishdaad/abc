import React from 'react'
import {Line} from 'react-chartjs-2';
import {Utils} from 'react-utils';

const options = {
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



const data = {
labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
datasets: [
{
  label: "User",
  data: [30, 40, 35, 40, 45, 25],
  fill: true,
  backgroundColor: "rgba(55, 81, 255, 0)",
  borderColor: "#3751FF",
  tension: 0.2,
},
{
  label: "Vendor",
  data: [10, 20, 5, 15, 25, 35],
  fill: false,
  borderColor: "#FFFFFF",
  tension: 0.4,
},
],
};


function SalesChart1(){

return (
    <div>
        <Line data={data} options={options} style={{ width:'1000px !important', height:'100% !important'}}/>
    </div>
)
}

export default SalesChart1;