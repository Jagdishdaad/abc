import React from "react";
import { Typography } from "@material-ui/core";

import { ArrowUpward } from "@material-ui/icons";

function SalesCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "21vw",
        height: "10.5vw",
        background: "#2d2d2d ",
        border: "0.5px solid #ffffff",
        boxSizing: "border-box ",
        borderRadius: "0.8vw ",
        justifyContent: "space-between",
        padding: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "1.8vw",
            lineHeight: "2.4vw",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          {props.title}
        </Typography>
      </div>
      <div
        style={{
          display: "flex ",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "1.5vw ",
            lineHeight: "2.2vw",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          Rs {props.money}
        </Typography>
        <div style={{ display: "flex" }}>
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "1.5vw ",
              lineHeight: "2.2vw",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            + {props.growth}%
          </Typography>
          <ArrowUpward
            style={{
              fill: "#3CC13B",
              marginTop: "1%",
              width: "2vw",
              height: "2vw",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesCard;
