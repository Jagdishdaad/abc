import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import { ArrowDropDown } from "@material-ui/icons";

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

function SelectProduct() {
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
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        style={{
          width: "160px",
          height: "30px",
          textTransform: "unset",
          border: "1px solid #FFB600",
          boxSizing: " border-box",
          borderRadius: "4px",
          color: "#FFB600",
          fontSize: "12px",
          lineHeight: "16px",
          backgroundColor: "transparent",
        }}
      >
        Select a Product <ArrowDropDown style={{ fill: "#FFB600" }} />
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
          <ListItemText primary="Cement" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Bricks" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Agents" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Crane" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default SelectProduct;
