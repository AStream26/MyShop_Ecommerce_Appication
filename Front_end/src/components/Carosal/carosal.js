import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const Example = ({product}) =>{
  let items = [];

  product.forEach((item,i)=>{
    let it = {
      src:`/public/img/Product/${item}`,
      altText: `Image`,
      caption: '',
      header: '',
      key: `${i+1}`
    }
    items.push(it);
  });


  return(
    <div >
      <UncontrolledCarousel items={items} />
    </div>
  )

}

export default Example;