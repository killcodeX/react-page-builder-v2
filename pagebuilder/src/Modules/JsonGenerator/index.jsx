import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import ReactJson from "react18-json-view";
import { useSelector } from "react-redux";

export default function JSONGenerator() {
  let state = useSelector((state) => state.build.pageBuilder);
  return (
    <section className="generator-builder">
      <div className="generator-builder-heading">Json Generator</div>
      <Row>
        <Col span={24} className="row mh-100">
          <ReactJson
            theme="colors"
            src={state}
            style={{
              padding: "16px",
            }}
          />
        </Col>
      </Row>
    </section>
  );
}
