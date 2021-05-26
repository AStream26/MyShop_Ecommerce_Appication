import React, { useEffect } from 'react'
import { Card, Col, ListGroup,ListGroupItem, Row } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import MyButton from '../components/Button';
import {placeorder,getOrderById} from '../actions/orderaction'
import Indicator from '../components/Indicator/indicator';
import Loader from '../components/utilities_/myloader';

const Placeorder = props => {
    let params  = useParams();
     let history = useHistory();
     let dispatch = useDispatch();
     let {userData} = useSelector(state=>state.userDetail);
    
    
     useEffect(()=>{
         if(!userData){
             history.push(`/login?redirect=/checkout/${params.id}`);
         }

       else if(params.id){
        dispatch(getOrderById(params.id));
       }
       else{
           history.goBack();
       }

     },[]);

    
     let {loading,currentOrder,error} = useSelector(state=>state?.CurrentPlaceOrder);
    
    //console.log(Item)
    
   return loading?<Loader />:error?<Indicator message={error} color='alert-danger' />:
   <>
   <Row className='p-2'>
      <ListGroupItem className=' border-0 border-bottom'> <h1>ORDER ID - {params.id}</h1></ListGroupItem>
        
       <Col md={8}>
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
                              <div style={{opacity:'0.8'}} className="alert alert-dismissible alert-danger">
                                Not Delivered
                                </div>
                              </>
                          ):
                          <Indicator text={`Delivered at ${currentOrder?.deliverAt}`} color='alert-success'/>
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
                              <div style={{opacity:'0.8'}} className="alert alert-dismissible alert-danger">
                                Not Paid
                                </div>
                              </>
                          ):
                          <Indicator text='Paid' color='alert-success'/>
                      }
                  </ListGroupItem>
                 <ListGroupItem>
    
                 <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">S.NO</th>
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
                                <tr>
                                    
                                <th scope="row">{index+1}</th>
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
    
                    </ListGroupItem>
                </ListGroup>
                </Col>
    
                <Col  md={4}>
    
                    <Card className='m-4'>
                        <ListGroup >
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
    
                        </ListGroup>
                      
                    </Card>
                    
                </Col>
            </Row>
   </>
}



export default Placeorder
