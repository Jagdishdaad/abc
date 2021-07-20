import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import NavItem from "../NavItem/NavItem";
import NavItem2 from "../NavItem2/NavItem2";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo from "../Logo/Logo";
import "./Main.css";
import CRMim from "./Nav_Bar_icons/CRM.png";
import Dashboardim from "./Nav_Bar_icons/Dashboard.png";
import Ordersim from "./Nav_Bar_icons/Orders.png";
import Productsim from "./Nav_Bar_icons/Products.png";
import Managementim from "./Nav_Bar_icons/Management.png";
import Advertisementim from "./Nav_Bar_icons/Announcements.png";
import Logoutim from "./Nav_Bar_icons/Logout.png";
import Facebookim from "./Nav_Bar_icons/Facebook.png";
import Twitterim from "./Nav_Bar_icons/Twitter.png";
import Instagramim from "./Nav_Bar_icons/Instagram.png";
import MainPageData from "./MainPageData";
import NavItem3 from "../NavItem3/NavItem3";

function Main({ index, setIndex, setId }) {
  const items = [
    <SidebarItem>
      <Logo />
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem
          name="DashBoard"
          index={index}
          val={0}
          setIndex={setIndex}
          image={Dashboardim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem
          name="Orders"
          index={index}
          val={2}
          setIndex={setIndex}
          image={Ordersim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem
          name="Products"
          index={index}
          val={1}
          setIndex={setIndex}
          image={Productsim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <Accordion
        style={{ marginLeft: "-2%" }}
        // expanded={
        //   index === 3 ||
        //   index === 7 ||
        //   index === 8 ||
        //   index === 81 ||
        //   index === 82 ||
        //   index === 83 ||
        //   index === 71 ||
        //   index === 72 ||
        //   index === 73
        //     ? true
        //     : false
        // }
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={
                index === 3 ||
                index === 7 ||
                index === 8 ||
                index === 81 ||
                index === 82 ||
                index === 83 ||
                index === 71 ||
                index === 72 ||
                index === 73
                  ? { fill: "black" }
                  : { fill: "white" }
              }
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={
            index === 3 ||
            index === 7 ||
            index === 8 ||
            index === 81 ||
            index === 82 ||
            index === 83 ||
            index === 71 ||
            index === 72 ||
            index === 73
              ? "NavItemActiveCRM"
              : "NavItemPassive"
          }
          onClick={() => setIndex(3)}
        >
          <img
            src={CRMim}
            style={
              index === 3 ||
              index === 7 ||
              index === 8 ||
              index === 81 ||
              index === 82 ||
              index === 83 ||
              index === 71 ||
              index === 72 ||
              index === 73
                ? {
                    marginRight: "5%",
                    marginLeft: "-6%",
                    filter: "invert(100%)",
                  }
                : { marginRight: "5%", marginLeft: "-6%" }
            }
          />
          CRM
        </AccordionSummary>
        <AccordionDetails className="AccDetail">
          <NavItem2
            name="Vendor"
            index={index}
            val={[7, 71, 72, 73]}
            setIndex={setIndex}
          />
          <NavItem2
            name="Customer"
            index={index}
            val={[8, 81, 82, 83]}
            setIndex={setIndex}
          />
        </AccordionDetails>
      </Accordion>
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem
          name="Management"
          index={index}
          val={4}
          setIndex={setIndex}
          image={Managementim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem3
          name="Advertisement"
          index={index}
          val={[5, 51, 52]}
          setIndex={setIndex}
          image={Advertisementim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div style={{ display: "flex" }}>
        <NavItem
          name="Logout"
          index={index}
          setIndex={setIndex}
          val={6}
          image={Logoutim}
        />
      </div>
    </SidebarItem>,
    <SidebarItem>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          margin: "8% 0 0 0",
        }}
      >
        <img src={Facebookim} />
        <img src={Instagramim} />
        <img src={Twitterim} />
      </div>
    </SidebarItem>,
  ];
  return (
    <Sidebar
      content={items}
      background="#2D2D2D"
      // width="20%"
      hoverHighlight="none"
      closeOnItemSelect={false}
    >
      <MainPageData index={index} setIndex={setIndex} setId={setId} />
    </Sidebar>
  );
}

export default Main;
