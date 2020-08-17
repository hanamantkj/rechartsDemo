import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
} from "recharts";
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltip = props => {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // mutating props directly is against react's conventions
    // so we create a new payload with the name and value fields set to what we want
    const newPayload = [
      {
        name: 'Name',
        // all your data which created the tooltip is located in the .payload property
        value: props.payload[0].payload.name,
        // you can also add "unit" here if you need it
      },
      ...props.payload,
    ];

    // we render the default, but with our overridden payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  }

  // we just render the default
  return <DefaultTooltipContent {...props} />;
};
const data = [
  {
    name: "indian",
    uv: 590,
    count: 200,
    amt: 1400,
  },
  {
    name: "Filipino",
    uv: 868,
    count: 967,
    amt: 1506,
  },
  {
    name: "Thai",
    uv: 1397,
    count: 1098,
    amt: 989,
  },
  {
    name: "south Korian",
    uv: 1480,
    count: 120,
    amt: 1228,
  },
  {
    name: "japan",
    uv: 1520,
    count: 1108,
    amt: 1100,
  },
  {
    name: "germany",
    uv: 1400,
    count: 680,
    amt: 1700,
  },
  {
    name: "Filipino",
    uv: 868,
    count: 967,
    amt: 1506,
  },
  {
    name: "Filipino",
    uv: 868,
    count: 967,
    amt: 1506,
  },
  {
    name: "Narway",
    uv: 868,
    count: 967,
    amt: 1506,
  },
  {
    name: "Qatar",
    uv: 868,
    count: 967,
    amt: 1506,
  },
];


const renderCustomizedLabel = (props) => {
  const {
    x, y, width, height, value,
  } = props;
  const radius = 1;

  return (
    <g>
       <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> 
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {`${value} -28%`}
      </text>
    </g>
  );
};


export default class HoriZantalBar extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/shjsn5su/";

  render() {
    return (
      <ComposedChart
        layout="vertical"
        width={410}
        height={360}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis hide={true} type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip cursor={false}  />
        <Legend payload={[{ value: 'Nationality count' ,color:"#b84dff"}]} />

        <Bar dataKey="count" barSize={20} fill="#b84dff">
          <LabelList
            position="right"
            dataKey="count"
            fill="black"
            fontSize="13"
            // content={renderCustomizedLabel}
          />
        </Bar>
      </ComposedChart>
    );
  }
}
