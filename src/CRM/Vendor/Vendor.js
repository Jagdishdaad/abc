import { Button, Divider, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import Support from "../Support/Support";
import VendorChart from "./VendorChart";
import VendorTable from "./VendorTable";
import "./Vendor.css";

function Vendor() {
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
    <div>
      <div
        style={{
          position: "absolute",
          width: "1105px",
          display: "flex",
          left: "295px",
          top: "141.5px",
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
        >
          View all Vendors
        </Button>
      </div>
      <Divider
        style={{
          position: "absolute",
          width: "1105px",
          height: "0px",
          left: "295px",
          top: "185px",

          border: "2px solid #2D2D2D",
        }}
      />
      <VendorTable />
      <div>
        <div
          style={{
            position: "absolute",
            top: "800.3px",
            display: "flex",
            left: "295px",
            justifyContent: "space-between",
            width: "1105px",
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

          <ToggleButtonGroup exclusive className="vendorBtnGrp">
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
            position: "absolute",
            left: "295px",

            top: "842.8px",
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
        <VendorChart />
        <Support />
      </div>
    </div>
  );
}

export default Vendor;
