import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { useHistory } from "react-router-dom";

import data from "../data/data.js";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  const history = useHistory();

  const [selected, setSelected] = React.useState("null");

  const getData = (name) => {
    return data.find((item) => item.name === name.toLowerCase());
  };

  const openCountryPage = () => {
    if (selected !== "") {
      history.push(`/map/${selected}`);
    }
  };

  return (
    <>
      <ComposableMap
        data-tip=""
        projectionConfig={{ scale: 200 }}
        onClick={openCountryPage}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  let res = getData(NAME);
                  let tooltip = "";
                  if (res !== undefined) {
                    tooltip = `${NAME} —— Food Aid`;
                    setSelected(res.name);
                  } else {
                    tooltip = `${NAME}`;
                    setSelected("");
                  }

                  setTooltipContent(tooltip);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
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
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
