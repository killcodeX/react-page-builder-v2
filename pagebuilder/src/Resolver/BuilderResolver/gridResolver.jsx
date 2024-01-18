import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Col, Row } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addComponentToGrid } from "../../Redux/Actions/actions";

export default function GridResolver({ gridId, totalColumn }) {
  let [columns, setColumns] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let col = [];
    for (let i = 0; i < totalColumn.column; i++) {
      col.push(
        <DragColumn totalColumn={totalColumn} gridId={gridId} dispatch={dispatch}/>
      );
    }
    setColumns(col);
  }, [totalColumn]);

  return (
    <Row wrap>
      {columns.length > 0 &&
        columns.map((item, index) => {
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })}
    </Row>
  );
}

function DragColumn({gridId, columnId, totalColumn, dispatch}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ["grid", "flexwrapper", "button"],
    drop: (item, monitor) => {
      dispatch(addComponentToGrid(gridId, columnId, item));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Col ref={drop} offset={1} span={Math.trunc(24 / totalColumn.column)}>
      <div className="drag-drop-grid-container">
        <span>Drag & Drop a component</span>
      </div>
    </Col>
  );
}
