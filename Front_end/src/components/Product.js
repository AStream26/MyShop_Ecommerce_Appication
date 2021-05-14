import React from 'react'
import { Card,Badge, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating.js';
import Loader from './utilities_/myloader';

const Product = ({product,isloading}) => {
    return isloading ?(<><Loader /></>):
    (
        <>
        <Card className='my-3 p-3 rounded'>
         <Link to={`/product/${product._id}`} >
          <Card.Img src={product.image}/>
         </Link>
        
             
         <Card.Body>
         <Link to={`/product/${product._id}`} > 
         <Card.Title as ='div'><strong>{product.name}</strong></Card.Title>
         </Link>
        <Card.Text>
            <div className='my-3'>
                <Rating rating={ +product.rating} text={`${product.numReviews} Reviews`}  />
               
            </div>
        </Card.Text>

        <Card.Text as='h3'>
            
        ₹ {product.price}
              
           
        </Card.Text>
            
         </Card.Body>
        
         


        </Card>
        </>
    )
}

export default Product
