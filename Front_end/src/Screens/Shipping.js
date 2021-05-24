import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import Classes from './style.module.css';
import validator from 'validator';
import { Link,useHistory ,useLocation, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/Authuseraction';
import MyInput from '../components/myInput';

const Shipping = () => {
    let history  = useHistory();
    let location = useLocation();
    

    let redirect = ''
    let [Address,SetAddress] = useState('');
    let [State,SetState] = useState('');
    let [Country,SetCountry] = useState('');
    let [MobileNo,SetMobileNo] = useState('');
    let [City,SetCity] = useState('');
    let [Pincode,SetPincode] = useState('');
     
    let Submithandler = (e)=>{
        e.preventDefault();
         console.log("A");
    }
    let loading= true;

    return (
       <FormContainer active="true">
           <strong className="d-flex justify-content-center "><h1>Shipping Address</h1></strong>
             <Form   >
                  <Form.Group  controlId="Address">
                    {/* <Form.Label style={{color:"black"}}>Address</Form.Label> */}
                    <MyInput controlId="Address" type="text" value={Address} handler = {(e)=>SetAddress(e.target.value)} placeholder='Address'  />
                    
                </Form.Group>
                 
                <Form.Group   controlId="City">
                    {/* <Form.Label  style={{color:"black"}}>City</Form.Label> */}
                    <MyInput controlId="City" type="text" value={City} handler = {(e)=>SetCity(e.target.value)} placeholder='City'  />
                    
                </Form.Group>
                
                <Form.Group   controlId="State">
                    {/* <Form.Label  style={{color:"black"}}>State</Form.Label> */}
                    <MyInput controlId="state" type="text" value={State} handler = {(e)=>SetState(e.target.value)} placeholder='State'  />
                    
                </Form.Group>
                
    

               
                <Form.Group   controlId="Pincode">
                    {/* <Form.Label  style={{color:"black"}}>Pincode</Form.Label> */}
                    <MyInput controlId="pincode" type="text" value={Pincode} handler = {(e)=>SetPincode(e.target.value)} placeholder='Pincode'  />
                   
                </Form.Group>
                <Form.Group  className="m-2 mt-4" controlId="Country">
                    {/* <Form.Label  style={{color:"black"}}>Country</Form.Label> */}
                    <MyInput controlId="Country" type="text" value={Country} handler = {(e)=>SetCountry(e.target.value)} placeholder='Country'  />
                   </Form.Group>

                  <Form.Group  className="m-2 mt-4" controlId="MobileNo">
                    {/* <Form.Label  style={{color:"black"}}>MobileNo</Form.Label> */}
                    <MyInput controlId="MobileNO" type="text" value={MobileNo} handler = {(e)=>SetMobileNo(e.target.value)} placeholder='Mobile No'  />
        
                </Form.Group>
                  
            
          <Row className="m-4">
         <Col  className="d-flex justify-content-center">
         <Button size="lg" className="btn btn-dark  btn-lg" disabled={loading}  onClick={Submithandler}>
               {loading?'Shiping....':'Proceed'}
               </Button>
         </Col>
          </Row>
            </Form>
           
       </FormContainer>
    )
}

export default Shipping
