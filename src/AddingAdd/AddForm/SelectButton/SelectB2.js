import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: "25vw !important",
    borderRadius: "0.3vw !important",
    backgroundColor: "#2D2D2D ",
    "label + &": {
      marginTop: theme.spacing(1),
    },
  },

  input: {
    marginRight: theme.spacing(2),
    width: "25vw !important",
    borderRadius: "0.3vw !important",
    position: "relative",
    backgroundColor: "#2D2D2D",
    padding: "1vw 0vw 1vw 1.5vw",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.9vw",
    lineHeight: "1vw",
    color: "#FFFFFF",
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  menu: { backgroundColor: "#2D2D2D", width: "25vw !important" },

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
    fontSize: "1vw",
    lineHeight: "0.5vw",
    color: "#FFFFFF !important",
    marginTop: "2%",
  },
  inputlabel2: {
    fontSize: "0",
  },

  icon: {
    fill: "#FFFFFF",
  },
}));
const format = ["JPG", "JPEG", "PNG", "MP4"];
export default function SelectB2({ formData, setFormData }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setFormData({ ...formData, format: event.target.value });
  };

  return (
    <FormControl variant="outlined" InputProps={{ disableOutline: true }}>
      <InputLabel
        className={
          formData?.format === "" ? classes.inputlabel1 : classes.inputlabel2
        }
      >
        Select Format
      </InputLabel>
      <Select
        input={<BootstrapInput />}
        MenuProps={{ classes: { paper: classes.menu } }}
        inputProps={{ classes: { icon: classes.icon } }}
        onChange={handleChange}
      >
        {format?.map((d, index) => (
          <MenuItem className={classes.menuItems} value={d}>
            {d}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
