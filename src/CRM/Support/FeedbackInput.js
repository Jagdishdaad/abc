import React from "react";
import { Search } from "@material-ui/icons";
import { Input, InputAdornment } from "@material-ui/core";

function FeedbackInput() {
  return (
    <Input
      style={{
        width: "14vw",
        height: "2.2vw",
        color: "#FFB600",
        border: "1px solid #FFB600",
        boxSizing: "border-box",
        borderRadius: "4px",
        marginRight: "5%",
        marginTop: "1.5%",
      }}
      startAdornment={
        <InputAdornment>
          <Search />
        </InputAdornment>
      }
    />
  );
}

export default FeedbackInput;
