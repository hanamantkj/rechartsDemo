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
  LabelList,
  Tooltip,
  Legend,
} from "recharts";
import LineTest from "./line";


const renderCustomizedLabel = (props) => {
    const {
      x, y, width, height, value,
    } = props;
    const radius = 10;
  
    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value}
        </text>
      </g>
    );
  };

  
const data = [
  {
    name: "CSD",
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
export default class BarLinePercent extends PureComponent {
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
        style={{ background: "#001a33", color: "white" }}
      >
        <XAxis
          dataKey="name"
          padding={{ left: 2, right: 10 }}
          tick={{ fill: "white" }}
        />
        <YAxis
          type="number"
          yAxisId="left"
          domain={[0, 8000]}
          tick={{ fill: "white" }}
          orientation="left"
        >
          <Label
            value="RANK"
            angle={-90}
            offset={0}
            position="insideLeft"
            style={{ fill: "white" }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          domain={[0, 60]}
          tick={{ fill: "white" }}
          orientation="right"
          label={{ value: "%", angle: 90, position: "insideRight" }}
          tickFormatter={formatter}
        >
          <Label
            value="%"
            angle={90}
            position="insideRight"
            style={{ fill: "white" }}
          />
        </YAxis>
        <Tooltip
          cursor={false}
          contentStyle={{ background: "black", color: "#900C3F" }}
          wrapperStyle={{ color: "white" }}
        />
        <Bar dataKey="RANK" yAxisId="left" fill="#ff6633" >
        <LabelList dataKey="RANK" content={renderCustomizedLabel} />
            </Bar>
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="%"
          tickFormatter={formatter}
          stroke="white"
          strokeWidth={2}
          activeDot={{ r: 7 }}
        />
      </ComposedChart>
    );
  }
}
