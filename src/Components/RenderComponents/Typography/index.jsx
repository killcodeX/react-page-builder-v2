import React from "react";

export default function Typography({ data }) {
  let {
    setting: { style },
  } = data;

  switch (data.setting.type) {
    case "Page Header":
      return <h2 style={style}>{data.setting.label}</h2>; //Normal Text
    case "Normal Header":
      return <h3 style={style}>{data.setting.label}</h3>;
    case "Normal Text":
      return <div style={style}>{data.setting.label}</div>;
    case "Description":
      return <p style={style}>{data.setting.label}</p>;
    default:
      <label>{data.setting.label}</label>;
  }
}
