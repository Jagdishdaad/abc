import "./PopularServices.css";
import React from "react";
import { Typography } from "@material-ui/core";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  serviceline: {
    fontFamily: "Open Sans !important",
    fontStyle: "normal",
    fontWeight: "normal !important",
    fontSize: "13px !important",
    lineHeight: "18px !important",
    color: "#FFFFFF",
    letterSpacing: "0.4px !important",
    marginBottom: "8px !important",
  },
});

function PopularServices() {
  const classes = useStyles();
  return (
    <div className="popularServices">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "63%",
        }}
      >
        <Typography className="popularline1">Popular Services</Typography>
        <Typography className="popularline2">(Monthwise)</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 34,
          }}
        >
          <Typography className={classes.serviceline}>
            Construction Material
          </Typography>
          <Typography className={classes.serviceline}>
            Construction Machines
          </Typography>
          <Typography className={classes.serviceline}>Agents</Typography>
          <Typography className={classes.serviceline}>
            Construction Chemicals
          </Typography>
          <Typography className={classes.serviceline}>
            Construction vehicles
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 38,
            marginLeft: 30,
            width: 100,
          }}
        >
          <div
            style={{
              height: 24,
              width: "120%",
              backgroundColor: "red",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Sales
          </div>
          <div
            style={{
              height: 24,
              width: "60%",
              backgroundColor: "yellow",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Sales
          </div>
          <div
            style={{
              height: 24,
              width: "140%",
              backgroundColor: "green",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Sales
          </div>
          <div
            style={{
              height: 24,
              width: "90%",
              backgroundColor: "blue",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Sales
          </div>
          <div
            style={{
              height: 22,
              width: "120%",
              backgroundColor: "grey",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Sales
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularServices;
