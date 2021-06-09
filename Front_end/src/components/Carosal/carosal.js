import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const Example = ({product,top}) =>{
  let items = [];

  if(top){
    product.forEach((item,i)=>{
      let it = {
        src:`/public/img/Product/${item.image[0]}`,
        altText: `Image`,
        caption: `${item.name}`,
        header: `${item.price}`,
        key: `${i+1}`
      }
      items.push(it);
    })
  }
else{
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
}
 


  return(
   
      <UncontrolledCarousel className='bg-dark'items={items} />
   
  )

}

export default Example;