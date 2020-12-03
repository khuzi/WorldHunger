import React from "react";
import Link from "next/link";
import Head from "next/head";

import MapChart from "../../components/MapChart";
import ReactTooltip from "react-tooltip";

import data from "../../data/data.js";

const Map = () => {
  const [content, setContent] = React.useState("");

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Head>
        <title>
          Interactive Map of International Food Security Data | World Hunger Map
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Explore Food Aid Data for 76 Low and Middle-Income Countries</h1>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip multiline={true} style={{ width: "200px" }}>
        {content}
      </ReactTooltip>
      <div className="container mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Countries</th>
            </tr>
          </thead>
          <tbody className="text-left" style={{ cursor: "pointer" }}>
            {data.map((item) => (
              <tr>
                <th>
                  <Link href={"/map/[cid]"} as={`/map/${item.name}`}>
                    <a
                      className="country-link"
                      style={{ color: "#333", textTransform: "capitalize" }}
                    >
                      {item.name}
                    </a>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Map;
