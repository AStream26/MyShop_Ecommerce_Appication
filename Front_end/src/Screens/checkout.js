import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup,ListGroupItem, Row,Container } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom'
import {PayPalButton} from 'react-paypal-button-v2'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import MyButton from '../components/Button';
import {placeorder,getOrderById} from '../actions/orderaction'
import Indicator from '../components/Indicator/indicator';
import Loader from '../components/utilities_/myloader';
import axios from 'axios';
import {payorder} from '../actions/orderaction'
import {DELIVER_RESET, GETORDERBYID_RESET, ORDERPAY_RESET} from '../Reducer/constants'
import { deliver } from '../actions/orderaction';
import CartLoader from '../components/utilities_/cartloader';
const Placeorder = props => {
    let params  = useParams();
     let history = useHistory();
     let dispatch = useDispatch();
     let [sdkReady,SetsdkReady] = useState(false);
     let {userData} = useSelector(state=>state.userDetail);
   
     let {loading,currentOrder,error} = useSelector(state=>state?.CurrentPlaceOrder);
     let {success:succesPay,loading:loadingPay} = useSelector(state=>state.PaymentReducer)
     let {deliverloading,deliversuccess,errordeliver}  = useSelector(state=>state.DeliverReducer);

     useEffect(()=>{
       
        const addPaypalscript = async ()=>{
            const{data :client_ID} = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${client_ID}`
            script.async = true;
            script.onload = ()=>{
                SetsdkReady(true);
            }
            document.body.appendChild(script);
        }

       if(!currentOrder || currentOrder.id !== params.id || succesPay || deliversuccess){
          if(!loading){
            dispatch({type:ORDERPAY_RESET});
            dispatch({type:DELIVER_RESET});
         dispatch(getOrderById(params.id));
          }
       } else if(!currentOrder.isPaid){
           if(!window.paypal){
               addPaypalscript();
           }
           else{
               SetsdkReady(true);
           }
       }
    //    return (()=>{
    //             dispatch({type:GETORDERBYID_RESET})
    //         })
     
     },[dispatch,params.id,succesPay,currentOrder,deliversuccess]);

    //  useEffect(()=>{
    //     return (()=>{
    //         dispatch({type:GETORDERBYID_RESET})
    //     })
    //  },[])

  
  const successhandler = (paymentResult)=>{
     // console.log(paymentResult);
       dispatch(payorder(params.id,paymentResult))
  }
    
   const deliverhandler = ()=>{
       dispatch(deliver(params.id));
   } 
    
    
    //console.log(Item)
    
   return loading?<CartLoader color='black'  opacity='0.5' />:error?<Indicator message={error} color='alert-danger' />:
   <Container>
   <Row>
      <ListGroupItem className=' border-0 border-bottom'> <strong><h4>ORDER ID - {params.id}</h4></strong></ListGroupItem>
        
       <Col lg={8}>
                <ListGroup variant='flush'>
                    <ListGroupItem >
                    <strong> <h2>Shipping Address</h2></strong>
                     <p><strong>Name</strong> :  {userData.name}</p>
                     <p><strong>Email</strong> :  {userData.email}</p>
                       <p> <strong>Address</strong> :
                       {currentOrder?.shippingAddress?.Address},{currentOrder?.shippingAddress?.City}, {currentOrder?.shippingAddress?.Pincode} , {currentOrder?.shippingAddress?.State}
                         , {currentOrder?.shippingAddress?.Country}  
                       </p>
                       <strong><p>Mobile Number : {currentOrder?.shippingAddress?.MobileNo}</p></strong>
    
                       {
                          !currentOrder?.isDeliver?(
                              <>
                              <div style={{opacity:'0.66'}} className="alert alert-dismissible alert-danger">
                                Not Delivered
                                </div>
                              </>
                          ):
                          (
                            <>
                            <div style={{opacity:'0.7', backgroundColor:' rgb(62, 173, 207)'}} className="alert alert-dismissible alert-success">
                              Delivered on -  {
                                   currentOrder?.deliverAt
                               }
                              </div>
                            </>
                          )
                      }
                    
                    </ListGroupItem>
    
                    <ListGroupItem className='my-4'>
                        <h2>Payment Method</h2>
                        <strong>Method : </strong>
                        {currentOrder?.paymentMethod}
                    </ListGroupItem>
                  <ListGroupItem>
                      {
                          !currentOrder?.isPaid?(
                              <>
                              <div style={{opacity:'0.6'}} className="alert alert-dismissible alert-danger">
                                Not Paid
                                </div>
                              </>
                          ):
                          ( 
                            <>
                            <div style={{opacity:'0.7', backgroundColor:' rgb(62, 173, 207)'}} className="alert alert-dismissible alert-success">
                              Paid At {
                                   currentOrder?.paidAt
                               }
                              </div>
                            </>

                          )
                      }
                  </ListGroupItem>
                
                  <table className="table table-hover " >
                    <thead >
                        <tr key={'a9a'}>
                        <th scope="col" className='d-none d-sm-block' style={{border:'none',height:'100%'}}>S.NO</th>
                        <th scope="col">Product</th>
                        <th scope="col"> Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          currentOrder?.orderItems?.map((el,index)=>{
                              return (
                                <tr key={index}>
                                    
                                <th scope="row" className='d-none d-sm-block m-0 ' style={{border:'none',height:'100%'}}>{index+1}</th>
                                <td>{el.name}</td>
                                <td>{el.quantity}</td>
                                <td>₹{el.price}</td>
                                <td>₹{el.price * el.quantity}</td>
                                </tr>
                              )
                          })
                      }
                    </tbody>
                    </table>
             
                
    
                   
                </ListGroup>

                
                </Col>


    
                <Col  lg={4} >
    
                    <Card className='m-4'>
                        <ListGroup variant='flush'>
                            <ListGroupItem className='d-flex justify-content-center'><h1>Order Summary</h1></ListGroupItem>
                            <ListGroupItem >
                                <Row >
                                   <Col>
                                   <strong>Item Price</strong>
                                   </Col>
                                   <Col>
                                  <strong> ₹{ currentOrder?.orderItems.reduce((acc,item)=>acc + ( item.price * item.quantity),0)}</strong>
                                   </Col>
                                </Row>
                            </ListGroupItem>
    
                            <ListGroupItem>
                                <Row>
                                   <Col>
                                   <strong> Shipping Charge</strong>
                                   </Col>
                                   <Col>
                                   <strong>₹{currentOrder?.shippingPrice}</strong>
                                   </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                   <Col>
                                <strong> Tax</strong>  
                                   </Col>
                                   <Col>
                                   <strong>₹{currentOrder?.taxPrice}</strong>
                                   </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                   <Col>
                                   <strong> Toatal Price </strong>
                                   </Col>
                                   <Col>
                                   <strong>₹{currentOrder?.totalPrice}</strong>
                                   </Col>
                                </Row>
                            </ListGroupItem>

                           {
                               !currentOrder?.isPaid &&(
                                   <ListGroupItem className='p-0 mt-2' style={{zIndex:'1'}} >
                                    {
                                        loadingPay && <Loader />
                                    }
                                    {
                                        !sdkReady?<Loader />:
                                        (
                                            <PayPalButton amount={currentOrder?.totalPrice} onSuccess={successhandler} />
                                        )
                                    } 
                                   </ListGroupItem>
                               )
                           }
                           <>
                           {
                            userData && userData.role==='admin' && currentOrder?.isPaid && (
                                <ListGroupItem className='d-flex justify-content-center'>
                                    <MyButton active={!deliverloading} onClick = {deliverhandler}>{deliverloading?'Delivering..':'Mark As Deliver'}</MyButton>
                                    {
                                        errordeliver && <h1 style={{color:'red'}}>{errordeliver}</h1>
                                    }
                                </ListGroupItem>
                            ) 
                           }
                           </>
                          
    
                        </ListGroup>
                      
                    </Card>
                    
                </Col>
             
            </Row>
   </Container>
}



export default Placeorder