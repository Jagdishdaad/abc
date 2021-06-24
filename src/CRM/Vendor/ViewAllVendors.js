import { Divider, Input, InputAdornment, Typography } from "@material-ui/core";
import { ArrowBack, Search } from "@material-ui/icons";
import React from "react";
import SelectProduct from "../Components/SelectProduct";
import SelectRegion from "../Components/SelectRegion";

import VendorTable from "./VendorTable";

function ViewAllVendors({ setIndex }) {
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
        <div style={{ display: "flex" }}>
          <ArrowBack
            style={{
              fill: "#F5F5F5",
              marginTop: "2%",
              marginRight: "3%",
            }}
            onClick={() => setIndex(7)}
          />
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
              marginRight: "3%",
            }}
          >
            Vendors
          </Typography>
          <Input
            style={{
              width: "142px",
              height: "30px",
              color: "#FFB600",
              border: "1px solid #FFB600",
              boxSizing: "border-box",
              borderRadius: "4px",
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
          position: "absolute",
          width: "1105px",
          height: "0px",
          left: "295px",
          top: "185px",

          border: "2px solid #2D2D2D",
        }}
      />
      <VendorTable />
    </div>
  );
}

export default ViewAllVendors;
