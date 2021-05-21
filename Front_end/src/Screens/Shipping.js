import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import Classes from './style.module.css';
import validator from 'validator';
import { Link,useHistory ,useLocation, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/Authuseraction';


const Shipping = () => {
    let history  = useHistory();
    let location = useLocation();
    

    let redirect = ''
    let [Address,SetAddress] = useState(null);
    let [State,SetState] = useState(null);
    let [Country,SetCountry] = useState(null);
    let [MobileNo,SetMobileNo] = useState(null);
    let [City,SetCity] = useState(null);
    let [Pincode,SetPincode] = useState(null);
     
    let Submithandler = (e)=>{
        e.preventDefault();
         console.log("A");
    }
    let loading= true;

    return (
       <FormContainer active="true">
           <strong className="d-flex justify-content-center "><h1>Shipping Address</h1></strong>
             <Form  className=" border rounded p-1" >
                  <Form.Group  className="m-2"controlId="Address">
                    {/* <Form.Label style={{color:"black"}}>Address</Form.Label> */}
                    <Form.Control type="text" onChange={(e)=>SetAddress(e.target.value)}  placeholder="Address" />
                    
                </Form.Group>

                <Form.Group  className="m-2 mt-4" controlId="State">
                    {/* <Form.Label  style={{color:"black"}}>State</Form.Label> */}
                    <Form.Control type="text" onChange={(e)=>SetState(e.target.value)}  placeholder="State" />
                </Form.Group>
                
    

                <Form.Group  className="m-2 mt-4" controlId="City">
                    {/* <Form.Label  style={{color:"black"}}>City</Form.Label> */}
                    <Form.Control  type="text" onChange={(e)=>SetCity(e.target.value)}  placeholder="City" />
                </Form.Group>
                <Form.Group  className="m-2 mt-4" controlId="Pincode">
                    {/* <Form.Label  style={{color:"black"}}>Pincode</Form.Label> */}
                    <Form.Control type="text" onChange={(e)=>SetPincode(e.target.value)}  placeholder="Pincode" />
                </Form.Group>
                <Form.Group  className="m-2 mt-4" controlId="Country">
                    {/* <Form.Label  style={{color:"black"}}>Country</Form.Label> */}
                    <Form.Control type="text" onChange={(e)=>SetCountry(e.target.value)}  placeholder="Country" />
                </Form.Group>  <Form.Group  className="m-2 mt-4" controlId="MobileNo">
                    {/* <Form.Label  style={{color:"black"}}>MobileNo</Form.Label> */}
                    <Form.Control type="text" onChange={(e)=>SetMobileNo(e.target.value)}  placeholder="Mobile Number" />
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
