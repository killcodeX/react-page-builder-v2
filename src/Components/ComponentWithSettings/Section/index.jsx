import React, { useState } from "react";
import { Drawer, Space, Button, notification, Divider, Input } from "antd";
import { useDispatch } from "react-redux";
import { addSettingToComponent } from "../../../Redux/Actions/actions";

const { TextArea } = Input;

export default function SectionSetting({
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
  const [padding, setPadding] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    end: 0,
  });
  const [margin, setMargin] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    end: 0,
  });
  const [background, setBackground] = useState("#fff");
  const [extraStyle, setExtraStyle] = useState(style || null);

  const openNotificationWithIcon = () => {
    api["success"]({
      message: "Section Setting successfully added!",
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
              dispatch(
                addSettingToComponent(component.id, { style: extraStyle })
              );
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
        <div className="component-setting-heading">Add Extra Style</div>
        <div className="extra-style-information">
          <span>
            - Add Extra style to your component like padding, margin,
            background-color, etc.
          </span>
          <span>- Write your SASS CSS code</span>
        </div>
        <TextArea
          rows={5}
          value={extraStyle}
          onChange={(e) => setExtraStyle(e.target.value)}
        />
        <Divider />
      </div>
    </Drawer>
  );
}
