import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

function createData(name, sales, color, border, borderadius) {
  return { name, sales, color, border, borderadius };
}

const rows = [
  createData(
    "Maharastra",
    31000,
    "#3CC13B",
    "0.5px solid #2D2D2D",
    "4px 4px 0px 0px"
  ),
  createData("Gujarat", 30000, "#FFB600"),
  createData("Utter Pradesh", 29000, "#FFFFFF"),
  createData(
    "Andhra Pradesh",
    31000,
    "#EB5757",
    "0.5px solid #2D2D2D",
    "0px 0px 4px 4px"
  ),
];

const useStyles = makeStyles({
  data: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.4px",
    color: "#121417",
  },
});

function RegionalSalesData() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "24vw",
        height: "16vw",
        border: "0.5px solid #2D2D2D",
        border: "400px",
        boxSizing: "border-box",
        marginLeft: "-20%",
      }}
    >
      {rows.map((e) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: `${e.color}`,
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1vw 0 1vw",
            height: "16vh",
            border: `${e.border}`,
            borderRadius: `${e.borderadius}`,
          }}
        >
          <Typography className={classes.data}>{e.name}</Typography>
          <Typography className={classes.data}>{e.sales}</Typography>
        </div>
      ))}
    </div>
  );
}

export default RegionalSalesData;
