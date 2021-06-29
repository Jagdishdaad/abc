import { Button, Divider, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import ContactCard from "../../Components/ContactCard/ContactCard";
import VendorService from "./VendorService";
import VendorServiceCard from "./VendorServiceCard";

function VendorDetail({ setIndex }) {
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
          Vendor Details
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
          Block Vendor
        </Button>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          position: "absolute",
          height: "752px",

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
          Services
        </Typography>
        <div
          style={{
            position: "relative",
            width: "342px",
            height: "690px",
            left: "-0.32px",
            top: "-0.94px",
            background: "#2D2D2D",
            borderRadius: "4px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
          <VendorService />
        </div>
      </div>
      <Divider
        orientation="vertical"
        light="true"
        style={{
          position: "absolute",
          height: "752px",
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
        <Close
          style={{ fill: "#FFFFFF", marginLeft: "95%", cursor: "pointer" }}
          onClick={() => setIndex(7)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "616px",
            height: "690px",
            top: "30px",
            background: "#2D2D2D",
            borderRadius: "4px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <VendorServiceCard />
          <VendorServiceCard />
        </div>
      </div>
    </div>
  );
}

export default VendorDetail;
