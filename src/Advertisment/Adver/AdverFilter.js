import React from "react";
import Adimg from "./Image/advertisment.png";
import Advercard from "./AdverCard/Advercard.js";
import { Typography } from "@material-ui/core";

function AdverFilter({ filteredArray, setIndex, setAdverId }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {filteredArray.map((e) => (
        <Advercard
          product_image={Adimg}
          product_name={e.adv_placement}
          product_service="Product/service:"
          product_s={e.product_type}
          product_impression="Impressions:"
          product_i={e.clicks}
          date={e.created_at}
          product_id={e.id}
          setIndex={setIndex}
          setAdverId={setAdverId}
        />
      ))}
    </div>
  );
}

export default AdverFilter;
