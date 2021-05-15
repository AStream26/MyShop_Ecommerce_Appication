import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/utilities_/myloader';
import {listProduct} from '../actions/productAction';

const HomeScreen = () => {
   
  
   const dispatch = useDispatch();
   const productlist = useSelector(state=>state.productList );
   const {loading,product,error} = productlist;

useEffect(()=>{
     dispatch(listProduct());
},[dispatch]);

    return(


     <>
     <h1>Latest Products</h1>

     {
         loading?<Loader center={true}/>:error?(<h1>Error</h1>):
        (
            <Row>
         {
             product.map(item=>{
                 return (
                     <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                      
                     
                          <Product loading={loading}  product ={item} />
                     
                      
                     </Col>
                 )
             })
         }
     </Row>

        )
     }

     </>
    )
}

export default HomeScreen;
