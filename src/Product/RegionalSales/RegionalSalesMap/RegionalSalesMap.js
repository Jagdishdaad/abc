import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 600,
  center: [78.9629, 22.5937],
};

const geographyStyle = {
  default: {
    outline: "none",
    width: "1000px",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

const markers = [
  {
    markerOffset: -30,
    name: "Uttar Pradesh",
    arcs: [[83, -34, 84, -40, 85, -65, 86, 87, 88, 89, 90]],
  },
  {
    markerOffset: 15,
    name: "Gujarat",
    arcs: [
      [[121]],
      [[122]],
      [[123]],
      [[124]],
      [[125]],
      [[-67, 126, 127, -116, 128, 129, -118, 130]],
    ],
  },
  {
    markerOffset: 15,
    name: "Maharashtra",
    arcs: [[-38, -81, -139, -121, 143, -129, -115, -128, -143]],
  },
  {
    markerOffset: 15,
    name: "Andhra Pradesh",
    arcs: [[[13]], [[14, 15, 16, 17, 18]]],
  },
];

function RegionalSalesMap() {
  return (
    <ComposableMap
      projectionConfig={PROJECTION_CONFIG}
      projection="geoMercator"
      width={600}
      height={190}
      data-tip=""
    >
      <Geographies geography={INDIA_TOPO_JSON}>
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2d2d2d"
                stroke="black"
                style={geographyStyle}
              />
            );
          })
        }
      </Geographies>
      {/* {markers.map(({ name, arcs, markerOffset }) => (
        <Marker key={name} arcs={arcs}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))} */}
    </ComposableMap>
  );
}

export default RegionalSalesMap;
