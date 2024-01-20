import React, { useState } from "react";
import {
  Select,
  Divider,
  notification,
  Drawer,
  Space,
  Button,
  Input,
} from "antd";
import { useDispatch } from "react-redux";
import { addSettingToComponent } from "../../../Redux/Actions/actions";

export default function ButtonSetting({
  component,
  title,
  onClose,
  openDrawer,
}) {
  let { style } = component;
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [label, setLabel] = useState(style.label);
  const [type, setType] = useState(style.type);
  const [icon, setIcon] = useState(style.icon);
  const [action, setAction] = useState(style.action);

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "Button Setting successfully added!",
      // description:'Column Span can only be between 1 to 12',
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
              // let style={
              //   display:disFlex,
              //   flexDirection:flexDir,
              //   justifyContent:justify,
              //   alignItems:align,
              //   gap:gap,
              //   ...extraStyle
              // }
              //dispatch(addSettingToComponent(id, style))
              openNotificationWithIcon();
              onClose();
            }}
          >
            Save
          </Button>
        </Space>
      }
    >
      <div className="component-setting-container">
        {contextHolder}
        <div className="component-setting-heading">Button Label</div>
        <Input value={label} onChange={(e) => setLabel(e.target.label)} />
        <Divider />
        <div className="component-setting-heading">Button Icon</div>
        <Input value={icon} onChange={(e) => setIcon(e.target.label)} />
        <Divider />
        <div className="component-setting-heading">Variant/Type</div>
        <Select
          defaultValue={type}
          style={{ width: "100%" }}
          onChange={(val) => setType(val)}
          options={[
            { value: "primary", label: "primary" },
            { value: "dashed", label: "dashed" },
            { value: "text", label: "text" },
            { value: "link", label: "link" },
          ]}
        />
        <Divider />
        <div className="component-setting-heading">Actions Type</div>
        <Select
          defaultValue={action}
          style={{ width: "100%" }}
          onChange={(val) => setAction(val)}
          options={[
            { value: "click", label: "click" },
            { value: "navigate", label: "navigate" },
          ]}
        />
        <Divider />
      </div>
    </Drawer>
  );
}
