import { Divider, Input, InputAdornment, Typography } from "@material-ui/core";
import { ArrowBack, Search } from "@material-ui/icons";
import React from "react";
import SelectProduct from "../Components/SelectProduct";
import SelectRegion from "../Components/SelectRegion";

import VendorTable from "./VendorTable";

function ViewAllVendors({ setIndex, setId }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "5% 3% 5% 4.5%",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowBack
            style={{
              fill: "#F5F5F5",
              marginTop: "2%",
              marginRight: "3%",
              cursor: "pointer",
            }}
            onClick={() => setIndex(7)}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "33px",
              color: "#F5F5F5",
              marginRight: "3%",
            }}
          >
            Vendors
          </Typography>
          <Input
            style={{
              width: "12vw",
              height: "2.2vw",
              color: "#FFB600",
              border: "1px solid #FFB600",
              boxSizing: "border-box",
              borderRadius: "0.3vw",
              marginTop: "2%",
            }}
            endAdornment={
              <InputAdornment>
                <Search />
              </InputAdornment>
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 340,
          }}
        >
          <SelectProduct />
          <SelectRegion />
        </div>
      </div>
      <Divider
        style={{
          width: "90%",
          height: "0px",
          marginTop: "1%",

          border: "1px solid #2D2D2D",
        }}
      />
      <VendorTable setIndex={setIndex} setId={setId} />
    </div>
  );
}

export default ViewAllVendors;
