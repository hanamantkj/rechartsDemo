//import React from 'react';
//import Button from 'sonata-actions';
//import styled from 'styled-components';

import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import BarTest from "./components/bar";
import LineTest from "./components/line";
import StackedBar from "./components/stackedBar";
import BarLineTest from "./components/barLine";
import PieSVG from "./d3/d3pie";
import { x, y } from "./components/dummy";

import HoriZantalBar from "./components/horizantalBar";
import BarLinePercent from "./components/barPercent";
import BarLabelLine from "./components/barLabelLine";
import PieRechart from "./components/pie";

function CircleIcon() {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      {" "}
      <span
        style={{
          fontSize: 24,
          width: 40,
          height: 40,
          padding: 8,
          borderRadius: "50%",
          background: "#e6e3e3",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        34<span style={{ fontSize: 16 }}>%</span>
      </span>
      <span
        style={{
          width: 60,
          height: 12,
          fontSize: 18,
          padding: 4,
          color: "#FFFFFF",
          background: "DodgerBlue",
          zIndex: 100,
          textAlign: "center",
          position: "absolute",
          top: "85%",
          left: -6,
          paddingTop: 0,
          paddingBottom: 12,
        }}
      >
        20-25
      </span>
    </div>
  );
}
function App() {
  const peiData = [
    { data: 0, value: 20.45, label: "F1" },
    { data: 1, value: 25.78, label: "CS" },
    { data: 2, value: 67.34, label: "AB" },
    { data: 3, value: 48.34, label: "CSD" },
    { data: 4, value: 28.34, label: "BD" },
  ];

  const AGEGROUP = [
    {
      range: "0-25",
      per: "12%",
    },
    {
      range: "25-30",
      per: "36%",
    },
    {
      range: "30-35",
      per: "58%",
    },
    {
      range: "35-40",
      per: "62%",
    },
  ];
  const COLORS = [
    "#3ddb7f",
    "#09b551",
    "#4cc4e6",
    "#21aad1",
    "#0a87ab",
    "#cc9b08",
    "#a67c00",
    "#A2D6D0",
    "#F47758",
  ];
  return (
    <React.Fragment>
      <ul className="flexbox">
        {/* <div>
          {AGEGROUP.map(() => {
            return <CircleIcon />;
          })}
        </div> */}
        {/* <LineTest /> */}
        {/* <li>
          <PieRechart />
        </li>
*/}
        <li>
          <StackedBar />
        </li> 
		<li>
          {" "}
          <HoriZantalBar />
        </li>
        {/* <li>
          {" "}
          <PieSVG
            data={peiData}
            width={300}
            height={240}
            innerRadius={60}
            outerRadius={120}
          />
        </li>
        <li>
          {" "}
          <BarLineTest />{" "}
        </li>
        <li>
          <PieSVG
            data={peiData}
            width={300}
            height={240}
            type="male"
            innerRadius={60}
            outerRadius={120}
            oneColor={true}
          />
        </li> */}
        {/* <li> <BarLinePercent/><li> */}
        {/* <li>
          <BarLabelLine />
        </li>
        <li>
          <PieSVG
            data={peiData}
            width={300}
            height={240}
            type="female"
            innerRadius={60}
            outerRadius={120}
            oneColor={true}
          />
        </li>
         */}
      </ul>
    </React.Fragment>
  );
}
export default App;
