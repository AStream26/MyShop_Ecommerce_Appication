import React, { useEffect, useState } from 'react'
import {Form, Col,Row,Container} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';

import validator from 'validator';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Register} from '../actions/Authuseraction';
import Indicator from '../components/Indicator/indicator';
import MyInput from '../components/myInput';
import MyButton from '../components/Button';
const RegisterScreen = () => {
    let history = useHistory();
    let location = useLocation();
    let [name,Setname] = useState('');
     let [email,SetEmail] = useState('');
     let [password,SetPassword] = useState('');
     let [confirmPassword,SetconformPassword] = useState('');
     let [message,SetMessage] = useState(null);
     let redirect  ;
     if(location.search){
         let query = new URLSearchParams(location.search);
         redirect = query.get('redirect');
     }
    
    
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
     },[history,userData,error])

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
      //  console.log(redirect);
        history.push(redirect);
     }
     let handler = ()=>{
         SetMessage(null);
         
     }


    return (
        < Container> 
        {
            message?(
            <Indicator message={message} handler={handler} color="alert-danger" />
            ):null
        }
        <FormContainer >


                <h3 className="d-flex  text text-dark justify-content-center">Create Account</h3>
        
            
            <Form > 
            <Form.Group  className="m-2"controlId="formname">
                    <Form.Label style={{color:"black"}}>Name</Form.Label>
                    
                    <MyInput controlId="formname" type="text" value={name} handler = {(e)=>Setname(e.target.value)}  />
                  
                    
                </Form.Group>
                  <Form.Group  className="m-2"controlId="formemail">
                    <Form.Label style={{color:"black"}}>Email address</Form.Label>
                    <MyInput controlId="formemail" type="email" value={email} handler = {(e)=>SetEmail(e.target.value)}  />
                    
                    
                </Form.Group>

                <Form.Group   className="m-2" controlId="formBasicpassword">
                    <Form.Label  style={{color:"black"}}>Password</Form.Label>
                    <MyInput controlId="formbasicpassword" type="password" value={password} handler = {(e)=>SetPassword(e.target.value)}  />
                    
                </Form.Group>
                <Form.Group  className="m-2" controlId="formcBasicPassword">
                    <Form.Label  style={{color:"black"}}>Confirm Password</Form.Label>
                    <MyInput controlId="formcbasicpassword" type="password" value={confirmPassword} handler = {(e)=>SetconformPassword(e.target.value)}  />
                
                </Form.Group>
                  
            
          <Row className="m-2">

          <MyButton onClick={Submithandler}  active={!loading}>
               <strong>{loading?'Registering....':'Register'}</strong>
               
            </MyButton>
         
          </Row>
            </Form>
            <Row className="p-3">
                <Col>
                <strong className="text text-dark">Already a Customer ?</strong> <Link to={redirect?`/login?redirect=${redirect}`:'/login'} >Login</Link>
                </Col>
            </Row>
        </FormContainer>
        </Container>
    )
}




export default RegisterScreen
