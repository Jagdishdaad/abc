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
    backgroundColor: "#FFB600 ",
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },

  input: {
    minWidth: "8vw",
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
  "Cement",
  "Cranes",
  "Marbles & Tiles",
  "Tmt steel & Iron bars",
  "Piling Machine",
  "Material agents",
  "Backhoe",
];

function ProductDrop() {
  const [filter, setFilter] = useState(-1);
  const classes = useStyles();

  return (
    <FormControl variant="outlined" InputProps={{ disableOutline: true }}>
      <InputLabel className={classes.inputlabel}>Products</InputLabel>
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

export default ProductDrop;
