import react, { useState, useEffect } from "react";
import { useDrop } from 'react-dnd'
import { Button, Empty } from "antd";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import EmptyStateImg from "../../Assets/emptystateimg.svg";

export default function BuilderResolver() {
  const layersData = useSelector((state) => state);
  const [layers, setLayers] = useState(layersData.build.pageBuilder || []);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'section',
    drop: () => alert("drop received"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  if (layers.length == 0) {
    return (
      <section className="builder-resolver">
        <div className="drag-drop-empty-container" ref={drop}>
          <Empty
            image={EmptyStateImg}
            description={<span>Drag & Drop a Section Component to start building UI</span>}
          />
        </div>
      </section>
    );
  }

  return <section className="builder-resolver">BuilderResolver</section>;
}
