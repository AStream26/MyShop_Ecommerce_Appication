import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
   
   const [product,Setproduct] = useState([]); 
useEffect(()=>{
    const fetchProduct = async ()=>{
        const {data} = await axios.get('/api/v1/product');
        console.log(data);
        Setproduct(data);
    }
    fetchProduct();
},[])
    return (
     <>
     <h1>Latest Products</h1>

     <Row>
         {
             product.map(item=>{
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
