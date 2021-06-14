import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Graph1Box.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import SalesToday from "./Graph1/SalesToday";
import SalesMonth from "./Graph1/SalesMonth";
import SalesYear from "./Graph1/SalesYear";

function Graph1Box() {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  const todayClicked = () => {
    setistoday(true);
    setismonth(false);
    setisyear(false);
  };
  const monthClicked = () => {
    setistoday(false);
    setismonth(true);
    setisyear(false);
  };
  const yearClicked = () => {
    setistoday(false);
    setismonth(false);
    setisyear(true);
  };

  return (
    <div className="graph1Box">
      <div className="graph1Box1">
        <div
          style={{
            display: "flex",
            width: "727px",
            justifyContent: "space-between",
            lineHeignt: "0.2",
          }}
        >
          <Typography className="line1">Product Performance</Typography>

          <ToggleButtonGroup exclusive className="graph1Box12">
            <ToggleButton
              onClick={todayClicked}
              style={{
                backgroundColor: istoday ? "#ffb600" : "#121417",
                color: istoday ? "#121417" : "#ffb600",
                textTransform: "unset",
              }}
            >
              Today
            </ToggleButton>
            <ToggleButton
              onClick={monthClicked}
              style={{
                backgroundColor: ismonth ? "#ffb600" : "#121417",
                color: ismonth ? "#121417" : "#ffb600",
                textTransform: "unset",
              }}
            >
              Month
            </ToggleButton>
            <ToggleButton
              onClick={yearClicked}
              style={{
                backgroundColor: isyear ? "#ffb600" : "#121417",
                color: isyear ? "#121417" : "#ffb600",
                textTransform: "unset",
              }}
            >
              Year
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Typography className="line2">as of 12 May 2021, 09:41 PM</Typography>
      </div>
      <div className="graph1Box2">
        <Typography className="line3">Sales</Typography>

        {istoday ? <SalesToday /> : ""}
        {ismonth ? <SalesMonth /> : ""}
        {isyear ? <SalesYear /> : ""}
      </div>
    </div>
  );
}

export default Graph1Box;
