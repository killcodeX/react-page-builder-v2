import React from "react";
import { useDrop } from "react-dnd";
import PageResolver from "../../PageResolver";

let acceptComponent = ["grid", "flexwrapper", "button", "typography"];

export default function Column({ column }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: acceptComponent,
    drop: (item) => {
      console.log(item, column.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  if (!column.component) {
    return (
      <div ref={drop} className="drag-drop-component-container">
        <span>Drag & Drop a component</span>
      </div>
    );
  }

  return <div>column</div>;
}
