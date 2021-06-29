import { Divider, Input, InputAdornment, Typography } from "@material-ui/core";
import { ArrowBack, Search } from "@material-ui/icons";
import React from "react";
import CustomerTable from "./CustomerTable";
import SelectRegion from "../Components/SelectRegion";

function ViewAllCustomers() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-bet",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
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
            Cutomers
          </Typography>
          <Input
            style={{
              width: "12vw",
              height: "4.5vh",
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

        <SelectRegion />
      </div>
      <Divider
        style={{
          width: "100%",
          height: "0px",
          border: "2px solid #2D2D2D",
        }}
      />
      <CustomerTable />
    </div>
  );
}

export default ViewAllCustomers;
