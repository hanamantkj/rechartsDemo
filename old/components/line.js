import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan-20",
    uv: 28,
    count: 28,
    amt: 2400,
  },
  {
    name: "Feb-20",
    uv: 3000,
    count: 20,
    amt: 2210,
  },
  {
    name: "March-20",
    uv: 2000,
    count: 35,
    amt: 2290,
  },
  {
    name: "April-20",
    uv: 2780,
    count: 40,
    amt: 2000,
  },
  {
    name: "May-20",
    uv: 1890,
    count: 15,
    amt: 2181,
  },
  {
    name: "June-20",
    uv: 2390,
    count: 55,
    amt: 2500,
  },
];
const formatter = (value) => `${value}%`;
class LineTest extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            style={{ background: "#7AAFF2" }}
            strokeDasharray="1 1"
            stroke="#7AAFF2"
          />
          <XAxis dataKey="name" hide={true}/>
          <YAxis orientation="right"  domain={[0, 60]} tickFormatter={formatter}/>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#073EDC"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}
export default LineTest;
