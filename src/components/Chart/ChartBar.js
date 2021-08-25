import React from "react";
import "./ChartBar.css";

const CharBar = (props) => {
  let barFillHeight = "0%";
  if (props.totalSum > 0) {
    barFillHeight = Math.round((props.value / props.totalSum) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "#3E3EF3" }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default CharBar;
