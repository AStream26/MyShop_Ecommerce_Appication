import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import Classes from './sidebar.module.css';
import Sidebar from './Sidebar';
import {Navanchors} from './Navanchors';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '../Backdrop/backdrop';
import {logout} from '../../actions/Authuseraction'
const Side = forwardRef(({width,height,show1},ref1) => {
    const [xwidth,setXwidhth] = useState(-(Number(width)));
    const {userData} = useSelector(state=>state.userDetail);
    const [show,setshow] = useState(false);
    
    let dispatch = useDispatch();
  
    useEffect(()=>{
        setXwidhth(-(Number(width)));
      },[width])

    let closebar = ()=>{
        setXwidhth(-(Number(width)));
        setshow(false);
    }
    let openbar = ()=>{
        
          setXwidhth(0);
          setshow(true);
        }

    useImperativeHandle(ref1,()=>{
        return {
            toggler:openbar
        }
    })

    let handler = ()=>{
        dispatch(logout());
    }



 
    return (
        <>
        <Backdrop show={show} clicked={closebar} />
        <Sidebar handler = {closebar}  width={width} width1={xwidth} height = {height} >
         <Profile text={userData?`Hello ${(userData.name)?.split(' ')[0]} `:`Hello Guest`} />


         <Navanchors link="/" text="Home" />
         
         <Navanchors link="/cart" text="Cart" />

         {
             userData?(
                 <>
                <Navanchors link="/profile/setting" text="Account" />
                <Navanchors link="/profile/myorders" text="My Order" />
                <Navanchors link="/profile/review" text="My Review" />
                <Navanchors link="/profile/shipping" text="MY Address" />
                <Navanchors link="/profile/changepassword" text="Change Password" />
              <div style={{textAlign:'center'}}>
              <p onClick={handler}>Logout</p>
              </div>
                 
               
                                </>

             ):(
               <>
                <Navanchors link="/login" text="Login" />
                <Navanchors link="/register" text="Register" />
               </>

             )
         }
         
         
         
        
        </Sidebar>
        </>
    )
});



export default Side;
