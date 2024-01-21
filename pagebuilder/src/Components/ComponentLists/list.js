import { v4 as uuid } from "uuid";
import { CopyOutlined } from "@ant-design/icons";
// import { VscSymbolConstant, VscSymbolEnum, VscBold } from "react-icons/vsc";

export const components = [
  {
    id: uuid(),
    label: "Section",
    component: "section",
    icon: <CopyOutlined />,
    setting: {
      style: {},
    },
  },
  {
    id: uuid(),
    label: "Grid",
    component: "grid",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Flex Wrapper",
    component: "flexwrapper",
    icon: <CopyOutlined />,
    setting: {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "8",
      },
    },
  },
  {
    id: uuid(),
    label: "Typography",
    component: "typography",
    icon: <CopyOutlined />,
    setting: {
      label: "",
      type: "Normal Text",
      style: {
        fontSize: "14",
        fontWeight: "500",
        color: "#000",
      },
    },
  },
  {
    id: uuid(),
    label: "Button",
    component: "button",
    icon: <CopyOutlined />,
    setting: {
      label: "Button",
      type: "primary",
      action: "click",
      icon: null,
    },
  },
  {
    id: uuid(),
    label: "Accordion",
    component: "accordion",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Card",
    component: "card",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Date Picker",
    component: "date-picker",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Input",
    component: "input",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Modal",
    component: "modal",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Radio Buttons",
    component: "radio-button",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Select",
    component: "select",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Switch",
    component: "switch",
    icon: <CopyOutlined />,
  },
  {
    id: uuid(),
    label: "Tabs",
    component: "tabs",
    icon: <CopyOutlined />,
  },
];

// export const childComponents = [

// ]
