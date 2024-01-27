import React, { useEffect, useState } from "react";
import { Col } from "antd";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import Resolver from "../resolver";
import { addComponentToGridColumn } from "../../../Redux/Actions/actions";

let acceptComponent = ["button", "typography"];

export default function Column({ grid, column }) {
  // console.log('hi',column, grid);
  const dispatch = useDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: acceptComponent,
    drop: (item) => {
      dispatch(addComponentToGridColumn(grid.id, column.id, item));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  if (!grid && !column.component) {
    return "loading..";
  }

  if (!column.component) {
    return (
      <Col span={column.span} ref={drop}>
        <div className="drag-drop-component-grid-container">
          <span>Drag & Drop a component</span>
        </div>
      </Col>
    );
  }

  return (
    <Col span={column.span}>
      <Resolver component={column.component} />
    </Col>
  );
}
