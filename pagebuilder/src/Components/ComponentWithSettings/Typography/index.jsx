import React, { useState } from "react";
import {
  Drawer,
  Space,
  Button,
  notification,
  Divider,
  Input,
  Select,
  ColorPicker,
} from "antd";
import { useDispatch } from "react-redux";
import { addSettingToComponent } from "../../../Redux/Actions/actions";

const { TextArea } = Input;

export default function TypographySetting({
  component,
  title,
  onClose,
  openDrawer,
}) {
  let {
    setting: { style },
  } = component;

  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [label, setLabel] = useState(component.setting.label);
  const [type, setType] = useState(component.setting.type);
  const [fontSize, setFontSize] = useState(style.fontSize);
  const [fontWeight, setFontWeight] = useState(style.fontWeight);
  const [color, setColor] = useState(style.color);

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "Typography Setting successfully added!",
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
              let setting = {
                label: label,
                type: type,
                style: {
                  fontSize: fontSize + "px",
                  fontWeight: fontWeight,
                  color: color,
                },
              };
              dispatch(addSettingToComponent(component.id, setting));
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
        <div className="component-setting-heading">Typography Type</div>
        <Select
          defaultValue={type}
          style={{ width: "100%" }}
          onChange={(val) => setType(val)}
          options={[
            { value: "Page Header", label: "Page Header" },
            { value: "Normal Header", label: "Normal Header" },
            { value: "Normal Text", label: "Normal Text" },
            { value: "Description", label: "Description" },
          ]}
        />
        <Divider />
        {type === "Description" ? (
          <>
            <div className="component-setting-heading">Description</div>
            <TextArea
              rows={5}
              placeholder="Enter your description..."
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </>
        ) : (
          <>
            <div className="component-setting-heading">Label</div>
            <Input
              placeholder="Enter your text..."
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </>
        )}
        <Divider />
        <div className="component-setting-heading">Font Size</div>
        <Input
          addonAfter="px"
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
        <Divider />
        <div className="component-setting-heading">Font Weight</div>
        <Input
          type="number"
          value={fontWeight}
          onChange={(e) => setFontWeight(e.target.value)}
        />
        <Divider />
        <div className="component-setting-heading">Text Color</div>
        <ColorPicker
          value={color}
          onChange={(color) => setColor(color.toHexString())}
          showText
        />
        <Divider />
      </div>
    </Drawer>
  );
}
