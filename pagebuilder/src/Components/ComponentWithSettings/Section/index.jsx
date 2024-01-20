import React from "react";
import { Drawer, Space, Button } from "antd";

export default function SectionSetting({id, title, onClose, openDrawer}) {
  return (
    <Drawer
      title={title}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            Save
          </Button>
        </Space>
      }
    >
      SectionSetting
    </Drawer>
  );
}
