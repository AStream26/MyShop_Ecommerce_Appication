import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import Classes from './style.module.css';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Register} from '../actions/Authuseraction';
import Indicator from '../components/Indicator/indicator';

const RegisterScreen = ({location,history}) => {
    const classes = [Classes.btncolor,'btn-block mt-3'];
    let [name,Setname] = useState('');
     let [email,SetEmail] = useState('');
     let [password,SetPassword] = useState('');
     let [confirmPassword,SetconformPassword] = useState('');
     let [message,SetMessage] = useState(null);
     let redirect = location.search ? location.search.split('=')[0]:'/';
    
    
     const dispatch = useDispatch();
     const UserInfo = useSelector(state=>state.userLogin);
     //console.log(UserInfo)
       const {userData,loading,error} = UserInfo;
     useEffect(()=>{
       if(userData){
           
           history.state = {messageFrom:"Successfully created Account !!"}
           
           history.push(redirect);
       }
       SetMessage(error);
     },[history,userData,redirect,error])

     let Submithandler = (e)=>{
         e.preventDefault();
         if(!validator.isEmail(email)){
             SetMessage('Enter correct Email !!')
         }
         else if(password.length<8){
             SetMessage('Password Length Must be greater thean 8 !!');
         }
         else if(password !== confirmPassword)
           SetMessage('Password and Confirm Password must match ')
           else 
        dispatch(Register(name,email,password,confirmPassword));
     }
     let handler = ()=>{
         SetMessage(null);
         
     }


    return (
        < div  style={{transform:"scale(0.9)"}}> 
        {
            message?(
            <Indicator message={message} handler={handler} color="alert-danger" />
            ):null
        }
        <FormContainer >


                <h3 className="d-flex  text text-dark justify-content-center">Create Account</h3>
        
            
            <Form > 
            <Form.Group  className="m-2"controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Name</Form.Label>
                    <Form.Control size="lg" type="text" onChange={(e)=>Setname(e.target.value)}  placeholder="Enter Name" />
                    
                </Form.Group>
                  <Form.Group  className="m-2"controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Email address</Form.Label>
                    <Form.Control  size="lg"type="email" onChange={(e)=>SetEmail(e.target.value)}  placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group   className="m-2" controlId="formBasicPassword">
                    <Form.Label  style={{color:"black"}}>Password</Form.Label>
                    <Form.Control  size="lg" type="password" onChange={(e)=>SetPassword(e.target.value)}  placeholder="Password" />
                </Form.Group>
                <Form.Group  className="m-2" controlId="formBasicPassword">
                    <Form.Label  style={{color:"black"}}>Confirm Password</Form.Label>
                    <Form.Control size="lg" type="password" onChange={(e)=>SetconformPassword(e.target.value)}  placeholder="confirm Password" />
                </Form.Group>
                  
            
          <Row className="m-2">
          <Button style={{ backgroundColor: "#ffbf00", color:"black"}} disabled={loading} className={classes.join(' ')} block onClick={Submithandler}>
               {loading?'Registering....':'Register'}
               </Button>
          </Row>
            </Form>
            <Row className="p-3">
                <Col>
                <strong className="text text-dark">Already a Customer ?</strong> <Link to={redirect?`register/?redirect=${redirect}`:'/login'} >Login</Link>
                </Col>
            </Row>
        </FormContainer>
        </div>
    )
}




export default RegisterScreen
