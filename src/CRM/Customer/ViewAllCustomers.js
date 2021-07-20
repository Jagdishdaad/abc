import { Divider, Input, InputAdornment, Typography } from "@material-ui/core";
import { ArrowBack, Search } from "@material-ui/icons";
import React from "react";
import CustomerTable from "./CustomerTable";
import SelectRegion from "../Components/SelectRegion";

function ViewAllCustomers({ setIndex, setId }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        margin: "5% 3% 5% 4.5%",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowBack
            onClick={() => setIndex(8)}
            style={{
              fill: "#F5F5F5",
              marginTop: "2%",
              marginRight: "3%",
              cursor: "pointer",
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

        <SelectRegion />
      </div>
      <Divider
        style={{
          width: "90%",
          height: "0px",
          marginTop: "1%",
          border: "1px solid #2D2D2D",
        }}
      />
      <CustomerTable setIndex={setIndex} setId={setId} />
    </div>
  );
}

export default ViewAllCustomers;
