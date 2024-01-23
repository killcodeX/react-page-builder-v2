import React, { useState, useEffect } from "react";
import {
  Slider,
  Divider,
  Input,
  notification,
  Drawer,
  Space,
  Button,
} from "antd";
import "../style.css";

const columnsTypes = {
  2: "2",
  3: "3",
  4: "4",
  6: "6",
};

export default function GridSetting({
  totalColumn,
  setTotalColumn,
  title,
  onClose,
  openDrawer,
}) {
  const [api, contextHolder] = notification.useNotification();
  let [columns, setColumns] = useState([]);

  // const openNotificationWithIcon = () => {
  //   api["error"]({
  //     message: 'Column Span Error',
  //     description:'Column Span can only be between 1 to 12',
  //   });
  // };

  // useEffect(() => {
  //   let col = [];
  //   for (let i = 0; i < totalColumn.column; i++) {
  //     col.push(
  //       <div className="column-span-container">
  //         <span>Column {i+1}</span>
  //         <Input type="number" min={1} max={24} onChange={(e) => {
  //           console.log(e.target.value)
  //           if(e.target.value && (e.target.value <= 0 || e.target.value > 12)){
  //             openNotificationWithIcon()
  //           }
  //           let obj = {}
  //           obj["id"]=i+1
  //           obj["span"]=e.target.value
  //           setTotalColumn({totalColumn, columnDetails:[...totalColumn?.columnDetails, obj]})
  //         }}/>
  //       </div>
  //     );
  //   }
  //   setColumns(col)
  // }, [totalColumn]);

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
      {contextHolder}
      <div className="component-setting-container">
        <div className="component-setting-heading">Number of Columns</div>
        {/* <Slider
        min={0}
        max={12}
        value={totalColumn.column}
        onChange={(val) => setTotalColumn({...totalColumn, column:val})}
        marks={columnsTypes}
      /> */}
        <Divider />
        {/* <div className="component-setting-heading">Each Columns Span</div>
      {
        columns.length > 0 && columns.map((item,index) => {
            return <React.Fragment key={index}>{item}</React.Fragment>
        })
      } */}
      </div>
    </Drawer>
  );
}
