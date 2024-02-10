import React from 'react';
import {Layers} from './layers';

export default function Resolver({component, insideGrid}) {
  return (
    <div className='page-builder-component-resolver'>
        {Layers(component, insideGrid)}
    </div>
  )
}
