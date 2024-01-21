import React from 'react';
import { v4 as uuid } from 'uuid';
import { components } from "./list"
import "./style.css";
import { useDrag } from 'react-dnd';
import { HolderOutlined } from '@ant-design/icons';


export default function ComponentList() {
    return (
        <div className='component-list'>
            <div className='component-list-header'>Components</div>
            <div className='component-list-column'>
                {components.map(item => <ComponentCards key={item.id} item={item} />)}
            </div>
        </div>
    )
}

function ComponentCards({item}){
    const [{isDragging}, drag] = useDrag(() => ({
        type: item.component,
        item: () => {
            let obj = {
                ...item,
                id:uuid(),
            }
            delete obj["icon"]
            return obj
        },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            // if (item && dropResult) {
            //   alert(`You dropped ${item.name} into ${dropResult.name}!`)
            // }
        }
    }))

    return(
        <div className='component-card-container' ref={drag}>
            <div className='left-side-component-card-container'>
                <div className='component-card-ontainer-icon'>{item.icon}</div>
                <div className='component-card-container-label'>{item.label}</div>
            </div>
            <div className='right-side-component-card-container'>
            <HolderOutlined />
            </div>
        </div>
    )
}
