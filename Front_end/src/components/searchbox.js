import React, { useRef, useState } from 'react'
import {Button, Form, InputGroup,FormControl, Row, Col} from 'react-bootstrap'
import Button1 from '../components/Button';
const Searchbox = ({history}) => {

   const keyword = useRef();

    let submithabdler = (e)=>{
        e.preventDefault();
       if(keyword.current.value.trim()){
         //  console.log(keyword)
           
           history.push(`/search/${keyword.current.value.trim()}`)
           keyword.current.value = null
       }
       else{
       
           history.push('/')
           keyword.current.value = null
       }
   
    }

    return (
       <>
       <form onSubmit={submithabdler}className="d-flex" >
        <input className="form-control me-sm-2" type="search" placeholder="Search products" ref={keyword} />
        <span type="button" className="btn " style={{height:'100%',backgroundColor:'white', marginTop:'9px', marginRight:'10px',marginLeft:'-45px'}} onClick={submithabdler}>
    <i  className="fas fa-search" style={{height:'23px'}}></i>
  </span>  
    </form>
     
     
     </> 
     
    )
}

export default Searchbox
