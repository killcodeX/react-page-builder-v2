import react, { useState, useEffect } from "react";
import { Button, Empty } from "antd";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import EmptyStateImg from "../../Assets/emptystateimg.svg";

export default function BuilderResolver() {
  const layersData = useSelector((state) => state);
  console.log(layersData);
  const [layers, setLayers] = useState(layersData.build.pageBuilder || []);

  if (layers.length == 0) {
    return (
      <section className="builder-resolver">
        <div className="drag-drop-empty-container">
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
