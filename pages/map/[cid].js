import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import countries from "../../data/data";

const Country = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { name, record } = data;

  const transRecord = record.map((item) => {
    return {
      Year: item.Year,
      Amount: parseFloat(item.Amount),
    };
  });

  return (
    <div
      style={{
        margin: "0 auto",
        width: "50%",
        marginTop: "10px",
      }}
    >
      <Head>
        <title>
          Interactive Map of International Food Security Data | World Hunger Map
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        style={{
          marginBottom: "20px",
          textTransform: "capitalize",
          marginLeft: "50px",
        }}
      >
        {name} Food Aid Data
      </h1>
      <LineChart width={800} height={350} data={transRecord}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis dataKey="Amount" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Amount"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Country;

export async function getStaticPaths() {
  const ids = countries.map(({ name, ...rest }) => name);
  const paths = ids.map((el) => `/map/${el}`);
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { cid } = query || params;
  const data = JSON.parse(
    JSON.stringify(countries.find((item) => item.name === cid))
  );

  return {
    props: {
      data,
    },
  };
}
