import { Typography } from "@material-ui/core";
import React from "react";
import Progress from "react-progressbar";
import icon from "./fa-solid_level-up-alt.svg";

function TotalOrdersCom(props) {
  const per = props.percentage;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        marginTop: "1.5vw",
      }}
    >
      <div>
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.8vw",
            lineHeight: "2vw",
            color: "#FFFFFF",
          }}
        >
          {props.numbers}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "18vw",
          justifyContent: "space-between",
          marginBottom: "0.5vw",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "0.8vw",
            lineHeight: "1vw",
            color: "#FFFFFF",
          }}
        >
          {props.heading}
        </Typography>
        <div style={{ display: "flex", width: "2.5vw" }}>
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "0.8vw",
              lineHeight: "1vw",
              color: "#FFB600",
            }}
          >
            {per}
          </Typography>
          <img src={icon} style={{ marginTop: "-20%" }} />
        </div>
      </div>

      <div>
        <Progress
          completed={per}
          color="#FFB600"
          style={{
            width: "18vw",
            backgroundColor: "#2D2D2D",
            radius: 2,
          }}
        />
      </div>
    </div>
  );
}

export default TotalOrdersCom;
