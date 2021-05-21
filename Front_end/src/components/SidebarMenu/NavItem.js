import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';
import Classes from './sidebar.module.css';
import Sidebar from './Sidebar';
import {Navanchors} from './Navanchors';
import Profile from './Profile';

const Side = forwardRef(({width,height},ref1) => {
    const ref = useRef(null);
    
    useImperativeHandle(ref1,()=>{
        return {
            toggler:ref.current.toggler
        }
    })
 
    return (
        <Sidebar ref={ref} width={width} height = {height}>
         <Profile text="Hello user" />
         <Navanchors link="/" text="HOME" />
         <Navanchors link="/product" text="PRODUCT" />
         <Navanchors link="/cart" text="CART" />
         <Navanchors link="/profile/setting" text="ACCOUNT" />
         
         
        
        </Sidebar>
    )
});



export default Side;
