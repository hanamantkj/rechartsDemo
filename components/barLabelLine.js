

import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
} from "recharts";
import LineTest from "./line";

const data = [
  {
    name: "0-0.5",
    COUNT: 974,
    "%": 7.4,
    Ylabel: 1000
  },
  {
    name: "0.5-1",
    COUNT: 3000,
    "%": 22.8
  },
  {
    name: "1-2",
    COUNT: 4660,
    "%": 35.5
  },
  {
    name: "2-3",
    COUNT: 6337,
    "%": 48.3
  },
  {
    name: "3-4",
    COUNT: 3000,
    "%": 22.8
  },
  {
    name: "4-5",
    COUNT: 6337,
    "%": 48.3
  },
  {
    name: "5-6",
    COUNT: 3000,
    "%": 22.8
  },
  {
    name: "6-7",
    COUNT: 4660,
    "%": 35.5
  },
  {
    name: "7-8",
      COUNT: 3000,
      "%": 22.8
    
  },
];

const formatter = (value) => `${value}%`;
export default class BarLabelLine extends PureComponent {
  render() {
    return (
      <ComposedChart
        width={550}
        height={380}
        data={data}
        barGap={2}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        style={{  color: "#00000" }}
      >
        <XAxis
          dataKey="name"
          padding={{ left: 2, right: 10 }}
          tick={{ fill: "#00000" }}
        >
             <Label value="Experience in years" offset={0} position="bottom" fill="#000"/>
            </XAxis>
        <YAxis
          type="number"
          yAxisId="left"
          domain={[0, 8000]}
          tick={{ fill: "#00000" }}
          orientation="left"
        >
          <Label
            value="Count"
            angle={-90}
            offset={0}
            position="insideLeft"
            style={{ fill: "#00000" }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          domain={[0, 60]}
          hide={true}
          tick={{ fill: "#00000" }}
          orientation="right"
          label={{ value: "%", angle: 90, position: "insideRight" }}
          tickFormatter={formatter}
        >
          <Label
            value="%"
            angle={90}
            position="insideRight"
            style={{ fill: "#00000" }}
          />
        </YAxis>
        <Tooltip
          cursor={false}
          contentStyle={{ color: "#00000" }}
          // wrapperStyle={{ color: "#00000" }}
        />
        <Bar dataKey="COUNT" yAxisId="left" fill="#c75454" >
        <LabelList
              dataKey="COUNT"
              // position="top"
              position="middle"
              fontSize="12"
              fill="black"
            />
        </Bar>
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="%"
          tickFormatter={formatter}
          stroke="#ed7700"
          strokeWidth={2}
          activeDot={{ r: 7 }}
        />
      </ComposedChart>
    );
  }
}

