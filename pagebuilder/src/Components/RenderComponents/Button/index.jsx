import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { onAction } from "./actions";

export default function ButtonComponent({ data }) {
  const navigate = useNavigate();
  let { setting } = data;

  if (setting.icon !== null) {
    return (
      <Button type={setting.type} icon={setting.icon}>
        {setting.label}
      </Button>
    );
  }

  return (
    <Button
      type={setting.type}
      onClick={() => onAction(setting.action, navigate, setting.payload)}
    >
      {setting.label}
    </Button>
  );
}
