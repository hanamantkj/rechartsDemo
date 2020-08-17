import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "CSD",
    RANK: 2400,
    Ylabel: 1000,
  },
  {
    name: "CS",
    RANK: 1900,
    Ylabel: 2000,
  },
  {
    name: "F1",
    RANK: 2900,
    Ylabel: 3000,
  },
  {
    name: "F2",
    RANK: 2700,
    Ylabel: 4000,
  },
];

export default class BarTest extends PureComponent {
  render() {
    return (
      <div>
      <h3>CREW COUNT</h3>
      <h3>32400</h3>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        
      >
      
        <XAxis dataKey="name" padding={{ left: 0, right: 0 }} tickSize={4}/>
        <YAxis
          type="number"
          domain={[0, 4000]}
          label={{ value: "RANK", angle: -90, position: "insideLeft" }}
          orientation="left"
          
        />
       
        <Tooltip
          filterNull={false}
          contentStyle={{ background: "white", color: "#900C3F" }}
          wrapperStyle={{ color: "white" }}
        />
        <Bar dataKey="RANK" barSize={30} fill="#ff6633" />
      </ComposedChart>
      </div>
    );
  }
}
