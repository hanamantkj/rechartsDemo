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
  Legend,
} from "recharts";
import LineTest from "./line";

const data = [
  {
    name: " ",
    RANK: 974,
    "%": 7.4,
    Ylabel: 1000,
  },
  {
    name: "CS",
    RANK: 3000,
    "%": 22.8,
    Ylabel: 2000,
  },
  {
    name: "F1",
    RANK: 4660,
    "%": 35.5,
    Ylabel: 3000,
  },
  {
    name: "F2",
    RANK: 6337,
    "%": 48.3,
    Ylabel: 4000,
  },
  {
    name: "AB",
    RANK: 400,
    "%": 3,
    Ylabel: 4000,
  },
];

const formatter = (value) => `${value}%`;
export default class BarLineTest extends PureComponent {
  render() {
    return (
      <ComposedChart
        width={500}
        height={400}
        data={data}
        barGap={2}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        // style={{ background: "#001a33", color: "#00000" }}
      >
        <XAxis
          dataKey="name"
          padding={{ left: 2, right: 10 }}
          tick={{ fill: "#00000" }}
        />
        <YAxis
          type="number"
          yAxisId="left"
          domain={[0, 6000]}
          tick={{ fill: "#00000" }}
          orientation="left"
        >
          <Label
            value="RANK"
            angle={-90}
            offset={0}
            position="insideLeft"
            style={{ fill: "#00000" }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          domain={[0, 45]}
          tick={{ fill: "#00000" }}
          hide={true}
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
          // contentStyle={{ background: "black", color: "#900C3F" }}
          wrapperStyle={{ color: "#00000" }}
        />
        <Bar dataKey="RANK" yAxisId="left" fill="#ff6633" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="%"
          tickFormatter={formatter}
          stroke="#de420d"
          strokeWidth={2}
          activeDot={{ r: 7 }}
        />
      </ComposedChart>
    );
  }
}
