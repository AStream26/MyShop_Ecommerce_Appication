import React from 'react';
import { Link } from 'react-router-dom';
import {Image,Carousel} from 'react-bootstrap'


const Example = ({product,top}) =>{




  return(
   
    <Carousel pause='hover'>
    {
        product.map((image,i)=>(
            <Carousel.Item key={i+1} className='bg-dark'>
          
            <Image style={{borderRadius:'0px',width:'100%',height:'100%',margin:'0px',padding:'0px'}} src={`/public/img/Product/${image}`} alt={product.name} />
          
            </Carousel.Item>
        ))
    }
  </Carousel>
   
  )

}

export default Example;