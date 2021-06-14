import React from "react";
import { Line } from "react-chartjs-2";

function CRMChart(props) {
  const useStyles = props.useStyles;
  const data = props.data;

  const options = props.options;
  const classes = useStyles();
  return (
    <div className={classes.chart}>
      <Line data={data} options={options} />
    </div>
  );
}

export default CRMChart;
