import React from "react";
import { Slider } from "antd";

const columns = {
  2: "2",
  3: "3",
  4: "4",
  6: "6",
  8: "8",
  12: "12",
};

export default function GridSetting({totalColumn, setTotalColumn}) {
  return (
    <div className="component-setting-container">
      <div className="component-setting-heading">Number of Columns</div>
      <Slider
        min={0}
        max={12}
        value={totalColumn}
        onChange={(val) => setTotalColumn(val)}
        marks={columns}
      />
    </div>
  );
}
