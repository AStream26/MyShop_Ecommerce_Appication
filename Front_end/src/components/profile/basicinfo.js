import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Col,Button } from 'react-bootstrap';
import validator from 'validator';
import Indicator from '../Indicator/indicator';

import {upadteuserData} from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

 const Basicinfo = (props) => {
  const {userData,loading,error} = useSelector(state=>state.userDetail);
  let  x = userData.name;
  let y = userData.email;
    let [name,Setname] = useState(x);
     let [email,SetEmail] = useState(y);
     let [message,setMessage] = useState(null);
 const dispatch = useDispatch();

 useEffect(()=>{
   if(error||message){
       setMessage(error)
   }
 },[error]);


     let Submithandler = (e)=>{
        e.preventDefault();
        if(!validator.isEmail(email)){
          setMessage('Invalid Email ,Failed to update !!')
        }
        else{
         dispatch(upadteuserData({
             name,email
         }));
        }

    }

let handler = ()=>{
    setMessage(null);
    
}


    return (

        <>
     {
          message?(
            <Indicator message={message} handler={handler} color="alert-danger" />
            ):null
     }

       <FormContainer active={true} className="border-top" styel={{  transition: "0.7s ease-out"}}>

           <h3 className="d-flex  text text-dark justify-content-center">Your Profile</h3>
        
            
        <Form > 
        <Form.Group  className="m-2"controlId="formBasicEmail">
                <Form.Label style={{color:"black"}}>Name</Form.Label>
                <Form.Control size="lg" type="text" value={name} onChange={(e)=>Setname(e.target.value)}  placeholder={`name`} />
                
            </Form.Group>
              <Form.Group  className="m-2"controlId="formBasicEmail">
                <Form.Label style={{color:"black"}}>Email address</Form.Label>
                <Form.Control  size="lg"type="email" value={email} onChange={(e)=>SetEmail(e.target.value)}  placeholder="Enter email" />
                
            </Form.Group>

            <Row className="m-2">
          <Button style={{ backgroundColor: "#ffbf00", color:"black"}} block onClick={Submithandler}>
               {loading?'updating....':'Update'}
               </Button>
          </Row>
            </Form>

       </FormContainer>
       </>
    )
}


export default Basicinfo;


