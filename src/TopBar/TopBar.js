import React from "react";
import InputBase from "@material-ui/core/InputBase";
import "./TopBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Avatar from "@material-ui/core/Avatar";

function TopBar() {
  const useStyles = makeStyles((theme) => ({
    inputInput: {
      fontSize: "200%",
      fontFamily: "Open Sans",
      fontStyle: " normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "22px",
      color: "#FFFFFF",
      opacity: 0.85,
    },
  }));
  const classes = useStyles();
  return (
    <div className="topdiv">
      <InputBase
        placeholder="Search A Vendor,Service,User,Product"
        inputProps={{ "aria-label": "search" }}
        className="searchbox"
        classes={{
          input: classes.inputInput,
        }}
        endAdornment={
          <SearchIcon style={{ color: "white", width: 30, height: 30 }} />
        }
      />
      <div className="toprightdiv">
        <NotificationsNoneOutlinedIcon
          style={{
            color: "#ffb600",
            marginRight: "10%",
            width: 40,
            height: 40,
          }}
        />
        <Avatar>H</Avatar>
      </div>
    </div>
  );
}

export default TopBar;
