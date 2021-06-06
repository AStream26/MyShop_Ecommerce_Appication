import React, { useState } from 'react'
import { Button,Row,Col, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { PaymentMethod } from '../actions/CartAction';
import MyButton from '../components/Button';

const PaymentScreen = props => {
     let history = useHistory();
    const orderDetail = useSelector(state=>state.OrderDetail);
    let dispatch = useDispatch();
    if(orderDetail.orderItems.length === 0){
         history.push('/');
    }
    else if(Object.keys(orderDetail.shippingAddress).length === 0){
        history.push('/shippingaddress');
    }

    let [change,setChange] = useState('Paypal');
    let handler = (e)=>{
          e.preventDefault();
        dispatch(PaymentMethod(change));
       history.push('/placeorder?ref=payment');
    }

    return (
        <Container className='p-5' >
           <Row className='p-1'>
           <Col xs={12}><h1 className='text-center'><strong>PAYMENT METHOD</strong></h1></Col>
           
           <Col className='m-3' xs={12}>
           <form >
             <h2>Select Payment Method </h2>
              <div className="form-check">
               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                checked  onChange={(e)=>setChange(e.target.value)}/>

               <label className="form-check-label" htmlfor="flexRadioDefault2">
                  <p> <strong>Paypal or credit card</strong></p>
               </label>
               </div>
        
           </form>
           </Col>

           <Col className='m-3' xs={12}>
           <MyButton  onClick={handler} active={true} > Continue</MyButton>
           </Col>


           </Row>

        </Container>
    )
}



export default PaymentScreen
