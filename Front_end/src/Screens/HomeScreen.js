import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/utilities_/myloader';
import {listProduct} from '../actions/productAction';
import Indicator from '../components/Indicator/indicator';

const HomeScreen = ({history,location}) => {
   
  
   const dispatch = useDispatch();
   const productlist = useSelector(state=>state.productList );
   const {userLogin} = useSelector(state=>state.userLogin)
   const {loading,product,error} = productlist;
   const [message1,setMessage] = useState(null);

useEffect(()=>{
     if(history.state){
         setMessage(history.state.messageFrom);
     }
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
