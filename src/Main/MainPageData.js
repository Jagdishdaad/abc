import React, { useState } from "react";
import TopBar from "../TopBar/TopBar";
import Product from "../Product/Product";
import Orders from "../Orders/Orders";
import Vendor from "../CRM/Vendor/Vendor";
import Dashboard from "../Dashboard/Dashboard";
import Advertisment from "../Advertisment/Advertisment";
import AddingAdd from "../AddingAdd/AddingAdd";
import Customer from "../CRM/Customer/Customer";
import ViewAllVendors from "../CRM/Vendor/ViewAllVendors";
import ViewAllCustomers from "../CRM/Customer/ViewAllCustomers";
import Feedback from "../CRM/Support/Feedback";
import ViewOneAdver from "../Advertisment/Adver/ViewOneAdver";

function MainPageData({ index, setIndex, setId }) {
  const [adverId, setAdverId] = useState(-1);
  return (
    <div>
      <TopBar />
      {index === 0 ? <Dashboard /> : ""}
      {index === 5 ? (
        <Advertisment setIndex={setIndex} setAdverId={setAdverId} />
      ) : (
        ""
      )}

      {index === 51 ? <AddingAdd setIndex={setIndex} /> : ""}

      {index === 52 && <ViewOneAdver setIndex={setIndex} adverId={adverId} />}

      {index === 1 ? <Product /> : ""}
      {index === 2 ? <Orders /> : ""}
      {index === 3 ? setIndex(7) : ""}
      {index === 7 ? (
        <Vendor setIndex={setIndex} index={index} setId={setId} />
      ) : (
        ""
      )}
      {index === 8 ? (
        <Customer setIndex={setIndex} index={index} setId={setId} />
      ) : (
        ""
      )}

      {index === 81 ? (
        <ViewAllCustomers setIndex={setIndex} setId={setId} />
      ) : (
        ""
      )}

      {index === 71 ? <ViewAllVendors setIndex={setIndex} setId={setId} /> : ""}

      {index === 73 ? <Feedback setIndex={setIndex} index={index} /> : ""}
      {index === 83 ? <Feedback setIndex={setIndex} index={index} /> : ""}
    </div>
  );
}

export default MainPageData;
