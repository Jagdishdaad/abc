import React from "react";
import AddAdver from "./AddAdver/AddAdver.js";
import Adver from "./Adver/Adver.js";
import AdverPer from "./AdverPerf/AdverPer.js";

function Advertisment({ setIndex, setAdverId }) {
  return (
    <div>
      <AddAdver setIndex={setIndex} />
      <Adver setIndex={setIndex} setAdverId={setAdverId} />
      <AdverPer />
    </div>
  );
}

export default Advertisment;
