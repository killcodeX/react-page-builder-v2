import React, { useState } from 'react';
import { Slider, Select, Divider, notification, Drawer, Space, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { addSettingToComponent } from "../../../Redux/Actions/actions";

const { TextArea } = Input;

const gapTypes = {
  8: "8",
  16: "16",
  32: "32",
  64: "64"
};

export default function FlexWrapperSetting({component, title, onClose, openDrawer}) {
  let { style } = component;
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const [disFlex, setDisFlex] = useState(style.display)
  const [flexDir, setFlexDir] = useState(style.flexDirection)
  const [justify, setJustify] = useState(style.justifyContent)
  const [align, setAlign] = useState(style.alignItems)
  const [gap, setGap] = useState(style.gap);
  const [extraStyle, setExtraStyle] = useState(null)

    const openNotificationWithIcon = () => {
    api["success"]({
      message: 'Flex Setting successfully added!',
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
          <Button type="primary" onClick={()=>{
            let style={
              display:disFlex,
              flexDirection:flexDir,
              justifyContent:justify,
              alignItems:align,
              gap:gap,
              ...extraStyle
            }
            dispatch(addSettingToComponent(component.id, style))
            openNotificationWithIcon()
            onClose()
          }}>
            Save
          </Button>
        </Space>
      }
    >
    <div className="component-setting-container">
    {contextHolder}
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
    <div className="component-setting-heading">Add Extra Style</div>
    <div className='extra-style-information'>
      <span>- Add Extra style to your component like padding, margin, background-color, etc.</span>
      <span>- Write your vanila css wrapping under {"{}"} bracket!</span>
    </div>
    <TextArea rows={5}  value={extraStyle} onChange={(e) => setExtraStyle(e.target.value)}/>
    <Divider/>
  </div>
  </Drawer>
  )
}
