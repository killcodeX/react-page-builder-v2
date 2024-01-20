import React, { useState } from 'react';
import { Slider, Select, Divider, Drawer, Space, Button } from "antd";
import { useDispatch } from "react-redux";
import { addSettingToComponent } from "../../../Redux/Actions/actions";

const gapTypes = {
  8: "8",
  16: "16",
  32: "32",
  64: "64"
};

export default function FlexWrapperSetting({id, title, onClose, openDrawer}) {
  const dispatch = useDispatch();
  const [disFlex, setDisFlex] = useState("flex")
  const [flexDir, setFlexDir] = useState("row")
  const [justify, setJustify] = useState("flex-start")
  const [align, setAlign] = useState("flex-start")
  const [gap, setGap] = useState("8")


  return (
    <Drawer
      title={title}
      onClose={onClose}
      open={openDrawer}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={()=>{
            let style={
              flex:disFlex,
              flexDirection:flexDir,
              justifyContent:justify,
              alignItems:align,
              gap:gap
            }
            dispatch(addSettingToComponent(id, style))
          }}>
            Save
          </Button>
        </Space>
      }
    >
    <div className="component-setting-container">
    <div className="component-setting-heading">Display Type</div>
    <Select
      defaultValue={disFlex}
      style={{ width: "100%" }}
      onChange={(val) => setDisFlex(val)}
      options={[
        { value: 'flex', label: 'flex' },
        { value: 'inline-flex', label: 'inline-flex' }
      ]}
    />
    <Divider/>
    <div className="component-setting-heading">Flex Direction</div>
    <Select
      defaultValue={flexDir}
      style={{ width: "100%" }}
      onChange={(val) => setFlexDir(val)}
      options={[
        { value: 'row', label: 'row' },
        { value: 'row-reverse', label: 'row-reverse' },
        { value: 'column', label: 'column' },
        { value: 'column-reverse', label: 'column-reverse' }
      ]}
    />
    <Divider/>
    <div className="component-setting-heading">Justify Content</div>
    <Select
      defaultValue={justify}
      style={{ width: "100%" }}
      onChange={(val) => setJustify(val)}
      options={[
        { value: 'flex-start', label: 'flex-start' },
        { value: 'flex-end', label: 'flex-end' },
        { value: 'center', label: 'center' },
        { value: 'space-around', label: 'space-around' },
        { value: 'space-between', label: 'space-between' },
        { value: 'space-evenly', label: 'space-evenly' }
      ]}
    />
    <Divider/>
    <div className="component-setting-heading">Align Items</div>
    <Select
      defaultValue={align}
      style={{ width: "100%" }}
      onChange={(val) => setAlign(val)}
      options={[
        { value: 'flex-start', label: 'flex-start' },
        { value: 'flex-end', label: 'flex-end' },
        { value: 'center', label: 'center' },
        { value: 'baseline', label: 'baseline' }
      ]}
    />
    <Divider/>
    <div className="component-setting-heading">Gap</div>
    <Slider
        min={8}
        max={72}
        value={gap}
        onChange={(val) => setGap(val)}
        marks={gapTypes}
      />
    <Divider/>
  </div>
  </Drawer>
  )
}
