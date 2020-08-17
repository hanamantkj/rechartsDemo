import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 ,per:10},
  { name: "Group B", value: 300 ,per:20},
  { name: "Group C", value: 300 ,per:30},
  { name: "Group D", value: 200 ,per:15},
  { name: "Group E", value: 278 ,per:18},
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx, cy, midAngle,per, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${per}%`}
      </text>
    );
  };

export default class PieRechart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/pb1jwdt1/";

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={200}
          cy={200}
          paddingAngle={5}
          outerRadius={125}
          innerRadius={80}
          fill="#8884d8"
        />
      </PieChart>
    );
  }
}
