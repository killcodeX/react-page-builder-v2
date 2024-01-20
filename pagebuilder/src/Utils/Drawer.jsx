import React from "react";
import { Button, Drawer, Space } from 'antd';

export default function DrawerSwipe({ id, title, onClose, openDrawer, children }) {
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
      {children}
    </Drawer>
  );
}
