import React,{ useEffect, useState} from 'react';
import "./style.css";
import { useSelector } from "react-redux";
import PageResolver from '../../Resolver/PageResolver';

export default function Preview() {
  const layersData = useSelector((state) => state.build);
  const [layers, setLayers] = useState(layersData.pageBuilder || []);

  useEffect(() => {
    setLayers(layersData.pageBuilder);
  }, [layersData.pageBuilder]);


  return (
    <main className='page-builder-previewer'>
      {
        layers.map((item) =>{
          return <PageResolver key={item.id} component={item}/>
        })
      }
    </main>
  )
}
