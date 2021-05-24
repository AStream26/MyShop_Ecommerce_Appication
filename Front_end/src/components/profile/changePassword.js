import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {updatePassword,setback} from '../../actions/userAction';
import Indicator from '../Indicator/indicator';
import {motion} from 'framer-motion'
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import MyInput from '../myInput';
import MyButton from '../Button';
 const ChangePassword = (props) => {
    const dispatch = useDispatch();
    const {success,loading,error}  = useSelector(state=>state.userDetail);

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
      
          setPassword('');
          setConfirm('');
          setCurrent('');
          setMessage(error);
     
     },[error])

     let handler = ()=>{
       setMessage(null); 
         dispatch(setback());

     }

     useEffect(()=>{

       return (()=>{
        setMessage(null);
        dispatch(setback());
       })

     },[])

    return (

        <motion.div
        
        initial="initial"
        animate="in"
        exit="out"
        variants={NestedAnimation}
        transition={PageTransition}
        >
        {   
            success?(<Indicator message="Pssword updated successfully" handler={handler} color ="alert-success"/>):
            message?(
                   <Indicator message={message} handler={handler} color="alert-danger" />
                   ):null
        }
        <FormContainer active={true} className="border-top">
          <h3 className="d-flex  text text-dark justify-content-center mb-5">Change Password</h3>
        
            
        <Form > 
        <Form.Group  className="m-2"controlId="current password">
                <Form.Label style={{color:"black"}}>Current Password</Form.Label>
                <MyInput controlId="current password" type="password" value={password} handler = {(e)=>setPassword(e.target.value)} placeholder='••••••••' />
                
                
            </Form.Group>
              <Form.Group  className="m-2"controlId="newpassword">
                <Form.Label style={{color:"black"}}>new password</Form.Label>
                <MyInput controlId="newpassword" type="password" value={newPassword} handler = {(e)=>setCurrent(e.target.value)} placeholder='••••••••' />
               
                
            </Form.Group>

            <Form.Group  className="m-2"controlId="confirmpassword1">
                <Form.Label  style={{color:"black"}}>confirm password</Form.Label>
                <MyInput controlId="confirmpassword1" type="password" value={confirmPassword} handler = {(e)=>setConfirm(e.target.value)} placeholder='••••••••' />
               
                
            </Form.Group>

            <Row className="m-2">

            <MyButton  onClick={Submithandler}   active={!loading}>
            
            {loading?'updating....':'Change Password'}
            </MyButton>
         
          </Row>
            </Form>
    </FormContainer>
    </motion.div>
    )
}
export default ChangePassword;