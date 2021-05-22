import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Col,Button } from 'react-bootstrap';
import validator from 'validator';
import Indicator from '../Indicator/indicator';
import {motion} from 'framer-motion'
import {upadteuserData} from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
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
   
 },[error,success,message]);

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
         
         message?(<Indicator message="Data updated successfully" handler={handler} color ="alert-success"/>):
         message?(
                <Indicator message={message} handler={handler} color="alert-danger" />
                ):error?(<Indicator message={error} handler={handler} color="alert-danger" />):null
         

     }

       <FormContainer active={true} className="border-top" >

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
       </motion.div>
    )
}


export default Basicinfo;


