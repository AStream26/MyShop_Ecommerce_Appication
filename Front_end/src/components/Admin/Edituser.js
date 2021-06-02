import React,{useEffect, useState} from 'react'
import FormContainer from '../Form/formcontainer';
import { Form,Row,Col,Button } from 'react-bootstrap';
import validator from 'validator';
import Indicator from '../Indicator/indicator';
import {motion} from 'framer-motion'
import {updateuser_admin,setback, getuserByID} from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import {NestedAnimation,PageTransition} from '../../Screens/Animation'
import MyButton from '../Button';
import MyInput from '../myInput';
import { useParams } from 'react-router';
import {ADMIN_RESET_GET_USER} from '../../Reducer/constants'

 const USERBYID = (props) => {

  const params = useParams();
  const {userbyID,loading,loading1,error,success,success1} = useSelector(state=>state.AdminReducer);
  const {userData}  = useSelector(state=>state.userDetail);

  let [name,Setname] = useState('');
  let [email,SetEmail] = useState('');
  let[isadmin,setisAdmin] = useState(false);
  let [message,setMessage] = useState(null);
     
 const dispatch = useDispatch();

 useEffect(()=>{
     if(!loading)
 {
    dispatch(getuserByID(params.id));
   
 }
 return (()=>{
   dispatch({type:ADMIN_RESET_GET_USER})
})
 },[]);


 useEffect(()=>{
    if(success){
        Setname(userbyID?.name);
        SetEmail(userbyID?.email);
        setisAdmin(userbyID?.role==='admin'?true:false)
    }
  
},[success])

useEffect(()=>{
    
    if(success1){
        setMessage('Data updated successfully')
        if(userbyID._id === userData._id){
            dispatch({type:'USER_SUCCESS',
                payload:userbyID});
        }
    }
},[success1])
 
 
     let Submithandler = (e)=>{

        e.preventDefault();
        if(!validator.isEmail(email)){
          setMessage('Enter Valid Email !!')
        }
        else{
            
       if(window.confirm('Are you sure ??')){
        let role=isadmin?'admin':'user'
        if(userbyID._id === userData._id){
            if(role === 'user'){
                if(window.confirm('You are changing Your Role from Admin to User , You Will Loose Admin Power !!!')){
                    dispatch(updateuser_admin({
                        name,email,role
                    },userbyID._id));
                }
            }
            else{
                dispatch(updateuser_admin({
                    name,email,role
                },userbyID._id));
            }
        }
        else{
            dispatch(updateuser_admin({
                name,email,role
            },userbyID._id));
        }
       

       }
        }

    }

let handler = ()=>{
    setMessage(null);
    dispatch({type:'RESET_ADMIN'})
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
         
         success1?(<Indicator message="Data updated successfully" handler={handler} color ="alert-success"/>):
         message?(
                <Indicator message={message} handler={handler} color="alert-danger" />
                ):error?(<Indicator message={error} handler={handler} color="alert-danger" />):null
         

         }


       <FormContainer active={true} className="border-top" >

           <h3 className="d-flex  text text-dark justify-content-center mb-5">{userbyID?.name } Profile</h3>
        
            
        <Form > 
        <Form.Group  className="m-2"controlId="formBasicEmail112">
                <Form.Label  style={{color:"black"}}>Name</Form.Label>
                <MyInput controlId="formBasicEmail112" type="text" value={name} handler = {(e)=>Setname(e.target.value)} placeholder={`name`} />
                
                
            </Form.Group>
              <Form.Group  className="m-2"controlId="formBasicEmail882">
                <Form.Label style={{color:"black"}}>Email address</Form.Label>
                <MyInput controlId="formBasicEmail882" type="email" value={email} handler = {(e)=>SetEmail(e.target.value)} placeholder='Enter email' />
      
                
            </Form.Group>

            <Form.Group>
      
         <Form.Check label='is Admin' type='checkbox' checked={isadmin} value={isadmin} onChange={(e)=>setisAdmin(e.target.checked)} >

         </Form.Check>
      </Form.Group>

            <Row className="m-2">
          <MyButton  onClick={Submithandler}   active={!loading1}>
            
               {loading1?'updating....':'Update'}
               </MyButton>
          </Row>
            </Form>
            

       </FormContainer>
       </motion.div>
    )
}


export default USERBYID;


