import react, { useState, useEffect } from "react";
import "./style.css";
import { useDrop } from 'react-dnd'
import { Empty } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addSection } from "../../Redux/Actions/actions";
import Resolver from "./resolver";
import EmptyStateImg from "../../Assets/emptystateimg.svg";

export default function BuilderResolver() {
  const dispatch = useDispatch()
  const layersData = useSelector((state) => state);
  const [layers, setLayers] = useState(layersData.build.pageBuilder || []);

  useEffect(()=>{
    setLayers(layersData.build.pageBuilder)
  },[layersData.build.pageBuilder])

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'section',
    drop: (item) => {
        dispatch(addSection(item))
    },
    canDrop: (item) => item.component === 'section',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

//   console.log(canDrop, isOver)

  if (layers.length == 0) {
    return (
      <section className="builder-resolver empty">
        <div className="drag-drop-empty-container" ref={drop}>
          <Empty
            image={EmptyStateImg}
            description={<span>Drag & Drop a Section Component to start building UI</span>}
          />
        </div>
      </section>
    );
  }

  return <section className="builder-resolver">
    {
        layers.map(component => {
            return <Resolver key={component.id} component={component}/>
        })
    }
  </section>;
}
