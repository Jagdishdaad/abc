import { Typography } from "@material-ui/core";
import React from "react";
import Progress from "react-progressbar";

function TotalOrdersCom(props) {
  const per = props.percentage;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography
          style={{
            width: "42px",
            height: "33px",

            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "33px",

            textAlign: "center",

            color: "#FFFFFF",
          }}
        >
          {props.numbers}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "240px",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <Typography
          style={{
            height: "14px",

            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "10px",
            lineHeight: "14px",

            textAlign: "center",

            color: "#FFFFFF",
          }}
        >
          {props.heading}
        </Typography>
        <Typography
          style={{
            width: "21px",
            height: "14px",

            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "10px",
            lineHeight: "14px",

            textAlign: "center",

            color: "#FFB600",
          }}
        >
          {per}
        </Typography>
      </div>

      <div>
        <Progress
          completed={per}
          color="#FFB600"
          style={{ width: 240, backgroundColor: "#2D2D2D", radius: 2 }}
        />
      </div>
    </div>
  );
}

export default TotalOrdersCom;
