import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import Classes from './style.module.css';
import validator from 'validator';
import { Link,useHistory ,useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/Authuseraction';
import MyButton from '../components/Button';
import MyInput from '../components/myInput';
import Indicator from './../components/Indicator/indicator'
const LoginScreen = () => {
    const location = useLocation();
    const history = useHistory();
    const classes = [Classes.btncolor,'btn-block mt-3'];
   
     let [email,SetEmail] = useState('');
     let [password,SetPassword] = useState('');
     let redirect = '/';
     if(location.search){
         let query = new URLSearchParams(location.search);
         redirect = query.get('redirect')
     }
     
     
    
     const dispatch = useDispatch();
     const UserInfo = useSelector(state=>state.userLogin);
     //console.log(UserInfo)
       const {userData,loading,error} = UserInfo;
     useEffect(()=>{
       if(userData){
           
           history.hash = "#Logined In Successfully !!";
           history.push(redirect);
       }
     },[history,userData,redirect])

     let Submithandler = (e)=>{
         e.preventDefault();
         
        dispatch(login(email,password));
     }


    return (
        <div >
              {
               !error?( <h1 className="d-flex justify-content-center mb-5" > Login</h1>):(
                <Indicator message={error}  color="alert-danger" />)
               }
           
        <FormContainer style={{
           
        }} >

         
            <Form>
                  <Form.Group  controlId="loginemail">
                    <Form.Label >Email address</Form.Label>
                    <MyInput controlId="loginemail" type="email" value={email} handler = {(e)=>SetEmail(e.target.value)}  />
                    
                    
                </Form.Group>

                <Form.Group  className="mt-4" controlId="loginpassword">
                    <Form.Label  >Password</Form.Label>
                    <MyInput controlId="loginpassword" type="password" value={password} handler = {(e)=>SetPassword(e.target.value)} placeholder='••••••••' />
                   
                </Form.Group>
                  
            
          <Row className="m-2">
          <MyButton onClick={Submithandler}  active={!loading}>
               <strong>{loading?'Logining....':'Log in'}</strong>
               
            </MyButton>
          </Row>
            </Form>
            <Row className="p-3">
                <Col>
                <strong>New Customer ?</strong> <Link to={redirect?`/register?redirect=${redirect}`:'/register'} > Register </Link>
                </Col>
            </Row>
        </FormContainer>
        </div>
    )
}




export default LoginScreen
