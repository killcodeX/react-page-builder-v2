import React from 'react';
import PageResolver from '../../../Resolver/PageResolver';

export default function Section({data}) {
  return (
    <section className='page-section' style={data.style}>
      {
        data.components && data.components.length > 0 && data.components.map(item =>{
          return <PageResolver key={item.id} component={item}/>
        })
      }
    </section>
  )
}
