import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Col, Row } from "antd";
import { useDispatch } from "react-redux";

export default function GridResolver({ totalColumn }) {
  console.log("::", totalColumn)
  let [columns, setColumns] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let col = [];
    for (let i = 0; i < totalColumn.column; i++) {
      col.push(
        <Col offset={1} span={Math.trunc(24/totalColumn.column)}>
          <div className="drag-drop-grid-container">
            <span>Drag & Drop a component</span>
          </div>
        </Col>
      );
    }
    setColumns(col)
  }, [totalColumn]);

  const [{ canDrop, isOver, dropTargets }, drop] = useDrop(() => ({
    accept: ["grid", "flexwrapper", "button"],
    drop: (item, monitor) => {
      //   dispatch(addGridorFlex(layer.id, item));
      console.log(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Row wrap ref={drop}>
      {
        columns.length > 0 && columns.map((item,index) => {
            return <React.Fragment key={index}>{item}</React.Fragment>
        })
      }
    </Row>
  );
}
