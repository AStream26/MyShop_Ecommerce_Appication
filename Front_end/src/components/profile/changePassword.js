import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {updatePassword,setback} from '../../actions/userAction';
import Indicator from '../Indicator/indicator';
import {motion} from 'framer-motion'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
 const ChangePassword = (props) => {
    const dispatch = useDispatch();
    const {success,loading}  = useSelector(state=>state.userDetail);

     let [password,setPassword] = useState('');
    let [confirmPassword,setConfirm] = useState('');
    let [newPassword,setCurrent] = useState('');
    let [message,setMessage] = useState(null);
    
     let Submithandler = (e)=>{
        e.preventDefault();
         if(confirmPassword!==newPassword)
           setMessage('Password and confirm Password must be same')
         else if(newPassword.length<8)
         setMessage('Password length must be greater than 8')

         else{
             dispatch(updatePassword({password,newPassword,confirmPassword}));
         }

     }
     useEffect(()=>{
      if(success){
          setPassword(null);
          setConfirm(null);
          setCurrent(null);
      }
     },[success])
     let close = ()=>{
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
            success ? (<Indicator message="Password updated successfully" handler = {close} color="alert-success" />):null
        }
        <FormContainer active={true} className="border-top">
          <h3 className="d-flex  text text-dark justify-content-center">Change Password</h3>
        
            
        <Form > 
        <Form.Group  className="m-2"controlId="current password">
                <Form.Label style={{color:"black"}}><strong>Current Password</strong></Form.Label>
                <Form.Control size="lg" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="**********" />
                
            </Form.Group>
              <Form.Group  className="m-2"controlId="newpassword">
                <Form.Label style={{color:"black"}}><strong>new password</strong></Form.Label>
                <Form.Control  size="lg"type="password" value={newPassword} onChange={(e)=>setCurrent(e.target.value)}  placeholder="**********" />
                
            </Form.Group>

            <Form.Group  className="m-2"controlId="confirmpassword">
                <Form.Label style={{color:"black"}}><strong>confirm password</strong></Form.Label>
                <Form.Control  size="lg"type="password" value={confirmPassword} onChange={(e)=>setConfirm(e.target.value)}  placeholder="**********" />
                
            </Form.Group>

            <Row className="m-2">
          <Button style={{ backgroundColor: "#ffbf00", color:"black"}}  onClick={Submithandler}>
               {loading?'updating....':'Update'}
               </Button>
          </Row>
            </Form>
    </FormContainer>
    </motion.div>
    )
}
export default ChangePassword;