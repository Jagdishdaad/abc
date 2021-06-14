import React from "react";
import { Doughnut } from "react-chartjs-2";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DogenutGraph(props) {
  return (
    <div
      style={{
        width: 170.67,
        height: 170.67,
        marginLeft: "25%",
        marginTop: "10%",
      }}
    >
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
            fontSize: "20px",
            lineHeight: "54px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: " -0.01em",

            fill: "#FFFFFF",
          },
        }}
      />
      ;
    </div>
  );
}

export default DogenutGraph;
