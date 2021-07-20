import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DogenutGraph(props) {
  return (
    <CircularProgressbar
      value={props.percentage}
      text={`${props.percentage}%`}
      styles={{
        path: {
          stroke: "#FFB600",
        },
        trail: {
          stroke: "#121417",
        },
        text: {
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "1.4vw",
          lineHeight: "2vw",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          letterSpacing: " -0.01em",

          fill: "#FFFFFF",
        },
      }}
    />
  );
}

export default DogenutGraph;
