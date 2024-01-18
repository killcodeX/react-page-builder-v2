import React from 'react';
import {Layers} from './layers';

export default function Resolver({component}) {
  return (
    <div className='page-builder-component-resolver'>
        {Layers(component)}
        {
                component?.components?.length > 0 && component.components.map(item =>{
                    return (
                        <div key={item.id} className="page-builder-component-children">
                            <Resolver 
                                id={item.id} 
                                component={item}
                            />
                        </div>
                    )
                })
            }
    </div>
  )
}
