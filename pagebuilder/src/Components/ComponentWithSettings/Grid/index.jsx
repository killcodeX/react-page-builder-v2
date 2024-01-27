import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  Slider,
  Divider,
  Input,
  notification,
  Drawer,
  Space,
  Button,
} from "antd";
import "../style.css";

const columnsTypes = {
  2: "2",
  3: "3",
  4: "4",
  6: "6",
};

export default function GridSetting({ component, title, onClose, openDrawer }) {
  const [api, contextHolder] = notification.useNotification();
  let [columns, setColumns] = useState(component.columns.length);

  const openNotificationWithIcon = () => {
    api["error"]({
      message: "Column Span Error",
      description: "Column Span can only be between 1 to 12",
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
              let arr = [];
              for (let i = 0; i < columns; i++) {
                arr.push({
                  id: uuid(),
                  span: 6,
                  component: null,
                });
              }
              console.log(arr);
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
          value={columns}
          onChange={(val) => setColumns(val)}
          marks={columnsTypes}
        />
        <Divider />
      </div>
    </Drawer>
  );
}
