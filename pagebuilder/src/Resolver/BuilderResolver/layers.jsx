import React, { useState } from "react";
import { Drawer } from "antd";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { addSection } from "../../Redux/Actions/actions";
import { EditOutlined } from "@ant-design/icons";

export function Layers(layer) {
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "section",
    drop: (item) => {
      dispatch(addSection(item));
    },
    canDrop: (item) => item.component === "section",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  switch (layer.component) {
    case "section":
      return (
        <>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Section</div>
            <div className="page-builder-component-edit" onClick={() => setOpenDrawer(true)}>
              <EditOutlined />
            </div>
            <Drawer title="Section Setting" onClose={() => setOpenDrawer(false)} open={openDrawer}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            {/* <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
            <Section
              drawer={drawer}
              setDrawer={setDrawer}
              id={layer.id}
              setOpenSnackbar={setOpenSnackbar}
              setMessage={setMessage}
              setSnackbarType={setSnackbarType}
            />
          </Drawer> */}
          </div>
          <div className="drag-drop-component-container" ref={drop}>
            <span>Drag & Drop component</span>
          </div>
        </>
      );
  }
}
