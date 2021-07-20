import React from "react";
import { Bar } from "react-chartjs-2";

function Graph1(props) {
  return (
    <div style={{ marginTop: "6%" }}>
      <Bar data={props.data} options={props.options} />
    </div>
  );
}

export default Graph1;
