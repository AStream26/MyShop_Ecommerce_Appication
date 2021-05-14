import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';
import Loader from '../components/utilities_/myloader';

const HomeScreen = () => {
   
   const [product,Setproduct] = useState([]); 
   const [loading,setLoading] = useState(true);
useEffect(()=>{
    const fetchProduct = async ()=>{
        const {data} = await axios.get('/api/v1/product');
           
        Setproduct(data.products);
        setTimeout(()=>{
            setLoading(false)
        },100);
    }
    fetchProduct();
},[])
    return(


     <>
     <h1>Latest Products</h1>

     <Row>
         {
             product.map(item=>{
                 return (
                     <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                      
                      <Product isloading={loading}  product ={item} /> 
                      
                     </Col>
                 )
             })
         }
     </Row>

     </>
    )
}

export default HomeScreen;
