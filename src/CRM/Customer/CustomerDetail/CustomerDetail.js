import { Button, Divider, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import ContactCard from "../../Components/ContactCard/ContactCard";
import CustomerOrder from "./CustomerOrder";
import CustomerOrderCard from "./CustomerOrderCard";

function CustomerDetail() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          padding: "20px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
            color: "#FFFFFF",
            marginBottom: "24px",
          }}
        >
          Customer Details
        </Typography>
        <ContactCard />
        <Button
          style={{
            marginTop: "66px",
            width: "121px",
            height: "36px",
            background: "#FFB600",
            borderRadius: "4px",
            textTransform: "unset",
            marginLeft: "30%",
          }}
        >
          Block Customer
        </Button>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          position: "absolute",
          height: "600px",

          left: "388px",
          top: "24px",
          backgroundColor: "#2D2D2D",
          width: "2px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "388px",
          padding: "20px",
        }}
      >
        <Typography
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "33px",
            color: "#FFFFFF",
            marginBottom: "24px",
          }}
        >
          Requests
        </Typography>
        <div
          style={{
            position: "relative",
            width: "340.32px",
            height: "560px",
            left: "-0.32px",
            top: "-0.94px",
            background: "#2D2D2D",
            borderRadius: "4px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
        </div>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          position: "absolute",
          height: "600px",
          left: "776px",
          top: "24px",
          backgroundColor: "#2D2D2D",
          width: "2px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "780px",
          padding: "20px",
        }}
      >
        <Close style={{ fill: "#FFFFFF", marginLeft: "2470%" }} />
        <CustomerOrderCard />
      </div>
    </div>
  );
}

export default CustomerDetail;
