import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Col,Button } from 'react-bootstrap';
import validator from 'validator';
import Indicator from '../Indicator/indicator';
import {motion} from 'framer-motion'
import {upadteuserData,setback} from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import MyButton from '../Button';
import MyInput from '../myInput';

 const Basicinfo = (props) => {
  const {userData,loading,error,success} = useSelector(state=>state.userDetail);

    let [name,Setname] = useState(userData?.name);
     let [email,SetEmail] = useState(userData?.email);
     let [message,setMessage] = useState(null);
     
 const dispatch = useDispatch();

 useEffect(()=>{
    if(error){
        setMessage(error);
    }
   return (()=>{
       dispatch(setback());
   })
 },[]);

     let Submithandler = (e)=>{
        e.preventDefault();
        if(!validator.isEmail(email)){
          setMessage('Enter Valid Email !!')
        }
        else{
         dispatch(upadteuserData({
             name,email
         }));
        }

    }

let handler = ()=>{
    setMessage(null);
    dispatch(setback());
    
}


    return (

        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={NestedAnimation}
        transition={PageTransition}
        >
     {   
         
         success?(<Indicator message="Data updated successfully" handler={handler} color ="alert-success"/>):
         message?(
                <Indicator message={message} handler={handler} color="alert-danger" />
                ):error?(<Indicator message={error} handler={handler} color="alert-danger" />):null
         

     }

       <FormContainer active={true} className="border-top" >

           <h3 className="d-flex  text text-dark justify-content-center mb-5">Your Profile</h3>
        
            
        <Form > 
        <Form.Group  className="m-2"controlId="formBasicEmail11">
                <Form.Label  style={{color:"black"}}>Name</Form.Label>
                <MyInput controlId="formBasicEmail11" type="text" value={name} handler = {(e)=>Setname(e.target.value)} placeholder={`name`} />
                
                
            </Form.Group>
              <Form.Group  className="m-2"controlId="formBasicEmail">
                <Form.Label style={{color:"black"}}>Email address</Form.Label>
                <MyInput controlId="formBasicEmail" type="email" value={email} handler = {(e)=>SetEmail(e.target.value)} placeholder='Enter email' />
      
                
            </Form.Group>

            <Row className="m-2">
          <MyButton  onClick={Submithandler}   active={!loading}>
            
               {loading?'updating....':'Update'}
               </MyButton>
          </Row>
            </Form>

       </FormContainer>
       </motion.div>
    )
}


export default Basicinfo;


