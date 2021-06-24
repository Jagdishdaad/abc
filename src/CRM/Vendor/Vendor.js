import { Button, Divider, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import Support from "../Support/Support";
import "./Vendor.css";

import VendorsChart from "./VendorChart";
import VendorTable from "./VendorTable";

function Vendor({ setIndex }) {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "7%",
        marginTop: "5%",
      }}
    >
      <div
        style={{
          width: "1105px",
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            width: "126px",
            height: "33px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "33px",
            color: "#F5F5F5",
          }}
        >
          Vendor
        </Typography>
        <Button
          style={{
            width: "140px",
            height: "36px",
            background: "#FFB600",
            borderRadius: "4px",
            varient: "contain",
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "centre",
            color: "#08090C",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            textTransform: "unset",
          }}
          onClick={() => setIndex(71)}
        >
          View all Vendors
        </Button>
      </div>
      <Divider
        style={{
          width: "1105px",
          height: "0px",
          marginTop: "1%",
          border: "2px solid #2D2D2D",
        }}
      />
      <VendorTable />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "1105px",
            marginTop: "5%",
          }}
        >
          <Typography
            style={{
              width: "109.57px",
              height: "24px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "33px",
              color: "#F5F5F5",
              letterSpacing: "0.4px",
            }}
          >
            Services
          </Typography>

          <ToggleButtonGroup exclusive className="VendorBtnGrp">
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
        <Typography
          style={{
            width: "603px",
            height: "16px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "16px",
            color: "#9FA2B4",
            letterSpacing: "0.1px",
          }}
        >
          as of 25 May 2021,9:41 PM
        </Typography>

        <VendorsChart />

        <Support />
      </div>
    </div>
  );
}

export default Vendor;
