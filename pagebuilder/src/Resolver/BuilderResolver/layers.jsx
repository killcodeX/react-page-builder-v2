import React, { useState } from "react";
import { Drawer } from "antd";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { addSection, addGridorFlex } from "../../Redux/Actions/actions";
import { EditOutlined } from "@ant-design/icons";
import {
  Section,
  Grid,
  FlexWrapper,
} from "../../Components/ComponentWithSettings";

const Types = {
  GRID: "grid",
  FLEX: "flexwrapper",
};

export function Layers(layer) {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [{ canDrop, isOver, dropTargets }, drop] = useDrop(() => ({
    accept: ["grid", "flexwrapper"],
    drop: (item, monitor) => {
      dispatch(addGridorFlex(layer.id, item));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  switch (layer.component) {
    case "section":
      return (
        <div className="section-container" ref={drop}>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Section</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Drawer
              title="Section Setting"
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
            >
              <Section />
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
          <div className="drag-drop-component-container">
            <span>Drag & Drop component</span>
          </div>
        </div>
      );
    case "grid":
      return (
        <>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Grid</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Drawer
              title="Section Setting"
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
            >
              <Grid />
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
        </>
      );
    case "flexwrapper":
      return (
        <>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Flex Wrapper</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Drawer
              title="Section Setting"
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
            >
              <Grid />
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
        </>
      );
  }
}
