import React from "react";
import { Row, Col } from "antd";
import PageResolver from "../../../Resolver/PageResolver";

export default function GridWrapper({ data }) {
  return (
    <Row>
      {data.columns.map((item) => {
        return (
          <Col key={item.id} span={item.span * 2}>
            <PageResolver component={item.component || ""} />
          </Col>
        );
      })}
    </Row>
  );
}
