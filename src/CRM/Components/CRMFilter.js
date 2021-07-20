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
    border: "1px solid #FFB600",
    backgroundColor: "Transperant",
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },

  input: {
    minWidth: "4vw",
    borderRadius: "0.3vw !important",
    position: "relative",
    backgroundColor: "Transperant",
    padding: "0.5vw 0.5vw 0.5vw 1vw",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    lineHeight: "1vw",
    color: "#FFB600",
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
  inputlabel1: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    lineHeight: "0.5vw",
    color: "#FFB600 !important",
  },
  inputlabel2: {
    color: "#121417 !important",
  },

  icon: {
    fill: "#ffb600",
  },
}));
const filters = ["New", "Max Leads", "Min Leads"];

function CRMFilter() {
  const [filterId, setFilterId] = useState(-1);
  const classes = useStyles();

  return (
    <FormControl variant="outlined" InputProps={{ disableOutline: true }}>
      <InputLabel
        className={filterId === -1 ? classes.inputlabel1 : classes.inputlabel2}
      >
        Filter
      </InputLabel>
      <Select
        input={<BootstrapInput />}
        MenuProps={{ classes: { paper: classes.menu } }}
        inputProps={{ classes: { icon: classes.icon } }}
        style={{ color: "#ffb600" }}
      >
        {filters?.map((filter, index) => (
          <MenuItem
            className={classes.menuItems}
            onClick={() => setFilterId(index)}
            value={index}
          >
            {filter}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CRMFilter;
