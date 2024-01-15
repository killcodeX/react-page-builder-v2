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
      <Row gutter={48}>
        <Col span={6}>
          <ComponentList/>
        </Col>
        <Col span={18} style={{background:"#f8fafc"}}>
          <BuilderResolver/>
        </Col>
      </Row>
    </section>
  );
}
