import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import Classes from './style.module.css';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/Authuseraction';

const LoginScreen = ({location,history}) => {
    const classes = [Classes.btncolor,'btn-block mt-3'];
   
     let [email,SetEmail] = useState('');
     let [password,SetPassword] = useState('');
     let redirect = location.search ? location.search.split('=')[0]:'/';
    
     const dispatch = useDispatch();
     const UserInfo = useSelector(state=>state.userInfo);
       const {userInfo,loading,error} = UserInfo;
     useEffect(()=>{
       if(userInfo){
           history.push(redirect);
       }
     },[history,userInfo,redirect])

     let Submithandler = (e)=>{
         e.preventDefault();
         
        dispatch(login(email,password));
     }


    return (
        <FormContainer>

            <h3  style={{color:"black"}}>Please Login To continue</h3>
            <Form>
                  <Form.Group  className="m-2"controlId="formBasicEmail">
                    <Form.Label style={{color:"black"}}>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e)=>SetEmail(e.target.value)}  placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group  className="m-2 mt-4" controlId="formBasicPassword">
                    <Form.Label  style={{color:"black"}}>Password</Form.Label>
                    <Form.Control type="password" onChange={(e)=>SetPassword(e.target.value)}  placeholder="Password" />
                </Form.Group>
                  
            
          <Row className="m-2">
          <Button style={{ backgroundColor: "#ffbf00", color:"black"}} className={classes.join(' ')} block onClick={Submithandler}>
                Submit
               </Button>
          </Row>
            </Form>
            <Row className="p-3">
                <Col>
               <Link to={redirect?`register/?redirect=${redirect}`:'/register'} > <strong>New Customer ?</strong></Link>
                </Col>
            </Row>
        </FormContainer>
    )
}




export default LoginScreen
