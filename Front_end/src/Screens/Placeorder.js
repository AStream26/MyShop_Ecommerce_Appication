import React, { useEffect } from 'react'
import { Card, Col, ListGroup,ListGroupItem, Row } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import MyButton from '../components/Button';
import {placeorder} from '../actions/orderaction'
import Indicator from '../components/Indicator/indicator';

const Placeorder = props => {
     let history = useHistory();
     let dispatch = useDispatch();
     let {success,loading,error,orderid} = useSelector(state=>state?.CurrentPlaceOrder);

     useEffect(()=>{
         if(success){
             history.push(`/checkout/${orderid}`);
         }
     },[success]);
     
    let OrderDetail = useSelector(state=>state.OrderDetail);
   
    let address  = OrderDetail?.shippingAddress;
    let Item = OrderDetail.orderItems;


   useEffect(()=>{
    if(Object.keys(OrderDetail?.shippingAddress).length === 0)
    history.push('/shipping')
    
    if(OrderDetail.paymentMethod === null){
        history.push('/payment');
    }
    
   },[])
  // let itemsPrice = 0;

    let itemsPrice = Item.reduce((acc,item)=>acc + ( item.price * item.quantity),0);
    OrderDetail.itemsPrice = itemsPrice;
    OrderDetail.shippingPrice = (OrderDetail.itemsPrice < 500) ? 100:0;

    OrderDetail.taxPrice  = Number(Number((0.15 *  OrderDetail.itemsPrice )).toFixed(1));
    OrderDetail.totalPrice = ( OrderDetail.itemsPrice + OrderDetail.shippingPrice +  OrderDetail.taxPrice)
    
   let handler = ()=>{
      dispatch(placeorder(OrderDetail));
   }
    //console.log(Item)

    return (
        <>
        
        <Row className='p-2'>
            <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroupItem >
                 <h2>Shipping Address</h2>
            
                   <p>
                   {address.Address},{address.City}, {address.Pincode} , {address.State}
                     , {address.Country}  
                   </p>
                   <strong><p>Mobile Number - {address.MobileNo}</p></strong>


                
                </ListGroupItem>

                <ListGroupItem className='my-4'>
                    <h2>Payment Method</h2>
                    <strong>Method : </strong>
                    {OrderDetail.paymentMethod}
                </ListGroupItem>
              
             <ListGroupItem>

             <table class="table table-hover">
                <thead>
                    <tr>
                    <th className='d-none d-md-block' scope="col">S.NO</th>
                    <th scope="col">Product</th>
                    <th scope="col"> Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      Item.map((el,index)=>{
                          return (
                            <tr>
                                
                            <th className='d-none d-md-block'  scope="row">{index+1}</th>
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

                <Card>
                    <ListGroup >
                        <ListGroupItem className='d-flex justify-content-center'><h1>Order Summary</h1></ListGroupItem>
                        <ListGroupItem >
                            <Row >
                               <Col>
                               <strong>Item Price</strong>
                               </Col>
                               <Col>
                              <strong> ₹{ OrderDetail.itemsPrice}</strong>
                               </Col>
                            </Row>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Row>
                               <Col>
                               <strong> Shipping Charge</strong>
                               </Col>
                               <Col>
                               <strong>₹{OrderDetail.shippingPrice}</strong>
                               </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                               <Col>
                            <strong> Tax</strong>  
                               </Col>
                               <Col>
                               <strong>₹{OrderDetail.taxPrice}</strong>
                               </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                               <Col>
                               <strong> Toatal Price </strong>
                               </Col>
                               <Col>
                               <strong>₹{OrderDetail.totalPrice}</strong>
                               </Col>
                            </Row>
                        </ListGroupItem>

                    </ListGroup>
                    <MyButton type='text' onClick={handler} active={Item.length !== 0}>{loading?'Processing....':'PLACEORDER'}</MyButton>
                    {
                        error && <p style={{color:'red'}}>{error}</p>
                    }
                </Card>
                
            </Col>
        </Row>
        </>
    )
}



export default Placeorder
