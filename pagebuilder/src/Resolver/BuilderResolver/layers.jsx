import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { addSection, addGridorFlex } from "../../Redux/Actions/actions";
import { EditOutlined } from "@ant-design/icons";
import GridResolver from "./gridResolver";
import FlexResolver from "./FlexResolver";
import Resolver from "./resolver";
import {
  Section,
  Grid,
  FlexWrapper,
  Button,
} from "../../Components/ComponentWithSettings";

const Types = {
  GRID: "grid",
  FLEX: "flexwrapper",
};

export function Layers(layer) {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState(null);
  const [totalColumn, setTotalColumn] = useState({ column: 2 });
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
            <Section
              title="Flex Setting"
              onClose={() => setOpenDrawer(false)}
              openDrawer={openDrawer}
            />
          </div>
          {layer?.components?.length > 0 &&
            layer.components.map((item) => {
              return (
                <div key={item.id} className="page-builder-component-children">
                  <Resolver id={item.id} component={item} />
                </div>
              );
            })}
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
            <Grid
              title="Grid Setting"
              onClose={() => setOpenDrawer(false)}
              openDrawer={openDrawer}
              gridId={layer.id}
              totalColumn={totalColumn}
              setTotalColumn={setTotalColumn}
            />
          </div>
          <GridResolver gridId={layer.id} totalColumn={totalColumn} />
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
            <FlexWrapper
              component={layer}
              title="Flex Setting"
              onClose={() => setOpenDrawer(false)}
              openDrawer={openDrawer}
            />
          </div>
          {layer?.components?.length > 0 &&
            layer.components.map((item) => {
              return (
                <div key={item.id} className="page-builder-component-children">
                  <Resolver id={item.id} component={item} />
                </div>
              );
            })}
          <FlexResolver flexId={layer.id} />
        </div>
      );
    case "button":
      return (
        <div className="layer-container">
          <div className="page-builder-component-card" key={layer.id}>
            <div className="page-builder-component-label">Button</div>
            <div
              className="page-builder-component-edit"
              onClick={() => setOpenDrawer(true)}
            >
              <EditOutlined />
            </div>
            <Button
              component={layer}
              title="Flex Setting"
              onClose={() => setOpenDrawer(false)}
              openDrawer={openDrawer}
            />
          </div>
        </div>
      );
  }
}
