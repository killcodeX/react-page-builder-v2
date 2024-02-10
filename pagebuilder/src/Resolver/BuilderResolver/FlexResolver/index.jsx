import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { addComponentToFlex } from "../../../Redux/Actions/actions";

let acceptComponent = ["grid", "flexwrapper", "button", "typography"];

export default function FlexResolver({ flexId }) {
  const dispatch = useDispatch();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: acceptComponent,
    drop: (item, monitor) => {
      dispatch(addComponentToFlex(flexId, item));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div ref={drop} className="drag-drop-component-container">
      <span>Drag & Drop a component</span>
    </div>
  );
}
