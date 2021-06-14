import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./SalesCard.css";

import { ArrowUpward } from "@material-ui/icons";

function SalesCard(props) {
  return (
    <div>
      <Card className="sales">
        <CardContent>
          <Typography className="title">{props.title}</Typography>
          <div className="number">
            <Typography className="money">Rs {props.money}</Typography>
            <Typography className="growth">
              + {props.growth}%<ArrowUpward style={{ fill: "#3CC13B" }} />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SalesCard;
