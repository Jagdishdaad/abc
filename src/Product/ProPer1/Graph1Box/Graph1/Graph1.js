import React from "react";
import { Bar } from "react-chartjs-2";

function Graph1(props) {
  return (
    <div>
      <Bar data={props.data} options={props.options} />
    </div>
  );
}

export default Graph1;
