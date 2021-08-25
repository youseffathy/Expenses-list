import React from "react";
import "./Chart.css";
import CharBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalSumOfValues = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <CharBar
            key={dataPoint.label}
            value={dataPoint.value}
            totalSum={totalSumOfValues}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
