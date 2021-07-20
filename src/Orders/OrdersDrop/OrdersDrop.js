import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    borderRadius: "0.3vw !important",
    backgroundColor: "#FFB600",
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },

  input: {
    marginRight: theme.spacing(2),
    minWidth: "6vw",
    borderRadius: "0.3vw !important",
    position: "relative",
    backgroundColor: "#FFB600",
    padding: "0.5vw 0.5vw 0.5vw 1vw",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    lineHeight: "1vw",
    color: "#08090C",
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  menu: { backgroundColor: "#2D2D2D", minWidth: "6vw" },

  menuItems: {
    "&:hover ": {
      color: " #ffb600 !important",
    },
    "&:focus": {
      color: " #FFFFFF ",
    },
    "&.MuiListItem-root.Mui-selected": {
      backgroundColor: "#ffb600 !important",
      color: " black !important",
    },

    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    lineHeight: "1vw",
    color: "#FFFFFF",
    backgroundColor: "#2D2D2D !important",
  },
  inputlabel: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1vw",
    lineHeight: "0.5vw",
    color: "#121417 !important",
  },

  icon: {
    fill: "#ffb600",
  },
}));
const products = [
  "Construction Material",
  "Agents",
  "Commercial Vehicles",
  "Construction Machines",
  "Construction Chemicals",
];

function OrdersDrop() {
  const [filter, setFilter] = useState(0);
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      InputProps={{ disableOutline: true }}
    >
      <InputLabel className={classes.inputlabel}>All Categories</InputLabel>
      <Select
        input={<BootstrapInput />}
        MenuProps={{ classes: { paper: classes.menu } }}
      >
        {products?.map((product, index) => (
          <MenuItem
            className={classes.menuItems}
            onClick={() => setFilter(index)}
            value={index}
          >
            {product}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OrdersDrop;
