import React from "react";
import AddForm from "./AddForm/AddForm.js";
import BackButton from "./BackButton/BackButton.js";

function AddingAdd({ setIndex }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BackButton setIndex={setIndex} />
      <AddForm />
    </div>
  );
}

export default AddingAdd;
