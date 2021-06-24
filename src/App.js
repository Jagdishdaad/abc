import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./CRM/Customer/Customer";
import CustomerDetail from "./CRM/Customer/CustomerDetail/CustomerDetail";
import ViewAllCustomers from "./CRM/Customer/ViewAllCustomers";
import Vendor from "./CRM/Vendor/Vendor";
import VendorDetail from "./CRM/Vendor/VendorDetail/VendorDetail";
import ViewAllVendors from "./CRM/Vendor/ViewAllVendors";
import Orders from "./Orders/Orders";
import Product from "./Product/Product";
import UseWindowSize from "./utils/UseWindowSize";
import Main from "./Main/Main";

function App() {
  const window = UseWindowSize();

  return (
    <div
      style={{
        width: window.width,
        height: window.height,
        overflow: "hidden",
      }}
    >
      <Main />
      {/* <Router>
        <Switch>
          <Route path="/vendor">
            <Vendor />
          </Route>
          <Route path="/vendordetail">
            <VendorDetail />
          </Route>
          <Route path="/viewallvendors">
            <ViewA  llVendors />
          </Route>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/customerdetail">
            <CustomerDetail />
          </Route>
          <Route path="/viewallcustomers">
            <ViewAllCustomers />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Orders />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
