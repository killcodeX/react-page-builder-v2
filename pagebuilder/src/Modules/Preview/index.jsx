import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Empty, Button } from "antd";
import PageResolver from "../../Resolver/PageResolver";
import PreviewImg from "../../Assets/sectiondrop.svg";

export default function Preview() {
  const navigate = useNavigate();
  const layersData = useSelector((state) => state.build);
  const [layers, setLayers] = useState(layersData.pageBuilder || []);

  useEffect(() => {
    setLayers(layersData.pageBuilder);
  }, [layersData.pageBuilder]);

  if (layers.length == 0) {
    return (
      <main className="page-builder-previewer-empty">
        <Empty
          image={PreviewImg}
          imageStyle={{ height: 360 }}
          description={
            <span style={{ fontWeight: 600, fontSize: "18px" }}>
              Page is Empty!
            </span>
          }
        >
          <Button type="primary" onClick={() => navigate("/")}>
            Create Now
          </Button>
        </Empty>
      </main>
    );
  }

  return (
    <main className="page-builder-previewer">
      {layers.map((item) => {
        return <PageResolver key={item.id} component={item} />;
      })}
    </main>
  );
}
