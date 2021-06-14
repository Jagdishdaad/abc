import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";

import "./ConMatDrop.css";

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#2D2D2D",
    border: "1px solid #d3d4d5",
    color: "#FFFFFF",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function ConMatDrop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="dropdownbutton"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ color: "grey" }}
      >
        <StyledMenuItem>
          <ListItemText primary="Construction Material" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Agents" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Construction Vehicles" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Construction Machines" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Construction Chemicals" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default ConMatDrop;
