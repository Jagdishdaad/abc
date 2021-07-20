import React from "react";
import { Card, Typography } from "@material-ui/core";
import "./Addlabels.css";

const Addlabels = (props) => {
  return (
    <div>
      <Card className="add-label">
        <Typography className="addLabelTitle">{props.title}</Typography>

        <Typography className="addLabelNumber">{props.number}</Typography>
        <Typography className="addLabelText">{props.text}</Typography>
      </Card>
    </div>
  );
};

export default Addlabels;
