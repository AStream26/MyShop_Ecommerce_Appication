import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/utilities_/myloader';
import {listProduct} from '../actions/productAction';
import Indicator from '../components/Indicator/indicator';
import { useHistory, useLocation, useParams } from 'react-router';
import {ScreenAnimation} from './Animation';
import {motion} from 'framer-motion';
import CartLoader from '../components/utilities_/cartloader';
import Directbtn from '../components/utilities_/directbtn';
import TopProduct from './TopProduct';

const HomeScreen = (props)=>{
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const search = params.search
  
   const dispatch = useDispatch();
   const productlist = useSelector(state=>state.productList );
   const {userLogin} = useSelector(state=>state.userLogin)
   const {loading,product,error} = productlist;
   const [message1,setMessage] = useState(null);
   const [page,setPage] = useState(1);

   let previoushandler = ()=>{
       setPage(page-1);
   }
   let nexthandler = ()=>{
    setPage(page+1);
}
  
useEffect(()=>{
     if(history.hash){
         setMessage(history.hash);
         setInterval(() => {
             history.hash = '';
         }, 1000);    }
         if(!loading)
     dispatch(listProduct(search,page));
     

},[dispatch,setMessage,history,userLogin,search,page]);


let closehandler = ()=>{
    setMessage(null);
    history.state = null;
}

    return(


     <Container>
     
     {
         message1?(<>
         <Indicator  handler = {closehandler}message={message1} alert="alert-primary" />
         </>):null
     }
     {
         !search && <TopProduct />
     }

     {
         loading?<CartLoader color='black'  opacity='0.5' />:error?(<h1>{error}</h1>):
        (
            <Row>
         {
             product.map(item=>{
                 return (
                     <Col key={item._id}  sm={6} md={4} lg={3}>
                      
                     
                          <Product loading={loading}  product ={item} />
                     
                      
                     </Col>
                 )
             })
         }
        
{
    search?<>
     <Row className='d-flex justify-content-center' style={{transform:'scale(0.8)'}}>
        {
         <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={page==1} onClick={previoushandler} >Previous</button></Col>
        }
         {
      <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={product?.length<9} onClick={nexthandler} >Next</button></Col>
         }
     </Row> 
    </>:null
}
   


     </Row>

        )
     }
   
     </Container>
    )
}

export default HomeScreen;
