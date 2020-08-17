import React from "react";
import * as d3 from "d3";
import { Label } from "recharts";

const Arc = ({ data, index, createArc, colors, format, type = "" }) => {
  const label = data.data.label;
  return (
    <g key={index} className="arc">
      <path
        className="arc"
        d={createArc(data)}
        fill={colors(type!=="" ? 1:index)}
      />
      <text
        transform={`translate(${createArc.centroid(data)})`}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="black"
        fontSize="11"
        fontWeight="bold"
      >
        {`${label}-${format(data.value)}%`}
      </text>
    </g>
  );
};

const Pie = (props) => {
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = createPie(props.data);

  return (
    <div>
      <h3> CREW GRADE STATESTIC</h3>
      <h3 style={{ marginLeft: "96px" }}>
        {!props.type ? "ALL" : props.type === "male" ? "MALE" : "FEMALE"}
      </h3>
      <svg width={props.width} height={props.height}>
        <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
          {data.map((d, i) => (
            <Arc
              key={i}
              data={d}
              index={i}
              createArc={createArc}
              colors={colors}
              type={props.type}
              format={format}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Pie;
