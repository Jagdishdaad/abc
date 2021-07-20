import "./App.css";
import { useState } from "react";
import CustomerDetail from "./CRM/Customer/CustomerDetail/CustomerDetail";
import VendorDetail from "./CRM/Vendor/VendorDetail/VendorDetail";
import UseWindowSize from "./utils/UseWindowSize";
import Main from "./Main/Main";

function App() {
  const window = UseWindowSize();
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(0);

  return (
    <div style={{ display: "block", overflowX: "hidden" }}>
      {index === 72 || index === 82 ? (
        index === 72 ? (
          <VendorDetail setIndex={setIndex} />
        ) : (
          <CustomerDetail setIndex={setIndex} val={id} />
        )
      ) : (
        <Main setIndex={setIndex} index={index} setId={setId} />
      )}
    </div>
  );
}

export default App;
