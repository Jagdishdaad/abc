import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

function ButtonGroup({
  setistoday,
  setismonth,
  setisyear,
  isyear,
  istoday,
  ismonth,
}) {
  const todayClicked = () => {
    setistoday(true);
    setismonth(false);
    setisyear(false);
  };
  const monthClicked = () => {
    setistoday(false);
    setismonth(true);
    setisyear(false);
  };
  const yearClicked = () => {
    setistoday(false);
    setismonth(false);
    setisyear(true);
  };
  return (
    <ToggleButtonGroup exclusive className="ordersBtns1 ">
      <ToggleButton
        onClick={todayClicked}
        style={{
          backgroundColor: istoday ? "#ffb600" : "#121417",
          color: istoday ? "#121417" : "#ffb600",
          textTransform: "unset",
        }}
      >
        Today
      </ToggleButton>
      <ToggleButton
        onClick={monthClicked}
        style={{
          backgroundColor: ismonth ? "#ffb600" : "#121417",
          color: ismonth ? "#121417" : "#ffb600",
          textTransform: "unset",
        }}
      >
        Month
      </ToggleButton>
      <ToggleButton
        onClick={yearClicked}
        style={{
          backgroundColor: isyear ? "#ffb600" : "#121417",
          color: isyear ? "#121417" : "#ffb600",
          textTransform: "unset",
        }}
      >
        Year
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ButtonGroup;
