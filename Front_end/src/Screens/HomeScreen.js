import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Myproduct from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
     <>
     <h1>Latest Products</h1>

     <Row>
         {
             Myproduct.map(item=>{
                 return (
                     <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                    <Product   product ={item} /> 
                     </Col>
                 )
             })
         }
     </Row>

     </>
    )
}

export default HomeScreen;
