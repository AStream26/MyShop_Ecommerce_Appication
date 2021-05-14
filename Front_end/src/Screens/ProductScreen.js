import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';

import {Link } from 'react-router-dom';
import Rating from '../components/Rating';
import MyButton from '../components/Button';
import {Row ,Col,ListGroup , Card ,Image , Button, ListGroupItem} from 'react-bootstrap';
import axios from 'axios';
import Loader from '../components/utilities_/myloader';

const ProductScreen = props => {
    
      const [product,setProduct] =  useState({});
      const [loading,setLoading] = useState(true);

      useEffect(()=>{
          let fetchProduct = async ()=>{
             let {data} = await axios.get(`/api/v1/product/${props.match.params.id}`);
             setProduct(data.product);
             setLoading(false);
          } 
          fetchProduct();
      },[props.match])
    
  let active =product.countInStock>0?true:false;

    //nsole.log(product);
    return loading?<Loader center={true} />:(
        <>
          <Link to ='/'>
          <Button variant='outline-dark' size='sm'>Go Back</Button>
          </Link>

          <Row className="mt-4">
              <Col  lg={6}>
              <Image src={product.image} alt={product.name} fluid />    
              </Col>
              <Col  lg={3} >
                  <ListGroup variant='flush' >
                      <ListGroup.Item className="my-4">
                          <h2>{product.name}</h2>
                      </ListGroup.Item>
                      <ListGroup.Item>
                         <Rating rating={product.rating} text={`${product.numReviews} Reviews`} />
                      </ListGroup.Item>
                      <ListGroup.Item > 
                         Price: ₹ {product.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <strong>Description:</strong> 
                          {product.description}
                      </ListGroup.Item>

                      
                  </ListGroup>
              </Col>

              <Col md={3}>
                  <Card>
                      <ListGroup variant='flush'>
                       <ListGroupItem>
                           <Row>
                               <Col>
                               Price
                               </Col>
                               <Col>
                              <strong> ₹ {product.price}</strong>
                               </Col>
                           </Row>
                       </ListGroupItem>
                       <ListGroupItem>
                           <Row>
                               <Col >
                               Stock
                               </Col>
                               <Col>
                              <strong>{active?'In Stock':'Out Of Stock'}</strong>
                               </Col>
                           </Row>
                       </ListGroupItem>
                      </ListGroup>
                      <MyButton color='#ff8000' text='But Now' active />
                    <MyButton color='#ffbf00' text='Add to Cart' active />
                  </Card>
                 
              </Col>
              
          </Row>
        </>
    )
}


export default ProductScreen
