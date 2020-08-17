

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
    Ylabel: 1000,
  },
  {
    name: "0.5-1",
    COUNT: 3000,
    "%": 22.8,
    Ylabel: 2000,
  },
  {
    name: "1-2",
    COUNT: 4660,
    "%": 35.5,
    Ylabel: 3000,
  },
  {
    name: "2-3",
    COUNT: 6337,
    "%": 48.3,
    Ylabel: 4000,
  },
  {
    name: "3-4",
    COUNT: 500,
    "%": 3,
    Ylabel: 4000,
  },
  {
    name: "4-5",
    COUNT: 6337,
    "%": 48.3,
    Ylabel: 4000,
  },
  {
    name: "5-6",
    COUNT: 5337,
    "%": 48.3,
    Ylabel: 4000,
  },
  {
    name: "6-7",
    COUNT: 6337,
    "%": 48.3,
    Ylabel: 4000,
  },
  {
    name: "7-8",
    COUNT: 4337,
    "%": 48.3,
    Ylabel: 4000,
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
        style={{ background: "#4d0000", color: "#FFFFFF" }}
      >
        <XAxis
          dataKey="name"
          padding={{ left: 2, right: 10 }}
          tick={{ fill: "#FFFFFF" }}
        >
             <Label value="Experience in years" offset={0} position="bottom" fill="white"/>
            </XAxis>
        <YAxis
          type="number"
          yAxisId="left"
          domain={[0, 8000]}
          tick={{ fill: "#FFFFFF" }}
          orientation="left"
        >
          <Label
            value="COUNT"
            angle={-90}
            offset={0}
            position="insideLeft"
            style={{ fill: "#FFFFFF" }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          domain={[0, 60]}
          hide={true}
          tick={{ fill: "#FFFFFF" }}
          orientation="right"
          label={{ value: "%", angle: 90, position: "insideRight" }}
          tickFormatter={formatter}
        >
          <Label
            value="%"
            angle={90}
            position="insideRight"
            style={{ fill: "#FFFFFF" }}
          />
        </YAxis>
        <Tooltip
          cursor={false}
          contentStyle={{ background: "black", color: "#FFFFFF" }}
          wrapperStyle={{ color: "#FFFFFF" }}
        />
        <Bar dataKey="COUNT" yAxisId="left" fill="#c75454" >
        <LabelList
              dataKey="COUNT"
              position="middle"
              fontSize="12"
              fill="white"
            />
        </Bar>
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="%"
          tickFormatter={formatter}
          stroke="#FFFFFF"
          strokeWidth={2}
          activeDot={{ r: 7 }}
        />
      </ComposedChart>
    );
  }
}

