import React, { useEffect, useState } from 'react'
import {Form,Button, Col,Row, Container} from 'react-bootstrap'
import FormContainer from '../components/Form/formcontainer';
import { Link,useHistory ,useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/Authuseraction';
import MyButton from '../components/Button';
import MyInput from '../components/myInput';
import Indicator from './../components/Indicator/indicator'
const LoginScreen = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const userDetail = useSelector(state=>state.userDetail);
    let [login1,setLogin] = useState(false);
    const data = userDetail?.userData;
    const [message,setMessage] = useState(null);
     let [email,SetEmail] = useState('');
     let [password,SetPassword] = useState('');
     let redirect    ;
  
     if(location.search){
         let query = new URLSearchParams(location.search);
         redirect = query.get('redirect')
     }
     
     
    
  
     const UserInfo = useSelector(state=>state.userLogin);
     //console.log(UserInfo)
       const {userData,loading,error} = UserInfo;
     useEffect(()=>{
      
    
       if(userData){
           
         if(login1)  history.hash = "#Logined In Successfully !!";
           if(redirect)
           history.push(redirect);
           else  history.replace('/');
        }
        else if(error){
          setMessage(error);
        }
      
      
     },[data,userData])

     let Submithandler = (e)=>{
         e.preventDefault();
         setLogin(true);
    dispatch(login(email,password));

        
       
     }
     let handler= ()=>setMessage(null);


    return (
        <Container >
           {
            message && error &&<Indicator  message={error} handler={handler} color='alert-danger'/>
          } 
              
          {
            message && !error && <Indicator  message={message} handler={handler} color='alert-danger'/>
          }    
              
        <FormContainer >

        <h1 className="d-flex justify-content-center mt-4" > Login</h1>
            <Form>
                  <Form.Group  controlId="loginemail">
                    <Form.Label >Email address</Form.Label>
                    <MyInput controlId="loginemail" type="email" value={email} handler = {(e)=>SetEmail(e.target.value)} placeholder="example@gmail.com" />
                    
                    
                </Form.Group>

                <Form.Group  className="mt-4" controlId="loginpassword">
                    <Form.Label  >Password</Form.Label>
                    <MyInput controlId="loginpassword" type="password" value={password} handler = {(e)=>SetPassword(e.target.value)} placeholder='••••••••' />
                   
                </Form.Group>
                  
            
          <Row className="m-2">
          <MyButton type='submit' onClick={Submithandler}  active={!loading}>
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
        </Container>
    )
}




export default LoginScreen
