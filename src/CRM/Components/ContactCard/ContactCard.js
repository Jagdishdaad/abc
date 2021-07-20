import { Card, Typography } from "@material-ui/core";
import React from "react";
import Name from "./ProfileIcons/Name.png";
import Company from "./ProfileIcons/Company Name.png";
import Mail from "./ProfileIcons/Mail.png";
import Vector from "./ProfileIcons/Vector.png";
import Whatsapp from "./ProfileIcons/Whatsapp no.png";
import Location from "./ProfileIcons/Location.png";

function ContactCard({ details }) {
  return (
    <div>
      <Card
        style={{
          width: "26vw",
          height: "20vw",
          background: "#2D2D2D",
          border: "0.5vw solid #2D2D2D",
          boxSizing: "border-box",
          borderRadius: "0.6vw",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={Name}
            style={{
              width: 12.42,
              height: 16.47,

              marginLeft: "10%",

              marginTop: "10%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: "5%",

              marginTop: "9.5%",
            }}
          >
            {details.name}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={Company}
            style={{
              width: 20.56,
              height: 25.83,

              marginLeft: "8%",

              marginTop: "2%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: "5%",

              marginTop: "2%",
            }}
          >
            {details.companyName}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={Mail}
            style={{
              width: 12.06,
              height: 14,

              marginLeft: "10%",

              marginTop: "4%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: " 6%",

              marginTop: "2%",
            }}
          >
            {details.emailId}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={Vector}
            style={{
              width: 14.25,
              height: 16.79,

              marginLeft: "10%",

              marginTop: "2.5%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: "4.8%",

              marginTop: "1.8%",
            }}
          >
            {details.phoneNum}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={Whatsapp}
            style={{
              width: 15.35,
              height: 18.08,

              marginLeft: "10%",
              marginTop: "2%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: " 4%",

              marginTop: "1.5%",
            }}
          >
            {details.whatsappNum}
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={Location}
            style={{
              width: 12.8,
              height: 16,

              marginLeft: "10%",

              marginTop: "2%",
            }}
          />
          <Typography
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              color: "#FFFFFF",

              marginLeft: "5%",

              marginTop: "1%",
            }}
          >
            {details.address}
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default ContactCard;
