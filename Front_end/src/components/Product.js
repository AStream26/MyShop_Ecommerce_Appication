import React from 'react'
import { Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating.js';
import Loader from './utilities_/myloader';

const Product = ({product,loading}) => {
    return (
        <div>
        {
            loading?(<Loader />)
            : (
                <div>
                <Card className='my-3 p-3 rounded'>
                 <Link to={`/product/${product._id}`} >
                  <Card.Img src={`/public/img/Product/${product.image[0]}`}/>
                 </Link>
                
                     
                 <Card.Body>
                 <Link to={`/product/${product._id}`} > 
                 <Card.Title><strong>{product.name}</strong></Card.Title>
                 </Link>
                <Card.Text>
                    <span className='my-3'>
                        <Rating rating={ +product.rating}  text={`${product.numReviews} Reviews`}  />
                       
                    </span>
                </Card.Text>
        
                <Card.Text as='h3'>
                    
                ₹ {product.price}
                      
                   
                </Card.Text>
                    
                 </Card.Body>
                
                 
        
        
                </Card>
                </div>
            )
        }
          </div>
    )
  
}

export default Product
