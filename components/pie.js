import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

import DefaultTooltipContent from "recharts/lib/component/DefaultTooltipContent";

const data = [
  { name: "AB", value: 40, per: "10%" },
  { name: "CSD", value: 30, per: "20%" },
  { name: "F1", value: 30, per: "30%" },
  { name: "BD", value: 20, per: "15%" },
  { name: "F2", value: 27, per: "18%" },
];

const CustomTooltip = (props) => {
  if (!props.active) {
    return null;
  }
  const newPayload = [
    {
      name: "%",
      value: props.payload[0].payload.per,
    },
    ...props.payload,
  ];
  return <DefaultTooltipContent {...props} payload={newPayload} />;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const formatter = (props) => `${props.name}-${props.per}`;
export default class PieRechart extends PureComponent {
  render() {
    return (
      <PieChart
        width={500}
        height={400}
        style={{ border: "1px solid", textAlign: "center" }}
      >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={200}
          cy={200}
          fill="#8884d8"
          label={formatter}
          paddingAngle={5}
          outerRadius={125}
          innerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[1]} />
          ))}
        </Pie>
        <Tooltip  />
      </PieChart>
    );
  }
}
