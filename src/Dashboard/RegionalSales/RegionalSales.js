import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./RegionalSales.css";
import RegionalSalesData from "./RegionalSalesData/RegionalSalesData";
import RegionalSalesMap from "./RegionalSalesMap/RegionalSalesMap";

function RegionalSales() {
  return (
    <div style={{margin:'1%'}}>
=
        <p style={{ color: 'white',fontSize:'30px', }}>Regional Sales</p>
        <div className="Mapcontainer">
        <card className="card">
        <CardContent>
        <p className="text">Map showing area of operations</p>
        <RegionalSalesMap />
        </CardContent>
        </card>
        
        
          <RegionalSalesData />
        
        </div>
    </div>
  );
}

export default RegionalSales;
