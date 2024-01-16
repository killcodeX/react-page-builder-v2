import React from 'react';
import {Layers} from './layers';

export default function Resolver({component}) {
  return (
    <div className='page-builder-component-resolver'>
        {Layers(component)}
    </div>
  )
}
