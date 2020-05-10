import React, { useState } from "react";
//import ReactDOM from "react-dom";
import styles from "./IndiaMap.module.css";
import ReactTooltip from "react-tooltip";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const pathval = require("./indian_states_topo_json.json");

const markers = [
  {
    markerOffset: 15,
    name: "Andaman and Nicobar",
    coordinates: [92.6586, 11.7401],
  },
  { markerOffset: 10, name: "Andhra Pradesh", coordinates: [79.74, 15.9129] },
  {
    markerOffset: 15,
    name: "Arunachal Pradesh",
    coordinates: [94.7278, 28.218],
  },
  { markerOffset: 15, name: "Assam", coordinates: [92.9376, 26.2006] },
  { markerOffset: 15, name: "Bihar", coordinates: [85.3131, 25.0961] },
  { markerOffset: 15, name: "Chandigarh", coordinates: [76.7794, 30.7333] },
  { markerOffset: 15, name: "Chhattisgarh", coordinates: [81.8661, 21.2787] },
  {
    markerOffset: 15,
    name: "Dadra and Nagar Haveli",
    coordinates: [73.0169, 20.1809],
  },
  { markerOffset: 10, name: "Daman and Diu", coordinates: [72.8397, 20.4283] },
  { markerOffset: 15, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: 15, name: "Goa", coordinates: [74.124, 15.2993] },
  { markerOffset: 15, name: "Gujarat", coordinates: [71.1924, 22.2587] },
  { markerOffset: 15, name: "Haryana", coordinates: [76.0856, 29.0588] },
  {
    markerOffset: 15,
    name: "Himachal Pradesh",
    coordinates: [77.1734, 31.1048],
  },
  {
    markerOffset: 15,
    name: "Jammu and Kashmir",
    coordinates: [76.5762, 33.7782],
  },
  { markerOffset: 10, name: "Jharkhand", coordinates: [85.2799, 23.6102] },
  { markerOffset: 15, name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { markerOffset: 15, name: "Kerala", coordinates: [76.2711, 10.8505] },
  { markerOffset: 15, name: "Lakshadweep", coordinates: [72.1833, 13.7] },
  { markerOffset: 15, name: "Madhya Pradesh", coordinates: [78.6569, 22.9734] },
  { markerOffset: 15, name: "Maharashtra", coordinates: [75.7139, 19.7515] },
  { markerOffset: 15, name: "Manipur", coordinates: [93.9063, 24.6637] },
  { markerOffset: 10, name: "Meghalaya", coordinates: [91.3662, 25.467] },
  { markerOffset: 15, name: "Mizoram", coordinates: [92.9376, 23.1645] },
  { markerOffset: 15, name: "Nagaland", coordinates: [94.5624, 26.1584] },
  { markerOffset: 15, name: "Odisha", coordinates: [85.0985, 20.9517] },
  { markerOffset: 15, name: "Pondicherry", coordinates: [79.8083, 11.9416] },
  { markerOffset: 15, name: "Punjab", coordinates: [75.3412, 31.1471] },
  { markerOffset: 15, name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { markerOffset: 15, name: "Sikkim", coordinates: [88.5122, 27.533] },
  { markerOffset: 15, name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
  { markerOffset: 15, name: "Tripura", coordinates: [91.9882, 23.9408] },
  { markerOffset: 15, name: "Uttar Pradesh", coordinates: [80.983, 26.8467] },
  { markerOffset: 15, name: "Uttaranchal", coordinates: [79.0193, 30.0668] },
  { markerOffset: 15, name: "West Bengal", coordinates: [87.855, 22.9868] },
];

const PROJECTION_CONFIG = {
  scale: 1000,
  center: [78.9629, 20.5937], // [Longitude, Latitude]
};

const IndiaMap = (data) => {
  // const [toolTipContent, setToolTipContent] = useState({
  //   state: null,
  //   confirmed: null,
  //   deaths: null,
  //   recovered: null,
  // });
  const [toolTipContent, setToolTipContent] = useState({
    state: null,
  });
  // const onMouseEnter = (
  //   geo,
  //   current = {
  //     state: null,
  //     confirmed: null,
  //     deaths: null,
  //     recovered: null,
  //   }
  // ) => {
  //   return () => {
  //     setToolTipContent({
  //       state: current.state,
  //       confirmed: current.confirmed,
  //       recovered: current.recovered,
  //       deaths: current.deaths,
  //     });
  //   };
  // };
  const onMouseEnter = (geo, current) => {
    return () => {
      setToolTipContent({ state: current });
    };
  };

  return (
    <div>
      {toolTipContent.state && (
        <ReactTooltip>
          <div>{toolTipContent.state}</div>
          {/* <div>Confirmed:{toolTipContent.confirmed}</div>
          <div>Recovered:{toolTipContent.recovered}</div>
          <div>Deaths:{toolTipContent.deaths}</div> */}
        </ReactTooltip>
      )}
      <div className={styles.map}>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={800}
          height={700}
          data-tip=""
        >
          <Geographies geography={pathval}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={geo.properties.COLORCODE}
                  // onMouseEnter={onMouseEnter(geo, data.data)}
                  onMouseEnter={onMouseEnter(geo, geo.properties.NAME_1)}
                  onMouseLeave={() => {
                    setToolTipContent("");
                  }}
                  style={{
                    hover: {
                      fill: "black",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
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
                style={{ fontFamily: "system-ui", fill: "black" }}
                fontSize="10px"
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default IndiaMap;
