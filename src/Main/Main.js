import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import NavItem from "../NavItem/NavItem";
import NavItem2 from "../NavItem2/NavItem2";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo from "../Logo/Logo";
import "./Main.css";
import TopBar from "../TopBar/TopBar";
import Product from "../Product/Product";
import Orders from "../Orders/Orders";
import Vendor from "../CRM/Vendor/Vendor";
import Dashboard from "../Dashboard/Dashboard";
import Advertisment from "../Advertisment/Advertisment";
import Customer from "../CRM/Customer/Customer";
import ViewAllVendors from "../CRM/Vendor/ViewAllVendors";

function Main() {
  const [index, setIndex] = useState(0);
  const items = [
    <SidebarItem>
      <Logo />
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="DashBoard" index={index} val={0} setIndex={setIndex} />
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="Orders" index={index} val={2} setIndex={setIndex} />
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="Products" index={index} val={1} setIndex={setIndex} />
    </SidebarItem>,
    <SidebarItem>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="black" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={index === 3 ? "NavItemActive" : "NavItemPassive"}
          onClick={() => setIndex(3)}
        >
          CRM
        </AccordionSummary>
        <AccordionDetails className="AccDetail">
          <NavItem2 name="Vendor" index={index} val={7} setIndex={setIndex} />
          <NavItem2 name="Customer" index={index} val={8} setIndex={setIndex} />
        </AccordionDetails>
      </Accordion>
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="Management" index={index} val={4} setIndex={setIndex} />
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="Advertisement" index={index} val={5} setIndex={setIndex} />
    </SidebarItem>,
    <SidebarItem>
      <NavItem name="Logout" index={index} val={6} setIndex={setIndex} />
    </SidebarItem>,
  ];
  return (
    <Sidebar
      content={items}
      background="#2D2D2D"
      hoverHighlight="none"
      closeOnItemSelect={false}
    >
      <TopBar />
      {index === 0 ? <Dashboard /> : ""}
      {index === 5 ? <Advertisment /> : ""}
      {index === 1 ? <Product /> : ""}
      {index === 2 ? <Orders /> : ""}
      {index === 7 ? <Vendor setIndex={setIndex} /> : ""}
      {index === 8 ? <Customer /> : ""}
      {index === 71 ? <ViewAllVendors setIndex={setIndex} /> : ""}
    </Sidebar>
  );
}

export default Main;
