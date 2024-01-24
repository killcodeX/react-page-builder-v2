import React from "react";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import PageResolver from "../../PageResolver";
import { addComponentToGridColumn } from "../../../Redux/Actions/actions";

let acceptComponent = ["grid", "flexwrapper", "button", "typography"];

export default function Column({ grid, column }) {
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

  if (!column.component) {
    return (
      <div ref={drop} className="drag-drop-component-container">
        <span>Drag & Drop a component</span>
      </div>
    );
  }

  return <div>column</div>;
}
