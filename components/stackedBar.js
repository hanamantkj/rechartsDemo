import React, { PureComponent, Fragment } from "react";
import {
  BarChart,
  ComposedChart,
  Bar,
  Line,
  Label,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "15-20",
    FeMale: 4000,
    Male: 2400,
    Total: 6400,
    amt: 2400,
  },
  {
    name: "20-25",
    FeMale: 3000,
    Male: 1398,
    Total: 4398,
    amt: 2210,
  },
  {
    name: "25-30",
    FeMale: 9800,
    Male: 2000,
    Total: 11800,
    amt: 2290,
  },
  {
    name: "30-35",
    FeMale: 2700,
    Male: 3900,
    Total: 6600,
    amt: 2000,
  },
  {
    name: "35-40",
    FeMale: 1800,
    Male: 3800,
    Total: 5600,
    amt: 2181,
  },
  {
    name: "40-45",
    FeMale: 2300,
    Male: 3800,
    Total: 6100,
    amt: 2500,
  },
];

export default class StackedBar extends PureComponent {
  render() {
    return (
      <div>
        <h3>AGE GROUP ANALYSES</h3>

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
          style={{ color: "white" }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name">
            <Label value="AGE GROUPS IN YEARS" offset={0} position="bottom" />
          </XAxis>
          <YAxis hide={true} />

          <Tooltip   cursor={false}/>
          {/* <Legend verticalAlign="top" style={{color:"black"}}/> */}
          <Bar dataKey="Male" stackId="a" fill="#444042" barSize={34}>
            <LabelList
              dataKey="Male"
              position="middle"
              fill="white"
              fontSize="13"
            />
          </Bar>
          <Bar dataKey="FeMale" stackId="a" fill="#C93A38" barSize={36}>
            <LabelList
              dataKey="FeMale"
              position="middle"
              fontSize="12"
              fill="white"
            />
          </Bar>
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#FF5733"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </ComposedChart>
      </div>
    );
  }
}
