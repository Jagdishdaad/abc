import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Graph1Box.css";
import SalesToday from "./Graph1/SalesToday";
import SalesMonth from "./Graph1/SalesMonth";
import SalesYear from "./Graph1/SalesYear";
import ButtonGroup from "../../../ButtonGroup";

function Graph1Box() {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  return (
    <div className="graph1Box">
      <div className="graph1Box1">
        <div
          style={{
            display: "flex",
            width: "48vw",
            justifyContent: "space-between",
            lineHeignt: "0.2",
          }}
        >
          <Typography className="line1">Product Performance</Typography>

          <ButtonGroup
            setistoday={setistoday}
            setismonth={setismonth}
            setisyear={setisyear}
            isyear={isyear}
            istoday={istoday}
            ismonth={ismonth}
          />
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
