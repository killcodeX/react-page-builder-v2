import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  Flex,
  Slider,
  Divider,
  Input,
  notification,
  Drawer,
  Space,
  Button,
} from "antd";
import "../style.css";
import { addColumnToGrid } from "../../../Redux/Actions/actions";

const columnsTypes = {
  2: "2",
  3: "3",
  4: "4",
  6: "6",
};

export default function GridSetting({ component, title, onClose, openDrawer }) {
  let dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  let [noOfcolumns, setNoOfColumns] = useState(component.columns.length);
  let [columns, setColumns] = useState(component.columns);

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "Columns Setting Updated",
      // description: "Column Span can only be between 1 to 12",
    });
  };

  return (
    <Drawer
      title={title}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            type="primary"
            onClick={() => {
              dispatch(addColumnToGrid(component.id, columns));
              openNotificationWithIcon();
              onClose();
            }}
          >
            Save
          </Button>
        </Space>
      }
    >
      {contextHolder}
      <div className="component-setting-container">
        <div className="component-setting-heading">Number of Columns</div>
        <Slider
          min={0}
          max={12}
          value={noOfcolumns}
          onChange={(val) => {
            let arr = [];
            for (let i = 0; i < val; i++) {
              arr.push({
                id: uuid(),
                span: 6,
                component: null,
              });
            }
            setNoOfColumns(val);
            setColumns(arr);
          }}
          marks={columnsTypes}
        />
        <Divider />
        <div className="component-setting-heading">Column Span</div>
        {columns.map((item, index) => {
          const handleSpanChange = (e) => {
            const updatedColumns = [...columns]; // Clone the columns array
            updatedColumns[index] = {
              ...updatedColumns[index],
              span: e.target.value - "0",
            }; // Update the span value
            setColumns(updatedColumns); // Set the state with the updated array
          };

          return (
            <Flex
              style={{ marginBottom: "8px" }}
              gap={16}
              align="center"
              key={item.id}
            >
              <span>Column {index + 1}</span>
              <Input
                style={{ width: "200px" }}
                type="number"
                value={item.span}
                onChange={handleSpanChange}
              />
            </Flex>
          );
        })}
        <Divider />
      </div>
    </Drawer>
  );
}
