import "./App.css";
import Customer from "./CRM/Customer/Customer";
import CustomerDetail from "./CRM/Customer/CustomerDetail/CustomerDetail";
import ViewAllCustomers from "./CRM/Customer/ViewAllCustomers";
import Vendor from "./CRM/Vendor/Vendor";
import VendorDetail from "./CRM/Vendor/VendorDetail/VendorDetail";
import ViewAllVendors from "./CRM/Vendor/ViewAllVendors";
import Orders from "./Orders/Orders";
import Product from "./Product/Product";
import UseWindowSize from "./utils/UseWindowSize";

function App() {
  const window = UseWindowSize();

  return (
    <div
      style={{
        width: window.width,
        height: window.height,
      }}
    >
      {/* <VendorDetail /> */}
      {/* <ViewAllVendors /> */}
      {/* <CustomerDetail /> */}
      {/* <ViewAllCustomers /> */}
      {/* <Customer /> */}
      <Vendor />
      {/* <Product /> */}
      {/* <Orders /> */}
    </div>
  );
}

export default App;
