import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { onAction } from "./actions";

export default function ButtonComponent({ data }) {
  const navigate = useNavigate();
  let { style } = data;

  if (style.icon !== null) {
    return (
      <Button type={style.type} icon={style.icon}>
        {style.label}
      </Button>
    );
  }

  return (
    <Button type={style.type} onClick={() => onAction(style.action, navigate)}>
      {style.label}
    </Button>
  );
}
