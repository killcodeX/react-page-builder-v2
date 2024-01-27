import React from "react";
import { Row } from "antd";
import Column from "./column";

export default function GridResolver({ component }) {
  return (
    <Row gutter={[8, 8]}>
      {component.columns &&
        component.columns.map((item) => {
          return <Column key={item.id} grid={component} column={item} />;
        })}
    </Row>
  );
}
