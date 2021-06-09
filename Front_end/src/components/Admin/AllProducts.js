import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import {deleteproduct, listProduct} from '../../actions/productAction'
import Indicator from '../Indicator/indicator'
import { Button, Row,Col,Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {ADMIN_EDIT_PRODUCT_RESET} from '../../Reducer/constants'
const AllProducts = () => {
   
    const {product,loading,error} = useSelector(state=>state.productList);
    const {success,error:error1} = useSelector(state=>state.createProductReducer);
    let[message,setMessage] = useState(null);
    
   const dispatch  = useDispatch();
   const [page,setPage] = useState(1);

   let previoushandler = ()=>{
       setPage(page-1);
   }
   let nexthandler = ()=>{
    setPage(page+1);
}
    useEffect(()=>{
       
        if(!loading || success)
      dispatch(listProduct('',page,10));

      
    },[dispatch,success,page]);
   // console.log(users);
    let deletehandler=(id)=>{
if(window.confirm('Are you sure ??'))
       dispatch( deleteproduct(id));
    }

    useEffect(()=>{
     if(error||error1){
         setMessage(error?error:error1);
     }
     if(success){
         setMessage('product deleted successfully')
         dispatch({type:ADMIN_EDIT_PRODUCT_RESET})
     }
    },[error,success,error1])
  let handler = ()=>{
      setMessage(null);
  }
    return (
        <motion.div
        initial='initial'
        animate="in"
        exit="out"
        variants={NestedAnimation}
        transition={PageTransition}
        >
          <>
          {
               message?<Indicator message={message} handler={handler}color='alert-danger' /> :null
          }
          </>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>CATEGORY</th>
                        <th>BRAND</th>
                        <th>PRICE</th>
                        <th className="d-flex justify-content-center"><LinkContainer to={`/admin/product/create`}>
                        <Button variant='success' className='btn-sm'><i className='fas fa-plus'>Add Product</i></Button>
                        </LinkContainer></th>
                       
                    </tr>
                </thead>

                <tbody>
                    {
                        product.map((el,i)=>{
                           return (           
                            <tr key={el._id}>
                            <td>{i+1}</td>
                            <td>{el.name}</td>
                            <td>{el.category}</td>
                            <td>{el.brand}</td>
                            <td> {el.price}</td>

                                <td className='d-flex justify-content-around'>
                                    <LinkContainer to={`/admin/product/${el._id}/edit`}>
                                    <Button variant='warning' className='btn-sm'><i className='fas fa-edit'></i></Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={()=>deletehandler(el._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                          </tr>
                           )
                        })
                    }
                </tbody>

            </Table>
            <Row className='d-flex justify-content-center' style={{transform:'scale(0.8)'}}>
        {
         <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={page==1} onClick={previoushandler} >Previous</button></Col>
        }
         {
      <Col  xs={6} md={2}><button style={{width:'100%',padding:'10px', border:'1px solid black'}} disabled={product?.length<10} onClick={nexthandler} >Next</button></Col>
         }
     </Row> 
        
     
        
        </motion.div>
    )
}

export default AllProducts;
