import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/utilities_/myloader';
import {listProduct} from '../actions/productAction';
import Indicator from '../components/Indicator/indicator';
import { useHistory, useLocation } from 'react-router';
import {ScreenAnimation} from './Animation';
import {motion} from 'framer-motion';

const HomeScreen = (props)=>{
    const history = useHistory();
    const location = useLocation();
  
   const dispatch = useDispatch();
   const productlist = useSelector(state=>state.productList );
   const {userLogin} = useSelector(state=>state.userLogin)
   const {loading,product,error} = productlist;
   const [message1,setMessage] = useState(null);

useEffect(()=>{
     if(history.hash){
         setMessage(history.hash);
         setInterval(() => {
             history.hash = '';
         }, 1000);    }
    
     dispatch(listProduct());
     

},[dispatch,setMessage,history,userLogin]);


let closehandler = ()=>{
    setMessage(null);
    history.state = null;
}

    return(


     <>
     <h1>Latest Products</h1>
     {
         message1?(<>
         <Indicator  handler = {closehandler}message={message1} alert="alert-primary" />
         </>):null
     }

     {
         loading?<Loader center={true}/>:error?(<h1>{error}</h1>):
        (
            <Row>
         {
             product.map(item=>{
                 return (
                     <Col key={item._id} sm={6} md={4} lg={3}>
                      
                     
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
