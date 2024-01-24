import React from "react";
import Column from "./column";

export default function GridResolver({ component }) {
  return (
    <>
      {component.columns &&
        component.columns.map((item) => {
          return <Column key={item.id} grid={component} column={item} />;
        })}
    </>
  );
}
