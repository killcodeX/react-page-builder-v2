import React, { useState } from "react";
import { Drawer } from "antd";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { addSection, addGridorFlex } from "../../Redux/Actions/actions";
import { EditOutlined } from "@ant-design/icons";
import GridResolver from "./gridResolver";
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
  const [totalColumn, setTotalColumn] = useState({column:2});
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
        <div className="layer-container" ref={drop}>
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
            </Drawer>
          </div>
          {!layer.components && (
            <div className="drag-drop-component-container">
              <span>Drag & Drop Grid or FlexWrapper</span>
            </div>
          )}
        </div>
      );
    case "grid":
      return (
        <div className="layer-container" ref={drop}>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Grid</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Drawer
              title="Grid Setting"
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
            >
              <Grid gridId={layer.id} totalColumn={totalColumn} setTotalColumn={setTotalColumn}/>
            </Drawer>
          </div>
          {/* <GridResolver gridId={layer.id} totalColumn={totalColumn}/> */}
        </div>
      );
    case "flexwrapper":
      return (
        <div className="layer-container" ref={drop}>
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Flex Wrapper</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Drawer
              title="Flex Wrapper Setting"
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
          <div className="drag-drop-component-container">
              <span>Drag & Drop a component</span>
          </div>
        </div>
      );
  }
}
