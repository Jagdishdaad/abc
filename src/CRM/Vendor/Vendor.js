import { Button, Divider, Typography } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import React, { useState } from "react";
import ButtonGroup from "../../ButtonGroup";
import CRMFilter from "../Components/CRMFilter";
import CRMService from "../Components/CRMService";
import Support from "../Support/Support";
import "./Vendor.css";

import VendorsChart from "./VendorChart";
import VendorTable from "./VendorTable";

function Vendor({ index, setIndex, setId }) {
  const [istoday, setistoday] = useState(true);
  const [ismonth, setismonth] = useState(false);
  const [isyear, setisyear] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "5vw",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "20vw" }}>
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "33px",
              color: "#F5F5F5",
              marginRight: "10%",
            }}
          >
            Vendor
          </Typography>
          <CRMFilter />
        </div>
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
          width: "70vw",
          marginTop: "1%",
          height: "5%",
          border: "1px solid #2D2D2D",
        }}
      />
      <VendorTable setIndex={setIndex} setId={setId} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "10vh",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70vw",
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
          <div
            style={{
              display: "flex",
              width: "32vw",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CRMService />
            <ButtonGroup
              setistoday={setistoday}
              setismonth={setismonth}
              setisyear={setisyear}
              isyear={isyear}
              istoday={istoday}
              ismonth={ismonth}
            />
          </div>
        </div>
        <div>
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
        </div>

        <Support index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

export default Vendor;
