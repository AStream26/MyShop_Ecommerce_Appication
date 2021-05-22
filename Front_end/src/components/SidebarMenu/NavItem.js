import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import Classes from './sidebar.module.css';
import Sidebar from './Sidebar';
import {Navanchors} from './Navanchors';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const Side = forwardRef(({width,height},ref1) => {
    const {userData} = useSelector(state=>state.userDetail);
    const ref = useRef(null);
    
    useImperativeHandle(ref1,()=>{
        return {
            toggler:ref.current.toggler
        }
    })
 
    return (
        <Sidebar ref={ref} width={width} height = {height}
        borderR
        >
         <Profile text={userData?`Hello ${(userData.name)?.split(' ')[0]} `:`Hello Guest`} />


         <Navanchors link="/" text="Home" />
         <Navanchors link="/product" text="Product" />
         <Navanchors link="/cart" text="Cart" />

         {
             userData?(
                 <>
                <Navanchors link="/profile/setting" text="Account" />
                <Navanchors link="/profile/order" text="My Order" />
                <Navanchors link="/profile/review" text="My Review" />
                <Navanchors link="/profile/shipping" text="MY Address" />
                <Navanchors link="/profile/payment" text="My Payment" />
                 <Navanchors link="/logout" text="Logout" />
               
                                </>

             ):(
               <>
                <Navanchors link="/login" text="Login" />
                <Navanchors link="/register" text="Register" />
               </>

             )
         }
         
         
         
        
        </Sidebar>
    )
});



export default Side;
