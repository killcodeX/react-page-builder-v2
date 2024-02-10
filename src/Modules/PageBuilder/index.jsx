import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import ComponentList from '../../Components/ComponentLists';
import BuilderResolver from "../../Resolver/BuilderResolver";

const style = {
  background: '#0092ff',
  padding: '8px 0',
};

export default function PageBuilder() {
  return (
    <section className="page-builder">
      <Row>
        <Col span={5}>
          <ComponentList/>
        </Col>
        <Col span={19} style={{background:"#f8fafc"}}>
          <BuilderResolver/>
        </Col>
      </Row>
    </section>
  );
}
