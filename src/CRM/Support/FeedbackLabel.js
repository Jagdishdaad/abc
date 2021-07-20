import React from "react";
import { Typography, makeStyles, Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  line1: {
    fontFamily: " Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: " 0.4px",
    color: "#FFFFFF",
  },
  line2: {
    fontFamily: " Open Sans",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: " 0.4px",
    color: "#FFFFFF",
  },
});

const options = ["Reply", "Mark as Read", "Mark as Unread", "Move to trash"];

const ITEM_HEIGHT = 48;

function FeedbackLabel(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "11.5vh",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2D2D2D",
        borderBottom: "2px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "60%",
          marginLeft: "2%",
        }}
      >
        <Avatar alt="Remy Sharp" src={props.photo} />
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: "3%" }}
        >
          <Typography className={classes.line1}>{props.name}</Typography>
          <Typography className={classes.line2}>{props.feedback}</Typography>
        </div>
      </div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ fill: "#FFFFFF" }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            backgroundColor: "#2D2D2D",
            color: "#FFFFFF",
            boxShadow:
              "-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)",
            borderRadius: "0px 0px 10px 10px",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default FeedbackLabel;
